import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectsCard = ({ item }) => {
    const { id, name, image, description, technologies, liveSite, clientSide, serverSide } = item;
    return (
        <div className="hero mb-5">
            <div className={`hero-content flex-col ${id % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} `}>
                <img src={image} className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
                <div>
                    <motion.p
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='font-mono text-teal-300 mb-2'>
                        0{id}.Featured Project
                    </motion.p>
                    <motion.h1
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl text-white font-bold">
                        {name}
                    </motion.h1>
                    <motion.p
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="py-4 text-justify">
                        {description}
                    </motion.p>
                    <motion.h3
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='font-mono'>
                        Technology Used :-
                    </motion.h3>
                    <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='w-40 h-[.5px] bg-teal-100'>

                    </motion.div>
                    {
                        technologies.map((technology, i) => (
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                viewport={{ once: true }}
                                key={i}
                                className='mt-1 flex items-center font-mono'>
                                <AiFillCaretRight className='text-teal-300' />{technology}
                            </motion.div>
                        ))
                    }
                    <motion.a
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        href={clientSide}
                        target='blank'
                        className="btn btn-sm btn-outline btn-success mt-3 mr-2">
                        Client Repo<BsBoxArrowUpRight />
                    </motion.a>
                    {
                        serverSide && (
                            <motion.a
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                viewport={{ once: true }}
                                href={serverSide}
                                target='blank'
                                className="btn btn-sm btn-outline btn-success mt-3 mx-2">
                                Server Repo<BsBoxArrowUpRight />
                            </motion.a>
                        )
                    }
                    <motion.a
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        viewport={{ once: true }}
                        href={liveSite}
                        target='blank'
                        className="btn btn-sm btn-outline btn-success mt-3 mx-2">
                        Live <BsBoxArrowUpRight />
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;