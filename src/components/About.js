import React from 'react';

// import img
import Me from '../assets/img/about.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[400px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Me}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Busayo Ogunde
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              My name is Busayo, a self-taught frontend web developer from Nigeria, on the fullstack journey. I Like to build fun stuff on the web, pay attention to details, and I am always ready to learn. My goal is to become a topnotch and fullstack web developer and software engineer. Also to help as much people as i can, that are also interested in this journey!.<br />
                <br />
                When i'm not doing anything related to programming, i love very quiet spaces, especially around nature. Or playing video games
              </p>
            </div>
            <a href='#contact'>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
