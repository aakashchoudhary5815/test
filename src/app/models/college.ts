import {courses} from './courses';
import {quick_facts} from './quickfacts';
import {about} from './about';
import {exams} from './exams';
import {admissions} from './admissions';
import {placements} from './placements';
import {facilities} from './facilities';
export interface college {
    _id: string;
    title: string;
    quick_facts: quick_facts;
    about: about[];
    degrees: [string];
    courses: courses[];
    exams: exams[];
    admissions: admissions[];
    placements: placements[];
    facilities: facilities[];
}