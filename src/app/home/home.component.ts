import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

declare var Stripe;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clothes: any;                   // all items in the Cloud Firestore "clothes" collection
  stripeStatus: string;                           // {'', 'cancel', 'success'}

  constructor(
      private firestore: AngularFirestore,
      private afFun: AngularFireFunctions,
      private activatedRoute: ActivatedRoute,
      private router: Router) {

      afFun.useEmulator("localhost", 5001);
      this.stripeStatus = '';
  }

  ngOnInit(): void {
    this.firestore.collection('shirts').valueChanges().subscribe(v => {
        this.clothes = v;
    })                                   
    this.stripeStatus = this.getStripeStatus();                                         // read URL for "/home?action="
  }

  getStripeStatus(): string {
    let action = this.activatedRoute.snapshot.queryParamMap.get('action');              // ex: '/home?action=success'
    console.log('action = ', action);
    if (action && action == 'cancel' || action == 'success')
        return action;
    return '';
}


    createProduct(productId: string): void {
        console.log('Création du produit' + productId);
        this.afFun.httpsCallable("createProduct")({ id: productId })
        .subscribe(result => {
            console.log({ result });
        });
    }

    reloadHome(): void {
        this.router.navigate(['/home'])
        .then(() => {
            window.location.reload();
        });
    }

    getProduct(productId): void {
        console.log('Récupération du produit' + productId);
        this.afFun.httpsCallable("getProduct")({ id: productId })
        .subscribe(result => {
            console.log({ result });
        });
    }

    proceedToCheckout(productId): void {
        console.log("Paiement du produit" + productId);

        var stripe = Stripe(environment.stripe.key);

        this.afFun.httpsCallable("productCheckout")({ id: productId })
            .subscribe(result => {
                console.log({ result });
                stripe.redirectToCheckout({
                    sessionId: result.id,
                }).then(function (result) {
                    console.log(result.error.message);
                });
            });

    }

}
