import React from 'react'
import './btn.css'


export default function Button({text, onclick, background}) {
  return (
    <div>
        <button onClick={onclick} style={{backgroundColor: background}}>{text}</button>
      
    </div>
  )
}
