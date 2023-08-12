import { University } from './university';

export interface Course {
  id: number
  name: string;
  minIELTSScoreNeeded?: number;
  university: University;
}

export const courses: Course[] = [
  {
    id: 1,
    name: 'Course A1',
    minIELTSScoreNeeded: 100,
    university: {name: 'University A'}
  },
  {
    id: 2,
    name: 'Course A2',
    minIELTSScoreNeeded: 200,
    university: {name: 'University A'}
  },
  {
    id: 3,
    name: 'Course A3',
    minIELTSScoreNeeded: 300,
    university: {name: 'University A'}
  },
  {
    id: 4,
    name: 'Course B1',
    minIELTSScoreNeeded: 140,
    university: {name: 'University B'}
  },
  {
    id: 5,
    name: 'Course B2',
    minIELTSScoreNeeded: 1000,
    university: {name: 'University B'}
  },
  {
    id: 6,
    name: 'Course B3',
    minIELTSScoreNeeded: 100,
    university: {name: 'University B'}
  },
  {
    id: 7,
    name: 'Course C1',
    minIELTSScoreNeeded: 200,
    university: {name: 'University C'}
  },
  {
    id: 8,
    name: 'Course C2',
    minIELTSScoreNeeded: 5000,
    university: {name: 'University C'}
  },
];
