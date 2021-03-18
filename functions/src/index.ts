import * as functions from 'firebase-functions';
import { fetchPosts, makePostFav } from "./functions"
import * as admin from 'firebase-admin';
const cors = require('cors')({origin: true});

const serviceAccount = require("../noon-39ac7-firebase-adminsdk-yfuf6-4f92eba199.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const applyMiddleware = (handler: Function )=> (req: functions.https.Request, res: functions.Response) => {
  return cors(req, res, () => {
    return handler(req, res)
  })
}

export const fetchposts = functions.https.onRequest(applyMiddleware(fetchPosts));

export const makeFavourite = functions.https.onRequest(applyMiddleware(makePostFav));

