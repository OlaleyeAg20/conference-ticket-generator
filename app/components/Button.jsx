import React from 'react'

export const Button = (props) => {
  return (
    <button style={{fontFamily: 'JejuMyeongjo, serif'}} className={props.className} onClick={props.onClick}>
        {props.children}
    </button>
  )
}
