import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import publicIp from "public-ip";
import { useEffect, useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import intranetwerner from "../../../src/assets/imgs/intranetwerner.png";
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
  const [isHover, setIsHover] = useState(false);
  const languages = ["React","CSS","JavaScript","HTML","SASS","TAILWIND","STYLED COMPONENTS","JAVA","SPRING BOOT","TYPESCRIPT"]
  const [idText,setIdText] = useState("")
 const [scrollPosition, setScrollPosition] = useState(0);
    const [ipAddress, setIpAddress] = useState('');

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };



  const handleMouseEnter = (e) => {
     console.log(e)
     if(e.target.id) {
      setIdText(e.target.id)
      setIsHover(true)
     }
  };

  const handleMouseLeave = () => {
      setIsHover(false);
  };

  const handleShowMore = () => { 

    let maisProjects = projects + 6
    setProjects(maisProjects) 
  }

  useEffect(() => {
    async function fetchIp() {
      const ip = await publicIp.v4();
      setIpAddress(ip);
    }
    fetchIp();
   
    axios.get(`https://api.github.com/users/MarioLucas0/repos?per_page=${projects}`).then((response1) => {
      setUser(response1.data)
      console.log(response1.data)
      AOS.init({
        duration : 2000
      });
    });
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  },[projects])



  return (
    <>
   
    <div className="info-icon">
      <div className="linha linha1"></div>
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
      <div className="linha"></div>
    </div>
    <section className="w-100  s1" id="s1">
      <div className="container h-100 pt-6">
        <div className="container-content d-flex ">
          <div className="container-img">
            <div className="bg-img">
              <img src={iconMe} alt="" />
            </div>
          </div>
          <div className="container-text">
          <p>Meu endereço IP é: {ipAddress}</p>
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
          <a href="https://intranet-werner-front.vercel.app/">
          <img src={intranetwerner} alt="" />
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
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Postgres</li>
               </ul>
            </div>
            <div className="icons">
             <a href="https://github.com/MarioLucas0/Intranet-Werner-Front">
                <FiGithub />
              </a>
             <a href="https://intranet-werner-front.vercel.app/">
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
        <h2 className="text-light display-3" >My Knowledge</h2>
        <div className="imgs-languages" >
 
        <div className="container-languages">
          <div className="fundo-img" id="0"  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="400"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={reactimg} alt="" /> 
          </div>
          <span  style={{display: isHover && idText == 0   ? 'block' : 'none'}} className="react-text"
      >{languages[0]}</span>
        </div>
  

          
        <div className="container-languages">
          <div className="fundo-img" id="1" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="800"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={cssimg} alt="" />
          </div>

          <span  style={{display: isHover && idText == 1   ? 'block' : 'none'}} className="react-text"
              >{languages[1]}</span>
        </div>


        <div className="container-languages">
          <div className="fundo-img" id="2"  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1200"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={jsimg} alt="" />
          </div>

            <span  style={{display: isHover && idText == 2   ? 'block' : 'none'}} className="react-text"
        >{languages[2]}</span>
        </div>


        <div className="container-languages">
          <div className="fundo-img" id="3"  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1400"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={htmlimg} alt="" />
          </div>
          
            <span  style={{display: isHover && idText == 3   ? 'block' : 'none'}} className="react-text"
        >{languages[3]}</span>
        </div>

        <div className="container-languages">
          <div className="fundo-img"  id="4" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1600"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={sassimg} alt="" />
          </div>
          
            <span  style={{display: isHover && idText == 4   ? 'block' : 'none'}} className="react-text"
        >{languages[4]}</span>
        </div>

        <div className="container-languages2">
          <div className="fundo-img" id="5"  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1800"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={tailwindimg} alt="" />
          </div>
          
            <span  style={{display: isHover && idText == 5   ? 'block' : 'none'}} className="react-text"
        >{languages[5]}</span>
        </div> 

        <div className="container-languages2">
          <div className="fundo-img" id="6"  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2000"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={styledimg} alt="" />
          </div>

            <span  style={{display: isHover && idText == 6   ? 'block' : 'none'}} className="react-text"
        >{languages[6]}</span>
        </div>  

        <div className="container-languages2">
          <div className="fundo-img" id="7" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2200"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={javaimg} alt="" />
          </div>

          <span  style={{display: isHover && idText == 7   ? 'block' : 'none'}} className="react-text"
      >{languages[7]}</span>
        </div>

        <div className="container-languages2">
          <div className="fundo-img" id="8" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2400"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={springimg} alt="" />
          </div>

          <span  style={{display: isHover && idText == 8   ? 'block' : 'none'}} className="react-text"
      >{languages[8]}</span>
        </div>

        <div className="container-languages2">
          <div className="fundo-img" id="9" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="2600"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={handleMouseLeave}
          >
            <img src={reactimg} alt="" />
          </div>
          <span  style={{display: isHover && idText == 9   ? 'block' : 'none'}} className="react-text"
      >{languages[9]}</span>
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
    <div className="scroll-bar">
      <span style={{background: scrollPosition > 1 ?    "#1850E1" : "#131b2f"}}></span>
      <span style={{background: scrollPosition > 1444 ?    "#1850E1" : "#131b2f"}} ></span>
      <span style={{background: scrollPosition > 4000 ?    "#1850E1" : "#131b2f"}}></span>
    </div>
  </>
  )
}


