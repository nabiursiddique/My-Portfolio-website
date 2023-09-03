import React from 'react';
import NabiurSiddique from '../../assets/NabiurSiddique.jpg'

const About = () => {
    return (
        <section id='about' className='lg:mx-5 pt-10'>
            <div className='hero mb-5'>
                <div className='hero-content justify-start'>
                    <h2 className='text-4xl text-success font-semibold '>About Me</h2>
                </div>
                <span className='w-60 h-[.5px] bg-slate-100 mt-11'></span>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={NabiurSiddique} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-5 md:ml-5'>
                        <h2 className='text-3xl text-success font-semibold mb-6 italic'>Hello,</h2>
                        <p>Iam Nabiur Siddique. Iam currently pursuing my Btech in computer science and Engineering at RIMT University, India. And Iam in my last semester.
                            <br />
                            <br />
                            I have become so involved with programming that coding has become an addiction. That's why when I finish a project at the right time, then I feel full of peace, joy, and a smile too.
                            <br />
                            <br />
                            Finally, Dedicated and efficient full stack developer with 8+ months of experience in application layers, presentation layers, and databases.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;