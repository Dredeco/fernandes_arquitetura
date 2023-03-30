import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export default function Contact() {

  function submit(e) {
    e.preventDefault()
  }

  return (
    <div id="contact" className='contact'>
        <h1>Contato</h1>

        <div className='contact_wrapper'>
            <form className='contact_form' onSubmit={submit}>
                <label>Nome:</label><input required type="text" />
                <label>Telefone:</label><input required type="number" />
                <label>E-mail:</label><input required type='email' />
                <label>Mensagem:</label><textarea required />
                <button>Enviar</button>
            </form>

            <div className='contact_info'>
                <h2>Informações</h2>
                <div>
                    <FaPhone /><strong>Telefone:</strong>
                </div><p>(22) XXXXX-XXXX</p><br />
                <div>
                    <GrMail /><strong>E-mail:</strong>
                </div><p>renilda@fernandesarq.com.br</p><br />
                <div>
                    <FaMapMarkerAlt /><strong>Localização:</strong>
                </div><p>Rua Av. 28 de Março, nº000 - Sala 3</p><br />
                <div>
                    <FaClock /><strong>Horário de Atendimento:</strong>
                </div><p>De segunda a sexta, das 9h às 17h.</p><br />
                <strong>Redes sociais</strong><p><a href='#'><FaFacebook /></a><a href='#'><FaInstagram /></a></p><br />
            </div>

            <div className='contact_map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.7540792799446!2d-41.3366344!3d-21.751057599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd44366230ad3%3A0xc6c455bc17445c8d!2sAv.%20Vinte%20e%20Oito%20de%20Mar%C3%A7o%2C%201%20-%20Parque%20Leopoldina%2C%20Campos%20dos%20Goytacazes%20-%20RJ%2C%2028020-740!5e0!3m2!1spt-BR!2sbr!4v1677247718542!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
