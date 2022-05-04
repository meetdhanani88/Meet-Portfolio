import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },

    },
    hover: { scale: 1.1, transition: { duration: 0.2, type: "spring", stiffness: "400" } }
};

const Header = () => (
    <div className="app__header app__flex">
        <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__header-info"
        >
            <div className="app__header-badge">
                <motion.div className="badge-cmp app__flex"
                    whileHover={scaleVariants.hover}>
                    <span>👋</span>
                    <div style={{ marginLeft: 20 }}>
                        <p className="p-text">Hello, I am</p>
                        <h1 className="head-text">Meet</h1>
                    </div>
                </motion.div>

                <motion.div className="tag-cmp app__flex"
                    whileHover={scaleVariants.hover}

                >
                    <p className="p-text">Front-End Developer</p>
                    <p className="p-text">React-Js Developer</p>
                </motion.div>
            </div>
        </motion.div>

        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__header-img"
        >



            <motion.img src={images.profile} alt="profile_bg" whileHover={scaleVariants.hover}
                whileInView={{ y: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
            />

            {/* <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                src={images.circle}
                alt="profile_circle"
                className="overlay_circle"
            /> */}


        </motion.div>

        <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
        >
            {[images.react, images.redux, images.javascript].map((circle, index) => (
                <motion.div
                    className="circle-cmp app__flex" key={`circle-${index}`}
                    whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "spring", stiffness: "400" } }} >

                    <img src={circle} alt="profile_bg" />

                </motion.div>
            ))}
        </motion.div>
    </div >
);

export default AppWrap(Header, 'home');