import React from 'react'

import { useQuery } from '@tanstack/react-query'
import  Axios  from 'axios'

export default function Home() {
  const {data, isLoading} = useQuery(['cat'], ()=>{
    return  Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
  })

  if(isLoading){
    return <h1>Loading ...</h1>
  }
  
  return (
    <div>

    <div>
      <h1>Username is on Home Page</h1>
    </div>
    <div>
      <p>
        {data?.fact}
      </p>
    </div>
   
    
    </div>
    
  )
}
