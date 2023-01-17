import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div class='table-title'>
      <div class='row'>
        <div class='col-sm-6'>
          <h2>
            Manage <b>Employees</b>
          </h2>
        </div>
        <div class='col-sm-6'>
          {/* <a
            href='#addEmployeeModal'
            class='btn btn-success'
            data-toggle='modal'
          >
            <i class='material-icons'>&#xE147;</i>
            <span>Add New Employee</span>
          </a> */}
          {/* <a
            href='#deleteEmployeeModal'
            class='btn btn-danger'
            data-toggle='modal'
          >
            <i class='material-icons'>&#xE15C;</i> <span>Delete</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
