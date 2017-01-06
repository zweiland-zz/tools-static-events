import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../containers/MainContainer'

function Home () {
  return (
    <MainContainer>
      <h1>Events</h1>
      <p className='lead'>What even is an Events?</p>
    </MainContainer>
  )
}

export default Home
