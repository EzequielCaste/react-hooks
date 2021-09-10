import React, { memo, useEffect } from 'react'

const Item = memo(({ user, handleDelete }) => {
  useEffect(() => {
    // console.log('item', user.name);
  })
  return (
    <li key={user.id}>
      {user.name}
      <button onClick={() => handleDelete(user.id)}>
        Delete
      </button>
    </li>
  )
})

export default Item
