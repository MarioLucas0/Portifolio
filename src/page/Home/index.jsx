import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import flappy from "../../../src/assets/imgs/flappy.png";
import pokedex from "../../../src/assets/imgs/pokedex.png";
import serracomerce from "../../../src/assets/imgs/serracomerce.png";
import iconMe from "../../assets/imgs/Me.png";
import "./style.css";

export const Home = () => {
  const [user,setUser] =useState([])

  useEffect(() => {
      axios.get(`https://api.github.com/users/MarioLucas0/repos?page=3&per_page=6`).then((response1) => {
        setUser(response1.data)
        console.log(response1.data)
       /*  axios.get(`https://api.github.com/repos/octocat/${response1.name}`).then((response) => {
          setUser(response.data)
          console.log(response);
        }); */
      });
      
  },[])


  return (
    <>
    <section className="w-100  s1" >
      <div className="container h-100 pt-6">
        <div className="container-content d-flex ">
          <div className="container-img">
            <div className="bg-img">
              <img src={iconMe} alt="" />
            </div>
          </div>
          <div className="container-text">
              <p className="text-light name">Hello my name is <span>Mario Lucas</span></p>
              <h2 className="text-light display-1">Developer FullStack</h2>
              <p className="fs-2 text-gray ">I enjoy creating solid, scalable front-end and back-end products with great user experiences.</p>
            
              <div className="icons pt-5 d-flex ">
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
              <h3 className='fs-1 text-light p'>About me</h3>
              <p className='fs-3  text-gray '>I'm a FullStack Developer with strong communication, emotional intelligence and organization skills. I have a solid foundation in programming logic and knowledge in JavaScript, Java and TypeScript languages, in addition to being proficient in Spring Boot and ReactJS frameworks. Passionate about solving complex problems and making a positive impact, I am always looking for new challenges and opportunities for growth. During my ICT/Software residency at Serratec, I had the opportunity to work on several projects and collaborate in cross-functional teams, which gave me confidence in my ability to learn quickly and adapt to new technologies. I'm excited to see where my programming career takes me next.</p>
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
          <div className="img-projects">
          <a href="https://trabalho-final-react-hsn7.vercel.app/">
          <img src={serracomerce} alt="" />
          </a>
          </div>
          <div className="text-projects">
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
          <div className="img-projects">
          <a href="https://pagepokedex.vercel.app/">
          <img src={pokedex} alt="" />
          </a>
          </div>
          <div className="text-projects txtp-2">
            <p className="text-1">Featured Project</p>
            <h3 className="text-title">Pokedex</h3>
            <div className="
project-explanation pe-2">
                      <p>
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
          <div className="img-projects">
          <a href="https://gameflappybird-ten.vercel.app/">
          <img src={flappy} alt="" />
          </a>
          </div>
          <div className="text-projects">
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
    <section className="w-100  s3">
      <div className="container h-100 pt-6">
        <h2 className="text-light display-3 pt-5">Other Noteworthy Projects</h2>
        <p className="text-1">view the archive</p>
        <div className="projects-container">
      {user?.map((user,index) => (
          <div key={index} className="projects">
            <div className="icons-projects w-100 d-flex justify-content-between">
              <FiFolder className="icon-folder"/>
                <div className="project-links">
                <a href="https://github.com/MarioLucas0">
                <FiGithub />
              </a>
              <a className="ml-5" href="https://trabalho-final-react-hsn7.vercel.app/">
                  <FiExternalLink  />
                </a>
                </div>
            </div>
             <p>{user?.description}</p> 
          </div>
          ))}  
        </div>
      </div>
    </section>
  </>
  )
}


