import React, { Component } from 'react';
import {connect} from 'react-redux';
//import { fetchBills } from '../../actions';


class AddBill extends Component{
  componentDidMount(){
    //this.props.fetchBills();
  }

    render(){
      return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Add a Transaction</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                   <div className="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                     <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
                   </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
}


export default AddBill;
