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
  reportText: {
    marginTop: 7,
  },
  reportTextMain: {
    color: '#a6b9cf',
    letterSpacing: '-0.2',
  },
  reportTextContent: {
    color: '#29394b',
    letterSpacing: '-0.2',
  },
  greenScoreText: {
    color: '#7589a0',
    fontWeight: 800,
  },
  ratingMainText: {
    color: '#46596f',
    fontWeight: 800,
  },
  ratingMainContent: {
    color: '#a6b9cf',
    fontWeight: 800,
  },
  summaryTitle: {
    color: '#43566b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  summarText: {
    color: '#5a738f',
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
      <Card.Meta style={sideBarStyles.reportText}>
        <span className='date' style={sideBarStyles.reportTextMain}>Last Report: <span style={sideBarStyles.reportTextContent}>{clientData.last_report_day}</span></span>
      </Card.Meta>
      <Card.Meta>
        <Divider />
      </Card.Meta>
      <Card.Meta>
        <span style={sideBarStyles.greenScoreText}>Green Score</span>
      </Card.Meta>
      <Card.Header>
        <Header as='h1' style={sideBarStyles.ratingMainText}>{`${clientData.green_score}  `}<span style={sideBarStyles.ratingMainContent}>out of 10</span></Header>
      </Card.Header>
      <Card.Meta>
        <Progress color='green' percent={(clientData.green_score * 100) / 10 } size='tiny' />
      </Card.Meta>
      <Card.Meta>
        <span className='date' style={sideBarStyles.summaryTitle}>Summary:</span>
      </Card.Meta>
      <Card.Description style={sideBarStyles.summarText}>
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
