import { University } from './university';

export interface Course {
  id: number;
  name: string;
  minIELTSScoreNeeded: number;
  duration: number;
  fee: number;
  university: University;
}

export const courses: Course[] = [
  {
    id: 1,
    name: 'Bachelor in Computer Science',
    minIELTSScoreNeeded: 100,
    duration: 4,
    fee: 25225,
    university: { name: 'Duke University', website: 'www.dukeuniversity.com' },
  },
  {
    id: 2,
    name: 'Bachelor in Civil Engineering',
    minIELTSScoreNeeded: 200,
    duration: 4,
    fee: 60000,
    university: { name: 'Duke University', website: 'www.dukeuniversity.com' },
  },
  {
    id: 3,
    name: 'Bachelor in Chemical Engineering',
    minIELTSScoreNeeded: 300,
    duration: 4,
    fee: 75000,
    university: {
      name: 'Cambridge University',
      website: 'www.cambridgeuniversity.com',
    },
  },
  {
    id: 4,
    name: 'Master of Science in Engineering Management',
    minIELTSScoreNeeded: 140,
    duration: 2,
    fee: 15000,
    university: {
      name: 'California State University',
      website: 'www.californiauniversity.com',
    },
  },
  {
    id: 5,
    name: 'Master of Science in Biochemistry',
    minIELTSScoreNeeded: 1000,
    duration: 2,
    fee: 40000,
    university: {
      name: 'Stanford University',
      website: 'www.stanforduniversity.com',
    },
  },
  {
    id: 6,
    name: 'Bachelor in Computer Science',
    minIELTSScoreNeeded: 100,
    duration: 4,
    fee: 30000,
    university: {
      name: 'Stanford University',
      website: 'www.stanforduniversity.com',
    },
  },
  {
    id: 7,
    name: 'Bachelor in Chemical Engineering',
    minIELTSScoreNeeded: 200,
    duration: 4,
    fee: 125000,
    university: {
      name: 'Bern University of Applied Sciences',
      website: 'www.bernuniversity.com',
    },
  },
  {
    id: 8,
    name: 'Bachelor of Science in Physiotherapy',
    minIELTSScoreNeeded: 5000,
    duration: 4,
    fee: 50000,
    university: {
      name: 'Amsterdam University',
      website: 'www.amsterdamuniversity.com',
    },
  },
];
