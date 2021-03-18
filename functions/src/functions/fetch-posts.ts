import * as functions from 'firebase-functions'
import { firestore } from 'firebase-admin'
import * as constants from "../services/constants"

export interface IPost {
  /** post id */
  postId: string

  /** user profile image url*/
  profileImage: string

  /** user profile full name */
  profileName: string

  /** post image url */
  postImage: string

  /** post title */
  postTitle: string

  /** post title */
  postPrice: string

  /** if post is current user favorite */
  isFavByuser: boolean

  /** number of likes for the post */
  likes: number

  /** post description */
  description: string

  /** number of comments */
  noComments: number
}

export const fetchPosts = async (req: functions.https.Request, res: functions.Response): Promise<void> => {
  try {
    const snapshot =  await firestore().collection(constants.POSTS_COLLECTON).get()

    let response: Array<IPost> = []

    snapshot.forEach(doc => {
      response = [...response, {
        postId: doc.id,
        profileImage: doc.data().profileImage,
        profileName: doc.data().profileName,
        postImage: doc.data().postImage,
        postTitle: doc.data().postTitle,
        postPrice: doc.data().postPrice,
        isFavByuser: doc.data().isFavByuser,
        likes: doc.data().likes,
        description: doc.data().description,
        noComments: doc.data().noComments,
      }]
    })

    res.status(200).send({
      data: response,
      message: "Successfull"
    });

  }catch(err) {
    console.log("There was an error while fetching posts", err)

    res.status(400).send({
      message: `There was an error while fetching posts`,
      error: err
    });
  }
}
