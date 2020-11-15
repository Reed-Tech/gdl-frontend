import React from 'react'
import { NavLink } from 'react-router-dom'

const AssetsProducts = () => {
    return (
            <section className='assetsProducts'>
                <div>
                    <button>Back</button>
                    <div>
                        <h1>Money Market Fund</h1>
                        <p>Cruise your way into financial freedom with as little as N10,000</p>
                    </div>
                    <nav>
                        <NavLink to=''> Money Market Fund</NavLink>
                        <NavLink to=''> Smart Investment </NavLink>
                    </nav>
                </div>
            </section>
    )
}

export default AssetsProducts
