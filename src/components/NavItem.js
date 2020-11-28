import React, { Component } from 'react'
import './NavItem.css'
import PropTypes from 'prop-types'

export class NavItem extends Component {
    
    getStyle = () => {
        return {
            textDecoration:  this.props.button.active ?  'line-through' :  'none'
        }
    }

    loadSection = (name) => {
        console.log(this.props, this.props.button.name)
    }

    render() {
        return (
            <div className='hex' style={this.getStyle()} onClick={this.loadSection}>{this.props.button.name}</div>
        )
    }
}

// PropTypes - best practice to define
NavItem.propTypes = {
    button: PropTypes.object.isRequired
}

export default NavItem
