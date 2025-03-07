import React from 'react'

function Login({setShowComponent}) {
  return (
    <div  className='relative'>
        <div className='absolute right-1 m-2' onClick={() => (setShowComponent(false))} >❌</div>
        <h2>Sign in with google</h2>
        <button>Sign in with Google</button>

  </div>
  )
}

export default Login
