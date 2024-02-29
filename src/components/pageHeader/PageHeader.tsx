import React from 'react'
import Image from 'next/image'
import './pageHeader.css'
import image from '@/../public/images/about-bg.jpg'


const PageHeader = (
    {
        title,
        image,
    }:{
        title: string,
        image: NextImage,
    }
) => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__container-bg'>
          <Image src={image} alt='' />
        </div>
        <div className='header__content'>
          <h2>
            { title }
          </h2>
        </div>
      </div>
    </header>
  )
}

export default PageHeader