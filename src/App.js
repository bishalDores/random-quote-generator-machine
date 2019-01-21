import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes:["Learn to enjoy every minute of your life. Be happy now. Don't wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it's at work or with your family. Every minute should be enjoyed and savored."],
            author:["Earl Nightingle"]
        };
        this.generateQuote = this.generateQuote.bind(this);
    }
    generateQuote(e){
      var quoteArr = ["Only I can change my life, No one can do it for me.","The greatest gift of life is friendship, and I have received it.",
          "Lighten up, just enjoy life, smile more, laugh more, and don't get so worked up about things.","Peace is the beauty of life. It is sunshine. It is the smile of a child, the love of a mother, the joy of a father, the togetherness of a family. It is the advancement of man, the victory of a just cause, the triumph of truth."
          ,"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."];
      var quoteAuthor = ["Carol Burnett","Hubert H. Humprey","Kenneth Branagh","Menachim Begin","Maya Angelou"];
      const randomNum = Math.floor(Math.random()*quoteArr.length);
      e.preventDefault();
      console.log(randomNum);
      this.setState({
          quotes: quoteArr[randomNum],
          author:quoteAuthor[randomNum]
      })
    }
    render() {
        return (
            <div className="wrapper" id="quote-box">
                <div className="quote-wrapper">
                    <div className="main">
                        <div className="main-contents">
                            <div className="quote-left">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <div className="text" id="text">
                                <h4>{this.state.quotes}</h4>
                            </div>
                        </div>
                        <div className="author" id="author">
                            <h5>{this.state.author}</h5>
                        </div>
                        <div className="content-buttons">
                            <button onClick={this.generateQuote} className="button" id="new-quote">New Quote</button>
                            <a href="twitter.com/intent/tweet" className="button" target="_blank"  rel="noopener noreferrer" id="tweet-quote">Tweet Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
