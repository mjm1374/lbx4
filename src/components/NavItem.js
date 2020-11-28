import React, { Component } from 'react'
import './NavItem.css'
import PropTypes from 'prop-types'

export class NavItem extends Component {
    
    getStyle = () => {
        return {
            textDecoration:  this.props.button.active ?  'line-through' :  'none'
        }
    }

    render() {
        const { id, name, active } = this.props.button;
        return (
            <div className='hex' style={this.getStyle()} onClick={this.props.loadSection.bind(this, id)}>{name}</div>
        )
    }
}

// PropTypes - best practice to define
NavItem.propTypes = {
    button: PropTypes.object.isRequired
}

export default NavItem
