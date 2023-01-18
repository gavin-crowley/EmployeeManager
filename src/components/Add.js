import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const Add = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = { firstName, lastName, emailId };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          history.push('/employees');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          // console.log(response.data);

          history.push('/employees');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmailId(response.data.emailId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className='text-center'>Update Employee</h2>;
    } else {
      return <h2 className='text-center'>Add Employee</h2>;
    }
  };

  return (
    <>
      {title()}

      <div id='addEmployeeModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <form>
              <div className='modal-body'>
                <div className='form-group'>
                  <label>First Name</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Last Name</label>
                  <input
                    type='email'
                    className='form-control'
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
              </div>
              <div className='modal-footer'>
                <Link to='/employees' className=''>
                  <input
                  type='button'
                  className='btn btn-default'
                  data-dismiss='modal'
                  value='Cancel'
                />
                </Link>
                <input
                  type='submit'
                  className='btn btn-success'
                  value='Submit'
                  onClick={(e) => saveOrUpdateEmployee(e)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
