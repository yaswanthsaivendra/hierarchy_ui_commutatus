export interface Employee {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    position: string;
}

export interface Team {
    teamName: string;
    id: number;
    name: string;
    position: string;
    phoneNumber: string;
    email: string;
    members: Employee[];
}

export interface Head {
    id: number;
    name: string;
    position: string;
    phoneNumber: string;
    email: string;
    teams: Team[];
}


export interface CompanyDataType {
    ceo: Employee;
    heads: Head[];
}


// initial Data

export const initialData : CompanyDataType = {
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