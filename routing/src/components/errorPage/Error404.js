import React from 'react'
import './error404.css'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col pt-5">
            <h1 className='text-5xl font-semibold'>Error 404</h1>
            <img className='w-[24rem] h-[24rem]' src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            <h5 className='text-2xl  italic'>Looks like you've lost!</h5>
            <Link className='bg-green-500 m-4 p-3 border-[1px] border-zinc-900 rounded-md text-1xl uppercase font-semibold hover:bg-green-400 text-white' to="/">Go to home page</Link>
        </div>
    )
}

export default Error404