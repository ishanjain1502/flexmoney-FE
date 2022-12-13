import React from 'react'
import Register from '../components/Authentication/Register'
import Head from 'next/head'

const register = () => {
  return (
    <div>
      <Head>
        <title>Register For Yoga</title>
        <meta name="description" content="Yoga Classes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex flex-col items-center' >
          <Register/>
      </div>
    </div>
  )
}

export default register