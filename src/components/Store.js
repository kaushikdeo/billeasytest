import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Store = ({ store }) => (
  <Card>
    <Image src='https://banner2.kisspng.com/20180131/elw/kisspng-coffee-starbucks-cafe-logo-food-starbucks-logo-png-file-5a724a65becfc8.2787887515174395897816.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>store</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
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
