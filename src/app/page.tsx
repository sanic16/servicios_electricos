import Boletin from '@/components/boletin/Boletin'
import MainHeader from '@/components/mainHeader/MainHeader'
import Services from '@/components/servicios/Services'
import WhyUs from '@/components/whyUs/WhyUs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Electroser | Electricidad para tu hogar o negocio',
  description: 'Servicios de electricidad para tu hogar o negocio',
  keywords: `electricidad, electricista, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, electricidad para el negocio, electricidad para empresas, electricidad para el hogar, 
  electricidad para el negocio, electricidad para empresas, automatización, automatización de procesos, calidad, calidad de la energía`,
  openGraph: {
    title: 'Electroser | Electricidad para tu hogar o negocio',
    description: 'Servicios de electricidad para tu hogar o negocio',
    url: 'https://servicios-electricos.juliosanic.tech',
    type: 'website',
    images: [
      {
        url: 'https://s3.amazonaws.com/websites.juliosanic.tech/electricidad/alexander-schimmeck-k_-KlaENC-Q-unsplash.jpg',
        height: 426,
        width: 640
      }
    ]
   
  }
} 

export default function HomePage() {
  return (
    <>
      <MainHeader />
      <Services />
      <WhyUs />
      <Boletin />
    </>
  )
}
