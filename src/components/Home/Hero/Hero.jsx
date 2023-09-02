import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { BsFillSendFill } from "react-icons/bs";

const Hero = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer.', 'ReactJS Developer.', 'Web Developer.', 'Frontend Designer.'],
        loop: {}
    });
    return (
        <div className="hero lg:my-28 my-5">
            <div>
                <div>

                </div>
                <div className='lg:w-3/5 md:w-3/5 mx-5 lg:mx-auto md:mx-auto'>
                    <p className='text-success pb-4 font-medium'>Hi, My name is</p>
                    <h1 className="text-5xl font-bold text-slate-200">Nabiur Siddique</h1>
                    <h3 className="py-3 text-2xl"><span className='text-slate-200'>Iam a</span> <span className='text-success font-medium'>{text}</span><span className='text-success'><Cursor /></span></h3>
                    <p className='pb-3'>I'm a Full-Stack MERN Developer, and I'm very passionate and dedicated to my work.I build websites that can impact the socity and the world</p>
                    <button className="btn btn-md btn-outline btn-success mt-3">Say Hello <BsFillSendFill /></button>
                </div>
            </div>

        </div>
    );
};

export default Hero;