import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, href, onClick, children, px, white }) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`; // ? means if statement is true AND : means else statement is false find meaning of || 

    const spanClasses = "relative z-10";
    // renderbutton() use when we use this button as button 
    const renderbutton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
        </a>
    );

    return href
    ? renderLink()
    : renderbutton();

}

export default Button