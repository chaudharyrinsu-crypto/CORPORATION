import Link from 'next/link'
import React from 'react'

const Bottom = () => {
  return (
    <>
      <div>
        <Link href={`/`}>
        <img className='h-9' src="./fadedlogo.svg" alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default Bottom
