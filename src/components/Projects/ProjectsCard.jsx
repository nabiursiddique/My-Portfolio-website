import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectsCard = ({ item }) => {
    const { id, name, image, description, tecnologies, liveSite, clientSide, serverSide } = item;
    return (
        <div className="hero mb-4">
            <div className={`hero-content flex-col ${id % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} `}>
                <img src={image} className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
                <div>
                    <p className='font-mono text-teal-300 mb-2'>0{id}.Featured Project</p>
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="py-4">{description}</p>
                    <h3 className='font-mono'>Technology Used :-</h3>
                    <div className='w-40 h-[.5px] bg-teal-100'></div>
                    {
                        tecnologies.map((technology, i) => (
                            <div key={i} className='mt-1 flex items-center font-mono'>
                                <AiFillCaretRight className='text-teal-300' />{technology}
                            </div>
                        ))
                    }
                    <a
                        href={clientSide}
                        target='blank'
                        className="btn btn-sm btn-outline btn-success mt-3 mr-2">
                        Client <BsBoxArrowUpRight />
                    </a>
                    {
                        serverSide && (
                            <a
                                href={serverSide}
                                target='blank'
                                className="btn btn-sm btn-outline btn-success mt-3 mx-2">
                                Server <BsBoxArrowUpRight />
                            </a>
                        )
                    }
                    <a
                        href={liveSite}
                        target='blank'
                        className="btn btn-sm btn-outline btn-success mt-3 mx-2">
                        Live <BsBoxArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;