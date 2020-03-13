import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

class App extends Component{

  render(){
    return (
      <div className="App">
        <Header />
        <br />
        <h3>Prop Number : {this.props.propNumber}</h3>
        <h3>Prop String : {this.props.propString}</h3>
        <h3>Prop Object : {this.props.propObject.obj1}</h3>
        <Parent />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object,
}

App.defaultProps = {
  propNumber : 23,
  propString : "Barat Ahmed",
  propObject : {
    obj1 : "I am Object 1",
    obj2 : "I am Object 2",
    obj3 : "I am Object 3",
  }
}




class Parent extends Component{
  constructor(props){
      super(props);
      this.state = {
        cars: ["s-BMW","s-AUDI","s-FORD","s-MERC"],
        r: 0,
      };
      this.handleClick = this.handleClick.bind(this);
      this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  handleClick(){
    this.setState({cars: this.state.cars.reverse()});
  }
  getRandomNumber(){
    this.setState({r: Math.floor(Math.random()*10)});
  }
  render(){
    return(
      <div>
          <h1 onClick={this.handleClick}>Just Some Info</h1>
          <h1>I am Parent Component</h1>
          <Child car="BMW" model="2346" coolCars = {this.state.cars}/>
          <br />
          <button onClick={this.getRandomNumber}>Random Number </button>
          <br />
          <Number myNumber={this.state.r}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ["BMW","AUDI","FORD","MERC"]
}

class Child extends Component{
  render(){
    return(
      <div>
          <h1>I am Child Component</h1>
          <h3>Car Name: {this.props.car}</h3>
          <h3>Car Model: {this.props.model}</h3>
          <div>Cool Cars: {this.props.coolCars.map((item,i)=>{
              return <p key={i}>{item}</p>;
            })}</div>
      </div>
    );
  }
}
class Number extends Component{
  componentWillMount(){
      console.log("componentWillMount");
  }
  componentDidMount(){
      console.log("componentDidMount");
  }
  componentWillReceiveProps(newProps){
      console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(newProps, nextState){
      console.log("shouldComponentUpdate");
      return true;
  }
  componentWillUpdate(newProps, nextState){
      console.log("componentWillUpdate");
  }
  componentDidUpdate(newProps, nextState){
      console.log("componentDidUpdate");
  }
  componentWillUnmount(){
      console.log("componentWillUnmount");
  }

  render(){
    return(
      <div>
          {this.props.myNumber}
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//     <Header />
//     <Footer />
//
//     </div>
//   );
// }

export default App;
