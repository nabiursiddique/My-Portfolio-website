import React, { useEffect, useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { BsFillSendFill, BsBoxArrowUpRight } from "react-icons/bs";
import Leftside from '../Leftside/Leftside';
import Lottie from 'lottie-react'
import programmingAnimation from '../../../assets/programmingAnimation.json'
import { motion } from "framer-motion";
import LinksForSmDevice from '../linksForSmDevice/linksForSmDevice';

const Hero = () => {
    const [text] = useTypewriter({
        words: ['MERN Stack Developer.', 'ReactJS Developer.', 'Web Developer.', 'Frontend Designer.'],
        loop: {}
    });

    return (
        <div className="hero ">
            <div className='hero-content'>
                <div className='flex '>
                    <div className='hidden lg:block md:block md:ml-10'>
                        <Leftside />
                    </div>
                    <div className='lg:w-3/4 md:w-3/4 lg:ml-8 md:ml-8 '>
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='text-success pb-3 font-medium'>Hi, My name is
                        </motion.p>

                        <motion.h1
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="text-5xl font-bold text-slate-200">
                            Nabiur Siddique
                        </motion.h1>

                        <motion.h3
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="py-3 text-2xl"><span className='text-slate-200'>
                                I am a</span> <span className='text-success font-medium'>{text}</span><span className='text-success'><Cursor /></span>
                        </motion.h3>

                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className='pb-3 lg:w-4/5'>I'm a Full-Stack MERN Developer and I'm very passionate and dedicated to my work.I build websites which can impact the socity and the world
                        </motion.p>

                        <LinksForSmDevice />

                        <div className='lg:mt-0 mt-2'>
                            <motion.a
                                href='#contact'
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="btn btn-sm btn-outline btn-success mt-3 mr-5">Say Hello <BsFillSendFill />
                            </motion.a>
                            <motion.a
                                href='https://drive.google.com/file/d/1Ru5ZWtyuTza6wd-Fr1tySEHKhbXL0z_9/view'
                                target='blank'
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                                className="btn btn-sm btn-outline btn-success mt-3">
                                RESUME <BsBoxArrowUpRight />
                            </motion.a>
                        </div>
                    </div>
                </div>
                <Lottie animationData={programmingAnimation} className='max-w-lg hidden lg:block md:block' />
            </div>
        </div>
    );
};

export default Hero;