import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./DownloadButton.module.css"

const DownloadButton = () => {
  return (
            <Link to="/download" className={styles.downloadBtn}>
              Download App
            </Link>  )
}

export default DownloadButton