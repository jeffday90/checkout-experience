class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: F1
    };
  } //how to pass the state of app pages up and down?
  //once I figure it out then the key is unlocked


  render() {
    if (this.state.currentPage === F1) {
      return React.createElement(F1, {
        currentPage: this.state.currentPage
      });
    } else if (this.state.currentPage === F2) {
      return React.createElement(F2, {
        currentPage: this.state.currentPage
      });
    } else if (this.state.currentPage === F3) {
      return React.createElement(F3, {
        currentPage: this.state.currentPage
      });
    } else if (this.state.currentPage === F4) {
      return React.createElement(F4, {
        currentPage: this.state.currentPage
      });
    }
  }

}

;

class F1 extends App {
  constructor(props) {
    super(props); // this.state ={
    //   //something: another
    // };

    this.handleChange = this.handleChange.bind(this);
  } //button click change page


  handleChange() {
    console.log('got here');
    console.log(this.props.currentPage);
    this.props.currentPage;
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", {
      style: centerStyle
    }, "Click here to enter the checkout area: "), React.createElement("div", {
      style: centerStyle
    }, React.createElement("button", {
      onClick: this.handleChange
    }, "CHECKOUT")));
  }

}

class F2 extends App {
  constructor(props) {
    super(props);
    this.state = {//something: another
    };
  } //button click change page


  render() {
    return React.createElement("div", null, React.createElement("h3", {
      style: centerStyle
    }, "Click to enter the Checkout App"), React.createElement("div", {
      style: centerStyle
    }, React.createElement("button", null, "CHECKOUT")));
  }

}

var centerStyle = {
  textAlign: 'center'
};
export default App; // var buttonStyle = {
//     textAlign:'center',
//     justifyContent: 'center',
//     alignItems: 'center'
// }
//Homepage
//F1 collects name, email, and password for account creation.
//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
//F3 collects credit card #, expiry date, CVV, and billing zip code.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFBhZ2UiLCJGMSIsInJlbmRlciIsIkYyIiwiRjMiLCJGNCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwiY2VudGVyU3R5bGUiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2hCLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDVkMsTUFBQUEsV0FBVyxFQUFFQztBQURILEtBQWI7QUFJRCxHQVIrQixDQVVoQztBQUNFOzs7QUFJRkMsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsUUFBSSxLQUFLSCxLQUFMLENBQVdDLFdBQVgsS0FBMkJDLEVBQS9CLEVBQWtDO0FBQzlCLGFBQVEsb0JBQUMsRUFBRDtBQUFJLFFBQUEsV0FBVyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0M7QUFBNUIsUUFBUjtBQUNILEtBRkQsTUFFTyxJQUFJLEtBQUtELEtBQUwsQ0FBV0MsV0FBWCxLQUEyQkcsRUFBL0IsRUFBa0M7QUFDckMsYUFBUSxvQkFBQyxFQUFEO0FBQUksUUFBQSxXQUFXLEVBQUUsS0FBS0osS0FBTCxDQUFXQztBQUE1QixRQUFSO0FBQ0gsS0FGTSxNQUVBLElBQUksS0FBS0QsS0FBTCxDQUFXQyxXQUFYLEtBQTJCSSxFQUEvQixFQUFrQztBQUNyQyxhQUFRLG9CQUFDLEVBQUQ7QUFBSSxRQUFBLFdBQVcsRUFBRSxLQUFLTCxLQUFMLENBQVdDO0FBQTVCLFFBQVI7QUFDSCxLQUZNLE1BRUEsSUFBSSxLQUFLRCxLQUFMLENBQVdDLFdBQVgsS0FBMkJLLEVBQS9CLEVBQWtDO0FBQ3JDLGFBQVEsb0JBQUMsRUFBRDtBQUFJLFFBQUEsV0FBVyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0M7QUFBNUIsUUFBUjtBQUNIO0FBQ0Y7O0FBekIrQjs7QUEwQmpDOztBQUlELE1BQU1DLEVBQU4sU0FBaUJQLEdBQWpCLENBQXFCO0FBRW5CRyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBTztBQUNoQixVQUFNQSxLQUFOLEVBRGdCLENBR2hCO0FBQ0E7QUFDQTs7QUFDQSxTQUFLUSxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0QsR0FUa0IsQ0FXbkI7OztBQUdBRCxFQUFBQSxZQUFZLEdBQUU7QUFDWkUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLWCxLQUFMLENBQVdFLFdBQXZCO0FBQ0EsU0FBS0YsS0FBTCxDQUFXRSxXQUFYO0FBQ0Q7O0FBRURFLEVBQUFBLE1BQU0sR0FBRTtBQUNOLFdBQ0UsaUNBQ0U7QUFBSSxNQUFBLEtBQUssRUFBRVE7QUFBWCxpREFERixFQUVFO0FBQUssTUFBQSxLQUFLLEVBQUVBO0FBQVosT0FDQztBQUFRLE1BQUEsT0FBTyxFQUFFLEtBQUtKO0FBQXRCLGtCQURELENBRkYsQ0FERjtBQVFEOztBQTdCa0I7O0FBZ0NyQixNQUFNSCxFQUFOLFNBQWlCVCxHQUFqQixDQUFxQjtBQUVuQkcsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQU87QUFDaEIsVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBWSxDQUNWO0FBRFUsS0FBWjtBQUdELEdBUmtCLENBVW5COzs7QUFFQUcsRUFBQUEsTUFBTSxHQUFFO0FBQ04sV0FDRSxpQ0FDRTtBQUFJLE1BQUEsS0FBSyxFQUFFUTtBQUFYLHlDQURGLEVBRUU7QUFBSyxNQUFBLEtBQUssRUFBRUE7QUFBWixPQUNDLCtDQURELENBRkYsQ0FERjtBQVFEOztBQXJCa0I7O0FBd0JyQixJQUFJQSxXQUFXLEdBQUc7QUFDaEJDLEVBQUFBLFNBQVMsRUFBRTtBQURLLENBQWxCO0FBSUEsZUFBZWpCLEdBQWYsQyxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgY3VycmVudFBhZ2U6IEYxLFxuXG4gICAgfVxuICB9XG5cbiAgLy9ob3cgdG8gcGFzcyB0aGUgc3RhdGUgb2YgYXBwIHBhZ2VzIHVwIGFuZCBkb3duP1xuICAgIC8vb25jZSBJIGZpZ3VyZSBpdCBvdXQgdGhlbiB0aGUga2V5IGlzIHVubG9ja2VkXG5cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IEYxKXtcbiAgICAgICAgcmV0dXJuICg8RjEgY3VycmVudFBhZ2U9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2V9Lz4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gRjIpe1xuICAgICAgICByZXR1cm4gKDxGMiBjdXJyZW50UGFnZT17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX0vPik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09PSBGMyl7XG4gICAgICAgIHJldHVybiAoPEYzIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlfS8+KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IEY0KXtcbiAgICAgICAgcmV0dXJuICg8RjQgY3VycmVudFBhZ2U9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2V9Lz4pO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbmNsYXNzIEYxIGV4dGVuZHMgQXBwIHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8vIHRoaXMuc3RhdGUgPXtcbiAgICAvLyAgIC8vc29tZXRoaW5nOiBhbm90aGVyXG4gICAgLy8gfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvL2J1dHRvbiBjbGljayBjaGFuZ2UgcGFnZVxuXG5cbiAgaGFuZGxlQ2hhbmdlKCl7XG4gICAgY29uc29sZS5sb2coJ2dvdCBoZXJlJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmN1cnJlbnRQYWdlKTtcbiAgICB0aGlzLnByb3BzLmN1cnJlbnRQYWdlXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgc3R5bGU9e2NlbnRlclN0eWxlfT5DbGljayBoZXJlIHRvIGVudGVyIHRoZSBjaGVja291dCBhcmVhOiA8L2gzPlxuICAgICAgICA8ZGl2IHN0eWxlPXtjZW50ZXJTdHlsZX0+XG4gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlfT5DSEVDS09VVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBGMiBleHRlbmRzIEFwcCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID17XG4gICAgICAvL3NvbWV0aGluZzogYW5vdGhlclxuICAgIH07XG4gIH1cblxuICAvL2J1dHRvbiBjbGljayBjaGFuZ2UgcGFnZVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBzdHlsZT17Y2VudGVyU3R5bGV9PkNsaWNrIHRvIGVudGVyIHRoZSBDaGVja291dCBBcHA8L2gzPlxuICAgICAgICA8ZGl2IHN0eWxlPXtjZW50ZXJTdHlsZX0+XG4gICAgICAgICA8YnV0dG9uPkNIRUNLT1VUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnZhciBjZW50ZXJTdHlsZSA9IHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyB2YXIgYnV0dG9uU3R5bGUgPSB7XG4vLyAgICAgdGV4dEFsaWduOidjZW50ZXInLFxuLy8gICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbi8vICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuLy8gfVxuXG5cbi8vSG9tZXBhZ2Vcbi8vRjEgY29sbGVjdHMgbmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZCBmb3IgYWNjb3VudCBjcmVhdGlvbi5cbi8vRjIgY29sbGVjdHMgc2hpcCB0byBhZGRyZXNzIChsaW5lIDEsIGxpbmUgMiwgY2l0eSwgc3RhdGUsIHppcCBjb2RlKSBhbmQgcGhvbmUgbnVtYmVyLlxuLy9GMyBjb2xsZWN0cyBjcmVkaXQgY2FyZCAjLCBleHBpcnkgZGF0ZSwgQ1ZWLCBhbmQgYmlsbGluZyB6aXAgY29kZS4iXX0=