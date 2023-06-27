import Link from "next/link";
import Logo from "./Logo.js";
import { useRouter } from "next/router.js";
import {
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
  LinkArrow,
  DribbbleIcon,
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

const Navbar = () => {

  const [theme, setTheme] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8  font-medium flex items-center bg-light dark:bg-dark dark:text-light justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
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
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <DribbbleIcon />
        </motion.a>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-3 flex items-center justify-center rounded-full p-1  bg-light dark:bg-dark"
        >
          {theme === "dark" ? (
            <SunIcon
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-6 ml-3"
            />
          ) : (
            <MoonIcon
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-6 ml-3"
            />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;