import React, { Component } from 'react';
import ParcelLogo from '../img/parcel-logo.png';

class MainComponent extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };

    this.submit = this.submit.bind(this);

    if (module.hot) {
      module.hot.dispose(function () {
        // Module is about to be replaced
        console.log('Replacing ...');
      });

      module.hot.accept(function () {
        // Module or one of dependencies was just updated
        console.log('Successfully updated');
        this.setState({ text: '' })
      });
    }
  }

  submit(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <img src={ParcelLogo} />
        <div className="form-group">
          <input
            className="form-control"
            height="100px"
            id="name"
            name="name"
            onChange={this.submit}
            value={this.state.text}
          />
        </div>
        <h1>Hello {this.state.text}!!</h1>
      </div>
    );
  }
}

export default MainComponent;
