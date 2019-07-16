import React from 'react';
import { Card, Icon, Button, Header, Divider, Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const sideBarStyles = {
  locationIcon: {
    paddingLeft: 10
  },
  reportButton: {
    borderRadius: 50,
    backgroundColor: 'rgb(53, 196, 124)',
    marginTop: 10,
  },
};

const SideBar = ({ clientData }) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        <Header as='h1'>{clientData.name}</Header>
      </Card.Header>
      <Card.Meta>
        <span className='date'>{clientData.address}<Icon style={sideBarStyles.locationIcon} name='map marker alternate' /></span>
      </Card.Meta>
      <Card.Meta>
        <Button positive style={sideBarStyles.reportButton}>Prepare Report</Button>
      </Card.Meta>
      <Card.Meta>
        <span className='date'>Last Report: <span>{clientData.last_report_day}</span></span>
      </Card.Meta>
      <Card.Meta>
        <Divider />
      </Card.Meta>
      <Card.Meta>
        <span className='date'>Green Score</span>
      </Card.Meta>
      <Card.Header>
        <Header as='h1'>{`${clientData.green_score} out of 10`}</Header>
      </Card.Header>
      <Card.Meta>
        <Progress percent={(clientData.green_score * 100) / 10 } size='tiny' />
      </Card.Meta>
      <Card.Meta>
        <span className='date'>Summary:</span>
      </Card.Meta>
      <Card.Description>
        {clientData.score_summary}
      </Card.Description>
    </Card.Content>
  </Card>
);

SideBar.propTypes = {
  clientData: PropTypes.shape({
    address: PropTypes.string,
    green_score: PropTypes.number,
    last_report_day: PropTypes.string,
    name: PropTypes.string,
    score_summary: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
  })
}

export default SideBar;
