import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyCcmJFW4zAicJw1o30F1Ws79sIM8yPgpQo",
    authDomain: "storywall-c96a0.firebaseapp.com",
    databaseURL: "https://storywall-c96a0.firebaseio.com",
    projectId: "storywall-c96a0",
    storageBucket: "storywall-c96a0.appspot.com",
    messagingSenderId: "1051588951370"
  }
  const fire=firebase.initializeApp(config)
  const database=firebase.database()
  export {database,fire}