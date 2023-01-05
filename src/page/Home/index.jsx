import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import flappy from "../../../src/assets/imgs/flappy.png";
import pokedex from "../../../src/assets/imgs/pokedex.png";
import serracomerce from "../../../src/assets/imgs/serracomerce.png";
import cssimg from "../../assets/imgs/css.svg";
import htmlimg from "../../assets/imgs/html.svg";
import javaimg from "../../assets/imgs/java.svg";
import jsimg from "../../assets/imgs/js.svg";
import iconMe from "../../assets/imgs/Me.png";
import reactimg from "../../assets/imgs/reactimg.svg";
import sassimg from "../../assets/imgs/sass.svg";
import springimg from "../../assets/imgs/springboot.svg";
import styledimg from "../../assets/imgs/styled.svg";
import tailwindimg from "../../assets/imgs/tailwind.svg";
import "./style.css";
export const Home = () => {
  const [user,setUser] =useState([])
  const [projects,setProjects] =useState(6)

  
  const handleShowMore = () => {  
    let maisProjects = projects + 6
    setProjects(maisProjects) 
  }

  useEffect(() => {
    axios.get(`https://api.github.com/users/MarioLucas0/repos?per_page=${projects}`).then((response1) => {
      setUser(response1.data)
      console.log(response1.data)
      AOS.init({
        duration : 2000
      });
    });
  },[projects])

  return (
    <>
    <section className="w-100  s1" id="s1">
      <div className="container h-100 pt-6">
        <div className="container-content d-flex ">
          <div className="container-img">
            <div className="bg-img">
              <img src={iconMe} alt="" />
            </div>
          </div>
          <div className="container-text">
              <p className="text-light name"  data-aos="fade-right">Hello my name is <span>Mario Lucas</span></p>
              <h2 className="text-light display-1"  data-aos="fade-right">Developer FullStack</h2>
              <p className="fs-2 text-gray "  data-aos="fade-right">I enjoy creating solid, scalable front-end and back-end products with great user experiences.</p>
            
              <div className="icons pt-5 d-flex "  data-aos="fade-right">
                <a href="https://github.com/MarioLucas0">
                <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/mariolucas00/">
                <SlSocialLinkedin />
                </a>
                <a href="https://www.instagram.com/m__lucaass/?next=%2Fmintbr.nft%2F">
                <BsInstagram />
                </a>
              </div>

              <div className='my-about'>
              <h3 className='fs-1 text-light p'  data-aos="fade-right">About me</h3>
              <p className='fs-3  text-gray '  data-aos="fade-right">I'm a FullStack Developer with strong communication, emotional intelligence and organization skills. I have a solid foundation in programming logic and knowledge in JavaScript, Java and TypeScript languages, in addition to being proficient in Spring Boot and ReactJS frameworks. Passionate about solving complex problems and making a positive impact, I am always looking for new challenges and opportunities for growth. During my ICT/Software residency at Serratec, I had the opportunity to work on several projects and collaborate in cross-functional teams, which gave me confidence in my ability to learn quickly and adapt to new technologies. I'm excited to see where my programming career takes me next.</p>
              </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-100  s2" >
      <div className="container pt-6 h-100">
        <div className="text-built d-flex ">
          <h2 className="text-light display-5">Some Things I’ve Built</h2>
          <p></p>
        </div>
        <div className="featured-projects d-flex">
          <div className="img-projects"  data-aos="fade-right">
          <a href="https://trabalho-final-react-hsn7.vercel.app/">
          <img src={serracomerce} alt="" />
          </a>
          </div>
          <div className="text-projects" data-aos="fade-left">
            <p className="text-1">Featured Project</p>
            <h3 className="text-title">SerraComerce</h3>
            <div className="
project-explanation">
                      <p>The project for a mini e-commerce that I developed during my residency in software at Serratec is a platform where you can find and safely purchase the products you like the most, all with a pleasant and attractive design.</p>
            </div>
            <div className="
technologies-used d-flex justify-content-end">
               <ul>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>Bootstrap</li>
                <li>Styled Component</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Postgres</li>
               </ul>
            </div>
            <div className="icons">
             <a href="https://github.com/MarioLucas0">
                <FiGithub />
              </a>
             <a href="https://trabalho-final-react-hsn7.vercel.app/">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="featured-projects d-flex ft-2">
          <div className="img-projects "  data-aos="fade-left">
          <a href="https://pagepokedex.vercel.app/">
          <img src={pokedex} alt="" />
          </a>
          </div>
          <div className="text-projects txtp-2"  data-aos="fade-right">
            <p className="text-1">Featured Project</p>
            <h3 className="text-title">Pokedex</h3>
            <div className="
project-explanation pe-2"  data-aos="fade-right">
                      <p >
A pokedex project that allows the user to view all pokemons and filter the list by type, making it easier to find the desired pokemons. In addition, it is possible to access detailed information about each pokemon, such as attacks and special abilities.</p>
            </div>
            <div className="
technologies-used tu-2 d-flex justify-content-end">
               <ul>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>Bootstrap</li>
                <li>Css</li>
                <li>Sass</li>
               </ul>
            </div>
            <div className="icons ic-2">
             <a href="https://github.com/MarioLucas0">
                <FiGithub />
              </a>
             <a href="https://pagepokedex.vercel.app/">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="featured-projects ft-3  d-flex">
          <div className="img-projects"  data-aos="fade-right">
          <a href="https://gameflappybird-ten.vercel.app/">
          <img src={flappy} alt="" />
          </a>
          </div>
          <div className="text-projects" data-aos="fade-left">
            <p className="text-1">Featured Project</p>
            <h3 className="text-title">Flappy Bird</h3>
            <div className="
project-explanation">
                      <p>
The little project is a copy of the famous game Flappy Bird and it is a very fun and easy game to play, perfect to pass the time and have fun.</p>
            </div>
            <div className="
technologies-used d-flex justify-content-end">
               <ul>
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>Bootstrap</li>
                <li>Styled Component</li>
               </ul>
            </div>
            <div className="icons">
             <a href="https://github.com/MarioLucas0/GameFlappyBird">
                <FiGithub />
              </a>
             <a href="https://gameflappybird-ten.vercel.app/">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-100  s3" id="s3">
      <div className="container h-100 pt-6">
        <h2 className="text-light display-3 pt-5">Other Noteworthy Projects</h2>
        <p className="text-1">view the archive</p>
        <div className="projects-container">
        {user?.map((repo,index) => (
          <div key={index} className="projects"  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          >
            <div className="icons-projects w-100 d-flex justify-content-between">
              <FiFolder className="icon-folder"/>
                <div className="project-links">
                <a href={`${repo?.clone_url}`}>
                <FiGithub />
              </a>
              <a className="ml-5" href="#">
                  <FiExternalLink  />
                </a>
                </div>
            </div>
            <div className="text-projects">
              <h2 className="text-name">{repo?.name}</h2>
              <p className="text-description"> {repo?.description}</p> 
              <div className="languages">
                <ul>
                  <li>{repo?.language}</li>
                </ul>
              </div>
            </div>
          </div>
          ))} 
        </div>
        <div className="button-show-more-container">
            <button className="button-show-more" onClick={handleShowMore}>Show More</button> 
          </div>
      </div>
    </section>
    <section className="w-100  s4" id="s4">
      <div className="container">
        <h2 className="text-light display-3 pt-5">My Knowledge</h2>
        <div className="imgs-languages" >
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="400"
          >
            <img src={reactimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="800"
          >
            <img src={cssimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1200"
          >
            <img src={jsimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1400"
          >
            <img src={htmlimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1600"
          >
            <img src={sassimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1800"
          >
            <img src={tailwindimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2000"
          >
            <img src={styledimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2200"
          >
            <img src={javaimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2400"
          >
            <img src={springimg} alt="" />
          </div>
          <div className="fundo-img" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2600"
          >
            <img src={reactimg} alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className='w-100  s5'>
      <div className="container" data-aos="fade-right">
        <h1 className="get-touch">Get In Touch</h1>
        <p>
I'm a highly motivated junior developer looking for an opportunity to grow and develop my skills. I would be happy to discuss how I can be of assistance to your company.</p>
        <a href="https://www.linkedin.com/in/mariolucas00/"> 
          <button>Say Hello</button>
        </a>  
      </div>
    </section>
  </>
  )
}


