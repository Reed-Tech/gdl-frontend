import React from 'react'
import { Button } from 'react-bootstrap'
// import bg1 from '../assets/images/CareerCard1.png'

const CareerCard = (props) => {
  
    return (
        <div className='careerCard'>
            <div className='careerCard_image' style={{ backgroundImage: `url(${props.image})` }} />
            <main>
                <div className='careerCard_header'>
                    <div className="careerCard_header-background" />
                    <h1>{props.name}</h1>
                    <p>Lagos, Nigeria</p>
                </div>
                <div className='careerCard_body'>
                    <div>
                        <h5>Description</h5>
                        <p>{props.description}</p>
                    </div>
                    <Button onClick={() => props.history.push({ pathname: `/career/${props.link}` })} variant='outline-light' className='rounded-pill'>LEARN MORE</Button>
                </div>
            </main>

        </div>
    )
}

export default CareerCard
