import React from 'react';
import { Card, Grid, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const storeCardStyles = {
  storeCard: {
    backgroundColor: '#f8f9fd',
  },
  gridOne: {
    width: 83,
    height: 90,
    fontSize: 11,
    fontWeight: 600,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: -0.1,
    color: '#868686',
  },
  gridOneContent: {
    width: 106,
    height: 15,
    fontSize: 11,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#464646',
  }
};

const Store = ({ store }) => (
  <Card>
    <Card.Content>
      <Card.Header>
        <Header as='h3'>{store.name}</Header>
      </Card.Header>
      <Card.Meta>
        <span className='date'>{store.locality}</span>
      </Card.Meta>
      <Card.Meta>
        <Grid>
          <Grid.Column floated='left' width={7} style={storeCardStyles.gridOne}>
            <p className='date'>COMPANY TYPE</p>
            <span className='date'>{store.company_category}</span>
          </Grid.Column>
          <Grid.Column floated='right' width={7} style={storeCardStyles.gridOne}>
            <p className='date'>ANNUAL REVENUE</p>
            <span className='date'>{`${store.revenue_last_month/100} K`}</span>
          </Grid.Column>
        </Grid>
      </Card.Meta>
      <Card.Meta>
        <Grid>
          <Grid.Column floated='left' width={7} style={storeCardStyles.gridOne}>
            <p className='date'>EMPLOYEES</p>
            <span className='date'>20 - 50</span>
          </Grid.Column>
          <Grid.Column floated='right' width={7} style={storeCardStyles.gridOne}>
            <p className='date'>BEST SELLING</p>
            <span className='date'>{store.best_selling_product}</span>
          </Grid.Column>
        </Grid>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>Green Score</span>
      </Card.Meta>
      <Card.Description>
        dummy
      </Card.Description>
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
