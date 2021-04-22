import React from 'react';
import Controls from '../components/Controls';

const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
            <Controls/>
        </div>
    );
}

export default About;
