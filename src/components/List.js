import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div className = "container">
    //     <h2 className = "text-center"> List Employees </h2>
    //     <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Employee </Link>
    //     <table className="table table-bordered table-striped">
    //         <thead>
    //             <th> Employee Id </th>
    //             <th> Employee First Name </th>
    //             <th> Employee Last Name </th>
    //             <th> Employee Email Id </th>
    //             <th> Actions </th>
    //         </thead>
    //         <tbody>
    //             {
    //                 employees.map(
    //                     employee =>
    //                     <tr key = {employee.id}>
    //                         <td> {employee.id} </td>
    //                         <td> {employee.firstName} </td>
    //                         <td>{employee.lastName}</td>
    //                         <td>{employee.emailId}</td>
    //                         <td>
    //                             <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
    //                             <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
    //                             style = {{marginLeft:"10px"}}> Delete</button>
    //                         </td>
    //                     </tr>
    //                 )
    //             }
    //         </tbody>
    //     </table>
    // </div>
    <>
      <div className='add-employee-btn'>
        <Link to='/add-employee' className='btn btn-success'>
          <div className='add-emp-btn-content'>
            <i className='material-icons'>&#xE147;</i>
            <span>Add New Employee</span>
          </div>
        </Link>
      </div>

      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>
              {/* <span class='custom-checkbox'>
                <input type='checkbox' id='selectAll' />
                <label for='selectAll'></label>
              </span> */}
            </th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
            {/* <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => (
            <tr key={i}>
              <td>
                {/* <span class='custom-checkbox'>
                <input
                  type='checkbox'
                  id='checkbox1'
                  name='options[]'
                  value='1'
                />
                <label for='checkbox1'></label>
              </span> */}
              </td>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                {/* <a href='#editEmployeeModal' class='edit' data-toggle='modal'>
                  <i class='material-icons' data-toggle='tooltip' title='Edit'>
                    &#xE254;
                  </i>
                </a> */}
                <Link className='edit' to={`/edit-employee/${employee.id}`}>
                  <i className='material-icons' data-toggle='tooltip' title='Edit'>
                    &#xE254;
                  </i>
                </Link>
                <a
                  href='#deleteEmployeeModal'
                  className='delete'
                  data-toggle='modal'
                >
                  <i
                    className='material-icons'
                    data-toggle='tooltip'
                    title='Delete'
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    &#xE872;
                  </i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
