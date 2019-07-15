import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ clientData }) => (
  <div>
    {clientData.name}
  </div>
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
