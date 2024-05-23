import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Employee, CompanyDataType } from "../types";
import EmployeeForm from "./EmployeeForm";
import { useEmployee } from "../hooks/useEmployee";
import { FaEdit } from "react-icons/fa";

interface TeamProps {
  teamName: string;
  setCompanyData: React.Dispatch<React.SetStateAction<CompanyDataType>>;
  companyData: CompanyDataType;
}

const TeamName: React.FC<TeamProps> = ({ teamName, setCompanyData, companyData }) => {
  const { addTeamMember } = useEmployee(setCompanyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMember, setNewMember] = useState<Employee>({
    id: 0,
    name: "",
    phoneNumber: "",
    email: "",
    position: "Team Member",
  });
  const [editedTeamName, setEditedTeamName] = useState(teamName); // State to hold the edited team name
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTeamMember = (employee: Employee) => {
    addTeamMember(teamName, employee);
    setIsModalOpen(false);
    setNewMember({
      id: 0,
      name: "",
      phoneNumber: "",
      email: "",
      position: "Team Member",
    });
  };

  const handleEditTeamName = () => {
    const isUniqueName = checkUniqueTeamName(editedTeamName, teamName, companyData); // Check if the edited team name is unique
    if (isUniqueName) {
      // If the edited team name is unique, update the team name
      setTeamName(teamName, editedTeamName, setCompanyData);
      setIsEditing(false);
    } else {
      // If the edited team name is not unique, show an error message or handle accordingly
      console.log("Team name is not unique!");
    }
  };

  const checkUniqueTeamName = (teamName: string, teamNameToExclude: string | null, companyData: CompanyDataType) => {
    // Iterate over the heads to check for uniqueness
    for (const head of companyData.heads) {
      for (const team of head.teams || []) {
        // Skip the team with the name to exclude from the check
        if (team.teamName === teamNameToExclude) {
          continue;
        }
        if (team.teamName === teamName) {
          return false; // Team name already exists, not unique
        }
      }
    }
    return true; // Team name is unique
  };
  
  
  const setTeamName = (teamName: string, newName: string, setCompanyData: React.Dispatch<React.SetStateAction<CompanyDataType>>) => {
    setCompanyData((prevData) => {
      // Iterate over the heads to update the team name
      const updatedHeads = prevData.heads.map((head) => {
        const updatedTeams = (head.teams || []).map((team) => {
          if (team.teamName === teamName) {
            return {
              ...team,
              teamName: newName, // Update the team name
            };
          }
          return team;
        });
        return {
          ...head,
          teams: updatedTeams,
        };
      });
      return { ...prevData, heads: updatedHeads };
    });
  };
  

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTeamName(e.target.value);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex space-x-2 items-center">
      {!isEditing ? (
        <>
          <h3 className="font-bold">{teamName}</h3>
          <IoMdAddCircle
            size={24}
            className="cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
          <FaEdit
            size={20}
            className="cursor-pointer"
            onClick={handleEditButtonClick}
          />
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedTeamName}
            onChange={handleTeamNameChange}
            className="border border-gray-400 rounded-md p-1"
          />
          <button onClick={handleEditTeamName}>Save</button>
        </>
      )}
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
