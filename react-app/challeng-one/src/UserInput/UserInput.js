import React from 'react'

const userinput = (props) => {
  return (
    <div className='UserInput'>
      <p>Please enter username:</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default userinput
