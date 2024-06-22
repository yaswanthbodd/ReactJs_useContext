import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

const QueryPage = () => {
    const {data} = useQuery(["cat"],()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data)
    })
  return (
    <div>
        <h1>
            This is home page <p>{data?.fact}</p>
        </h1>
    </div>
  )
}

export default QueryPage