import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../App'

export default function Home() {
  const {userName} = useContext(AppContext)
  return (
    <div>
      <h1>Username is on Home Page : {userName}</h1>
    </div>
  )
}
