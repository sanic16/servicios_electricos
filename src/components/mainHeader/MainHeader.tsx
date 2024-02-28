import React from 'react'
import './mainHeader.css'
import Link from 'next/link'
import image from '@/../public/images/ele.png'
import Image from 'next/image'
import './mainHeader.css'

const MainHeader = () => {
  return (
    <header className='main__header'>
        <div className="container main__header-container">
            <div className="main__header-left">
                <h4>
                    Servicios de Instalaciones Eléctricas
                </h4>
                <h1>
                    Electricidad Industrial y Residencial
                </h1>
                <p>
                    Los mejores servicios de instalaciones eléctricas para tu hogar o empresa.
                    Contamos con un equipo de profesionales altamente capacitados para brindarte el mejor servicio. 
                </p>
                <Link href={'/servicios'} className='btn lg'>
                    Ver Servicios
                </Link>
            </div>
            <div className='main__header-right'>
                <div className='main__header-circle'></div>
                <div className='main__header-image'>
                    <Image src={image} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader
