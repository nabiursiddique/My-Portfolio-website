import React from 'react';
import NabiurSiddique from '../../assets/NabiurSiddique.jpg'
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id='about' className='lg:mx-5 pt-10'>
            <div className='hero mb-5'>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='hero-content justify-start'>
                    <h2 className='text-4xl text-success font-semibold '>About Me</h2>
                </motion.div>
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='w-60 h-[.5px] bg-slate-100 mt-11'>

                </motion.span>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <motion.img
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        src={NabiurSiddique}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:ml-5 md:ml-5'>
                        <motion.h2
                            initial={{ y: 15, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                            className='text-3xl text-success font-semibold mb-6 italic'>
                            Hello,
                        </motion.h2>
                        <motion.p
                            initial={{ y: 15, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            Iam Nabiur Siddique form Naogaon, Bangladesh. A dedicated student of Computer Science and Engineering at RIMT University in India. Currently Iam in my last semester.
                            <br />
                            <br />
                            I enjoy creating things that live on the internet. My journey in the world of technology has been a thrilling adventure, and I'm passionate about web development. Over the past year, I've immersed myself in the MERN (MongoDB, Express, React, Node.js) stack, honing my skills and crafting innovative web solutions.
                        </motion.p>
                        <div className='pt-4'>
                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                viewport={{ once: true }}
                                className='font-mono'>
                                <span className='text-success'>Email: </span>nabiursiddique01@gmail.com
                            </motion.p>
                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                                viewport={{ once: true }}
                                className='font-mono'>
                                <span className='text-success'>Phone: </span>
                                +8801303741747
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;