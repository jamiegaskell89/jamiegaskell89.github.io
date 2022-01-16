class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      equals: 0,
      decimal: 0 };

    this.reset = this.reset.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
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
    if (document.getElementById("keyboard-toggle").innerText == "Keyboard control on") {
      if (e.keyCode === 48 || e.keyCode === 96) {
        document.getElementById("zero").click();
      } else if (e.keyCode === 49 || e.keyCode === 97) {
        document.getElementById("one").click();
      } else if (e.keyCode === 50 || e.keyCode === 98) {
        document.getElementById("two").click();
      } else if (e.keyCode === 51 || e.keyCode === 99) {
        document.getElementById("three").click();
      } else if (e.keyCode === 52 || e.keyCode === 100) {
        document.getElementById("four").click();
      } else if (e.keyCode === 53 || e.keyCode === 101) {
        document.getElementById("five").click();
      } else if (e.keyCode === 54 || e.keyCode === 102) {
        document.getElementById("six").click();
      } else if (e.keyCode === 55 || e.keyCode === 103) {
        document.getElementById("seven").click();
      } else if (e.keyCode === 56 || e.keyCode === 104) {
        document.getElementById("eight").click();
      } else if (e.keyCode === 57 || e.keyCode === 105) {
        document.getElementById("nine").click();
      } else if (e.keyCode === 190 || e.keyCode === 110) {
        document.getElementById("decimal").click();
      } else if (e.keyCode === 187 || e.keyCode === 61) {
        document.getElementById("equals").click();
      } else if (e.keyCode === 107) {
        document.getElementById("add").click();
      } else if (e.keyCode === 109) {
        document.getElementById("subtract").click();
      } else if (e.keyCode === 106) {
        document.getElementById("multiply").click();
      } else if (e.keyCode === 111) {
        document.getElementById("divide").click();
      } else if (e.keyCode === 8 || e.keyCode === 67) {
        document.getElementById("cancel").click();
      }
    }
  }

  reset() {
    this.setState({
      input: 0,
      equals: 0,
      decimal: 0 });

  }

  cancel() {
    if (!this.state.input == "0") {

      var char = this.state.input.substr(-1);
      var array = [];

      for (let i = this.state.input.length - 1; this.state.input[i] >= 0 || this.state.input[i] == "."; i--) {
        array.push(this.state.input[i]);
      };
      array = array.slice(1);

      if (this.state.input.length > 1) {
        this.setState({
          input: this.state.input.slice(0, -1) });

        if (array.includes(".") || array.length == 0) {
          this.setState({
            decimal: 1 });

        } else {
          this.setState({
            decimal: 0 });

        }
      } else if (this.state.input.length == 1) {
        this.setState({
          input: 0,
          equals: 0,
          decimal: 0 });

      }
    }
  }

  handleDivide(event) {
    if (this.state.input === 0) {
      this.setState({
        input: this.state.input });

    } else if (this.state.equals == 1) {
      this.setState({
        equals: 0,
        decimal: 0,
        input: this.state.input + event.target.value });

    } else if (this.state.input.endsWith("-")) {
      this.setState({
        input: this.state.input.slice(0, -2) + "/" });

    } else if (this.state.input.endsWith("+")) {
      this.setState({
        input: this.state.input.slice(0, -1) + "/" });

    } else if (this.state.input.endsWith("*")) {
      this.setState({
        input: this.state.input.slice(0, -1) + "/" });

    } else if (!this.state.input.endsWith("/")) {
      this.setState({
        decimal: 0,
        input: this.state.input + event.target.value });

    }
  }

  handleMultiply(event) {
    if (this.state.input === 0) {
      this.setState({
        input: this.state.input });

    } else if (this.state.equals == 1) {
      this.setState({
        equals: 0,
        decimal: 0,
        input: this.state.input + event.target.value });

    } else if (this.state.input.endsWith("-")) {
      this.setState({
        input: this.state.input.slice(0, -2) + "*" });

    } else if (this.state.input.endsWith("+")) {
      this.setState({
        input: this.state.input.slice(0, -1) + "*" });

    } else if (this.state.input.endsWith("/")) {
      this.setState({
        input: this.state.input.slice(0, -1) + "*" });

    } else if (!this.state.input.endsWith("*")) {
      this.setState({
        decimal: 0,
        input: this.state.input + event.target.value });

    }
  }

  handlePlus(event) {
    if (this.state.input === 0) {
      this.setState({
        input: this.state.input });

    } else if (this.state.equals == 1) {
      this.setState({
        equals: 0,
        decimal: 0,
        input: this.state.input + event.target.value });

    } else if (this.state.input.endsWith("-")) {
      this.setState({
        input: this.state.input.slice(0, -2) + "+" });

    } else if (this.state.input.endsWith("*")) {
      this.setState({
        input: this.state.input.slice(0, -1) + "+" });

    } else if (this.state.input.endsWith("/")) {
      this.setState({
        input: this.state.input.slice(0, -1) + "+" });

    } else if (!this.state.input.endsWith("+")) {
      this.setState({
        decimal: 0,
        input: this.state.input + event.target.value });

    }
  }

  handleSubtract(event) {
    if (this.state.input === 0) {
      this.setState({
        input: event.target.value });

    } else if (this.state.equals == 1) {
      this.setState({
        equals: 0,
        decimal: 0,
        input: this.state.input + event.target.value });

    } else if (!this.state.input.endsWith("-")) {
      this.setState({
        decimal: 0,
        input: this.state.input + event.target.value });

    }
  }

  handleDecimal(event) {

    if (this.state.input === 0) {
      this.setState({
        decimal: 1,
        input: this.state.input + event.target.value });

    } else if (!this.state.decimal == 1) {
      this.setState({
        decimal: 1,
        input: this.state.input + event.target.value });

    }
  }

  handleEquals() {
    this.setState({
      equals: 1,
      decimal: 1,
      input: eval(this.state.input) });

  }

  toggle() {
    var display = document.getElementById("keyboard-toggle");
    if (display.innerText == "Keyboard control on") {
      display.innerText = "Keyboard control off";
    } else if (display.innerText == "Keyboard control off") {
      display.innerText = "Keyboard control on";
    }
  }

  handleChange(event) {
    if (event.target.value == 0 && this.state.input == 0) {
      this.setState({
        input: this.state.input });

    } else if (this.state.input === 0) {
      this.setState({
        input: event.target.value });

    } else if (this.state.input === "0.") {
      this.setState({
        input: this.state.input + event.target.value });

    } else if (!this.state.input == 0 && this.state.input.length < 15) {
      this.setState({
        input: this.state.input + event.target.value });

    } else if (this.state.equals == 1) {
      this.setState({
        input: event.target.value,
        equals: 0 });

    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "app" }, /*#__PURE__*/

      React.createElement("h1", null, "JavaScript Calculator"), /*#__PURE__*/

      React.createElement("p", { id: "display" }, this.state.input), /*#__PURE__*/

      React.createElement("button", { id: "clear", type: "button", onClick: this.reset, "aria-label": "clear" }, "AC"), /*#__PURE__*/
      React.createElement("button", { id: "cancel", type: "button", onClick: this.cancel, "aria-label": "delete last input" }, "C"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "seven", type: "button", value: "7", onClick: this.handleChange }, "7"), /*#__PURE__*/
      React.createElement("button", { id: "eight", type: "button", value: "8", onClick: this.handleChange }, "8"), /*#__PURE__*/
      React.createElement("button", { id: "nine", type: "button", value: "9", onClick: this.handleChange }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "divide", type: "button", "aria-label": "divide", value: "/", onClick: this.handleDivide }, "\xF7"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "four", type: "button", value: "4", onClick: this.handleChange }, "4"), /*#__PURE__*/
      React.createElement("button", { id: "five", type: "button", value: "5", onClick: this.handleChange }, "5"), /*#__PURE__*/
      React.createElement("button", { id: "six", type: "button", value: "6", onClick: this.handleChange }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", type: "button", "aria-label": "multiply", value: "*", onClick: this.handleMultiply }, "\xD7"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "one", type: "button", value: "1", onClick: this.handleChange }, "1"), /*#__PURE__*/
      React.createElement("button", { id: "two", type: "button", value: "2", onClick: this.handleChange }, "2"), /*#__PURE__*/
      React.createElement("button", { id: "three", type: "button", value: "3", onClick: this.handleChange }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", type: "button", "aria-label": "subtract", value: "-", onClick: this.handleSubtract }, "\u2212"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { id: "zero", type: "button", value: "0", onClick: this.handleChange }, "0"), /*#__PURE__*/
      React.createElement("button", { id: "decimal", type: "button", "aria-label": "decimal", value: ".", onClick: this.handleDecimal }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", type: "button", "aria-label": "equals", onClick: this.handleEquals }, "="), /*#__PURE__*/
      React.createElement("button", { id: "add", type: "button", "aria-label": "add", value: "+", onClick: this.handlePlus }, "+"), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/

      React.createElement("button", { id: "keyboard-toggle", onClick: this.toggle }, "Keyboard control on")));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("root"));