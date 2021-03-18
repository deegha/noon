import { Card, Layout } from "../../components"
import { IPost } from "../../context/posts-context"

interface FavouritesViewPorps{
  favPosts: IPost[]
  handleClickHeart: (postid:string, currentStatus: boolean) => void
}

export const FavView: React.FC<FavouritesViewPorps> = ({ favPosts, handleClickHeart }) => {

  return (
    <Layout>
      <div >
        {favPosts.map(post => (
          <Card post={post} key={post.postId} onClickHeart={handleClickHeart} />
        ))}
      </div>
    </Layout>
  )
}
