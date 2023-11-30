import React from 'react'
import { Link } from 'react-router-dom'


function CTA() {
  return (
    <section className="cta">
        <p className='text-black-500 font-extrabold flex-1 text-3xl max-md:text-center'>Want to build something amazing?  <br className="sm:block hidden"/>
        Let's build something awesome together</p>
        <Link to="/contact" className='btn'>
            Contact
        </Link>

    </section>
  )
}

export default CTA