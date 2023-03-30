import Image from 'next/legacy/image'
import React from 'react'

import Casa1 from '../../public/images/casabranca1.jpg'
import Casa2 from '../../public/images/casabranca2.jpg'
import Casa3 from '../../public/images/casabranca3.jpg'
import Casa4 from '../../public/images/casabrancanoite.jpg'
import Casa5 from '../../public/images/casamadeira.jpg'
import Sala1 from '../../public/images/sala1.jpg'

export default function Projects() {
    let projects = [
        {name: "Casa Duplex Atafona", image: Casa1, year: "2023"},
        {name: "Casa Duplex Grussai", image: Casa2, year: "2023"},
        {name: "Casa Duplex Guarús", image: Casa3, year: "2022"},
        {name: "Casa Duplex Goytacazes", image: Casa4, year: "2022"},
        {name: "Casa Duplex Cidade Luz", image: Casa5, year: "2022"},
        {name: "Casa São Martinho - Sala", image: Sala1, year: "2021"},
    ]
  return (
    <div id='projects' className='projects'>
        <h1>Projetos</h1>
        <ul className='projects-container'>
            {projects.map((project) => (
                <li key={project.name} className='project-card'>
                    <Image 
                        src={project.image}
                        layout='fill'
                        objectFit='cover'
                        alt=''
                    />
                    <div className='project-description'>
                        <h4>{project.name}</h4>
                        <span>{project.year}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
