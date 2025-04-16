// @flow
import * as React from 'react';
import Link from './link';

function normalizeLink(link) {
    // Add https:// to the links if they don't have it
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
        return `https://${link}`;
    }
    return link;
}

export default function DescriptionWithLinks({ description }) {
    const links = description.match(/(https?:\/\/[^\s]+|www\.[^\s]+)/g) || [];
    if (!links.length) {
        return <div>{description}</div>;
    }

    const elements = description.split(/(https?:\/\/[^\s]+|www\.[^\s]+)/g).map((part, index) => 
        part && part.trim().length > 0 && (links.includes(part) 
            ? <Link key={index} url={normalizeLink(part)}>{part}</Link> 
            : <span key={index}>{part}</span>)
    );

    return <div>{elements}</div>;
}
