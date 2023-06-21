import React from 'react'

export default function EntrenadorCard(props) {
  return (
    <>
      {props.entrenador.map((item)=>(
      <div style={{
        color:"black",
        display:"flex",
        flexDirection:"column",
        width:"320px",
        backgroundColor:"#f0ecec",
        borderRadius:"8px",
        padding:"15px"
        
      }}>
          <div style={{
            display:"flex",
          }}>
            <p style={{
                fontWeight:"bold"
            }}>{item.nombre}</p>
          </div>
          <div
            style={{
                width:"100%",
                textAlign:"justify"
            }}
          >
            <p><b>Título Académico: </b>{item.titulo}</p>
            <p><b>Email: </b>{item.email}</p>
            </div>
      </div>
      ))}
    </>
  )
}
