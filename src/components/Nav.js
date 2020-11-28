import React, { Component } from 'react';
import NavItem from './NavItem'
import PropTypes from 'prop-types'

class Nav extends Component {

    render() {
 
        return  this.props.nav.map((button) => (
            <NavItem key={button.id} button={button} />
        ))
    }
}

// PropTypes - best practice to define
Nav.propTypes = {
    nav: PropTypes.array.isRequired
}


export default Nav