import React from 'react'

export function List({ children }) {
  return <ul className='list-unstyled  mx-auto'>{children}</ul>
}

export function ListItem({ children }) {
  return <li className='list-group-item'>{children}</li>
}
