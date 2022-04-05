import Head from "next/head"
import Orsini from "../components/Orsini/orsini"

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast Data Collection</title>
        <link rel="icon" type="image/x-icon" href="logo_lprot.jfif" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Orsini />
    </>
  )
}
