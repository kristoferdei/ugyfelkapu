const faker = require('faker');
const fs = require('fs');

function randomPeople() {
    let people = [];
    let jobss = ["ügyintéző","igazgató","tanuló"];

    for (let i = 0; i < 5; i++) {
        let jobs = jobss[Math.round(Math.random()*2)];
        people.push({
            id: faker.random.number(),
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            jobs: jobs
        })
    }
    return people;
}

function randomAppointment() {
    let appointment = [];
    let casess = ["Birth certificate","Get Married","Renew driving licence"];
    let timess =  ["9:00","10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00"];

    for(let i = 0; i < 5; i++) {
        let cases = casess[Math.round(Math.random()*3)];
        let times = timess[Math.round(Math.random()*6)];
        let dates = faker.date.recent();
        let formattedDate = dates.getDate() + "-" + (dates.getMonth() + 1) + "-" + dates.getFullYear()
        appointment.push({
            id: `${faker.random.number()}`,
            cases: cases,
            dates: `${formattedDate}`,
            times: times,
        })
    }
    return appointment
}

fs.writeFile(
    '../../database.fake.json',
    JSON.stringify({peoples: randomPeople(), appointments: randomAppointment()}),
    (err)=>{console.log(err)}
);
