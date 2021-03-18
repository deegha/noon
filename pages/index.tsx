import React from "react"

import { PostsContext } from "../context/posts-context"
import { Card, Layout, PageContainer } from "../components"

const Home: React.FC = () => {
  const { posts, makeFav } = React.useContext(PostsContext)

  return (
    <Layout>
      <PageContainer>
      {posts.map(post => (
        <Card post={post} key={post.postId} onClickHeart={makeFav} />
      ))}
      </PageContainer>
    </Layout>
  )
}

export default Home
