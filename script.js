const people = [
    {name: "Bobby", birth: 1990, death: 2000},
    {name: "Yan", birth: 1992, death: 2012},
    {name: "Dasha", birth: 1912, death: 1915},
    {name: "Olya", birth: 1900, death: 2000},
    {name: "Babe", birth: 1921, death: 2012},
]

const getTheOldest = people => {
    let sorted = people.sort(function(a, b) {
        const lastGuy = a.death - a.birth;
        const nextGuy = b.death - b.birth;
        return lastGuy > nextGuy ? -1 : 1;
        // if (lastGuy > nextGuy) {
        //     return -1;
        // } else {
        //     return 1;
        // }
    })
    return sorted[0]
} 

console.log(getTheOldest(people));