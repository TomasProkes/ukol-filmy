import React from "react";

import './style.css';

const Actor = ({name, as}) => (
    <div className="actor">
        <span className="actor-name">{name}</span> as <span className="character-name">{as}</span>
    </div>
);

export default Actor;