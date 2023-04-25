import React from 'react'

const Link = ({ href, children }) => {
    const onClick = (event) => {
        if (event.metakey || event.ctrlkey) {
            return;
        } else {
            event.preventDefault();
            window.history.pushState({}, '', href);
            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
        }
    }
    return (
        <a href={href} onClick={onClick}>{children}</a>
    )
}

export default Link