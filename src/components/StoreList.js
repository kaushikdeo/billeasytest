import React from 'react';
import PropTypes from 'prop-types';
import Store from './Store';
import { Card } from 'semantic-ui-react';

const StoreList = ({ allStores }) => (
  <Card.Group>
    {allStores.map((store, i) => <Store key={i} store={store} />)}
  </Card.Group>
);

StoreList.propTypes = {
  allStores: PropTypes.arrayOf(PropTypes.shape({
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
}

export default StoreList;