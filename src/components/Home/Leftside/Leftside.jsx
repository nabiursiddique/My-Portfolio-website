import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

const Leftside = () => {
    return (
        <section>
            <div className='flex flex-col gap-7'>
                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    href="https://github.com/nabiursiddique" target='blank'>
                    <FiGithub className='text-3xl hover:text-success rounded-lg' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    href="https://www.linkedin.com/in/nabiursiddique/" target='blank'>
                    <SlSocialLinkedin className='text-3xl  hover:text-success' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    href="mailto:nabiursiddique01@gmail.com">
                    <IoMailOutline className='text-3xl  hover:text-success rounded-lg' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    href="https://www.instagram.com/nabiursiddique/" target='blank'>
                    <FaInstagram className='text-3xl  hover:text-success rounded-lg' />
                </motion.a>
            </div>
        </section>
    );
};

export default Leftside;