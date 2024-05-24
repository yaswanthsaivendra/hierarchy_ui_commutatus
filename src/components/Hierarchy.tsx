import React from 'react';
import EmployeeCard from './EmployeeCard';
import EmployeeMemberCard from './EmployeeMemberCard';
import TeamName from './TeamName';
import { useState, useEffect } from'react';
import { initialData, CompanyDataType } from '../types';

const Hierarchy: React.FC = () => {
    
    const [companyData, setCompanyData] = useState<CompanyDataType>(() => {
        const savedData = localStorage.getItem('companyData');
        return savedData ? JSON.parse(savedData) : initialData;
    });

    useEffect(() => {
        localStorage.setItem('companyData', JSON.stringify(companyData));
    }, [companyData]);

    
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Company Hierarchy</h2>
            <div className="flex flex-col items-center space-y-8">
                <EmployeeCard employee={companyData.ceo} />
                <div className='flex'>
                    {companyData.heads.map((head, headIndex) => (
                        <div key={headIndex} className="flex flex-col items-center space-y-8">
                            <EmployeeCard employee={head} />
                            <div className='flex'>
                                {head.teams.map((team, teamIndex) => (
                                    <div key={teamIndex} className='flex flex-col items-center space-y-4'>
                                        <TeamName teamName={team.teamName} setCompanyData={setCompanyData} companyData={companyData} />
                                        <div className='flex flex-col items-center space-y-8'>
                                            <EmployeeMemberCard employee={team} teamName={team.teamName} setCompanyData={setCompanyData}/>
                                            <div className='flex'>
                                                {team.members.map((member, memberIndex) => (
                                                    <EmployeeMemberCard key={memberIndex} employee={member} teamName={team.teamName} setCompanyData={setCompanyData} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hierarchy;
