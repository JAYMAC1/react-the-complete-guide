import React from 'react'

const useroutput = (props) => {
  return (
    <div className='useroutput'>
      <p>Welcome {!props.name ? 'Mr(s) nobody' : props.name},</p>
      <p>This is my attempt at the React Challeneg one</p>
    </div>
  )
}

export default useroutput
