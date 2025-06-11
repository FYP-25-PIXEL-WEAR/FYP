import React, { useEffect } from 'react'

const Home = ({setShowNavbar,setShowFooter,setShowHeader}) => {
    useEffect(() => {
        setShowNavbar(true)
        setShowHeader(true)
        setShowFooter(true)
    }, [setShowNavbar, setShowHeader, setShowFooter])
  return (
    <div>Home</div>
  )
}

export default Home