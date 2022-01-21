import React from "react"
import { useRouter } from "next/router"
import Loader from "../components/Loader"

const Home = () => {
  const router = useRouter()
  React.useEffect(() => {
    router.push("/sadA")
  }, [])

  return <Loader />
}

export default Home