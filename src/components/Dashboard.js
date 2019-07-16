import React from 'react';
import SideBar from './SideBar';
import StoreList from './StoreList';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react'

const Dashboard = ({ company }) => (
  <div>
  <h1>Stores</h1>
  <Grid>
    <Grid.Column width={4}>
      <SideBar clientData = {company.client_data} />
    </Grid.Column>
    <Grid.Column width={12}>
      <StoreList allStores = {company.all_stores} />
    </Grid.Column>
  </Grid>
  </div>
);

Dashboard.propTypes = {
  company: PropTypes.shape({
    all_stores: PropTypes.arrayOf(PropTypes.shape({
      best_selling_product: PropTypes.string,
      city: PropTypes.string,
      company_category: PropTypes.string,
      locality: PropTypes.string,
      name: PropTypes.string,
      store_id: PropTypes.string,
      revenue_this_month: PropTypes.string,
      revenue_last_month: PropTypes.string,
      state: PropTypes.string,
      overview: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        month: PropTypes.string,
        rating: PropTypes.number,
      }))
    })),
    client_data: PropTypes.shape({
      address: PropTypes.string,
      green_score: PropTypes.number,
      last_report_day: PropTypes.string,
      name: PropTypes.string,
      score_summary: PropTypes.string,
      id: PropTypes.string,
      type: PropTypes.string,
    })
  })
}

export default Dashboard;
