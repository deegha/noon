
import React from "react"
import type { IPost } from "../../context/posts-context"
import { FiHeart } from 'react-icons/fi'

import styles from "./card.module.scss"

interface ICardPorps {
  post: IPost,
  onClickHeart: (postId: string, currentStatus: boolean) => void
}

export const Card:React.FC<ICardPorps>  = (props) => {
  const { post, onClickHeart } = props
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profileImage} style={{ backgroundImage: `url(${post.profileImage})` }} />
        <span className={styles.profileName}>{post.profileName}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.postImage} style={{ backgroundImage: `url(${post.postImage})` }}>
          <div className={styles.postImageFooter}>
            <div>
              <h1 className={styles.postHeading}>{post.postTitle}</h1>
              <h2 className={styles.postPrice}>AED {post.postPrice}</h2>
            </div>
            <div onClick={() => onClickHeart(post.postId, post.isFavByuser)} className={styles.like}>
              <FiHeart color={"#c6c5c5"}  fill={post.isFavByuser?"#3d3b3a":"none"} size={32} />
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.likes}>
          {post.likes} likes
        </div>
        <div className={styles.description}>
          {post.description}
        </div>
        <div className={styles.comments}>
          View 12 comments
        </div>
      </div>
    </div>
  )
}
