import React from 'react'

export function Container(props) {
  return <div className='container-fluid'>{props.children}</div>
}

export function Col(props) {
  return <div className='col-8'>{props.children}</div>
}
export function Row(props) {
  return <div className={`row ${props.spacing} `}>{props.children}</div>
}
