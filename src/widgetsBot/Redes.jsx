import React from 'react'
import Card from './Card'

export default function Redes() {
const redes =[
    {
        name:"Facebook",
        bgColor:"#1877F2",
        link:"",
        id:1,
    },
    {
        name:"Instagram",
        bgColor:"#C13584 ",
        link:"",
        id:2,
    },
    {
        name:"WhatsApp",
        bgColor:"#25D366",
        link:"",
        id:3,
    },
    {
        name:"Twitter",
        bgColor:"#1DA1F2",
        link:"",
        id:4,
    },
    {
        name:"TikTok",
        bgColor:"#000",
        link:"",
        id:4,
    },
]
    return <Card redes={redes} />
  
}
