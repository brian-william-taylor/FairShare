import React, { Component } from 'react';
import {connect} from 'react-redux';
import BillsOverview from './BillsOverview'
import BillsCurrent from './BillsCurrent'
import AddBill from './AddBill';
//import { fetchBills } from '../../actions';


class Bills extends Component{
  componentDidMount(){
    //this.props.fetchBills();
  }

    render(){
      return (
        <div>
          <h1>Bills</h1>
            <ul className="nav nav-tabs" id="billsTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="overview-tab" data-toggle="tab" role="tab" href="#overview" aria-controls="overview" aria-selected="true">Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="current-tab" data-toggle="tab"  role="tab" href="#current" aria-controls="current" aria-selected="false">Current</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="history-tab" data-toggle="tab" role="tab" href="#history" aria-controls="history" aria-selected="false">History</a>
              </li>
              </ul>
            <div className="tab-content" id="billsTabContent">
              <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab"> <BillsOverview/> </div>
              <div className="tab-pane fade" id="current" role="tabpanel" aria-labelledby="current-tab"><BillsCurrent/></div>
              <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab">...</div>
            </div>
            <AddBill />
        </div>
      );
    }
}


export default Bills;
