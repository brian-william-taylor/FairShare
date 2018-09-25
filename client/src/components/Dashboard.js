import React from 'react';
import { Link } from 'react-router-dom';
import FeatureList from './FeatureList';

const Dashboard = () => {
  return (
    <div>
      <FeatureList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
