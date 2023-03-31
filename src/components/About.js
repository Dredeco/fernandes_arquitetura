import Image from 'next/legacy/image'
import React from 'react'
import userImg from './../../public/images/userarq.jpg'

export default function About() {
  return (
    <div id='about' className='about'>
        <h1>Sobre mim</h1>
        <div className='about-container'>
        <div className='img-section'>
            <Image 
                src={userImg}
                layout='intrinsic'
                objectFit='cover'
                alt=''
            />
        </div>
        <div className='about-section'>
            <span>Bem-vindo(a) ao site da nossa arquiteta de renome internacional! Com mais de 20 anos de experiência na indústria, nossa arquiteta é conhecida por criar espaços incríveis que combinam design estético com funcionalidade prática. Ela é uma especialista em diversas áreas da arquitetura, incluindo design residencial, design comercial, design de interiores e muito mais.
                <br /><br />A nossa arquiteta tem uma paixão inabalável pela criação de espaços únicos e personalizados para seus clientes, sempre se concentrando em suas necessidades e desejos específicos. Ela acredita que cada projeto é uma oportunidade de contar uma história e criar uma experiência inesquecível.</span>
        </div>
        </div>
    </div>
  )
}
