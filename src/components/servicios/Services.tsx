import { services } from '@/utils/data'
import SectionHeader from '../sectionHeader/SectionHeader'
import './services.css'
import { MdElectricBolt } from 'react-icons/md'
import Card from '../ui/Card'
import Link from 'next/link'

import './services.css'

const Services = () => {
  return (
    <section className='services'>
        <div className="container services__container">
            <SectionHeader icon={MdElectricBolt} title='Nuestros Servicios' />
            <div className='services__wrapper'>
                { services.map(service => (
                    <Card key={service.id} className='services__service'>
                        <span>
                            { <service.icon /> }
                        </span>
                        <h4>
                            { service.title}
                        </h4>
                        <small>
                            { service.description}
                        </small>
                        <Link href={ service.href } className='btn sm'>
                            Ver más
                        </Link>
                    </Card>
                )) }
            </div>
        </div>
    </section>
  )
}

export default Services