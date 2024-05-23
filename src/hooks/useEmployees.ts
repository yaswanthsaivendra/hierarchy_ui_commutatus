import { useState, useEffect } from 'react';

type EmployeeType = {
  id: number;
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
};

type TeamType = {
  id: number;
  name: string;
  members: EmployeeType[];
};

type HeadType = {
  id: number;
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
  teams: TeamType[];
};

type EmployeesType = {
  ceo: EmployeeType;
  heads: HeadType[];
};

const initialEmployees: EmployeesType = {
  ceo: { id: 1, name: 'CEO Name', position: 'CEO', phoneNumber: '1234567890', email: 'ceo@example.com' },
  heads: [
    { id: 2, name: 'HR Head', position: 'Head of HR', phoneNumber: '2345678901', email: 'hr@example.com', teams: [] },
    { id: 3, name: 'Engineering Head', position: 'Head of Engineering', phoneNumber: '3456789012', email: 'engineering@example.com', teams: [] },
    { id: 4, name: 'Design Head', position: 'Head of Design', phoneNumber: '4567890123', email: 'design@example.com', teams: [] },
  ],
};

const useEmployees = () => {
  const [employees, setEmployees] = useState<EmployeesType>(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees') as string) || initialEmployees;
    return storedEmployees;
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addTeam = (headId: number, team: TeamType) => {
    setEmployees((prevEmployees) => {
      const updatedHeads = prevEmployees.heads.map((head) => {
        if (head.id === headId) {
          return { ...head, teams: [...head.teams, team] };
        }
        return head;
      });
      return { ...prevEmployees, heads: updatedHeads };
    });
  };

  const addEmployeeToTeam = (headId: number, teamId: number, employee: EmployeeType) => {
    setEmployees((prevEmployees) => {
      const updatedHeads = prevEmployees.heads.map((head) => {
        if (head.id === headId) {
          const updatedTeams = head.teams.map((team) => {
            if (team.id === teamId) {
              return { ...team, members: [...team.members, employee] };
            }
            return team;
          });
          return { ...head, teams: updatedTeams };
        }
        return head;
      });
      return { ...prevEmployees, heads: updatedHeads };
    });
  };

  return {
    employees,
    addTeam,
    addEmployeeToTeam,
  };
};

export default useEmployees;
