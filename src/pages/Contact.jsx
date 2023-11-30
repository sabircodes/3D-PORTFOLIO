import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import { HemisphereLight } from 'three';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [isLodading , setIsLodading] = useState(false)
  const [currentAnimation,setCurrentAnimation] = useState('Cuphead_anim_22')
  const {alert,showAlert,hideAlert} = useAlert();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLodading(true);
    setCurrentAnimation('Cuphead_anim_22')
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name : form.name,
        to_name:'Sabir Akhtar',
        from_email : form.email,
        to_email : 'demonplay.0123@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,



    ).then(()=>{
      setIsLodading(false)
      setForm({name:"" ,email:"",message:""});
      showAlert({show:true,text:'Message sent successfully!', type:'success'})

      setTimeout(()=>{
        hideAlert();
      },[3000])
      // TODO ; show succes messaage
    }).catch((err) => {
      setIsLodading(false);
      console.error(err);
      showAlert({show:true,text:'Message not sent' ,type:'danger'})
      // show err message 

    })

    
  }
  function handlechange(e) {
    e.preventDefault();
    setForm({...form , [e.target.name]: e.target.value})
  }

  function handleFocus() {
    setCurrentAnimation('Cuphead_anim_22')
  }

  function handleBlur() {
  }


  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert}/> }
      {/* <Alert {...alert}/> */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-6 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold '>Name
            <input 
            type='text' 
            placeholder='your name' 
            name='name' 
            className='input ' 
            value={form.name} 
            onChange={handlechange} 
            onFocus={handleFocus} 
            onBlur={handleBlur} />
          </label>
          <label className='text-black-500  font-semibold' >Email
            <input 
            type='email' 
            placeholder='your@email' 
            name='email' 
            className='input ' 
            value={form.email} 
            onChange={handlechange} 
            onFocus={handleFocus} 
            onBlur={handleBlur} />
          </label>
          <label className='text-black-500  font-semibold'>Message
            <textarea 
            rows='4'
            name='message' 
            placeholder='Hey wanted to ...' 
            className='input ' 
            value={form.message} 
            onChange={handlechange} 
            onFocus={handleFocus} 
            onBlur={handleBlur} />
          </label>

          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLodading ? 'Sending...' : 'Send Message'}
          </button>
        
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas >
         <ambientLight intensity={1.9} /> 
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 0, 5]} intensity={1} /> 
      <pointLight position={[1, 2, 1]} intensity={2} color="yellow" />
      <pointLight position={[1, 0, -1]} intensity={10} color="yellow" /> 

      



{/* Point Light (Accent Light) */}
<pointLight position={[0, 2, 0]} intensity={1} color="white" />

     
          <Fox
            currentAnimation={currentAnimation}
            position={[1.0,-3.1,-0.5]}
            rotation={[50.4,30.7,0]}
            scale={[2 ,2 ,2]}
          />
        </Canvas>

      </div>



    </section>
  )
}

export default Contact