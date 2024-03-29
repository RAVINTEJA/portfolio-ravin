import Link from "next/link";
import Logo from "./Logo.js";
import { useRouter } from "next/router.js";
import { useState } from "react";
import {
    GithubIcon,
    LinkedInIcon,
    SunIcon,
    MoonIcon,
} from "./Icons.js";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher.js";
// React Navigation bar component using Tailwind CSS

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
       ${router.asPath === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
        toggle();
    };

    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
     ${router.asPath === href ? "w-full" : "w-0"}`}
            >
                &nbsp;
            </span>
        </button>
    );
};

const Navbar = () => {
    const [theme, setTheme] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full px-32 lg:px-16 md:px-8 xs:px-8 py-8 relative font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light ">
            {/* Create Hamburger button  */}
            <button
                className=" flex-col justify-center items-center hidden lg:flex"
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm   ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>

                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5   ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink
                        href="/projects"
                        title="Projects"
                        className="ml-4"
                    />
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href="https://github.com/RAVINTEJA"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/ravin-teja-chilukamari-8510bb1b7/"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="ml-3 flex items-center justify-center rounded-full p-1  bg-light dark:bg-dark"
                    >
                        {theme === "dark" ? (
                            <SunIcon
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    )
                                }
                                className="w-6 ml-3"
                            />
                        ) : (
                            <MoonIcon
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    )
                                }
                                className="w-6 ml-3"
                            />
                        )}
                    </button>
                </nav>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0,x:"-50%",y:"-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 min-w-[70vw] flex flex-col justify-between items-center fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    <nav className="flex items-center flex-col justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            className="my-1"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            className="my-1"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projects"
                            className="my-1"
                            toggle={handleClick}
                        />
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        <motion.a
                            href="https://github.com/RAVINTEJA"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-2 bg-white dark:bg-dark rounded-full "
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/ravin-teja-chilukamari-8510bb1b7/"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3 sm:mx-2"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="ml-3 sm:ml-2 flex items-center justify-center rounded-full p-1  bg-light dark:bg-dark"
                        >
                            {theme === "dark" ? (
                                <SunIcon
                                    onClick={() =>
                                        setTheme(
                                            theme === "dark" ? "light" : "dark"
                                        )
                                    }
                                    className="w-6"
                                />
                            ) : (
                                <MoonIcon
                                    onClick={() =>
                                        setTheme(
                                            theme === "dark" ? "light" : "dark"
                                        )
                                    }
                                    className="w-6"
                                />
                            )}
                        </button>
                    </nav>
                </motion.div>
            )}
            <div className="absolute left-[50%] top-3 lg:top-2 md:top-1 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
