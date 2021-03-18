import React from "react"
import styles from "./container.module.scss"

export const PageContainer: React.FC = ({ children }) => {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
