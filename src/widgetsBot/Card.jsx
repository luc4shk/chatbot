import React from 'react'

export default function Card(props) {
  return (
    
    <>
    {
    props.redes && props.redes.map((item,index)=>(
      <a key={item.id} href="#" style={{
        color:"white",
        textAlign:"center",
        textDecoration:"none"
    }}>
      <h1 style={{
        backgroundColor:item.bgColor,
        borderRadius:"8px",
        width:"350px",
        height:"50px",
        lineHeight:"50px",
        fontSize:"20px"
      }}>{item.name}</h1>
    </a>
    ))
    }
    </>
  )
}
