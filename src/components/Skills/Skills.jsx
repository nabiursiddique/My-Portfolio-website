import React from 'react';
import { motion } from "framer-motion";

const Skills = () => {
    const frontend = ['ReactJS', 'NextJS', 'Redux', 'Typescript', 'Tailwind CSS', 'Ant Design'];
    const backend = ['ExpressJS', 'NodeJS', 'MongoDB', 'Mongoose', 'Json Web Token', 'Rest API']
    const tools = ['Firebase', 'Git & Github', 'VS Code', 'Figma', 'Adobe Photoshop', 'Microsoft Office']
    return (
        <section id='skills' className='lg:mx-5 py-10'>
            <div className='hero mb-5'>
                <div className='hero-content justify-start'>
                    <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-4xl text-success font-semibold '>Skills</motion.h2>
                </div>
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='w-60 h-[.5px] bg-slate-100 mt-11'></motion.span>
            </div>

            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3'>

                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-success">Frontend</h2>
                            <span className='w-48 h-[.5px] bg-success'></span>
                            {
                                frontend.map((item, i) => <p key={i} className='font-mono py-3 text-white'>{item}</p>)
                            }

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-success">Backend</h2>
                            <span className='w-48 h-[.5px] bg-success'></span>
                            {
                                backend.map((item, i) => <p key={i} className='font-mono py-3 text-white'>{item}</p>)
                            }
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-success">Tools</h2>
                            <span className='w-48 h-[.5px] bg-success'></span>
                            {
                                tools.map((item, i) => <p key={i} className='font-mono py-3 text-white'>{item}</p>)
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Skills;