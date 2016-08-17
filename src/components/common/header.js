import React, {Component} from 'react';
import {Link, IndexLink } from 'react-router';

class header extends Component {
    render() {
        return (
            <nav>
            <IndexLink to="/">Home</IndexLink>
            {" | "}
            <Link to="/about">About</Link>
            </nav>
        );
    }
}

export default header;