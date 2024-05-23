import React from 'react';
import EmployeeCard from './EmployeeCard';

const Hierarchy: React.FC = () => {
    const employees = {
        ceo: {
            id: 1,
            name: 'John Doe',
            position: 'CEO',
            phoneNumber: '123456',
            email: 'jdoe@example.com'
        },
        heads: [
            {
                id: 2,
                name: 'Ravi',
                position: 'Head of Staff',
                phoneNumber: '1234567',
                email: 'ravi@example.com',
                teams: [
                    {
                        teamName: 'Team HR 1',
                        id: 3,
                        name: 'Maxwell',
                        position: 'Team Leader',
                        phoneNumber: '1234567',
                        email: 'team1@example.com',
                        members: [
                            {
                                id: 4,
                                name: 'Mavi',
                                position: 'Team Member',
                                phoneNumber: '1234567',
                                email: 'mavi@example.com'
                            },
                            {
                                id: 5,
                                name: 'Kavi',
                                position: 'Team Member',
                                phoneNumber: '1234567',
                                email: 'kavi@example.com'
                            }
                        ]
                    },
                    {
                        teamName: 'Team HR 2',
                        id: 6,
                        name: 'Rohit Sharma',
                        position: 'Team Leader',
                        phoneNumber: '1234567',
                        email: 'team2@example.com',
                        members: [
                            {
                                id: 7,
                                name: 'Lavi',
                                position: 'Team Member',
                                phoneNumber: '1234567',
                                email: 'lavi@example.com'
                            },
                            {
                                id: 7,
                                name: 'Lavi',
                                position: 'Team Member',
                                phoneNumber: '1234567',
                                email: 'lavi@example.com'
                            }
                        ]
                    }
                ]
            },
            {
                id: 8,
                name: 'Sam Wilson',
                position: 'Head of Engineering',
                phoneNumber: '1234568',
                email: 'sam@example.com',
                teams: [
                    {
                        teamName: 'Team Engineering 1',
                        id: 9,
                        name: 'Kohli',
                        position: 'Engineering Team Leader',
                        phoneNumber: '1234568',
                        email: 'teamA@example.com',
                        members: [
                            {
                                id: 10,
                                name: 'Tom',
                                position: 'Team Member',
                                phoneNumber: '1234568',
                                email: 'tom@example.com'
                            },
                            {
                                id: 10,
                                name: 'Tom',
                                position: 'Team Member',
                                phoneNumber: '1234568',
                                email: 'tom@example.com'
                            },
                            {
                                id: 10,
                                name: 'Tom',
                                position: 'Team Member',
                                phoneNumber: '1234568',
                                email: 'tom@example.com'
                            }
                        ]
                    }
                ]
            },
            {
                id: 11,
                name: 'Anna White',
                position: 'Head of Design',
                phoneNumber: '1234569',
                email: 'anna@example.com',
                teams: [
                    {
                        teamName: 'Team Designing 1',
                        id: 12,
                        name: 'Chahal',
                        position: 'Design Team Leader',
                        phoneNumber: '1234569',
                        email: 'teamX@example.com',
                        members: [
                            {
                                id: 13,
                                name: 'Emily',
                                position: 'Team Member',
                                phoneNumber: '1234569',
                                email: 'emily@example.com'
                            }
                        ]
                    }
                ]
            }
        ]
    };


    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Company Hierarchy</h2>
            <div className="flex flex-col items-center space-y-8">
                <EmployeeCard employee={employees.ceo} />
                <div className='flex'>
                    {employees.heads.map((head, headIndex) => (
                        <div key={headIndex} className="flex flex-col items-center space-y-8">
                            <EmployeeCard employee={head} />
                            <div className='flex'>
                                {head.teams.map((team, teamIndex) => (
                                    <div key={teamIndex} className='flex flex-col items-center space-y-4'>
                                        <h3 className='font-bold'>{team.teamName}</h3>
                                        <div className='flex flex-col items-center space-y-8'>
                                            <EmployeeCard employee={team} />
                                            <div className='flex'>
                                                {team.members.map((member, memberIndex) => (
                                                    <EmployeeCard key={memberIndex} employee={member} />
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
