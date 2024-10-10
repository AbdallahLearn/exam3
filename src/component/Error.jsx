import React from 'react'

function Error() {
  return (
    <>
      <div className="container flex justify-center h-screen pt-10 text-center bg-no-repeat bg-center flex-col text-white  " style={{backgroundImage: 'url(https://i.pinimg.com/564x/8f/a5/ad/8fa5ad01c2986d5762d01beb5a999f8c.jpg)'}}>
        <h1 className='text-3xl'>Unexpected Application Error!</h1>
        <h2 className='text-2xl'>404 not Found </h2>
      </div>
    </>
  )
}

export default Error
