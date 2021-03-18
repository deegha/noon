import React from "react"

import { PostsContext } from "../context/posts-context"
import { Card, Layout, PageContainer } from "../components"

const FavView: React.FC = () => {
  const { favPosts, makeFav } = React.useContext(PostsContext)

  return (
    <Layout>
      <PageContainer>
      {favPosts.map(post => (
        <Card post={post} key={post.postId} onClickHeart={makeFav} />
      ))}
      </PageContainer>
    </Layout>
  )
}

export default FavView
