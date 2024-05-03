// import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

  return (
    <>
      <div className=' w-full md:flex'>
        <section className=''>
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default RootLayout