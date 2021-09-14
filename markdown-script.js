marked.setOptions({
  breaks: true });


class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "app" }, /*#__PURE__*/
      React.createElement("h1", null, "Welcome to my Markdown Previewer App!"), /*#__PURE__*/
      React.createElement("p", { id: "instructions" }, "Instructions: Type into the editor below to see the output in the previewer box"), /*#__PURE__*/
      React.createElement("textarea", { value: this.state.input, onChange: this.handleChange, id: "editor", class: "form-control", rows: "8", placeholder: "Type code here" }), /*#__PURE__*/
      React.createElement("p", { id: "output" }, "Output:"), /*#__PURE__*/
      React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(this.state.input) }, id: "preview" })));


  }}


const placeholder =

`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById("root"));