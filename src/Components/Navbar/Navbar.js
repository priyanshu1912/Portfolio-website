import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

function Navbar() {

    const [activepage,setActivepage] = useState('1')

  return (
    <div className='nav-container'>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <div onClick={()=>setActivepage('1')} className={activepage==='1' ? 'nav-option-active' : 'nav-option'}>Home</div>
        </Link>

        <Link activeClass="active" to="skills" spy={true} smooth={true}>
          <div onClick={()=>setActivepage('2')} className={activepage==='2' ? 'nav-option-active' : 'nav-option'}>Skills</div>
        </Link>

        <Link activeClass="active" to="projects" spy={true} smooth={true}>
          <div onClick={()=>setActivepage('3')} className={activepage==='3' ? 'nav-option-active' : 'nav-option'}>Projects</div>
        </Link>

        <Link activeClass="active" to="contact" spy={true} smooth={true}>
          <div onClick={()=>setActivepage('4')} className={activepage==='4' ? 'nav-option-active' : 'nav-option'}>Contact</div>
        </Link>
    </div>
  )
}

export default Navbar