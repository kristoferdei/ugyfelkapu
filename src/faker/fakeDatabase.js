const faker = require('faker');
const fs = require('fs');

function randomEmployee() {
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
    let casess = ['Birth certificate', 'Get Married', 'Renew driving licence'];
    let timess =  ["9:00","10:00","11:00","12:00", "13:00", "14:00", "15:00", "16:00"];
    let date = faker.date.recent();
    let formatDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    for(let i = 0; i < 5; i++) {
        appointment.push({
            id: `${faker.random.number()}`,
            cases: `${faker.random.arrayElement(casess)}`,
            dates: `${formatDate}`,
            times: `${faker.random.arrayElement(timess)}`,
        })
    }
    return appointment
}

fs.writeFile(
    '../../database.fake.json',
    JSON.stringify({employees: randomEmployee(), appointments: randomAppointment()}),
    (err)=>{console.log(err)}
);
