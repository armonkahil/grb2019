import React from 'react'

function Row(props) {
  return <div className={`row ${props.spacing} `}>{props.children}</div>
}

export default Row
