import React from 'react';
import './link.css';

export const Link = (props) => {
    return <a className="link-style" 
                href={props.href} 
                title={props.title} 
                onClick={props.onClick}>{props.innerHtml}</a>
}