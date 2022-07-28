import React, { Component } from "react";
import './Box.css'
import {choice} from './helpers'

class Box extends Component {
    static defaultProps = {
        boxColour: "red"
    }
    constructor(props) {
        super(props)
        this.state = {
            boxColour: choice(this.props.colours)
        }
    }
    changeBoxColour = () => {
        let newColour
        do {
            newColour = choice(this.props.colours)
        } while (newColour === this.state.boxColour && this.props.colours.length > 1)
        this.setState({ boxColour: newColour })
    }

    render() {
        return (
            <div className="Box" onClick={this.changeBoxColour} style={{ backgroundColor: `${this.state.boxColour}` }}>
            </div>
        )
    }
}

export default Box

