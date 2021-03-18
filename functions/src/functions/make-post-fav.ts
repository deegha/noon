import * as functions from 'firebase-functions'
import { firestore } from 'firebase-admin'
import * as constants from "../services/constants"

export const makePostFav = async (req: functions.https.Request, res: functions.Response): Promise<void> => {

  try {
    const { postId, fav } = req.body
    await firestore().collection(constants.POSTS_COLLECTON).doc(postId).set({
      isFavByuser: fav,
    },{merge: true})

    res.status(200).send({
      message: "Successfully updated the post"
    });

  }catch(err) {
    console.log("There was an error while fetching posts", err)

    res.status(400).send({
      message: `There was an error while fetching posts`,
      error: err
    });
  }
}
