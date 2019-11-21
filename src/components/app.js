import React, { Component } from 'react';
import Incrementor from "./increment"
import Toggle from "./toggle";
import Alice from "./alice";
import TextAlign from "./textAlign";
import ColorPicker from "./colorPicker";
import ClockApp from "./clock.js";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React Solo Project</h1>
        <h2>Build a React project with the following components:</h2>
        <div className="instruction">
          <div className="increment">
            <p>
              1) A number with two buttons. The first one will increment the number, and the second one will decrement the number.
            </p>
            <Incrementor />
          </div>
          <div className="toggle">
            <p>
              2)
            </p>
            <p>
              A message on the screen with a toggle button. Clicking the button will either hide or show the message.
            </p>
            <Toggle />
          </div>
          <div className="alice">
            <Alice />
            <p>
              3) A message on the screen with two buttons. Clicking one button will make the text size bigger, and the other button will make it smaller.
            </p>

          </div>
          <div className="textAlign">
            <p>
              4) A message on the screen with three buttons, left middle and right. clicking any of the buttons will align the text on the screen with that button.
            </p>
            <TextAlign />
          </div>
          <div className="colorPicker">
            <p>
              5) A message with an input box. Typing a color into the box and pressing a submit button will change the text to that color.
            </p>
            <ColorPicker />
          </div>
          <div className="clock">
            <p>
              6) A clock on the screen that updates the time every second.
            </p>
            <ClockApp />
          </div>
        </div>


      </div>
    );
  }
}
