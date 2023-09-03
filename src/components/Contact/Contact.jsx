import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id='contact' className='lg:mx-5 py-10'>
            <div className='hero mb-5'>
                <div className='hero-content justify-start'>
                    <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-4xl text-success font-semibold '>Contact Me</motion.h2>
                </div>
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='w-60 h-[.5px] bg-slate-100 mt-11'></motion.span>
            </div>

            <div className="flex justify-center">
                <div className="lg:w-1/2 md:w-3/5 w-full mx-5">
                    <div className="card w-full shadow-2xl bg-slate-800">
                        <div className="card-body">
                            <div className="form-control">
                                <motion.label
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="label">
                                    <span className="label-text">Your Name</span>
                                </motion.label>
                                <motion.input
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <motion.label
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="label">
                                    <span className="label-text">Email</span>
                                </motion.label>
                                <motion.input
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <motion.label
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    viewport={{ once: true }}
                                    className="label">
                                    <span className="label-text">Message</span>
                                </motion.label>
                                <motion.textarea
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    viewport={{ once: true }}
                                    placeholder="Your Message" class="textarea textarea-bordered textarea-md w-full" ></motion.textarea>
                            </div>
                            <div className="form-control mt-6">
                                <motion.button
                                    initial={{ y: -10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.9 }}
                                    viewport={{ once: true }}
                                    className="btn btn-success hover:bg-teal-300">Send</motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;