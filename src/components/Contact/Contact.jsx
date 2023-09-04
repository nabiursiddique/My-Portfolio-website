import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id='contact' className='lg:mx-5 pt-10 mb-36'>
            <div className='hero lg:mb-10 md:mb-9 mb-5'>
                <div className='hero-content justify-start'>
                    <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='text-4xl text-success font-semibold '>Contact Me</motion.h2>
                </div>
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='w-60 h-[.5px] bg-slate-100 mt-11'></motion.span>
            </div>

            <div className="flex justify-center">
                <div className="lg:w-1/2 md:w-3/5 w-full mx-5">
                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-5xl text-center font-bold'>Get In Touch</motion.h1>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='font-mono pt-3 text-center'>I'm currently looking for new opportunities to apply my webdevelopment knowledge in the industry and gain more knowledge & experience in webdevelopment field. Feel free to contact me.</motion.p>
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='flex justify-center mt-10'>
                        <a href="mailto:nabiursiddique01@gmail.com" className='btn btn-outline btn-success'>Say Hello</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;