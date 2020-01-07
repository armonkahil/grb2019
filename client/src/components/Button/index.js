import React from "react"

function Button(props) {
  return (
    <Button
      className={`btn btn-${props.buttonType} mx-2 ${props['data-value']}`}
    >
      {props.buttonLabel}
      {props.children}
    </Button>
  )
}

export default Button