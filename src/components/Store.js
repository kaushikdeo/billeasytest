import React from 'react';
import { Card, Grid, Header } from 'semantic-ui-react';
import MixedChart from './ChartDisplay';
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
  },
  title: {
    color: '#29394b',
  },
  location:{
    marginTop: 10,
    color: '#5f5f5f',
  },
  upperMargin: {
    marginTop: 10,
  },
  titleStyle: {
    color: '#868686',
  },
  contentStyle: {
    color: '#464646',
  },
};

const Store = ({ store }) => (
  <Card style={storeCardStyles.storeCard}>
    <Card.Content>
      <Card.Header>
        <Header as='h3' style={storeCardStyles.title}>{store.name}</Header>
      </Card.Header>
      <Card.Meta style={storeCardStyles.location}>
        <span>{store.locality}</span>
      </Card.Meta>
      <Card.Meta textAlign='center'>
        <Grid style={storeCardStyles.upperMargin}>
          <Grid.Column floated='left' width={7} style={storeCardStyles.gridOne}>
            <p className='date' style={storeCardStyles.titleStyle}>COMPANY TYPE</p>
            <span className='date' style={storeCardStyles.contentStyle}>{store.company_category}</span>
          </Grid.Column>
          <Grid.Column floated='right' width={7} style={storeCardStyles.gridOne}>
            <p className='date' style={storeCardStyles.titleStyle}>ANNUAL REVENUE</p>
            <span className='date' style={storeCardStyles.contentStyle}>{`${store.revenue_last_month/100} K`}</span>
          </Grid.Column>
        </Grid>
      </Card.Meta>
      <Card.Meta textAlign='center'>
        <Grid>
          <Grid.Column floated='left' width={7} style={storeCardStyles.gridOne}>
            <p className='date' style={storeCardStyles.titleStyle}>EMPLOYEES</p>
            <span className='date' style={storeCardStyles.contentStyle}>20 - 50</span>
          </Grid.Column>
          <Grid.Column floated='right' width={7} style={storeCardStyles.gridOne}>
            <p className='date' style={storeCardStyles.titleStyle}>BEST SELLING</p>
            <span className='date' style={storeCardStyles.contentStyle}>{store.best_selling_product}</span>
          </Grid.Column>
        </Grid>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>Reviews</span>
      </Card.Meta>
      <Card.Description>
        <MixedChart overview={store.overview} />
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
