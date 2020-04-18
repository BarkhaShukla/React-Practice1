import React, { Component } from 'react';
import './About.css';
import Info from './Info';
import Featured from './Featured';
export default class About extends Component {
    render() {
        return (
            <div className="About">
                <Info />
                <Featured />

            </div>
        )
    }
}
