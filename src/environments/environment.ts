// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,
  firebaseConfig :{
    apiKey: "AIzaSyA0HuWzBGlRCJzlOq2LzisAHuZBRGHtoVU",
    authDomain: "expenses-tracker-1.firebaseapp.com",
    databaseURL: "https://expenses-tracker-1.firebaseio.com",
    projectId: "expenses-tracker-1",
    storageBucket: "expenses-tracker-1.appspot.com",
    messagingSenderId: "842297445114",
    appId: "1:842297445114:web:6bcdbe3ac616bf3ed29743"
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
