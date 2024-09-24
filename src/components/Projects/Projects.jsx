import React, { useState } from 'react';
import { motion } from "framer-motion";
import projectInfo from '../../assets/projectsInfo.json';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    const [projectCount, setProjectCount] = useState(3);
    return (
        <section id='projects' className='lg:mx-5 py-10'>
            <div className='hero mb-5'>
                <div className='hero-content justify-start'>
                    <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-4xl text-success font-semibold '>Projects</motion.h2>
                </div>
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='w-60 h-[.5px] bg-slate-100 mt-11'></motion.span>
            </div>

            <div>
                {
                    projectInfo.slice(0, projectCount).map((item, i) => (
                        <ProjectsCard key={i} item={item} />
                    ))
                }
            </div>


            <div className={`flex justify-center mt-10 ${projectInfo.length < 4 && 'hidden'}`}>
                {
                    projectCount === projectInfo.length ?
                        <button onClick={() => setProjectCount(3)} className='btn btn-success btn-outline'>See Less</button>
                        :
                        <button onClick={() => setProjectCount(projectInfo.length)} className='btn btn-success btn-outline'>See More Projects</button>
                }
            </div>

        </section>
    );
};

export default Projects;