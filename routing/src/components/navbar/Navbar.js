import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-green-500 w-full h-[10vh] px-10 flex justify-between items-center leading-none'>
            <div className="logo text-zinc-100 uppercase text-2xl">&lt;React routing&gt;</div>
            <div className="links flex gap-5 text-2xl">
                <NavLink className='hover:text-zinc-100' to="/home">Home</NavLink>
                <NavLink className='hover:text-zinc-100' to="/contact">Contact</NavLink>
                <NavLink className='hover:text-zinc-100' to="/product">Product</NavLink>
            </div>
        </div>
    )
}

export default Navbar