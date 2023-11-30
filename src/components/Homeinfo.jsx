import React from 'react'

import { Link } from 'react-router-dom'

const InfoBox = ({text,link,btnText})=>(
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn"
        >
             {btnText }
        </Link>
        
       
    </div>

)
const renderContent = {
    1: (
        <InfoBox 
        text="Working my way through the rumbels and learning new skills along the way is my way of doing things"
        link="/about"
        btnText={"Learn More->"}
    />
    ),
    2: (
        <InfoBox 
            text="I am a full-stack developer , want to see my projects"
            link="/projects"
            btnText={"Projects->"}
        />
    ),
    3: (
        <InfoBox 
        text="Want to discuss somthing feel free to contact me"
        link="/contact"
        btnText={"Contact me ->"}
    />
    ),
    4: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"
        >Hi ,I am <span>Sabir Akhtar </span>👋🏼
        <br/>
        An aspisring Software Developer
        </h1>

    ),
}



function Homeinfo({currentStage}) {
  return renderContent[currentStage] || null;
}

export default Homeinfo