import React, { Component } from 'react';
import NavItem from './NavItem'

class Nav extends Component {

    render() {
 
        return  this.props.nav.map((button) => (
            <NavItem button={button} />
        ))
    }
}


export default Nav