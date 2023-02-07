import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css';


const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nisi iusto possimus, eveniet ab deserunt vitae harum molestiae.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quae iste corrupti neque ratione nam aperiam alias in dolores minima voluptatum beatae molestias odit eligendi, nostrum distinctio autem accusantium officia culpa doloremque maiores tenetur quibusdam! Quas voluptatum corrupti rerum impedit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum, praesentium similique fugiat pariatur odit quos eveniet eligendi nobis rerum, ad at debitis consequuntur? Soluta.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur illum tenetur!</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum, praesentium similique fugiat pariatur odit quos eveniet eligendi nobis rerum, ad at debitis consequuntur? Soluta.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis beatae harum sapiente itaque rem facere tempora laborum necessitatibus aperiam ipsum neque minima quaerat, aut impedit et esse officiis amet repellat deleniti explicabo. Nemo aspernatur qui, autem deserunt numquam obcaecati.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>


      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quae iste corrupti neque ratione nam aperiam alias in dolores minima voluptatum beatae molestias odit eligendi, nostrum distinctio autem accusantium officia culpa doloremque maiores tenetur quibusdam! Quas voluptatum corrupti rerum impedit!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolorum, praesentium similique fugiat pariatur odit quos eveniet eligendi nobis rerum, ad at debitis consequuntur? Soluta.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequatur illum tenetur!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About