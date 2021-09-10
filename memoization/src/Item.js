import React, { memo, useEffect } from 'react'

const Item = memo(({ user }) => {
  useEffect(() => {
    // console.log('item', user.name);
  })
  return (
    <li key={user.id}>
      {user.name}
    </li>
  )
})

export default Item
