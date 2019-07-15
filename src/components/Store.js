import React from 'react';
import PropTypes from 'prop-types';

const Store = ({ store }) => (
  <div>
    Store
  </div>
);

Store.propTypes = {
  store: PropTypes.shape({
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
  }),
}

export default Store;
