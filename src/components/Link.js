import React from 'react'

const Link = ({ href, children }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <a onClick={onClick}>{children}</a>
    )
}

export default Link