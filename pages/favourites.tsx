import React from "react"

import { PostsContext } from "../context/posts-context"
import { Card, Layout, PageContainer, NoContent } from "../components"

const FavView: React.FC = () => {
  const { favPosts, makeFav } = React.useContext(PostsContext)

  return (
    <Layout>
      <PageContainer>
      {favPosts.length > 0 ? favPosts.map(post => (
        <Card post={post} key={post.postId} onClickHeart={makeFav} />
      )): (
        <NoContent text={"You do not have any favourites at the moment"} />
      )}
      </PageContainer>
    </Layout>
  )
}

export default FavView
