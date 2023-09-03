import React from "react";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                as="li"
                variant="small"
                color="blue-gray"
                className="font-normal rounded btn btn-sm btn-ghost hover:btn-success"
            >
                <a href="#Home" className="flex items-center ">
                    Home
                </a>
            </motion.p>
            <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                as="li"
                variant="small"
                color="blue-gray"
                className="font-normal rounded btn btn-sm btn-ghost hover:btn-success"
            >
                <a href="#about" className="flex items-center">
                    About
                </a>
            </motion.p>
            <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                as="li"
                variant="small"
                color="blue-gray"
                className="font-normal rounded btn btn-sm btn-ghost hover:btn-success"
            >
                <a href="#skills" className="flex items-center">
                    Skills
                </a>
            </motion.p>
            <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                as="li"
                variant="small"
                color="blue-gray"
                className="font-normal rounded btn btn-sm btn-ghost hover:btn-success"
            >
                <a href="#portfolio" className="flex items-center">
                    Portfolio
                </a>
            </motion.p>
            <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                as="li"
                variant="small"
                color="blue-gray"
                className="font-normal rounded btn btn-sm btn-ghost hover:btn-success"
            >
                <a href="#contact" className="flex items-center">
                    Contact
                </a>
            </motion.p>
            <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                as="li"
                variant="small"
                color="blue-gray"
                className="font-normal rounded btn btn-sm btn-outline btn-success"
            >
                <a href="#contact" className="flex items-center">
                    Resume
                </a>
            </motion.p>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <motion.p
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.07 }}
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
                >
                    Nabiur Siddique<span className="text-green-400 text-2xl">.</span>
                </motion.p>
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                </div>
            </MobileNav>
        </Navbar>
    );
}