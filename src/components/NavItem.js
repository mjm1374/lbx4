import React, { Component } from 'react'
import './NavItem.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class NavItem extends Component {
    
    getStyle = () => {
        return {
            textDecoration:  this.props.button.active ?  'line-through' :  'none'
        }
    }

    render() {
        const { id, name, active, link } = this.props.button;
        return (
            <Link to={link}> <div className='hex' style={this.getStyle()} onClick={this.props.loadSection.bind(this, id)}>{name}</div></Link>
        )
    }
}

// PropTypes - best practice to define
NavItem.propTypes = {
    button: PropTypes.object.isRequired
}

export default NavItem
