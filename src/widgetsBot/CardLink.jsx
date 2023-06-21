import React from 'react'

export default function CardLink(props) {
  return (
     <a href={props.link} style={{
        color:"white"
    }}>
      <h1 style={{
        backgroundColor:"#1877F2",
        borderRadius:"8px",
        width:"350px",
        height:"50px",
        lineHeight:"50px",
        fontSize:"20px"
      }}>{props.name}</h1>
    </a>
  )
}
