import React from 'react'
import './Contact.css'
import {IoLogoGithub,IoLogoLinkedin} from 'react-icons/io'
import {HiMail} from 'react-icons/hi'

function Contact() {
  return (
    <div id="contact" className='contact-container'>
        <div>
            <div className='message'>I am excited to collaborate with you</div>
            <div className='gmail'>
                <HiMail className='gmail-icon'/>
                <div>priyanshubhardwaj19dec@gmail.com</div>
            </div>
        </div>

        <div className='contact-form'>
            <form>
                <div className='contact-form-element'>
                    <div>Email-id</div>
                    <input type='email' className='contact-form-input'/>
                </div>

                <div className='contact-form-element'>
                    <div>Message</div>
                    <input type='text' className='contact-form-input'/>
                </div>

                <div className='contact-form-button'>Send</div>
            </form>
        </div>

        <div className='contact-social-media'>
            <IoLogoGithub className='social-media-icon'/>
            <IoLogoLinkedin className='social-media-icon'/>
        </div>
    </div>
  )
}

export default Contact