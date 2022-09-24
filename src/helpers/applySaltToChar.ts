// import { isArray } from '../waelioUtils';
import textToChars from './textToChars';


export const applySaltToChar = (charachter: number[], salt = 'salt') => {
  
  textToChars(salt).reduce((previousValue: number[], currentValue: number[]) => previousValue ^ currentValue, charachter);
}
export default applySaltToChar;
