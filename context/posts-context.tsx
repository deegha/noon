
import React, { createContext, useEffect, useState } from 'react';
import { fetchPosts, makeFavourite } from "../services/backend-client"
import type { IFetchPosts } from "../services/backend-client"

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

export type  Posts = {
  posts: IPost[]
  favPosts: IPost[]
  makeFav: (postId: string, currentStatus: boolean) => void
}

export const PostsContext = createContext<Posts>({} as Posts)

interface PostsProps {
  children?: React.ReactNode;
}

const PostsContextProvider =({ children }: PostsProps) => {
  const [ posts, setPosts ] = useState<IPost[]>([]);
  const [ favPosts, setFavPosts ] = useState<IPost[]>([]);

  const fetchposts = async () => {
    const posts: IFetchPosts = await fetchPosts()
    setPosts(posts.data);
    setFavPosts(posts.data.filter((post:IPost) => post.isFavByuser === true))
  }

  useEffect(() => {
    fetchposts()
  }, [])

  const makeFav = async (postId: string, currentStatus: boolean):Promise<void> => {
    const newSet: Array<IPost> = posts.map( (post):IPost  => {

      if(post.postId !== postId) {
        return post
      }

      post.isFavByuser = !currentStatus

      return post
    })

    setPosts(newSet)

    const data = {
      postId: postId,
      fav: !currentStatus
    }

    try {
      await makeFavourite(data);
      fetchposts()
    }catch (er) {
      console.log("Couldn't perform operation",er)

      /*** In a production application we would need to inform the user that due to some complication that particular post didnt get liked **/
      fetchposts()
    }
  }

  return (
    <PostsContext.Provider
      value={{ posts, favPosts, makeFav}}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContextProvider
