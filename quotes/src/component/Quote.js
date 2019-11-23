import React, { Component } from 'react';

class Quote extends Component {

    render() {
        return (
        <div>
            <p>{this.props.quoteText}</p>
            <p>By: {this.props.quoteAuthor}
            <button onClick={this.liked}>:)</button>
            <button onClick={this.dislike}>:(</button>
            </p>
        </div>
            )}  
        }

export default Quote;