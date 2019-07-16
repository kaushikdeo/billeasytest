import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchStoresData from '../actions/companyActions';
import Dashboard from '../components/Dashboard.js';
import Header from '../components/Header';
import { Container } from 'semantic-ui-react';

class App extends Component {

  state = {
    companyData: null,
    loading: true,
  };
 
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchStoresData());
  }

  componentWillReceiveProps(nextProps){
    if(this.props.companyData.company !== nextProps.companyData.company){
      if (nextProps.companyData.loading) {
        this.setState({loading: nextProps.companyData.loading})
      }
      if (nextProps.companyData.company){
        this.setState({company: nextProps.companyData.company, loading: false})
      }
    }
   }

  render() {
    const { loading, company } = this.state;
    return (
      <div>
        <Header />
        <div>
          {
            loading ? <p>loading ... </p> :
            <Dashboard company={company} />
          }
        </div>
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
