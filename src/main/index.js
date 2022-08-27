import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFooter from './mainfooter/MainFooter'
import MainHeader from './mainHeader/MainHeader'

const Main = () => {
  return (
    <>
    <MainHeader/>
    <MainFooter/>
    <Outlet/>

    </>
  )
}

export default Main