import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

function Projects() {
  return (
    <section className="max-container">
    <h1 className='head-text'>
      Hello ,I'm <span className='red-gradient_text font-semibold drop-shadow'>Sabir Akhtar</span>
    </h1>
    <br/>
    <div className='mt-5 flex-col gap-3 text-slate-500'>
    <p>Pre Final year undergrad at <span className='red-gradient_text font-mono'>VIT-Bhopal</span> <br/>
    Currently pursuing to be a Full-stack developer and this portfolio will tell you abut my skills
    </p>
    </div>
    <h1 className='text-[40px] font-semibold mt-5'>Projects </h1>
    <div className="flex flex-wrap my-20 gap-16 ">
   
      {projects.map((project)=>(
        <div className="lg:w-[400px] w-full" key={project.name}>
          <div className="block-container w-12 h-12">
            <div className={`btn-back rounded-xl ${project.theme}`}/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img src={project.iconUrl}
                alt='Project icon'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <div className='mt-5 flex flex-col'>
            <h4>
              {project.name}
            </h4>
            <p>
              {project.description}
            </p>
            <div className='mt-5 flex items-center '>
              <Link to={project.link}
              target='_blank'
              rel="noopener noreferrer"
              className="font-semibold text-red-800 "
                >
                Github Link ➡️

              </Link>

            </div>
          </div>
        </div>
      ))}
    </div>
    <hr className="border-slate-200"/>
    <CTA/>
    </section>
  )
}

export default Projects