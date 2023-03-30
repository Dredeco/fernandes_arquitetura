import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function SecondCTA() {
  return (
    <div className='CallToAction2'>
        <h2>A CONSTRUÇÃO DOS SEUS SONHOS COMEÇA HOJE!</h2>
        <h4>Entre em contato</h4>
        <div className='links'>
          <a href='#' className='whatsapp'>
              <FaWhatsapp />
          </a>
          <a href='#' className='instagram'>
              <FaInstagram />
          </a>
        </div>
    </div>
  )
}
