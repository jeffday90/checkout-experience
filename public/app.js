class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: F1
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      currentPage: page
    });
  } //how to pass the state of app pages up and down?
  //once I figure it out then the key is unlocked


  render() {
    if (this.state.currentPage === F1) {
      return React.createElement(F1, {
        currentPage: this.state.currentPage,
        changePage: this.changePage
      });
    } else if (this.state.currentPage === F2) {
      return React.createElement(F2, {
        currentPage: this.state.currentPage,
        changePage: this.changePage
      });
    } else if (this.state.currentPage === F3) {
      return React.createElement(F3, {
        currentPage: this.state.currentPage,
        changePage: this.changePage
      });
    } else if (this.state.currentPage === F4) {
      return React.createElement(F4, {
        currentPage: this.state.currentPage,
        changePage: this.changePage
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
    this.props.changePage(F2);
    console.log('here now');
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", {
      style: centerStyle
    }, "Page 1"), React.createElement("div", {
      style: centerStyle
    }, React.createElement("button", {
      onClick: this.handleChange
    }, "CHECKOUT")));
  }

}

class F2 extends App {
  constructor(props) {
    super(props); // this.state ={
    //   //something: another
    // };

    this.handleChange = this.handleChange.bind(this);
  } //button click change page


  handleChange() {
    console.log('got here');
    console.log(this.props.currentPage);
    this.props.changePage(F3);
    console.log('here now');
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", {
      style: centerStyle
    }, "Page 2"), React.createElement("div", {
      style: centerStyle
    }, React.createElement("button", {
      onClick: this.handleChange
    }, "CHECKOUT")));
  }

}

class F3 extends App {
  constructor(props) {
    super(props); // this.state ={
    //   //something: another
    // };

    this.handleChange = this.handleChange.bind(this);
  } //button click change page


  handleChange() {
    console.log('got here');
    console.log(this.props.currentPage);
    this.props.changePage(F4);
    console.log('here now');
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", {
      style: centerStyle
    }, "Page 3"), React.createElement("div", {
      style: centerStyle
    }, React.createElement("button", {
      onClick: this.handleChange
    }, "CHECKOUT")));
  }

}

class F4 extends App {
  constructor(props) {
    super(props); // this.state ={
    //   //something: another
    // };

    this.handleChange = this.handleChange.bind(this);
  } //button click change page


  handleChange() {
    console.log('end of the line'); // console.log(this.props.currentPage);
    // this.props.changePage(F4);

    console.log('here now');
  }

  render() {
    return React.createElement("div", null, React.createElement("h3", {
      style: centerStyle
    }, "Page 4"), React.createElement("div", {
      style: centerStyle
    }, React.createElement("button", {
      onClick: this.handleChange
    }, "CHECKOUT")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFBhZ2UiLCJGMSIsImNoYW5nZVBhZ2UiLCJiaW5kIiwicGFnZSIsInNldFN0YXRlIiwicmVuZGVyIiwiRjIiLCJGMyIsIkY0IiwiaGFuZGxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsImNlbnRlclN0eWxlIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxLQUFLLENBQUNDLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBTztBQUNoQixVQUFNQSxLQUFOO0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1ZDLE1BQUFBLFdBQVcsRUFBRUM7QUFESCxLQUFiO0FBR0EsU0FBS0MsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixJQUFyQixDQUFsQjtBQUNEOztBQUVERCxFQUFBQSxVQUFVLENBQUNFLElBQUQsRUFBTTtBQUNkLFNBQUtDLFFBQUwsQ0FBYztBQUNaTCxNQUFBQSxXQUFXLEVBQUVJO0FBREQsS0FBZDtBQUdELEdBZCtCLENBZ0JoQztBQUNFOzs7QUFJRkUsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsUUFBSSxLQUFLUCxLQUFMLENBQVdDLFdBQVgsS0FBMkJDLEVBQS9CLEVBQWtDO0FBQzlCLGFBQVEsb0JBQUMsRUFBRDtBQUFJLFFBQUEsV0FBVyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0MsV0FBNUI7QUFBeUMsUUFBQSxVQUFVLEVBQUUsS0FBS0U7QUFBMUQsUUFBUjtBQUNILEtBRkQsTUFFTyxJQUFJLEtBQUtILEtBQUwsQ0FBV0MsV0FBWCxLQUEyQk8sRUFBL0IsRUFBa0M7QUFDckMsYUFBUSxvQkFBQyxFQUFEO0FBQUksUUFBQSxXQUFXLEVBQUUsS0FBS1IsS0FBTCxDQUFXQyxXQUE1QjtBQUF5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c3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICBjdXJyZW50UGFnZTogRjEsXG4gICAgfVxuICAgIHRoaXMuY2hhbmdlUGFnZSA9IHRoaXMuY2hhbmdlUGFnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hhbmdlUGFnZShwYWdlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRQYWdlOiBwYWdlXG4gICAgfSk7XG4gIH1cblxuICAvL2hvdyB0byBwYXNzIHRoZSBzdGF0ZSBvZiBhcHAgcGFnZXMgdXAgYW5kIGRvd24/XG4gICAgLy9vbmNlIEkgZmlndXJlIGl0IG91dCB0aGVuIHRoZSBrZXkgaXMgdW5sb2NrZWRcblxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gRjEpe1xuICAgICAgICByZXR1cm4gKDxGMSBjdXJyZW50UGFnZT17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX0gY2hhbmdlUGFnZT17dGhpcy5jaGFuZ2VQYWdlfS8+KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgPT09IEYyKXtcbiAgICAgICAgcmV0dXJuICg8RjIgY3VycmVudFBhZ2U9e3RoaXMuc3RhdGUuY3VycmVudFBhZ2V9IGNoYW5nZVBhZ2U9e3RoaXMuY2hhbmdlUGFnZX0vPik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlID09PSBGMyl7XG4gICAgICAgIHJldHVybiAoPEYzIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlfSBjaGFuZ2VQYWdlPXt0aGlzLmNoYW5nZVBhZ2V9Lz4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gRjQpe1xuICAgICAgICByZXR1cm4gKDxGNCBjdXJyZW50UGFnZT17dGhpcy5zdGF0ZS5jdXJyZW50UGFnZX0gY2hhbmdlUGFnZT17dGhpcy5jaGFuZ2VQYWdlfS8+KTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG5jbGFzcyBGMSBleHRlbmRzIEFwcCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICAvLyB0aGlzLnN0YXRlID17XG4gICAgLy8gICAvL3NvbWV0aGluZzogYW5vdGhlclxuICAgIC8vIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy9idXR0b24gY2xpY2sgY2hhbmdlIHBhZ2VcblxuXG4gIGhhbmRsZUNoYW5nZSgpe1xuICAgIGNvbnNvbGUubG9nKCdnb3QgaGVyZScpXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jdXJyZW50UGFnZSk7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VQYWdlKEYyKTtcbiAgICBjb25zb2xlLmxvZygnaGVyZSBub3cnKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIHN0eWxlPXtjZW50ZXJTdHlsZX0+UGFnZSAxPC9oMz5cbiAgICAgICAgPGRpdiBzdHlsZT17Y2VudGVyU3R5bGV9PlxuICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+Q0hFQ0tPVVQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgRjIgZXh0ZW5kcyBBcHAge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgLy8gdGhpcy5zdGF0ZSA9e1xuICAgIC8vICAgLy9zb21ldGhpbmc6IGFub3RoZXJcbiAgICAvLyB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vYnV0dG9uIGNsaWNrIGNoYW5nZSBwYWdlXG5cblxuICBoYW5kbGVDaGFuZ2UoKXtcbiAgICBjb25zb2xlLmxvZygnZ290IGhlcmUnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3VycmVudFBhZ2UpO1xuICAgIHRoaXMucHJvcHMuY2hhbmdlUGFnZShGMyk7XG4gICAgY29uc29sZS5sb2coJ2hlcmUgbm93JylcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBzdHlsZT17Y2VudGVyU3R5bGV9PlBhZ2UgMjwvaDM+XG4gICAgICAgIDxkaXYgc3R5bGU9e2NlbnRlclN0eWxlfT5cbiAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PkNIRUNLT1VUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEYzIGV4dGVuZHMgQXBwIHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8vIHRoaXMuc3RhdGUgPXtcbiAgICAvLyAgIC8vc29tZXRoaW5nOiBhbm90aGVyXG4gICAgLy8gfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvL2J1dHRvbiBjbGljayBjaGFuZ2UgcGFnZVxuXG5cbiAgaGFuZGxlQ2hhbmdlKCl7XG4gICAgY29uc29sZS5sb2coJ2dvdCBoZXJlJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmN1cnJlbnRQYWdlKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVBhZ2UoRjQpO1xuICAgIGNvbnNvbGUubG9nKCdoZXJlIG5vdycpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgc3R5bGU9e2NlbnRlclN0eWxlfT5QYWdlIDM8L2gzPlxuICAgICAgICA8ZGl2IHN0eWxlPXtjZW50ZXJTdHlsZX0+XG4gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlfT5DSEVDS09VVDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBGNCBleHRlbmRzIEFwcCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICAvLyB0aGlzLnN0YXRlID17XG4gICAgLy8gICAvL3NvbWV0aGluZzogYW5vdGhlclxuICAgIC8vIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy9idXR0b24gY2xpY2sgY2hhbmdlIHBhZ2VcblxuXG4gIGhhbmRsZUNoYW5nZSgpe1xuICAgIGNvbnNvbGUubG9nKCdlbmQgb2YgdGhlIGxpbmUnKVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3VycmVudFBhZ2UpO1xuICAgIC8vIHRoaXMucHJvcHMuY2hhbmdlUGFnZShGNCk7XG4gICAgY29uc29sZS5sb2coJ2hlcmUgbm93JylcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBzdHlsZT17Y2VudGVyU3R5bGV9PlBhZ2UgNDwvaDM+XG4gICAgICAgIDxkaXYgc3R5bGU9e2NlbnRlclN0eWxlfT5cbiAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PkNIRUNLT1VUPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnZhciBjZW50ZXJTdHlsZSA9IHtcbiAgdGV4dEFsaWduOiAnY2VudGVyJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyB2YXIgYnV0dG9uU3R5bGUgPSB7XG4vLyAgICAgdGV4dEFsaWduOidjZW50ZXInLFxuLy8gICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbi8vICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuLy8gfVxuXG5cbi8vSG9tZXBhZ2Vcbi8vRjEgY29sbGVjdHMgbmFtZSwgZW1haWwsIGFuZCBwYXNzd29yZCBmb3IgYWNjb3VudCBjcmVhdGlvbi5cbi8vRjIgY29sbGVjdHMgc2hpcCB0byBhZGRyZXNzIChsaW5lIDEsIGxpbmUgMiwgY2l0eSwgc3RhdGUsIHppcCBjb2RlKSBhbmQgcGhvbmUgbnVtYmVyLlxuLy9GMyBjb2xsZWN0cyBjcmVkaXQgY2FyZCAjLCBleHBpcnkgZGF0ZSwgQ1ZWLCBhbmQgYmlsbGluZyB6aXAgY29kZS4iXX0=