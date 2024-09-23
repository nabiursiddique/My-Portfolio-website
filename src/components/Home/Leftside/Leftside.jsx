import React from 'react';
import { BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Leftside = () => {
    return (
        <section>
            <div className='flex flex-col gap-7'>
                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    href="https://github.com/nabiursiddique" target='blank'>
                    <FaGithub className='text-3xl hover:text-success rounded-lg' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    href="https://www.linkedin.com/in/nabiur-siddique" target='blank'>
                    <FaLinkedin className='text-3xl  hover:text-success rounded-lg' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    href="mailto:nabiursiddique01@gmail.com">
                    <AiFillMail className='text-3xl  hover:text-success rounded-lg' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    href="https://www.instagram.com/nabiur_siddique" target='blank'>
                    <FaInstagramSquare className='text-3xl  hover:text-success rounded-lg' />
                </motion.a>
            </div>
        </section>
    );
};

export default Leftside;