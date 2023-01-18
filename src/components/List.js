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
            <th></th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => (
            <tr key={i}>
              <td></td>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link className='edit' to={`/edit-employee/${employee.id}`}>
                  <i
                    className='material-icons'
                    data-toggle='tooltip'
                    title='Edit'
                  >
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
