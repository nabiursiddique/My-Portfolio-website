import React from 'react';
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";
import { BsFillSendFill } from 'react-icons/bs';

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

            <div className="w-full mx-auto text-xl ">
                <div className="md:w-4/5 mx-2 md:mx-auto flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2 space-y-2 card bg-neutral text-neutral-content py-5">
                        <div className="md:w-4/5 mx-auto flex flex-col items-center justify-center px-10 pt-3 rounded-2xl gap-10 p-10">
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <div className='flex justify-center items-center'>
                                    <MdEmail className='text-white' size={27}></MdEmail>
                                    <h4 className="text-xl md:text-2xl font-bold text-success ml-2">Email</h4>
                                </div>
                                <a href="mailto:nabiursiddique01@gmail.com" className='text-white'>nabiursiddique01@gmail.com</a>
                            </div>

                            <div className="flex flex-col gap-1 items-center justify-center">
                                <div className='flex justify-center items-center'>
                                    <MdPhone className='text-white' size={27}></MdPhone>
                                    <h4 className="text-xl md:text-2xl font-bold text-success ml-2">Phone</h4>
                                </div>
                                <p className='text-white'>+880 1303 741747</p>
                            </div>

                            <div className="flex flex-col gap-1 items-center justify-center">
                                <div className='flex justify-center items-center'>
                                    <MdWhatsapp className='text-white' size={32}></MdWhatsapp>
                                    <h4 className="text-xl md:text-2xl font-bold ml-2 text-success">Whatsapp</h4>
                                </div>
                                <a href='https://wa.me/+8801303741747' target='blank' className='text-white'>+8801303741747</a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 md:w-3/5 w-full mx-5">
                        <motion.h1
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                            className='text-5xl text-center font-bold text-white'>Get In Touch</motion.h1>
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
                            <a href="mailto:nabiursiddique01@gmail.com" className='btn btn-outline btn-success'>Say Hello <BsFillSendFill /></a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;