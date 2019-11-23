import React from 'react';
import './App.css';
import QuoteSearcher from './component/QuoteSearcher'
import Title from './component/Title'
// import Quote from './component/Quote'

function App() {
  return (
    <div className="App">
      <main>
        <Title content='Quotes'/>
      </main>
      <QuoteSearcher />
      
    </div>
  );
}

export default App;
