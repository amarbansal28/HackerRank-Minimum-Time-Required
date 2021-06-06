function minTime(machines, goal) {
    let slowest = machines.sort().reverse();
    let maxDays = parseInt(goal*slowest[0]);
    let count = 0;
    for(let d = 1; d <= maxDays; d++){
        for(let m = 0; m < machines.length; m++){
            if(d % machines[m] == 0){
                count++;
                if(count === goal){
                    return d;
                }
            }    
        }        
    }
}
minTime([2,3],5)
// o/p -> 6
