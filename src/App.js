import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchStoresData from './actions/companyActions';
import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchStoresData());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companyData: state.companyData,
  }
}


export default connect (mapStateToProps)(App);
