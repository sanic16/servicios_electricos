import React from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import { FaRegNewspaper } from 'react-icons/fa'

import './boletin.css'

const Boletin = () => {
  return (
    <section className='newsletter'>
        <div className='container newsletter__container'>
        <SectionHeader title='Boletín Semanal' icon={FaRegNewspaper}/>
        </div>
        <div className="newsletter__wrapper">
            <h4 className='newsletter__heading'>
                Registrate para obtener las últimas noticias y ofertas
            </h4>
            <form className='newsletter__form'>
                <input type="text" className='newsletter__input' placeholder='Ingresa tu Email' />
                <input type='submit' className='newsletter__btn' value={'Registrarse'}/>
            </form>
        </div>
    </section>
  )
}

export default Boletin