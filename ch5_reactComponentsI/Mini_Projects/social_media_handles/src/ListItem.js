import React from 'react';

class Listitems extends React.Component{
    render(){
        const {image, name, color, href} = this.props.allData;
        return (
            <div className="handle" style={{ backgroundColor: color }}>
                    <img src={image} alt="social-icon" />
                <a href={href}> {name} </a>
            </div>
        )
    }
}
export default Listitems;