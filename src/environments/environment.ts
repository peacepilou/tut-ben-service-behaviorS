// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA_PzH8IghZSeoS08uF153Q6uVUM86QbTY",
    authDomain: "stripe-test-js-pur.firebaseapp.com",
    projectId: "stripe-test-js-pur",
    storageBucket: "stripe-test-js-pur.appspot.com",
    messagingSenderId: "976457009102",
    appId: "1:976457009102:web:948b219e9ccc60b5560d9f"
  },
  stripe: {
    key: 'pk_test_51LMLQNBavC1HH3X6jj8LVKl9SoqHIPpkHeFeOjIOp56l72a3oXevBrkOulJzGfc756ZN1oZ9usHJbCIo0oKOX7V9006mRsEZai'
  }  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
