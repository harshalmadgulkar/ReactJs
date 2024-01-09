import React from 'react';
import {skillsList} from './index.js';

class Skills extends React.Component {
    render(){
        return (
            <div className="skills">
                {skillsList.map((skill)=>(
                    <button> {skill} </button>
                ))}
            </div>
        )
    }
}

export default Skills;