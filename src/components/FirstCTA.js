import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function FirstCTA() {
  return (
    <div className='CallToAction'>
        <h2>PRECISANDO DE UM ORÇAMENTO?</h2>
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
