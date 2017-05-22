import React from 'react';

// --1--
// Class component -- can have state!!
/*class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <b>Bolded</b>
      </div>
    )
  }
}*/

// Stateless function component
// const App = () => <h1>Hello stateless</h1>

// Set Properties on React Components
// class App extends React.Component {
//   render() {
//     let txt = this.props.txt
//     return <h1>{txt}</h1>
//   }
// }

// --2--
// // Define the properties that we are going to looking for in our component
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// // Set a series of default properties
// App.defaultProps = {
//   txt: "this is the default txt"
// }

// --3--
// Get started using states
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'this is the state txt',
//       cat: 5 // the value of the cat's been set to default and it'll not change
//     }
//   }
//   update(e) {
//     this.setState({ txt: e.target.value })
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)} />
//         <h1>{this.state.txt} - {this.state.cat}</h1>
//       </div>
//     )
//   }
// }

//----------------------------------------------
/*// Use React components as children for other components
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
    }
  }
  update(e) {
    this.setState({ txt: e.target.value })
  }
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) => <input type="text" onChange={props.update} />*/

//----------------------------------------------
// Access Nested Data with React props.children
// class App extends React.Component {
//   render() {
//     return <Button>I <Heart /> React</Button>
//   }
// }

// // This is a stateless function component
// const Button = (props) => <button>{props.children}</button>

// class Heart extends React.Component {
//   render() {
//     return <span>&hearts;</span>
//   }
// }


// Add custom propType Validation to react components

// class App extends React.Component {
//   render() {
//     return <Title text="The text" />
//   }
// }

// const Title = (props) => <h1>Title: {props.text}</h1>

// Title.propTypes = {
//   text(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`missing ${propName}`)
//     }
//     if (props[propName].length < 6) {
//       return new Error(`${propName} was too short`)
//     }
//   }
// }

// Normalize events with React Synthetic Event system

/*class App extends React.Component {
  constructor() {
    super();
    this.state = { currentEvent: '---' }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({ currentEvent: e.type })
  }
  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onPaste={this.update}
          onCut={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30" rows="10" />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}*/


// Use React ref to Get a Reference to Specific Components

/*class App extends React.Component {
  constructor() {
    super();
    this.state = { a: '', b: '' }
  }
  update() {
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }
  render() {
    return (
      <div>
        <Input
          ref={component => this.a = component}
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return <div><input ref="input" type="text" onChange={this.props.update} /></div>
  }
}*/


// Understand the React Component Lifecycle Methods
// When our component is added to the DOM, this is called mounting, 
// and when our component is removed from the DOM, this is called unmounting. 
// There are a handful of lifecycle methods we can access at various stages of this state.

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }
  update() {
    this.setState({ val: this.state.val + 1 })
  }

  render() {
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }
}
export default App
