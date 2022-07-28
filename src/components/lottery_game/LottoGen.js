import React, { Component } from "react";
import LottoBall from "./LottoBall";
import './LottoGen.css'

class LottoGen extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum:100,
    }
    constructor(props) {
        super(props)
        this.state = {
            lottoNumbers: Array.from({length:this.props.numBalls}),
        }
    }

    generateNumbers = () =>{
        this.setState(curState => (
            {lottoNumbers: curState.lottoNumbers.map(
                n => Math.ceil(Math.random() * this.props.maxNum)
                )}
        ))
    }

    render() {
        return (
            <section className="LottoGen">
                <h1>{this.props.title}</h1>
                <div className="LottoGen-Items">
                    {this.state.lottoNumbers.map(item => (<LottoBall number={item} />))}
                </div>
                <button onClick={this.generateNumbers}>Generate</button>
            </section>
        )
    }
}

export default LottoGen