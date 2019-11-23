import React, { Component } from 'react';
import Quote from './Quote'

class QuoteSearcher extends Component {
    state = {
        quotes: [],
        fetching: null 

      }

    componentDidMount() {
            fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
              .then(res => {return res.json()})
              .then(json => {
                this.setState({quotes: json.results, fetching: false})
              }); 
          }
      
    render() {
        
        if (this.state.fetching === null){
            return "Loading..."
          } else
         return (
            <div>
             {this.state.quotes.map(quotes => {
             return <div>
                 <Quote 
                    quoteText = {quotes.quoteText}
                    quoteAuthor = {quotes.quoteAuthor}
                    />
                </div>
             })}
             </div>
          );
        }
      }
export default QuoteSearcher;