import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDJrXAAc46xGip5mkGiiMAQr8sBiLgInPo",
    authDomain: "fish-market-saharsh-lohia.firebaseapp.com",
    databaseURL: "https://fish-market-saharsh-lohia.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;