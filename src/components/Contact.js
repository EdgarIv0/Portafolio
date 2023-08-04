import React from 'react';

import {motion} from 'framer-motion';

import {fadeIn} from '../variants'

import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaAngular,  } from 'react-icons/fa';

import { AiOutlineMail, AiFillHtml5 } from 'react-icons/ai';


const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          {/*text*/}
          <motion.div 
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex justify-start items-center mx-auto'>
            <div>
              <h2 className='text-[45px] lg:text-[70px] uppercase leading-none mb-12 text-accent'>
                Let's work together!
              </h2>
              </div>
          
          </motion.div>

          <h2 className='text-[45px] lg:text-[40px] uppercase mx-auto mt-10'>Contact me</h2>

          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 flex lg:flex-row gap-x-16 gap-y-10 justify-start items-center mx-auto mb-20 mt-8'>

            
            <a href='mailto:edgarivannc2000@gmail.com' title='Mail' target='blank'>
              < AiOutlineMail size={40}/>
            </a>
            <a href='https://github.com/EdgarIv0' title='GitHub' target='blank'>
              <FaGithub size={40}/>
            </a>
            <a href='https://www.linkedin.com/in/edgarnu%C3%B1ez2000/' title='LinkedIn' target='blank'>
              <FaLinkedin size={40}/>
            </a>
            <a href='https://www.instagram.com/edgarivan_2805/' title='Instagram' target='blank'>
              <FaInstagram size={40}/>
            </a>
            </motion.div>
            
          </div>
      </div>
    </section>
  );
};

export default Contact;
