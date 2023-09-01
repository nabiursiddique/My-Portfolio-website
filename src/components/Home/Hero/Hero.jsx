import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer.', 'ReactJS Developer.', 'Web Developer.', 'Frontend Designer.'],
        loop: {}
    });
    return (
        <div className="hero lg:min-h-screen">
            <div className="flex items-center gap-10 flex-col lg:flex-row-reverse">
                <div className='lg:w-full'>
                    <img src="https://images.pexels.com/photos/4064969/pexels-photo-4064969.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="max-w-md rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-full mx-5'>
                    <h1 className="text-5xl font-bold">Nabiur Siddique</h1>
                    <h3 className="py-3 text-2xl">Iam a <span className='text-green-400 font-medium'>{text}</span><span className='text-green-400'><Cursor /></span></h3>
                    <p className='pb-3'>I'm a Full-Stack MERN Developer, and I'm very passionate and dedicated to my work.</p>
                    <button className="btn btn-md btn-primary">Say Hello</button>
                </div>
            </div>

        </div>
    );
};

export default Hero;