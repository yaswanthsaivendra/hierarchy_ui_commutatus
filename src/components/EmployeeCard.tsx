import React from 'react';
import { FaEdit } from "react-icons/fa";
import { Employee } from '../types';


type EmployeeProps = {
  employee: Employee
};

const EmployeeCard: React.FC<EmployeeProps> = ({ employee }) => {
  return (
    <div className=''>
      <li className="list-none border-2 shadow-md rounded-md p-4 m-4 w-64 h-40 text-center flex flex-col justify-center">
        <h3 className="text-xl font-bold">
          {employee.position}: {employee.name}
        </h3>
        <p>ID: {employee.id}</p>
        <p>Phone: {employee.phoneNumber}</p>
        <p>Email: {employee.email}</p>
      </li>
      {employee.position === 'Team Leader' ?
        (
          <div className='flex justify-center items-center space-x-4'>
            <FaEdit size={20}/>
          </div>

        ) : (
          <></>
        )
      }

    </div>
  );
};

export default EmployeeCard;

