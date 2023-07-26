/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy} from "../exercises/e17";

export function getGreatestDiscoveryYear(data) {
    /* Alternative way,using Map:
    */
   
    // const discoveryCounts = new Map();
    // let count=0;
    // let greatestDiscoveryYear;
    // for(const a of data.asteroids){
    //     const dY= a.discoveryYear;
    //     let frequency= (discoveryCounts.get(dY)||0)+1;
    //     discoveryCounts.set(dY, frequency);
    //     if(frequency>count){
    //         count=frequency;
    //         greatestDiscoveryYear=dY;
    //     }
    // }
    // return greatestDiscoveryYear;
    
    //using Set and maxBy from previous exercise
    const count = (year) => data.asteroids.filter((a) => a.discoveryYear == year).length;
    return maxBy(Array.from(new Set(data.asteroids.map((a) => a.discoveryYear))),count);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
