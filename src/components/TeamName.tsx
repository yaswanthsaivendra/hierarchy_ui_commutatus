import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Employee, CompanyDataType } from "../types";
import EmployeeForm from "./EmployeeForm";
import { useEmployee } from "../hooks/useEmployee";


interface TeamProps {
  teamName: string;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyDataType>>;
}


const TeamName: React.FC<TeamProps> = ({ teamName, setCompanyData }) => {
  const { addTeamMember } = useEmployee(setCompanyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState<Employee>({
    id: 0,
    name: '',
    phoneNumber: '',
    email: '',
    position: 'Team Member'
  });

  const handleAddTeamMember = (employee: Employee) => {
    addTeamMember(teamName, employee);
    setIsModalOpen(false);
    setNewMember({
        id: 0,
        name: '',
        phoneNumber: '',
        email: '',
        position: 'Team Member'
    });
  };

  return (
    <div className="flex space-x-2">
      <h3 className='font-bold'>{teamName}</h3>
      <IoMdAddCircle size={24} className="cursor-pointer" onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <EmployeeForm
          initialData={newMember}
          onSave={handleAddTeamMember}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TeamName;
