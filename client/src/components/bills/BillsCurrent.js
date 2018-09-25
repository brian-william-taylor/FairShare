import React, { Component } from 'react';
import {connect} from 'react-redux';

//import { fetchBills } from '../../actions';



class BillsCurrent extends Component{
  componentDidMount(){
    //this.props.fetchBills();
  }

    render(){
      return (
        <div>
          <div className="card">
            <div className="card-body">
              <h1>Current Bills</h1>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add Transaction</button>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Category</th>
                    <th scope="col">Split Between</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">05/03/2018</th>
                    <td>$25.00</td>
                    <td>Household Items</td>
                    <td>Brian, Gordon</td>
                  </tr>
                  <tr>
                  <th scope="row">05/03/2018</th>
                  <td>$25.00</td>
                  <td>Household Items</td>
                  <td>Brian, Gordon</td>
                  </tr>
                  <tr>
                  <th scope="row">05/03/2018</th>
                  <td>$25.00</td>
                  <td>Household Items</td>
                  <td>Brian, Gordon</td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
        </div>
      );
    }
}


export default BillsCurrent;
