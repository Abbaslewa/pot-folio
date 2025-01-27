



import AboutMe from "../section/AboutMe"
import Hero from "../section/Hero"
import Skills from "../section/Skills"
import ContactMe from "../section/ContactMe"
import Project from "../section/Project"
import Navbar from "../components/Navbar"
import Education from "../section/Education"



const Home = () => {
  return (
   
        <main className="">
     
            <Hero />
            <AboutMe />
            <Navbar />

            <Skills />
            <Project />
            <Education />
            <ContactMe />
            
            
        </main>
  
  )
}

export default Home;