import React, { Component } from "react";
import './ColourBoxes.css'
import Box from "./Box";

class ColourBoxes extends Component {
    static defaultProps = {
        numBoxes: 20,
        colours: [
            'black',
            'silver',
            'gray',
            'white',
            'maroon',
            'red',
            'purple',
            'fuchsia',
            'green',
            'lime',
            'olive',
            'yellow',
            'navy',
            'blue',
            'teal',
            'aqua'
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            boxes: Array.from({ length: this.props.numBoxes })
        }
    }
    render() {
        return (
            <div className="ColourBoxes" >
                <div className="ColourBoxes-main">
                    {this.state.boxes.map((e) => <Box colours={this.props.colours} />)}
                </div>
            </div>

        )
    }
}

export default ColourBoxes

