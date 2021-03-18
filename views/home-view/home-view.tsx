import styles from "./home.module.scss"
import { Card, Layout } from "../../components"
import { IPost } from "../../context/posts-context"

interface HomeViewPorps{
  posts: IPost[]
  handleClickHeart: (postid:string, currentStatus: boolean) => void
}

export const HomeView: React.FC<HomeViewPorps> = ({ posts, handleClickHeart }) => {
  return (
    <Layout>
    <div className={styles.container}>
      {posts.map(post => (
        <Card post={post} key={post.postId} onClickHeart={handleClickHeart} />
      ))}
    </div>
    </Layout>
  )
}
