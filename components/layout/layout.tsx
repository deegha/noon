import React from "react"
import styles from "./layout.module.scss"
import { FiHeart, FiHome } from 'react-icons/fi'
import { Head } from "../"

import { useRouter } from 'next/router'

export const Layout: React.FC = ({ children }) => {

  const router = useRouter()

  const onChangeTab = (selected) => () => {
    router.push(selected)
  }

  const title = router.pathname === "/"? "noon | home" : "noon | favourites"

  return (
    <div className={styles.container}>
      <Head title={title} />
      <div className={styles.header}>
        <h1>noon</h1>
      </div>
      <div className={styles.topMenu}>
        <a onClick={onChangeTab("/")} className={styles.topMenuItem}>
          <FiHome color={"#fff"} fill={router.pathname === "/"?"#fff": "none"}  size={15} /> <span>Home</span>
        </a>
        <a onClick={onChangeTab("/favourites")} className={styles.topMenuItem}>
          <FiHeart color={"#fff"}  fill={router.pathname === "/favourites"?"#fff":"none"} size={15} /> <span>Favourites</span>
        </a>
      </div>
      {children}
      <div className={styles.bottomMenu}>
        <a onClick={onChangeTab("/")} className={styles.bottomMenuItem}>
          <FiHome color={"#fff"} fill={router.pathname === "/"?"#fff": "none"}  size={25} />
        </a>
        <a onClick={onChangeTab("/favourites")} className={styles.bottomMenuItem}>
          <FiHeart color={"#fff"}  fill={router.pathname === "/favourites"?"#fff":"none"} size={25} />
        </a>
      </div>
    </div>
  )
}
