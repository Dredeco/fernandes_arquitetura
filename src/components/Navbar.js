import Image from 'next/image'
import Link from 'next/link';
import React, {useEffect} from 'react'

import Logo from '../../public/logo.png'

export default function Navbar() {

  useEffect(() => {
      let btns = document.getElementsByClassName('nav-link');

      for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener('click', function(){
              let current = document.getElementsByClassName('active');
              current[0].className = current[0].className.replace(' active', '');
              this.className += ' active'
          })
      }

      console.log(btns);
  }, 2000)

  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <Image 
                src={Logo}
                width='150'
                height='60'
                alt=''
            />
        </a>

        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link 
                class="nav-link active"
                aria-current="page"
                href="/">Home
                </Link>

                <Link class="nav-link" 
                href="/">Sobre
                </Link>

                <Link class="nav-link" 
                href="/">Projetos</Link>

                <Link class="nav-link" 
                href="/">Contato</Link>
            </div>
        </div>
    </div>
    </nav>
  )
}
