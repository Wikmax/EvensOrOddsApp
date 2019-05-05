import React,{Component} from 'react';
import {connect} from 'react-redux';
import { startGame, cancelGame, expandDesciption, collapseDescription} from '../actions/settings.jsx';
class Main extends Component{
    startGame = () =>{
        this.props.dispatch(startGame());
    };
    cancelGame = () =>{
        this.props.dispatch(cancelGame());

    }
    expandDesciption = () =>{
        this.props.dispatch(expandDesciption());
    }
    collapseDescription = () =>{
        this.props.dispatch(collapseDescription())
    }
    render(){
        console.log("this",this);

        return(
            <div>
                <h2> ♤ ♡ Evens or odds game ♢ ♧</h2>
                <div>
                    {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game is on!</h3>
                            <br/>
                            <button onClick={this.cancelGame}>Cancel Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits!</h3>
                            <br/>
                            <button onClick={this.startGame}>Start Game</button>
                        </div>
                    )
                }
                </div>
                <div>
                    {
                        this.props.descriptionExpanded ? (
                            <div>
                                <h2>Rules of game "Evens or odds"</h2>
                               <p>
                                   In this game your goal is to guess if next random card will be
                                   even or odd.
                               </p>
                                <button onClick={this.collapseDescription}>Hide rules</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={this.expandDesciption} >Rules of this game </button>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log('state',state);
    return {
        gameStarted: state.gameStarted,
        descriptionExpanded: state.descriptionExpanded
    };
}

const componentConnector = connect(mapStateToProps);
export default componentConnector(Main);