/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy} from "../exercises/e17";

export function getGreatestDiscoveryYear(data) {
    /* Alternative way,using Map:
    */

    // const discoveriesByYear = new Map();
    // let count=1;
    // let greatestDiscoveryYear=data.asteroids[0];
    // for(const a of data.asteroids){
    //     const dY= a.discoveryYear;
    //     if(discoveriesByYear.has(dY)){
    //         let frequency=discoveriesByYear.get(dY)+1;
    //         discoveriesByYear.set(dY,frequency);
    //         if(frequency>count){
    //             count=frequency;
    //             greatestDiscoveryYear=dY;
    //         }
    //     }
    //     else{
    //         discoveriesByYear.set(dY,1);
    //     }
    // }
    // return greatestDiscoveryYear;
    

    //using Set and maxBy from previous exercise
    const years= new Set();
    data.asteroids.forEach(element => {
        years.add(element.discoveryYear);
    });
    years.forEach(y=>console.log(y));
    const count = (year) => data.asteroids.filter((a) => a.discoveryYear == year).length;
    return maxBy(Array.from(years),count);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
