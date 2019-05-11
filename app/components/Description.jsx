import React, { Component } from "react";
import { connect } from "react-redux";
import { expandDesciption, collapseDescription } from "../actions/settings.jsx";

class Description extends Component {
   render() {
      return (
         <div>
            {this.props.descriptionExpanded ? (
               <div>
                  <h2>Rules of game "Evens or odds"</h2>
                  <p>
                     In this game your goal is to guess if next random card will
                     be even or odd.
                  </p>
                  <button onClick={this.props.collapseDescription}>
                     Hide rules
                  </button>
               </div>
            ) : (
               <div>
                  <button onClick={this.props.expandDesciption}>
                     Rules of this game
                  </button>
               </div>
            )}
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      descriptionExpanded: state.settings.descriptionExpanded,
   };
};

const componentConnector = connect(
   mapStateToProps,
   { expandDesciption, collapseDescription },
);
export default componentConnector(Description);
