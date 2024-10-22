import { motion } from "framer-motion";

const Qualification = () => {
    return (
        <section id='qualification' className='lg:mx-5 mx-3 pt-10'>
            <div className='hero mb-7'>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='hero-content justify-start'>
                    <h2 className='text-4xl text-success font-semibold '>Educational Qualification</h2>
                </motion.div>
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='w-96 h-[.5px] bg-slate-100 mt-11'>
                </motion.span>
            </div>

            {/* Time line */}
            <div className="my-4">
                <div className="flex justify-center">
                    <ol className="relative border-s border-white-300">
                        <li
                            className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white"></div>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}>
                                <time className="mb-1 text-sm font-normal leading-none text-success">Jan 2020 - Dec 2023</time>
                                <h3 className="text-lg font-semibold text-white">BACHELOR OF TECHNOLOGIES in COMPUTER SCIENCE AND ENGINEERING</h3>
                                <p className="font-normal text-gray-300">RIMT University, Punjab, India</p>
                                <p>CGPA: 8.04 out of 10.00</p>
                            </motion.div>
                        </li>

                        <li
                            className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white"></div>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}>
                                <time className="mb-1 text-sm font-normal leading-none text-success">2018-2019</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">HIGHER SECONDARY CERTIFICATE</h3>
                                <p className="font-normal text-gray-300">Naogaon Govt College, Naogaon, Bangladesh</p>
                                <p>GPA: 4.25 out of 5.00</p>
                            </motion.div>
                        </li>

                        <li
                            className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white"></div>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}>
                                <time className="mb-1 text-sm font-normal leading-none text-success">2016-2017</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SECONDARY SCHOOL CERTIFICATE</h3>
                                <p className="font-normal text-gray-300">Naogaon KD Govt High School, Naogaon, Bangladesh</p>
                                <p>GPA: 5.00 out of 5.00</p>
                            </motion.div>
                        </li>
                    </ol>
                </div>
            </div>


        </section >
    );
};

export default Qualification;