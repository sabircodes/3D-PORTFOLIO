import React from 'react'
import { skills,experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

function About() {
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
      <div className="flex flex-col py-10 mt-2">
        <h3 className="subhead-text">My Skills</h3>
        <p className="text-slate-500">Here are some of my weapons in my skillset</p>

      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) =>(
          <div className="block-container w-20 h-20">
          <div className="btn-back rounded-xl"/>
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img 
              src={skill.imageUrl}
              alt={skill.name}
              className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        ))}

      </div>

      <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement key={experience.company_name}
                icon={
                  <div className='flex justify-center w-full h-full items-center'>
                    <img
                      src={experience.icon}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{
                  background:experience.iconBg
                }}
                contentStyle={{
                  borderBottom:'8px',
                  borderStyle:'solid',
                  borderBottomColor:experience.iconBg,
                  boxShadow:'none',
                }}
              >
                <div>
                  <h3 className='text-black font-semibold text-xl'>{experience.title}</h3>
                  <p className='text-black-500 font-medium font-base'>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point,index)=>(
                    <li className='text-slate-600'>
                      {point}
                    </li>
                  ))}

                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>

      </div>

      <hr className="border-slate-200"/>
      <CTA/>

    </section>
  )
}

export default About