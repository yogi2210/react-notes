import React from 'react'
import { ChangeProfile } from '../components/ChangeProfile'
import { useContext } from 'react'
import {AppContext} from '../App'

export default function Profile (props) {
  const {userName} = useContext(AppContext)
  return (
    <div>
      <h1>User name on Profile page: {userName}</h1>
      <ChangeProfile />
    </div>
  )
}
