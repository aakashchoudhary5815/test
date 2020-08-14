import {clubs} from './clubs';
export interface about {
    intro: string;
    location: string;
    accreditation: [string];
    collaborations: [string];
    clubs: clubs[];
}