import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'white',
      showColors: false,
    };
  }

  pickColors = () => {
    this.setState({
      showColors: true,
    });
  };

  selectColor = (color) => {
    this.setState({
      backgroundColor: color,
      showColors: false,
    });
  };

  render() {
    const colors = ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'pink', 'brown', 'teal', 'lavender', 'cyan', 'gray', 'maroon', 'indigo', 'turquoise', 'coral', 'olive', 'peach','magenta', 'salmon', 'beige', 'silver', 'gold'];

    return (
      <div className="App" style={{ backgroundColor: this.state.backgroundColor }}>
        <button className="pick-button" onClick={this.pickColors}>
          Pick a colour
        </button>
        {this.state.showColors && (
          <div className="color-row">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
