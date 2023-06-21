import React from 'react'
import EntrenadorCard from './EntrenadorCard'

export default function Entrenador() {
    const entrenadores = [
        {
            nombre:"Andres Roque",
            titulo:"Deportólogo",
            email:"andresdeporte@gymchat.com",
        },
        {
            nombre:"Pedro Sanchez",
            titulo:"Licenciado en Ed.Física",
            email:"pedrosanchez@gymchat.com",
        },
        {
            nombre:"Andrea Vargas",
            titulo:"Kinesiólogo",
            email:"andrevargas@gymchat.com",
        },
        
    ]
  return (
    <div
        style={{
            display: "flex",
        gap: "10px",
        flexDirection: "column",
        }}
    >
        <EntrenadorCard entrenador={entrenadores}/>
    </div>
  )
}
