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
          console.log(response.data);

          history.push('/employees');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById()
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
    // <div id='addEmployeeModal' class='modal fade'>
    //   <div class='modal-dialog'>
    //     <div class='modal-content'>
    <>
      {title()}

      <div id='addEmployeeModal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <form>
              {/* <div class='modal-header'>
                <h4 class='modal-title'>Add Employee</h4>
                <button
                  type='button'
                  class='close'
                  data-dismiss='modal'
                  aria-hidden='true'
                >
                  &times;
                </button>
              </div> */}
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
                <div class='form-group'>
                  <label>Last Name</label>
                  <input
                    type='email'
                    className='form-control'
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                {/* <div class='form-group'>
                  <label>Address</label>
                  <textarea class='form-control' required></textarea>
                </div> */}
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
                {/* <input
                  type='button'
                  class='btn btn-default'
                  data-dismiss='modal'
                  value='Cancel'
                /> */}
                <Link to='/employees' className=''>
                  {/* {' '}
                  Cancel{' '} */}
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
                  value='Update'
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
