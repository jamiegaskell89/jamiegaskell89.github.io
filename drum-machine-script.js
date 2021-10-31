const drumKit = [
{
  heater1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  keycode: 81 },

{
  heater2: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  keycode: 87 },

{
  heater3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  keycode: 69 },

{
  heater4: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  keycode: 65 },

{
  clap: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  keycode: 83 },

{
  openHH: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  keycode: 68 },

{
  kicknHat: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  keycode: 90 },

{
  kick: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  keycode: 88 },

{
  closedHH: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  keycode: 67 }];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Drum Kit" };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (document.getElementById("keyboard-control").innerText == "Keyboard control on") {
      if (e.keyCode === 81) {
        document.getElementById("heater_1").click();
      } else if (e.keyCode === 87) {
        document.getElementById("heater_2").click();
      } else if (e.keyCode === 69) {
        document.getElementById("heater_3").click();
      } else if (e.keyCode === 65) {
        document.getElementById("heater_4").click();
      } else if (e.keyCode === 83) {
        document.getElementById("clap").click();
      } else if (e.keyCode === 68) {
        document.getElementById("open_hh").click();
      } else if (e.keyCode === 90) {
        document.getElementById("kick_n_hat").click();
      } else if (e.keyCode === 88) {
        document.getElementById("kick").click();
      } else if (e.keyCode === 67) {
        document.getElementById("closed_hh").click();
      }
    }
  }

  handleChange(event) {
    this.setState({
      display: event.target.value });

    if (event.target.value == "Heater 1") {
      Q.play();
    } else if (event.target.value == "Heater 2") {
      W.play();
    } else if (event.target.value == "Heater 3") {
      E.play();
    } else if (event.target.value == "Heater 4") {
      A.play();
    } else if (event.target.value == "Clap") {
      S.play();
    } else if (event.target.value == "Open HH") {
      D.play();
    } else if (event.target.value == "Kick 'n' Hat") {
      Z.play();
    } else if (event.target.value == "Kick") {
      X.play();
    } else {
      C.play();
    }
  }

  toggle() {
    var display = document.getElementById("keyboard-control");
    if (display.innerText == "Keyboard control on") {
      display.innerText = "Keyboard control off";
    } else if (display.innerText == "Keyboard control off") {
      display.innerText = "Keyboard control on";
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("body", null, /*#__PURE__*/
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h1", null, "Welcome to my Drum Machine App"), /*#__PURE__*/
      React.createElement("h2", null, "Instructions:"), /*#__PURE__*/
      React.createElement("p", null, "Click on the buttons below, or press the relevant key on your keyboard to make a noise."), /*#__PURE__*/
      React.createElement("p", null, "Keyboard controls can be turned off by using the keyboard control button."), /*#__PURE__*/
      React.createElement("h3", { id: "display" }, this.state.display), /*#__PURE__*/

      React.createElement("div", { id: "drum-buttons" }, /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Heater 1", id: "heater_1", onClick: this.handleChange }, "Q", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "Q", src: drumKit[0].heater1 })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Heater 2", id: "heater_2", onClick: this.handleChange }, "W", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "W", src: drumKit[1].heater2 })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Heater 3", id: "heater_3", onClick: this.handleChange }, "E", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "E", src: drumKit[2].heater3 })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Heater 4", id: "heater_4", onClick: this.handleChange }, "A", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "A", src: drumKit[3].heater4 })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Clap", id: "clap", onClick: this.handleChange }, "S", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "S", src: drumKit[4].clap })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Open HH", id: "open_hh", onClick: this.handleChange }, "D", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "D", src: drumKit[5].openHH })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Kick 'n' Hat", id: "kick_n_hat", onClick: this.handleChange }, "Z", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "Z", src: drumKit[6].kicknHat })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Kick", id: "kick", onClick: this.handleChange }, "X", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "X", src: drumKit[7].kick })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", value: "Closed HH", id: "closed_hh", onClick: this.handleChange }, "C", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "C", src: drumKit[8].closedHH })), /*#__PURE__*/

      React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "keyboard-control", onClick: this.toggle }, "Keyboard control on")))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));