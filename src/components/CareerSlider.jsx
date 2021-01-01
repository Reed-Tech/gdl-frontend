import React from 'react'
import CareerCard from './CareerCard'
import Slider from 'react-slick'
import bg1 from '../assets/images/CareerCard1.png'
import bg2 from '../assets/images/CCard2.png'
import bg3 from '../assets/images/CCard3.png'



const careerData = [
    {
        image: bg1,
        name: 'Accountant',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat, facilis dolorum sit perferendis officiis? A dolor laborum voluptates ducimus.',
        responsibilities: [
            'Deliver the best User Experience',
            'Deliver the best User Experience',
        ],
        skills: [
            'Ability to work under pressure',
            'Proficiency in Microsoft Office Packages',
            'Proficiency in Microsoft Office Packages',

        ],
        education: [
            'Skill 1',
            'Skill 2',
            'Skill 3',
        ],
        link: 'accountant'
    },
    {
        image: bg2,
        name: 'Partner',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat, facilis dolorum sit perferendis officiis? A dolor laborum voluptates ducimus.',
        responsibilities: [
            'Deliver the best User Experience',
            'Deliver the best User Experience',
        ],
        skills: [
            'Ability to work under pressure',
            'Proficiency in Microsoft Office Packages',
            'Proficiency in Microsoft Office Packages',

        ],
        education: [
            'Education 1',
            'Education 2',
            'Education 3',
        ],
        link: 'partner'
    },
    {
        image: bg3,
        name: 'Actuary',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat, facilis dolorum sit perferendis officiis? A dolor laborum voluptates ducimus.',
        responsibilities: [
            'Deliver the best User Experience',
            'Deliver the best User Experience',
        ],
        skills: [
            'Ability to work under pressure',
            'Proficiency in Microsoft Office Packages',
            'Proficiency in Microsoft Office Packages',

        ],
        education: [
            'Skill 1',
            'Skill 2',
            'Skill 3',
        ],
        link: 'accountant'
    },
    {
        image: bg1,
        name: 'Accountant',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat, facilis dolorum sit perferendis officiis? A dolor laborum voluptates ducimus.',
        responsibilities: [
            'Deliver the best User Experience',
            'Deliver the best User Experiences',
        ],
        skills: [
            'Ability to work under pressure',
            'Proficiency in Microsoft Office Packages',
            'Proficiency in Microsoft Office Packages',

        ],
        education: [
            'Skill 1',
            'Skill 2',
            'Skill 3',
        ],
        link: 'accountant'
    },
]

const CareerSlider = () => {


    const settings = {
        slides: 1,
        dots: true,
        center: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        variableWidth: false,
        cssEase: "ease-in-out",
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]
    }

    return (
        <section className='careerSlider'>
            <Slider {...settings} >
                {careerData.map(e =>
                    <CareerCard key={e.name} image={e.image} name={e.name} description={e.description} responsibilities={e.responsibilities} skills='' education={e.education} link={e.link} />
                )}

            </Slider>
        </section>
    )
}

export default CareerSlider
