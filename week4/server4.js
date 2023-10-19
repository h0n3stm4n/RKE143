const school = {
    nimi: "Hogwarts",
    asukoht: {
        linn: "Hogsmeade",
        maakond: "Šoti Kõrge-Šotimaa",
        riik: "Suurbritannia"
    },
    tudeng: [
        {
            eesnimi: "Harry",
            perenimi: "Potter",
            majad: ["Gryffindor", "Kolmas aasta"]
        },
        {
            eesnimi: "Hermione",
            perenimi: "Granger",
            majad: ["Gryffindor", "Kolmas aasta"]
        },
    ]
}

const {tudeng: students} = school;
const [harry, hermione] = students;

const {eesnimi: harryfirstName} = harry;
const {eesnimi: hermionefirstName} = hermione;

console.log(`${harryfirstName} and ${hermionefirstName} are friends.`);