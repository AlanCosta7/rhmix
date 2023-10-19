import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

var serviceAccount = require("../key/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rhmix-adm.firebaseio.com",
  storageBucket: 'rhmix-adm.appspot.com',
});

const firestore = admin.firestore()
const storage = admin.storage()
const auth:any = admin.auth()
const messaging = admin.messaging();

firestore.settings({ timestampsInSnapshots: true })

export { admin, functions, firestore, storage, auth, messaging }

