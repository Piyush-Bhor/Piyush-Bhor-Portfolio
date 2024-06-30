import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMediumM, faMastodon } from '@fortawesome/free-brands-svg-icons';
import '../SocialMediaLinks.css'; // Ensure the correct path to your CSS file

const socialMediaData = [
    {
        href: "https://github.com/Piyush-Bhor",
        icon: faGithub,
        alt: "GitHub"
    },
    {
        href: "https://www.linkedin.com/in/piyush-b-bb7394265/",
        icon: faLinkedin,
        alt: "LinkedIn"
    },
    {
        href: "https://medium.com/@piyushbhor22",
        icon: faMediumM,
        alt: "Medium"
    },
    {
        href: "https://infosec.exchange/@The_Kernel_Panic",
        icon: faMastodon,
        alt: "Mastodon"
    }
];

const SocialMediaLinks = () => {
    return (
        <div className="social-media">
            <div className="social-links">
                {socialMediaData.map((media, index) => (
                    <a key={index} href={media.href} target="_blank" rel="noopener noreferrer" aria-label={media.alt}>
                        <FontAwesomeIcon icon={media.icon} size="1x" />
                    </a>
                ))}
            </div>
            <div className="copyright">
                &copy; 2024 Piyush Bhor. All rights reserved.
            </div>
        </div>
    );
}

export default SocialMediaLinks;
