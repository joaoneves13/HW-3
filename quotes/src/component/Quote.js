import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
        <div>
            <p>{this.props.quoteText}</p>
            <p>By: {this.props.quoteAuthor}</p>
        </div>
            )}  
        }

export default Quote;