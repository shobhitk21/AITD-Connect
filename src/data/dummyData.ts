// Dummy Data for AITD connect Portal

export interface Resource {
  id: string;
  title: string;
  type: 'Book' | 'Video' | 'Website' | 'Practice';
  author: string;
  subject: string;
  topic: string;
  description: string;
  url: string;
  rating: number;
}

export interface Student {
  rollNo: string;
  name: string;
  branch: string;
  semester: number;
  email: string;
  attendance: number;
  cgpa: number;
  sgpa: number;
  subjects: SubjectMark[];
}

export interface SubjectMark {
  name: string;
  code: string;
  internalMarks: number;
  maxMarks: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  subject: string;
  questions: QuizQuestion[];
}

export interface AIResponse {
  keywords: string[];
  response: string;
}

// Resources Data
export const resources: Resource[] = [
  // Data Structures
  {
    id: 'res-1',
    title: 'Introduction to Algorithms',
    type: 'Book',
    author: 'Thomas H. Cormen',
    subject: 'Data Structures',
    topic: 'Algorithms',
    description: 'The comprehensive guide to algorithms covering sorting, searching, graph algorithms, and more. Essential for competitive programming.',
    url: '#',
    rating: 4.9,
  },
  {
    id: 'res-2',
    title: 'Data Structures Easy to Advanced',
    type: 'Video',
    author: 'William Fiset (freeCodeCamp)',
    subject: 'Data Structures',
    topic: 'Complete DSA',
    description: 'An 8-hour comprehensive video course covering all data structures from arrays to advanced trees and graphs.',
    url: '#',
    rating: 4.8,
  },
  {
    id: 'res-3',
    title: 'LeetCode',
    type: 'Practice',
    author: 'LeetCode Team',
    subject: 'Data Structures',
    topic: 'Problem Solving',
    description: 'The ultimate platform for practicing coding problems. Features 2000+ problems with company-specific tags.',
    url: 'https://leetcode.com',
    rating: 4.9,
  },
  {
    id: 'res-4',
    title: 'GeeksforGeeks DSA',
    type: 'Website',
    author: 'GeeksforGeeks',
    subject: 'Data Structures',
    topic: 'Complete DSA',
    description: 'Comprehensive tutorials and practice problems for all data structure topics with interview preparation.',
    url: 'https://geeksforgeeks.org',
    rating: 4.7,
  },
  // DBMS
  {
    id: 'res-5',
    title: 'Database System Concepts',
    type: 'Book',
    author: 'Abraham Silberschatz',
    subject: 'DBMS',
    topic: 'Database Fundamentals',
    description: 'The definitive textbook covering relational databases, SQL, transactions, and modern database systems.',
    url: '#',
    rating: 4.8,
  },
  {
    id: 'res-6',
    title: 'SQL Tutorial - Full Database Course',
    type: 'Video',
    author: 'freeCodeCamp',
    subject: 'DBMS',
    topic: 'SQL',
    description: 'Complete SQL course for beginners covering queries, joins, subqueries, and database design.',
    url: '#',
    rating: 4.7,
  },
  {
    id: 'res-7',
    title: 'SQLZoo',
    type: 'Practice',
    author: 'SQLZoo Team',
    subject: 'DBMS',
    topic: 'SQL Practice',
    description: 'Interactive SQL tutorial with hands-on exercises. Perfect for learning and practicing SQL queries.',
    url: 'https://sqlzoo.net',
    rating: 4.6,
  },
  // Operating Systems
  {
    id: 'res-8',
    title: 'Operating System Concepts',
    type: 'Book',
    author: 'Silberschatz, Galvin, Gagne',
    subject: 'Operating Systems',
    topic: 'OS Fundamentals',
    description: 'The dinosaur book - covering processes, threads, memory management, file systems, and security.',
    url: '#',
    rating: 4.8,
  },
  {
    id: 'res-9',
    title: 'OS Concepts by Neso Academy',
    type: 'Video',
    author: 'Neso Academy',
    subject: 'Operating Systems',
    topic: 'Complete OS',
    description: 'Detailed video lectures on operating systems with visual explanations and examples.',
    url: '#',
    rating: 4.7,
  },
  // Computer Networks
  {
    id: 'res-10',
    title: 'Computer Networking: A Top-Down Approach',
    type: 'Book',
    author: 'James Kurose',
    subject: 'Computer Networks',
    topic: 'Networking Fundamentals',
    description: 'Comprehensive coverage of networking from application layer to physical layer with practical examples.',
    url: '#',
    rating: 4.8,
  },
  {
    id: 'res-11',
    title: 'Computer Networks by Gate Smashers',
    type: 'Video',
    author: 'Gate Smashers',
    subject: 'Computer Networks',
    topic: 'CN for GATE',
    description: 'Focused video series on computer networks for competitive exam preparation.',
    url: '#',
    rating: 4.6,
  },
  // AI & ML
  {
    id: 'res-12',
    title: 'Machine Learning by Andrew Ng',
    type: 'Video',
    author: 'Andrew Ng (Coursera)',
    subject: 'AI & ML',
    topic: 'Machine Learning',
    description: 'The most popular ML course covering supervised learning, neural networks, and practical ML tips.',
    url: '#',
    rating: 4.9,
  },
  {
    id: 'res-13',
    title: 'Kaggle',
    type: 'Practice',
    author: 'Kaggle Community',
    subject: 'AI & ML',
    topic: 'ML Practice',
    description: 'Platform for data science competitions, datasets, and notebooks. Learn by doing real projects.',
    url: 'https://kaggle.com',
    rating: 4.8,
  },
];

// Students Data
export const students: Student[] = [
  {
    rollNo: '2021CSE001',
    name: 'Rahul Kumar',
    branch: 'Computer Science & Engineering',
    semester: 5,
    email: 'rahul.kumar@aitd.ac.in',
    attendance: 87,
    cgpa: 8.5,
    sgpa: 8.7,
    subjects: [
      { name: 'Data Structures', code: 'CS301', internalMarks: 28, maxMarks: 30 },
      { name: 'Database Management', code: 'CS302', internalMarks: 25, maxMarks: 30 },
      { name: 'Operating Systems', code: 'CS303', internalMarks: 27, maxMarks: 30 },
      { name: 'Computer Networks', code: 'CS304', internalMarks: 24, maxMarks: 30 },
      { name: 'Software Engineering', code: 'CS305', internalMarks: 26, maxMarks: 30 },
    ],
  },
  {
    rollNo: '2021CSE002',
    name: 'Priya Sharma',
    branch: 'Computer Science & Engineering',
    semester: 5,
    email: 'priya.sharma@aitd.ac.in',
    attendance: 92,
    cgpa: 9.1,
    sgpa: 9.3,
    subjects: [
      { name: 'Data Structures', code: 'CS301', internalMarks: 29, maxMarks: 30 },
      { name: 'Database Management', code: 'CS302', internalMarks: 28, maxMarks: 30 },
      { name: 'Operating Systems', code: 'CS303', internalMarks: 27, maxMarks: 30 },
      { name: 'Computer Networks', code: 'CS304', internalMarks: 28, maxMarks: 30 },
      { name: 'Software Engineering', code: 'CS305', internalMarks: 29, maxMarks: 30 },
    ],
  },
  {
    rollNo: '2021IT001',
    name: 'Amit Verma',
    branch: 'Information Technology',
    semester: 5,
    email: 'amit.verma@aitd.ac.in',
    attendance: 78,
    cgpa: 7.8,
    sgpa: 8.0,
    subjects: [
      { name: 'Data Structures', code: 'IT301', internalMarks: 24, maxMarks: 30 },
      { name: 'Database Management', code: 'IT302', internalMarks: 22, maxMarks: 30 },
      { name: 'Operating Systems', code: 'IT303', internalMarks: 25, maxMarks: 30 },
      { name: 'Web Technologies', code: 'IT304', internalMarks: 26, maxMarks: 30 },
      { name: 'Software Engineering', code: 'IT305', internalMarks: 23, maxMarks: 30 },
    ],
  },
  {
    rollNo: '2021ECE001',
    name: 'Sneha Gupta',
    branch: 'Electronics & Communication',
    semester: 5,
    email: 'sneha.gupta@aitd.ac.in',
    attendance: 95,
    cgpa: 8.9,
    sgpa: 9.0,
    subjects: [
      { name: 'Digital Signal Processing', code: 'EC301', internalMarks: 27, maxMarks: 30 },
      { name: 'Communication Systems', code: 'EC302', internalMarks: 28, maxMarks: 30 },
      { name: 'Microprocessors', code: 'EC303', internalMarks: 26, maxMarks: 30 },
      { name: 'Control Systems', code: 'EC304', internalMarks: 27, maxMarks: 30 },
      { name: 'Electromagnetic Theory', code: 'EC305', internalMarks: 25, maxMarks: 30 },
    ],
  },
];

// Quizzes Data
export const quizzes: Record<string, Quiz> = {
  'Data Structures': {
    subject: 'Data Structures',
    questions: [
      {
        id: 1,
        question: 'What is the time complexity of binary search in a sorted array?',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
        correctAnswer: 1,
        explanation: 'Binary search divides the search space in half at each step, resulting in O(log n) complexity.',
      },
      {
        id: 2,
        question: 'Which data structure uses LIFO (Last In First Out) principle?',
        options: ['Queue', 'Stack', 'Linked List', 'Tree'],
        correctAnswer: 1,
        explanation: 'Stack follows LIFO - the last element added is the first one to be removed.',
      },
      {
        id: 3,
        question: 'What is the worst-case time complexity of QuickSort?',
        options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'],
        correctAnswer: 2,
        explanation: 'QuickSort has O(n²) worst-case when the pivot selection is poor (e.g., already sorted array).',
      },
      {
        id: 4,
        question: 'Which traversal of a BST gives elements in sorted order?',
        options: ['Preorder', 'Postorder', 'Inorder', 'Level order'],
        correctAnswer: 2,
        explanation: 'Inorder traversal (Left-Root-Right) of a BST always gives elements in ascending order.',
      },
      {
        id: 5,
        question: 'What is the space complexity of a recursive fibonacci function?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(2^n)'],
        correctAnswer: 1,
        explanation: 'The recursion depth goes up to n, so the call stack uses O(n) space.',
      },
    ],
  },
  'DBMS': {
    subject: 'DBMS',
    questions: [
      {
        id: 1,
        question: 'What does ACID stand for in database transactions?',
        options: [
          'Atomicity, Consistency, Isolation, Durability',
          'Association, Consistency, Integrity, Durability',
          'Atomicity, Completeness, Isolation, Data',
          'Association, Completeness, Integrity, Data',
        ],
        correctAnswer: 0,
        explanation: 'ACID properties ensure reliable database transactions: Atomicity, Consistency, Isolation, Durability.',
      },
      {
        id: 2,
        question: 'Which normal form eliminates transitive dependencies?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correctAnswer: 2,
        explanation: '3NF (Third Normal Form) eliminates transitive dependencies on the primary key.',
      },
      {
        id: 3,
        question: 'What type of JOIN returns all rows from both tables?',
        options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
        correctAnswer: 3,
        explanation: 'FULL OUTER JOIN returns all rows from both tables, with NULLs where there is no match.',
      },
      {
        id: 4,
        question: 'Which SQL command is used to remove a table structure?',
        options: ['DELETE', 'DROP', 'TRUNCATE', 'REMOVE'],
        correctAnswer: 1,
        explanation: 'DROP TABLE removes the entire table structure and data from the database.',
      },
      {
        id: 5,
        question: 'What is a foreign key?',
        options: [
          'A key that uniquely identifies a row',
          'A key that references a primary key in another table',
          'A key that cannot be null',
          'A combination of multiple keys',
        ],
        correctAnswer: 1,
        explanation: 'A foreign key is a field that references the primary key of another table, establishing a relationship.',
      },
    ],
  },
  'Operating Systems': {
    subject: 'Operating Systems',
    questions: [
      {
        id: 1,
        question: 'What is a mutex in operating systems?',
        options: [
          'A type of process',
          'A synchronization primitive for mutual exclusion',
          'A memory allocation technique',
          'A scheduling algorithm',
        ],
        correctAnswer: 1,
        explanation: 'A mutex (mutual exclusion) is a synchronization object that prevents multiple threads from accessing a shared resource simultaneously.',
      },
      {
        id: 2,
        question: 'Which scheduling algorithm may cause starvation?',
        options: ['Round Robin', 'FCFS', 'Priority Scheduling', 'Shortest Job Next'],
        correctAnswer: 2,
        explanation: 'Priority Scheduling can cause starvation where low-priority processes never get CPU time.',
      },
      {
        id: 3,
        question: 'What is thrashing in operating systems?',
        options: [
          'CPU overheating',
          'Excessive paging causing performance degradation',
          'Memory leak',
          'Process termination',
        ],
        correctAnswer: 1,
        explanation: 'Thrashing occurs when the system spends more time swapping pages than executing processes.',
      },
      {
        id: 4,
        question: 'What is a deadlock?',
        options: [
          'A process that never terminates',
          'A situation where processes are waiting indefinitely for resources',
          'A type of memory allocation',
          'A CPU scheduling technique',
        ],
        correctAnswer: 1,
        explanation: 'Deadlock occurs when processes are blocked, each waiting for a resource held by another.',
      },
      {
        id: 5,
        question: 'Which page replacement algorithm is optimal?',
        options: ['FIFO', 'LRU', 'OPT (Optimal)', 'Random'],
        correctAnswer: 2,
        explanation: 'OPT (Optimal) algorithm replaces the page that will not be used for the longest time, but requires future knowledge.',
      },
    ],
  },
  'Computer Networks': {
    subject: 'Computer Networks',
    questions: [
      {
        id: 1,
        question: 'Which layer of the OSI model is responsible for routing?',
        options: ['Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer'],
        correctAnswer: 1,
        explanation: 'The Network Layer (Layer 3) handles routing and forwarding of packets between networks.',
      },
      {
        id: 2,
        question: 'What protocol is used for reliable data transfer?',
        options: ['UDP', 'TCP', 'IP', 'ARP'],
        correctAnswer: 1,
        explanation: 'TCP (Transmission Control Protocol) provides reliable, ordered, and error-checked delivery.',
      },
      {
        id: 3,
        question: 'What is the default port number for HTTP?',
        options: ['21', '22', '80', '443'],
        correctAnswer: 2,
        explanation: 'HTTP uses port 80 by default. HTTPS uses port 443.',
      },
      {
        id: 4,
        question: 'What does DNS stand for?',
        options: [
          'Data Network System',
          'Domain Name System',
          'Digital Network Service',
          'Dynamic Network Server',
        ],
        correctAnswer: 1,
        explanation: 'DNS (Domain Name System) translates domain names to IP addresses.',
      },
      {
        id: 5,
        question: 'Which topology has the highest redundancy?',
        options: ['Bus', 'Star', 'Ring', 'Mesh'],
        correctAnswer: 3,
        explanation: 'Mesh topology provides the highest redundancy as each node connects to multiple other nodes.',
      },
    ],
  },
};

// AI Responses Data
export const aiResponses: AIResponse[] = [
  {
    keywords: ['mutex', 'mutual exclusion', 'synchronization'],
    response: `## Mutex (Mutual Exclusion)

**Hello! I'm Gemini, your AI Academic Guide.** 🎓

A **mutex** is a synchronization primitive used in operating systems to prevent multiple threads or processes from simultaneously accessing a shared resource.

### Key Concepts:

1. **Lock & Unlock**: A mutex can be in one of two states:
   - **Locked**: A thread owns the mutex
   - **Unlocked**: The mutex is available

2. **Binary Nature**: Only one thread can hold the mutex at a time

3. **Example Use Case**:
\`\`\`c
pthread_mutex_lock(&mutex);
// Critical section - safe to access shared resource
shared_counter++;
pthread_mutex_unlock(&mutex);
\`\`\`

### Why Use Mutex?
- Prevents **race conditions**
- Ensures **data consistency**
- Protects **critical sections**

### Related Topics:
- Semaphores (counting vs binary)
- Deadlock prevention
- Monitor pattern

*Would you like me to explain any related concept?*`,
  },
  {
    keywords: ['binary search', 'search algorithm', 'searching'],
    response: `## Binary Search Algorithm

**Hello! I'm Gemini, your AI Academic Guide.** 🎓

**Binary Search** is an efficient algorithm for finding an element in a **sorted array** with **O(log n)** time complexity.

### How It Works:

1. Start with the middle element
2. If target equals middle → Found!
3. If target < middle → Search left half
4. If target > middle → Search right half
5. Repeat until found or subarray is empty

### Code Example:
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Not found
\`\`\`

### Complexity Analysis:
| Case | Time Complexity |
|------|----------------|
| Best | O(1) |
| Average | O(log n) |
| Worst | O(log n) |

*Need more examples or variations?*`,
  },
  {
    keywords: ['sql', 'join', 'database'],
    response: `## SQL JOINs Explained

**Hello! I'm Gemini, your AI Academic Guide.** 🎓

JOINs are used to combine rows from two or more tables based on related columns.

### Types of JOINs:

1. **INNER JOIN**: Returns matching rows from both tables
2. **LEFT JOIN**: All rows from left + matching from right
3. **RIGHT JOIN**: All rows from right + matching from left
4. **FULL OUTER JOIN**: All rows from both tables

### Visual Example:
\`\`\`
Table A    Table B    INNER JOIN Result
+---+      +---+      +---+---+
| 1 |      | 1 |      | 1 | 1 |
| 2 |      | 3 |      +---+---+
| 3 |      | 4 |
+---+      +---+
\`\`\`

### Syntax:
\`\`\`sql
SELECT columns
FROM table1
INNER JOIN table2
ON table1.column = table2.column;
\`\`\`

*Want me to explain a specific JOIN type in detail?*`,
  },
  {
    keywords: ['deadlock', 'process', 'resource'],
    response: `## Deadlock in Operating Systems

**Hello! I'm Gemini, your AI Academic Guide.** 🎓

A **deadlock** is a situation where processes are blocked forever, each waiting for resources held by others.

### Four Necessary Conditions (Coffman):

1. **Mutual Exclusion**: Resources cannot be shared
2. **Hold and Wait**: Process holds resources while waiting
3. **No Preemption**: Resources cannot be forcibly taken
4. **Circular Wait**: Circular chain of waiting processes

### Deadlock Prevention Strategies:

| Strategy | Approach |
|----------|----------|
| Prevention | Eliminate one condition |
| Avoidance | Banker's Algorithm |
| Detection | Resource allocation graph |
| Recovery | Kill process or preempt |

### Example Scenario:
- Process A holds Resource 1, waits for Resource 2
- Process B holds Resource 2, waits for Resource 1
- **Result**: Both wait forever! 🔄

*Would you like to learn about Banker's Algorithm?*`,
  },
  {
    keywords: ['hello', 'hi', 'help', 'what can you do'],
    response: `## Welcome to AITD connect AI Assistant!

**Hello! I'm Gemini, your AI Academic Guide.** 🎓

I'm here to help you with your academic queries. Here's what I can assist you with:

### 📚 Topics I Can Help With:

- **Data Structures & Algorithms**
  - Arrays, Trees, Graphs, Sorting
  - Time & Space Complexity
  
- **Database Management (DBMS)**
  - SQL Queries, Normalization
  - Transactions, ACID Properties

- **Operating Systems**
  - Process Management, Scheduling
  - Memory Management, Deadlocks

- **Computer Networks**
  - OSI Model, TCP/IP
  - Protocols, Routing

### 💡 Try Asking:
- "What is a mutex in OS?"
- "Explain binary search"
- "How do SQL JOINs work?"
- "What causes deadlock?"

*Just type your question and I'll provide a detailed explanation!*`,
  },
];

// College Information
export const collegeInfo = {
  name: 'Dr. Ambedkar Institute of Technology for Divyangjan',
  shortName: 'AITD',
  location: 'Kanpur',
  established: 1997,
  type: 'Government Institution',
  affiliation: 'AKTU (Dr. A.P.J. Abdul Kalam Technical University)',
  
  about: `Dr. Ambedkar Institute of Technology for Divyangjan (AITD), Kanpur was established in 1997 as a pioneering institution dedicated to providing quality technical education to persons with disabilities (Divyangjan). The institute operates under the Ministry of Social Justice and Empowerment, Government of India, and is affiliated to AKTU.

AITD is committed to creating a barrier-free educational environment that empowers students with disabilities to achieve their full potential in the field of technology and engineering. The campus is designed with complete accessibility features including ramps, elevators, accessible restrooms, and specialized equipment.`,

  vision: 'To be a center of excellence in technical education for persons with disabilities, fostering innovation, inclusivity, and empowerment.',
  
  mission: 'To provide quality technical education with a barrier-free environment, enabling Divyangjan students to become competent professionals and contribute meaningfully to society.',

  courses: {
    diploma: [
      { name: 'Diploma in Computer Science & Engineering', duration: '3 Years', intake: 60 },
      { name: 'Diploma in Electronics & Communication', duration: '3 Years', intake: 60 },
      { name: 'Diploma in Electrical Engineering', duration: '3 Years', intake: 60 },
    ],
    btech: [
      { name: 'B.Tech in Computer Science & Engineering', duration: '4 Years', intake: 60 },
      { name: 'B.Tech in Information Technology', duration: '4 Years', intake: 60 },
      { name: 'B.Tech in Artificial Intelligence & Machine Learning', duration: '4 Years', intake: 30 },
      { name: 'B.Tech in Electronics & Communication Engineering', duration: '4 Years', intake: 60 },
    ],
  },

  infrastructure: [
    { name: 'Barrier-Free Campus', description: 'Ramps, elevators, and accessible pathways throughout the campus' },
    { name: 'Smart Classrooms', description: 'Audio-visual equipped classrooms with assistive technologies' },
    { name: 'Computer Labs', description: 'State-of-the-art labs with screen readers and accessibility software' },
    { name: '24/7 Wi-Fi', description: 'High-speed internet connectivity across the campus' },
    { name: 'Accessible Library', description: 'Digital resources, audiobooks, and braille materials' },
    { name: 'Hostel Facilities', description: 'Separate accessible hostels for boys and girls' },
    { name: 'Medical Center', description: 'On-campus medical facility with specialized care' },
    { name: 'Accessible Transport', description: 'Modified vehicles for student transportation' },
  ],

  placements: {
    averagePackage: '4.5 LPA',
    highestPackage: '12 LPA',
    placementRate: '85%',
    topRecruiters: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Cognizant', 'Capgemini', 'IBM'],
  },

  contact: {
    address: 'Awadhpuri (Opp. Rama Dental College), Kanpur – 208024, Uttar Pradesh, India',
    phone: '0512-2583221',
    email: 'director@aith.ac.in',
    alternateEmail: 'info@aith.ac.in',
    website: 'https://aith.ac.in',
  },
};

// Accessibility Resources
export const accessibilityResources = [
  {
    title: 'NVDA Screen Reader',
    description: 'Free, open-source screen reader for Windows',
    url: 'https://www.nvaccess.org/',
    category: 'Screen Reader',
  },
  {
    title: 'JAWS Screen Reader',
    description: 'Professional screen reader with extensive features',
    url: 'https://www.freedomscientific.com/products/software/jaws/',
    category: 'Screen Reader',
  },
  {
    title: 'Microsoft Accessibility',
    description: 'Built-in Windows accessibility features and tools',
    url: 'https://www.microsoft.com/en-us/accessibility',
    category: 'Tools',
  },
  {
    title: 'WebAIM',
    description: 'Web accessibility resources and guidelines',
    url: 'https://webaim.org/',
    category: 'Learning',
  },
  {
    title: 'Accessible PDFs Guide',
    description: 'How to create and read accessible PDF documents',
    url: 'https://www.adobe.com/accessibility.html',
    category: 'Documents',
  },
];

// Easy Read Notes
export const easyReadNotes = {
  title: 'Introduction to Data Structures',
  content: [
    {
      heading: 'What is a Data Structure?',
      points: [
        'A data structure is a way to organize and store data',
        'It helps us access and modify data efficiently',
        'Examples: Arrays, Lists, Trees, Graphs',
      ],
    },
    {
      heading: 'Why Learn Data Structures?',
      points: [
        'Write better and faster programs',
        'Solve complex problems easily',
        'Essential for coding interviews',
        'Foundation for all programming',
      ],
    },
    {
      heading: 'Common Data Structures',
      points: [
        'Array: Fixed-size collection of elements',
        'Linked List: Chain of connected nodes',
        'Stack: Last-In-First-Out (LIFO)',
        'Queue: First-In-First-Out (FIFO)',
        'Tree: Hierarchical structure with root',
        'Graph: Network of connected nodes',
      ],
    },
  ],
};

// Get subject list for dropdowns
export const subjects = [
  'Data Structures',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'AI & ML',
];
