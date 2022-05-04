import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/meet-dhanani-ab0882212/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://github.com/meetdhanani88" target="_blank" rel='noreferrer'><FaGithub /></a>

        </div>
        <div>
            <a href="https://www.instagram.com/meetdhanani89" target="_blank" rel='noreferrer'><BsInstagram /></a>

        </div>
    </div>
);

export default SocialMedia;