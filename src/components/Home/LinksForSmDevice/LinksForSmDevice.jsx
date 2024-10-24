import React from 'react';
import { BiLogoGithub, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

const LinksForSmDevice = () => {
    return (
        <div>
            <div className='flex gap-7 lg:hidden md:hidden'>
                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='bg-success p-2 rounded-full' href="https://github.com/nabiursiddique" target='blank'>
                    <BiLogoGithub className='text-2xl text-black hover:text-white' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='bg-success p-2 rounded-full' href="https://www.linkedin.com/in/nabiursiddique/" target='blank'>
                    <BiLogoLinkedin className='text-2xl text-black hover:text-white ' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='bg-success p-2 rounded-full' href="mailto:nabiursiddique01@gmail.com">
                    <AiOutlineMail className='text-2xl text-black hover:text-white ' />
                </motion.a>

                <motion.a
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className='bg-success p-2 rounded-full' href="https://www.instagram.com/nabiursiddique/" target='blank'>
                    <BiLogoInstagram className='text-2xl text-black hover:text-white ' />
                </motion.a>
            </div>
        </div>
    );
};

export default LinksForSmDevice;