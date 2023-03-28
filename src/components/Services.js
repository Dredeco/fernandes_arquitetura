import React from 'react'

export default function Services() {
    let services = [
        {name: "Projetos Empresariais", description: "Procuramos identificar os valores e prioridades das empresas para especificá-los em forma de projeto."},
        {name: "Projetos Resideciais", description: "Acreditamos que cada residência é a verdadeira construção de quem somos."},
        {name: "Palestras e Cursos Online", description: "Através da vivência da arquiteta Renilda Fernandes e sua experiência a frente do escritório há mais de 15 anois de mercado, proporcionamos talks, palestras e encontros que enriquecem o dia a dia dos profissionais de arquitetura e design e contribui para o aprimoramento de seus negócios."},
        {name: "Projetos para Incorporadora", description: "Entendemos o DNA de casa empreendimento e desenvolvemos as melhores estratégias estáticas e funcionais para casa incorporação. Oferecemos projetos de áreas comuns, apartamento decorado e detalhamento."}
    ]

  return (
    <div className='services'>
        <h1>Serviços</h1>
        <ul className='services-container'>
            {services.map((service) => (
                <li key={service.name}>
                    <h4>{service.name}</h4>
                    <span>{service.description}</span>
                    <a href='#'>SAIBA MAIS</a>
                </li>
            ))}
        </ul>
    </div>
  )
}
