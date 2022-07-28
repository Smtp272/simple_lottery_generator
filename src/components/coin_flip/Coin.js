import React, { Component } from "react";
import './CoinFlip.css'

class Coin extends Component {
    render() {
        return (
            <div>
                {this.props.isHeads === null ?
                    <div className="CoinFlip-coin">Play!</div>
                    :
                    this.props.isHeads?
                    <div className="CoinFlip-coin heads">Heads!!</div>
                    :
                    <div className="CoinFlip-coin tails">Tails!!</div>
                }
            </div>

        )
    }
}

export default Coin