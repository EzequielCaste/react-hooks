import React, { memo, useEffect } from 'react'
import Item from './Item'

const List = memo(({ users, handleDelete }) => {
  useEffect(() => {
    // console.log('list');
  })
  return (
    <ul>
      {
        users.map( user => <Item 
          handleDelete={handleDelete}
          key={user.id} user={user} />)
      }
    </ul>
  )
})

export default List
