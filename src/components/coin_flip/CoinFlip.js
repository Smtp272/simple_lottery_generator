import React, { Component } from "react";
import './CoinFlip.css'
import Coin from "./Coin";

class CoinFlip extends Component {
    static defaultProps = {
        message:"Let's flip a coin",
    }
    constructor(props){
        super(props)
        this.state = {
            numFlips:0,
            numHeads:0,
            isHeads:null,
        }
    }
    flipCoin = () =>{
        if(Math.floor(Math.random()*2)===0){this.setState(this.addHeads)}
        else{this.setState({isHeads:false})}
        this.setState(this.addFlips)
    }
    addFlips(curState){
        return {numFlips : curState.numFlips + 1}
    }
    addHeads(curState){
        return {numHeads : curState.numHeads + 1, isHeads:true}
    }
    render() {
        return (
            <section className="CoinFlip">
                <h1>{this.props.message}</h1>
                <Coin isHeads={this.state.isHeads}/>                
                <button onClick={this.flipCoin}>Flip Coin</button>
                <p>Out of {this.state.numFlips} coin flips there've been {this.state.numHeads} Heads and {this.state.numFlips-this.state.numHeads} Tails </p>{this.props.number}
            </section>
        )
    }
}

export default CoinFlip