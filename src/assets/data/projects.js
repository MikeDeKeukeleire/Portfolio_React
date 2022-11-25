import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Website Flaco Media',
    desc: 'Website voor mijn zelfstandig webdesign bedrijf.',
    img: UTrackerImg,
  },
];

export default projects;
