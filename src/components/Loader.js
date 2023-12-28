import React from 'react';

// GIF
import spinner from '../gif/spinner.gif';

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='Loading'/>
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;