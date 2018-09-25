import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
//import { fetchBills } from '../../actions';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


class BillsOverview extends Component{
  componentDidMount(){
    //this.props.fetchBills();
  }

    render(){
      return (
        <div>
          <div className="row">
            <div className="col-sm">
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Total You Owe</h5>
                  <p className="card-total"> $225.00</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Total Owed</h5>
                  <p className="card-total"> $500.00</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Total Balance</h5>
                  <p className="card-total"> +$280.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Monthly Distribution</h5>
                  <Doughnut data={data}/>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">Upcoming Bills</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}


export default BillsOverview;
