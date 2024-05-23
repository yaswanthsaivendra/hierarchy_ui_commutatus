import { Employee, CompanyDataType } from '../types';

export const useEmployee = (setCompanyData: React.Dispatch<React.SetStateAction<CompanyDataType>>) => {
  const addTeamMember = (teamName: string, newMember: Employee) => {
    setCompanyData((prevData) => {
      const updatedHeads = prevData.heads.map((head) => {
        return {
          ...head,
          teams: head.teams?.map((team) => {
            if (team.teamName === teamName) {
              return {
                ...team,
                members: [...team.members, newMember],
              };
            }
            return team;
          }),
        };
      });
      return { ...prevData, heads: updatedHeads };
    });
  };

  const editTeamMember = (teamName: string, updatedMember: Employee) => {
    setCompanyData((prevData) => {
      const updatedHeads = prevData.heads.map((head) => {
        return {
          ...head,
          teams: head.teams?.map((team) => {
            if (team.teamName === teamName) {
              return {
                ...team,
                members: team.members.map((member) => {
                  if (member.id === updatedMember.id) {
                    return { ...member, ...updatedMember };
                  }
                  return member;
                }),
              };
            }
            return team;
          }),
        };
      });
      return { ...prevData, heads: updatedHeads };
    });
  };

  const deleteTeamMember = (teamName: string, memberId: number) => {
    setCompanyData((prevData) => {
      const updatedHeads = prevData.heads.map((head) => {
        return {
          ...head,
          teams: head.teams?.map((team) => {
            if (team.teamName === teamName) {
              const remainingMembersCount = team.members.length - 1; // Number of remaining members after deletion
              if (remainingMembersCount === 0) {
                console.log("A team must have at least one member.");
                return team; // Return the original team without modification
              } else {
              return {
                ...team,
                members: team.members.filter((member) => member.id !== memberId),
              };
            }
            }
            return team;
          }),
        };
      });
      return { ...prevData, heads: updatedHeads };
    });
  };

  return { addTeamMember, editTeamMember, deleteTeamMember };
};
