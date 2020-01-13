import React from 'react'

function Row(props) {
  return <div className={`row ${props.spacing} justify-content-center `}>{props.children}</div>
}

export default Row
