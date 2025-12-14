// TypeScript interfaces for AITD Institute Data

export interface Institute {
  name: string;
  location: string;
  established: number;
  director: string;
  website: string;
}

export interface Affiliation {
  degree: string;
  diploma: string;
}

export interface Academics {
  degree_programs: string[];
  diploma_programs: string[];
  affiliations: Affiliation;
}

export interface FacultyMember {
  name: string;
  designation: string;
}

export interface Department {
  name: string;
  type: 'Degree' | 'Diploma';
  faculty: FacultyMember[];
}

export interface InstituteData {
  institute: Institute;
  academics: Academics;
  departments: Department[];
}
