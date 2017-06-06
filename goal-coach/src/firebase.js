import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAFHj1OfdEmzWT2coOzZYkEUDNxMhbZrHk",
    authDomain: "goalcoach-efd92.firebaseapp.com",
    databaseURL: "https://goalcoach-efd92.firebaseio.com",
    projectId: "goalcoach-efd92",
    storageBucket: "goalcoach-efd92.appspot.com",
    messagingSenderId: "854668616144"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
