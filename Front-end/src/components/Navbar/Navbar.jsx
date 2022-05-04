import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';
const scaleVariants = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        }
    },
    hover: { scale: 1.2, transition: { duration: 0.2, type: "spring", stiffness: "400" } }
}
const Navbar = () => {
    // const [toggle, setToggle] = useState(false);
    const [toggle, setToggle] = useCycle(false, true);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <motion.li className="app__flex p-text" key={`link-${item}`} whileHover={scaleVariants.hover} variants={scaleVariants} initial="initial" animate="animate" >
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </motion.li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle()} />
                <AnimatePresence>
                    {toggle &&
                        <>
                            <motion.div
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, type: "spring" }}
                                exit={{ x: [0, 300], opacity: [1, 0], transition: { duration: 0.5, type: "spring" } }}
                            >
                                <HiX onClick={() => setToggle(false)} />
                                <ul>
                                    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                        <li key={item}>
                                            <a href={`#${item}`} onClick={() => setToggle(false)}>
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </>
                    }
                </AnimatePresence>
            </div>
        </nav >
    );
};

export default Navbar;