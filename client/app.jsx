class App extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
       currentPage: F1,

    }
  }

  //how to pass the state of app pages up and down?
    //once I figure it out then the key is unlocked



  render () {
    if (this.state.currentPage === F1){
        return (<F1 currentPage={this.state.currentPage}/>);
    } else if (this.state.currentPage === F2){
        return (<F2 currentPage={this.state.currentPage}/>);
    } else if (this.state.currentPage === F3){
        return (<F3 currentPage={this.state.currentPage}/>);
    } else if (this.state.currentPage === F4){
        return (<F4 currentPage={this.state.currentPage}/>);
    }
  }
};



class F1 extends App {
  
  constructor(props){
    super(props)

    // this.state ={
    //   //something: another
    // };
    this.handleChange = this.handleChange.bind(this);
  }

  //button click change page


  handleChange(){
    console.log('got here')
    console.log(this.props.currentPage);
    this.props.currentPage
  }

  render(){
    return(
      <div>
        <h3 style={centerStyle}>Click here to enter the checkout area: </h3>
        <div style={centerStyle}>
         <button onClick={this.handleChange}>CHECKOUT</button>
        </div>
      </div>
    )
  }
}

class F2 extends App {
  
  constructor(props){
    super(props)

    this.state ={
      //something: another
    };
  }

  //button click change page

  render(){
    return(
      <div>
        <h3 style={centerStyle}>Click to enter the Checkout App</h3>
        <div style={centerStyle}>
         <button>CHECKOUT</button>
        </div>
      </div>
    )
  }
}

var centerStyle = {
  textAlign: 'center'
}

export default App;



// var buttonStyle = {
//     textAlign:'center',
//     justifyContent: 'center',
//     alignItems: 'center'
// }


//Homepage
//F1 collects name, email, and password for account creation.
//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
//F3 collects credit card #, expiry date, CVV, and billing zip code.