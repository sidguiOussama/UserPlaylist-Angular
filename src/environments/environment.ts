// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authUrl: 'https://user-playlist-api.herokuapp.com/api/v1/auth/',
  userUrl: 'https://user-playlist-api.herokuapp.com/api/v1/Users/',
  playlistUrl: 'https://user-playlist-api.herokuapp.com/api/v1/Playlists/',
  advertUrl: 'https://user-playlist-api.herokuapp.com/api/v1/Ads/',
  firebaseConfig : {
    apiKey: "AIzaSyAJLkOAuf4L_KSTcsdCYoXHEnmbhRs4E9E",
    authDomain: "adsimages-9bd1a.firebaseapp.com",
    projectId: "adsimages-9bd1a",
    storageBucket: "adsimages-9bd1a.appspot.com",
    messagingSenderId: "604389789237",
    appId: "1:604389789237:web:4985b7d31f141d558c2b7c",
    measurementId: "G-LRZS4BVVS1"
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
