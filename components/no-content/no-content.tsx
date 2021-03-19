import React from "react"
import styles from "./no-content.module.scss"

interface INoContent {
  text: string
}

export const NoContent: React.FC<INoContent> = ({ text }) => {

  return (
    <div className={styles.container}>
      {text}
    </div>
  )
}
