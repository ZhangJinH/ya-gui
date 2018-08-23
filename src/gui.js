/**
 * Base on React
 */
const {
  React,
  ReactDOM,
  e,
  Theme,
  getTheme
} = require('./deps/env');
const main = require('./panes/main');

class App extends React.Component {
  render() {
    return e(Theme, {
      theme: getTheme({
        useInlineStyle: true,
        accent: '#0078D7', // set accent color
        useFluentDesign: true
      })
    }, e(main.Pane));
  }
}
ReactDOM.render(e(App), document.getElementById('app'));
