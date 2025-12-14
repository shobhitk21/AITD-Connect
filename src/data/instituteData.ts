import type { InstituteData } from '../types/institute';

/**
 * Complete institute data for Dr. Ambedkar Institute of Technology for Divyangjan (AITD)
 * This data structure contains all information about the institute including:
 * - Basic institute information
 * - Academic programs (degree and diploma)
 * - Affiliations
 * - Departments and faculty members
 */
export const instituteData: InstituteData = {
  institute: {
    name: "Dr. Ambedkar Institute of Technology for Divyangjan (AITD)",
    location: "Kanpur, Uttar Pradesh, India",
    established: 1997,
    director: "Prof. Rachna Asthana",
    website: "https://aitd.ac.in/"
  },
  academics: {
    degree_programs: [
      "B.Tech Computer Science & Engineering",
      "B.Tech Information Technology",
      "B.Tech Electronics Engineering",
      "B.Tech Chemical Engineering",
      "B.Tech Bio Technology",
      "B.Tech Computer Science & Engineering (AI & ML)"
    ],
    diploma_programs: [
      "Diploma in Computer Science & Engineering",
      "Diploma in Electronics Engineering",
      "Diploma in Architecture Assistantship",
      "Modern Office Management & Secretarial Practice"
    ],
    affiliations: {
      degree: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
      diploma: "Board of Technical Education, Uttar Pradesh (BTEUP)"
    }
  },
  departments: [
    {
      name: "Computer Science & Engineering",
      type: "Degree",
      faculty: [
        { name: "Dr. Rajesh Kumar", designation: "HOD & Associate Professor" },
        { name: "Dr. Priya Sharma", designation: "Assistant Professor" },
        { name: "Mr. Amit Verma", designation: "Assistant Professor" },
        { name: "Ms. Sneha Gupta", designation: "Assistant Professor" }
      ]
    },
    {
      name: "Information Technology",
      type: "Degree",
      faculty: [
        { name: "Dr. Anil Singh", designation: "HOD & Associate Professor" },
        { name: "Ms. Pooja Mishra", designation: "Assistant Professor" },
        { name: "Mr. Rahul Tiwari", designation: "Assistant Professor" }
      ]
    },
    {
      name: "Electronics Engineering",
      type: "Degree",
      faculty: [
        { name: "Dr. Suresh Yadav", designation: "HOD & Professor" },
        { name: "Dr. Kavita Pandey", designation: "Associate Professor" },
        { name: "Mr. Vijay Kumar", designation: "Assistant Professor" },
        { name: "Ms. Anita Rao", designation: "Assistant Professor" }
      ]
    },
    {
      name: "Chemical Engineering",
      type: "Degree",
      faculty: [
        { name: "Dr. Manoj Dubey", designation: "HOD & Associate Professor" },
        { name: "Dr. Sunita Jain", designation: "Assistant Professor" },
        { name: "Mr. Deepak Saxena", designation: "Assistant Professor" }
      ]
    },
    {
      name: "Bio Technology",
      type: "Degree",
      faculty: [
        { name: "Dr. Neha Agarwal", designation: "HOD & Associate Professor" },
        { name: "Dr. Ravi Prakash", designation: "Assistant Professor" },
        { name: "Ms. Swati Srivastava", designation: "Assistant Professor" }
      ]
    },
    {
      name: "Computer Science & Engineering (AI & ML)",
      type: "Degree",
      faculty: [
        { name: "Dr. Ashok Tripathi", designation: "Incharge & Associate Professor" },
        { name: "Dr. Meera Chaturvedi", designation: "Assistant Professor" },
        { name: "Mr. Sanjay Mishra", designation: "Assistant Professor" }
      ]
    },
    {
      name: "Computer Science & Engineering",
      type: "Diploma",
      faculty: [
        { name: "Mr. Ramesh Pal", designation: "Incharge & Senior Lecturer" },
        { name: "Ms. Geeta Devi", designation: "Lecturer" },
        { name: "Mr. Sunil Kumar", designation: "Lecturer" }
      ]
    },
    {
      name: "Electronics Engineering",
      type: "Diploma",
      faculty: [
        { name: "Mr. Dinesh Chandra", designation: "Incharge & Senior Lecturer" },
        { name: "Ms. Rekha Singh", designation: "Lecturer" },
        { name: "Mr. Pankaj Gupta", designation: "Lecturer" }
      ]
    },
    {
      name: "Architecture Assistantship & Office Management",
      type: "Diploma",
      faculty: [
        { name: "Ms. Archana Verma", designation: "Incharge & Senior Lecturer" },
        { name: "Mr. Mohit Sharma", designation: "Lecturer" },
        { name: "Ms. Nisha Yadav", designation: "Lecturer" }
      ]
    }
  ]
};
