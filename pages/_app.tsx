import '../styles/globals.css'

import PostsContextProvider  from "../context/posts-context"


function MyApp({ Component, pageProps }) {
  return(
    <PostsContextProvider>
      <Component {...pageProps} />
    </PostsContextProvider>
  )
}

export default MyApp
