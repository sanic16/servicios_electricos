import PageHeader from '@/components/pageHeader/PageHeader'
import React from 'react'
import image from '@/../public/images/header_bg_1.jpg'
import { Metadata } from 'next'

import './about.css'

export const metadata: Metadata = {
  title: 'ELECTROSER | Nosotros',
  description: 'Conoce más sobre nosotros y nuestra historia.',
  keywords: 'nosotros, historia, electroser, empresa'
}

export default function AboutPage() {
  return (

    <article className='about'>
      <PageHeader 
        title='Servicios Eléctricos Integrales' 
        image={image} 
      />
      <section className='container about__history'>
        <h1>
          Nosotros
        </h1> 
        <p>
          Iniciamos operaciones en 2016 como una empresa de servicios eléctricos conformada por un grupo de 
          profesionales con amplia experiencia en el sector de instalaciones eléctricas, mantenimiento y
          reparación de equipos eléctricos. Desde entonces, nos hemos diversificado y hemos ampliado nuestra
          gama de servicios para ofrecer soluciones integrales en el sector eléctrico desde la instalación de
          equipos de respaldo hasta la implementación de sistemas de automatización y control muy complejos a 
          nivel industrial. 
        </p>
        <p>
          A lo largo de estos años, hemos trabajado con empresas de diferentes tamaños y sectores, lo que nos
          ha permitido adquirir experiencia y conocimientos en diferentes áreas de la industria. Nuestro equipo
          de profesionales está en constante capacitación para mantenerse actualizado en las últimas tendencias
          y tecnologías del sector eléctrico.
        </p>

      </section>
      <section className='container about__mision'>
        <h1>
          Misión
        </h1>
        <p>
          Nuestra misión es ofrecer soluciones integrales en el sector eléctrico a través de servicios de calidad
          y productos de última tecnología. Nos esforzamos por brindar un servicio personalizado y adaptado a las
          necesidades de cada uno de nuestros clientes, garantizando la satisfacción de los mismos.
        </p>
      </section>

      <section className='container about__vision'>
        <h1>
          Visión
        </h1>
        <p>
          Nuestra visión es convertirnos en la empresa líder en el sector eléctrico, ofreciendo soluciones innovadoras
          y de calidad que permitan a nuestros clientes optimizar sus procesos y mejorar su competitividad en el mercado.
        </p>
      </section>
    </article>   

  )
}

