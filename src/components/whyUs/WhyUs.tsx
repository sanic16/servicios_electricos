import Image from 'next/image'
import React from 'react'
import image from '@/../public/images/whyUs.png'
import SectionHeader from '../sectionHeader/SectionHeader'
import { MdElectricBolt, MdElectricalServices } from 'react-icons/md'
import { whyUs } from '@/utils/data'

import './whyUs.css'
import Card from '../ui/Card'

const WhyUs = () => {
  return (
    <section className='whyUs'>
      <div className='container whyUs__container'>  
        <SectionHeader icon={MdElectricBolt} title='¿Por qué elegirnos?' />
          <div className='container whyUs__container'>
            <div className='whyUs__description'>
              
              <div className='whyUs__left'>
                <div className='whyUs__image'>
                  <Image src={image} alt='automation' />
                </div>
              </div>
          
              <div className='whyUs__right'>
                <p>
                Con más de una década de experiencia, ofrecemos servicios eléctricos de calidad, innovadores y centrados en el cliente. Utilizamos materiales de alta calidad y técnicas innovadoras para garantizar la excelencia en cada proyecto. Nuestro compromiso con la atención al cliente se refleja en nuestro servicio personalizado y en nuestra disponibilidad para atender cualquier necesidad. Nos esforzamos por superar las expectativas, brindando tranquilidad y confianza a nuestros clientes.
                </p>
              </div>
            </div>  
          
            <div className='whyUs__wrapper'>
              {
                whyUs.map(item => (
                  <Card className='whyUs__item' key={item.id}>
                    <span>
                      { <item.icon /> }
                    </span>
                    <h4> { item.title }</h4>
                    
                  </Card>
                ))
              }
            </div>
          </div>
      </div>  
    </section>
  )
}

export default WhyUs