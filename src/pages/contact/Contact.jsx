import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css';


const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad cupiditate ipsa excepturi itaque vitae, odit dolore quod repudiandae.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="http://mailto:support@alex.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
            <a href="https://m.me/ogochukwu.madu.alex" target="_blank" rel="noopener noreferrer"><BsMessenger /></a>
            <a href="https://wa.me/+2348136938648" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
