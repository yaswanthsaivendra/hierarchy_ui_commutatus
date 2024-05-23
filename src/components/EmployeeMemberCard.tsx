import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EmployeeForm from './EmployeeForm'; // Assuming the EmployeeForm component exists
import { Employee, CompanyDataType } from '../types';
import { useEmployee } from '../hooks/useEmployee';

type EmployeeCardProps = {
  employee: Employee;
  teamName: string;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyDataType>>;
};

const EmployeeMemberCard: React.FC<EmployeeCardProps> = ({ employee, teamName, setCompanyData }) => {
  const { editTeamMember, deleteTeamMember } = useEmployee(setCompanyData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedEmployee: Employee) => {
    editTeamMember(teamName, updatedEmployee);
    setIsEditing(false);
  };

  const handleDelete = (memberId: number) => {
    deleteTeamMember(teamName, memberId);
  };

  return (
    <div>
      {isEditing ? (
        <EmployeeForm
          initialData={employee}
          onSave={handleEdit}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <li className="list-none border shadow-md rounded-md p-4 m-4 w-64 h-40 text-center flex flex-col justify-center">
            <h3 className="text-xl font-bold">
              {employee.position}: {employee.name}
            </h3>
            <p>ID: {employee.id}</p>
            <p>Phone: {employee.phoneNumber}</p>
            <p>Email: {employee.email}</p>
          </li>
          {employee.position === 'Team Member' &&
            <div className='flex justify-center items-center space-x-4'>
              <FaEdit size={20} className='cursor-pointer' onClick={() => setIsEditing(true)} />
              <MdDeleteForever size={24} className='cursor-pointer' onClick={() => handleDelete(employee.id)} />
            </div>
          }
        </>
      )}
    </div>
  );
};

export default EmployeeMemberCard;