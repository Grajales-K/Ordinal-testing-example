// However, this approach is flawed.

// const { run } = require("jest");

// The function explicitly accesses elements at specific indices (list[0] through list[3]).
// If the input array has more or fewer elements than 4, the function will either:
// Fail to sum all elements (for arrays longer than 4).
// Throw an error (e.g., undefined is added to total for indices that do not exist in shorter 
//  arrays).

/*
function sumValues(list){
    let total = 0;
    total += list[0]
    total += list[1]
    total += list[2]
    total += list[3]

    return total;
}

sumValues([1, 2, 3, 4]);

*/

function calculateMean(list) {
    let total = 0;
    for (const item of list) {
        total += item;
    }
    return total / list.length;
}

// calculateMean([1, 40, 15]);

module.exports = calculateMean ;

/*
to run this file we can invoke the test in this way,
we were running each file as node  nameFile.js
but now we can invoke with vsc Debugger  and iterate with 
the variables like this,  we can tick the red breakpoint and set
what we want to run, 
command shift p. then  
> enter, 
> debug: toggle auto attach
select Only With Flag
then in your terminal run
node --inspect namaFile.js and it will display a left panel 
where we can see the way that iterate the loop.Flag
*/


