import React from 'react';
import texts from './texts.json'

const Welcome = ({name}) => <div id='welcome'>{`${texts.welcomeTitle} ${name} !`}</div>

export {
    Welcome
};
