# react-trix-editor

[![npm version](https://badge.fury.io/js/react-trix-editor.svg)](https://badge.fury.io/js/react-trix-editor)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)

A React component for [Trix](https://github.com/basecamp/trix).

## Getting Started

Install via npm: `npm install react-trix-editor`.

Import from `react-trix-editor`.

If you would like to use the component without styling, import from `react-trix-editor/ReactTrixEditor`.

## Usage

Example:

```
import ReactTrixEditor from 'react-trix-editor';

class ReactTrixEditorDemo extends Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  state = {
    value: ''
  }

  onChange(value) {
    this.setState({
      value
    });
  }

  render() {
    const testProps = {
      onChange: this.onChange,
      onEditor(editor) { console.log(`Editor callback: `, editor); },
      initialValue: 'Hello World',
      placeholder: 'A placeholder shown when the text editor is empty'
    };

    return <ReactTrixEditor {...testProps} />;
  }
}
```
## Props

| Name            | Type                    | Description                                                 | Required  | Default                    |
|-----------------|-------------------------|-------------------------------------------------------------|-----------|----------------------------|
| onChange        | func                    | Passes editor's state when input is received                | true      |                            |
| onEditor        | func                    | Provides a Trix editor obj on initialisation [(see docs)](https://github.com/basecamp/trix#editing-text-programmatically)                 |           |                            |
| autofocus       | bool                    | Should the editor have autofocus                            |           | false                      |
| input           | string                  | A unique ID for the editor                                  |           | 'react-trix-editor'        |
| placeholder     | string                  | Placeholder for the text editor                             |           | 'Enter text here...'       |
| initialValue    | string                  | Text to insert into the text editor on initialisation       |           |                            |

## Notes

- `onEditor` passes a Trix editor object that can be used to programmatically change the text editor.
- `input` is a unique ID for a hidden input element used by Trix. You only need to ensure this is unique if you have multiple instances of this component on a single page.
