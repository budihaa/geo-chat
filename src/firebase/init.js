import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyC0-fem34aU1wvY79lUpvNlOcWUCjVHI0o',
    authDomain: 'geo-chat-80efe.firebaseapp.com',
    databaseURL: 'https://geo-chat-80efe.firebaseio.com',
    projectId: 'geo-chat-80efe',
    storageBucket: '',
    messagingSenderId: '332861582107',
    appId: '1:332861582107:web:b06333283ccbb255',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
