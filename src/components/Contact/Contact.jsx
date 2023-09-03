import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='lg:mx-5 py-10'>
            <div className='hero mb-5'>
                <div className='hero-content justify-start'>
                    <h2 className='text-4xl text-success font-semibold '>Contact Me</h2>
                </div>
                <span className='w-60 h-[.5px] bg-slate-100 mt-11'></span>
            </div>

            <div className="flex justify-center">
                <div className="lg:w-1/2 md:w-3/5 w-full mx-5">
                    <div className="card w-full shadow-2xl bg-slate-800">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea placeholder="Your Message" class="textarea textarea-bordered textarea-md w-full" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;