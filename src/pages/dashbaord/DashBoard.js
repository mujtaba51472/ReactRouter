import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { DashBaordFooter, DashBoardHero, DashBoardNav } from '../../sections/dashboard'

const DashBoard = () => {
  return (
    <>
    <DashBoardNav/>
    <DashBoardHero/>
    <DashBaordFooter/>

    </>
  )
}

export default DashBoard