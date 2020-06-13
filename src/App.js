import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class App extends Component {
//   render() {

//     return (
//       <React.Fragment>
//         <label htmlFor="bar">
//           bar
//         </label>
//         <input type="text" onClick={() => { console.log("I clicked") }} />;
//       </React.Fragment>
//     )
//   }
// }

const App = () => (<Counter></Counter>)
// const profiles = [
//   { name: "Taro", age: 10 },
//   { name: "Hanako", age: 5 },
//   { name: "NoName", age: 3 },
// ]
// return <div>
//   {
//     profiles.map((profile, index) =>{
//       return <User name={profile.name} age={profile.age} key={index}/>
//     })
//   }
// </div> 

// const User = (props) => {
//   return <div>Hi!, I am {props.name}!, and {props.age} years old!</div>
// }
class Counter extends Component {
  // 初期化処理で呼ばれるメソッド
  constructor(props) {
    super(props)
    this.state = { count: 0 }

  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>)
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

// User.defaultProps = {
//   age:1
// }

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// }

export default App;
