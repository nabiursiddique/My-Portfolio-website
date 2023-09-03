import React from 'react';

const Skills = () => {
    const frontend = ['ReactJS', 'NextJS', 'Javascript', 'Tailwind CSS', 'Bootstrap'];
    const backend = ['ExpressJS', 'MongoDB', 'NodeJS', 'JWT', 'Rest API']
    const tools = ['Firebase', 'Git & Github', 'VS Code', 'Figma', 'Adobe Photoshop']
    return (
        <section id='skills' className='lg:mx-5 py-10'>
            <div className='hero mb-5'>
                <div className='hero-content justify-start'>
                    <h2 className='text-4xl text-success font-semibold '>Skills</h2>
                </div>
                <span className='w-60 h-[.5px] bg-slate-100 mt-11'></span>
            </div>

            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3'>

                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-success">Frontend</h2>
                            <span className='w-48 h-[.5px] bg-success'></span>
                            {
                                frontend.map(item => <p className='font-mono py-3'>{item}</p>)
                            }

                        </div>
                    </div>

                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-success">Backend</h2>
                            <span className='w-48 h-[.5px] bg-success'></span>
                            {
                                backend.map(item => <p className='font-mono py-3'>{item}</p>)
                            }
                        </div>
                    </div>

                    <div className="card bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-success">Tools</h2>
                            <span className='w-48 h-[.5px] bg-success'></span>
                            {
                                tools.map(item => <p className='font-mono py-3'>{item}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;