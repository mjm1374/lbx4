import React, { Component } from 'react'
import './NavItem.css'

export class NavItem extends Component {
    render() {
        return (
            <div class='hex'>{this.props.button.name}</div>
        )
    }
}

export default NavItem
