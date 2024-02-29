export const links = [
    {
        name : "Inicio",
        path : "/"
    },
    {
        name : "Nosotros",
        path : "/nosotros"
    },
    {
        name : "Proyectos",
        path : "/proyectos"
    },
    {
        name : "Servicios",
        path : "/servicios"
    },
    {
        name : "Contacto",
        path : "/contacto"
    }

]

import { MdOutlineElectricalServices } from 'react-icons/md'

export const services = [
    {
        id: 1,
        icon: MdOutlineElectricalServices,
        title: "Instalaciones Eléctricas Domiciliarias",
        description: "Diseño, Cálculo y Ejecución de Instalaciones Eléctricas Domiciliarias y Comerciales.",
        href: '/servicios/instalaciones-electricas-domiciliarias'
    },
    {
        id: 2,
        icon: MdOutlineElectricalServices,
        title: "Análisis de Calidad de Energía",
        description: "Análisis de Calidad de Energía, Mediciones de Armónicos, Mediciones de Factor de Potencia, Mediciones de Corriente de Fuga, Mediciones de Puesta a Tierra.",
        href: '/servicios/analisis-de-calidad-de-energia'
    },
    {
        id: 3,
        icon: MdOutlineElectricalServices,
        title: "Automatización de Procesos",
        description: "Automatización de Procesos, Diseño y Programación de PLC, Diseño y Programación de HMI, Diseño y Programación de SCADA.",
        href: '/servicios/automatizacion-de-procesos'
    },
    {
        id: 4,
        icon: MdOutlineElectricalServices,
        title: "Instalaciones de Energía Solar",
        description: "Diseño e Instalación de Sistemas Fotovoltaicos, Diseño e Instalación de Sistemas de Bombeo Solar, Diseño e Instalación de Sistemas de Iluminación Solar.",
        href: '/servicios/instalaciones-de-energia-solar'
    }
]

import { FaCheckCircle, FaCogs, FaFacebook, FaHeadset, FaInstagram, FaLightbulb, FaLinkedin, FaThumbsUp, FaTwitter } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'


export const whyUs = [
    {
        id: 1,
        title: "Compromiso",
        description: "Nuestro compromiso con la calidad y la innovación nos permite ofrecer soluciones de vanguardia a medida que la tecnología avanza.",
        icon: FaCheckCircle
    },
    {
        id: 2,
        title: "Experiencia",
        description: "Tenemos un personal altamente capacitado y con amplia experiencia en el rubro.",
        icon: FaStar
    },
    {
        id: 3,
        title: "Calidad",
        description: "La calidad de nuestros servicios es una de nuestras prioridades. Nos esforzamos por ofrecer soluciones de calidad que cumplan con las expectativas de nuestros clientes.",
        icon: FaThumbsUp
    },
    {
        id: 4,
        title: "Innovación",
        description: "Innovar se ha convertido en una necesidad para mantenernos a la vanguardia. Nuestra constante búsqueda de nuevas tecnologías nos permite ofrecer soluciones innovadoras a nuestros clientes.",
        icon: FaLightbulb
    },
    {
        id: 5,
        title: "Atención al Cliente",
        description: "El tiempo y la dedicación que brindamos a cada cliente es lo que nos diferencia. Nos esforzamos por brindar una atención personalizada y de calidad a cada uno de nuestros clientes.",
        icon: FaHeadset
    },
    {
        id: 6,
        title: "Soluciones a Medida",
        description: "Dedicar tiempo a entender las necesidades de nuestros clientes nos permite ofrecer soluciones a medida que se adapten a sus necesidades.",
        icon: FaCogs
    }   
]

export const footer_socials = [
    {
        id: 1,
        name: "Facebook",
        href: "https://www.facebook.com",
        icon: FaFacebook
    },
    {
        id: 2,
        name: "Instagram",
        href: "https://www.instagram.com",
        icon: FaInstagram,
    },
    {
        id: 3,
        name: "Twitter",
        href: "https://www.twitter.com",
        icon: FaTwitter, 
    },
    {
        id: 4,
        name: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: FaLinkedin
    }
]

export const footer_links = links.filter(link => link.name !== "Inicio")
