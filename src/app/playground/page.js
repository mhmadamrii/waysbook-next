"use client"

import axios from "axios"

export default function Playground() {
  const call = async() => {
    try {
      const res = await axios.get("/api/jsonplaceholder")
      console.log('response json', res)
    } catch (error) {
      console.log({error})
    }
  }
  return (
    <>
      <button onClick={call}>make a call</button>
      <h1>Try to make a call</h1>
    </>
  )
}
