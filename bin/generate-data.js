const fs = require('fs');
const path = require('path');
const faker = require('faker');
const uniqueId = require('lodash/uniqueId');
const sample = require('lodash/sample');

const data = [];

const transgressions = [
  'Ordered lobster and then suggested we split the bill',
  'Parked too close to me',
  'Did not brew another pot of coffee',
  'Forgot to wish me a happy birthday',
  'Brought fancy cheese and then acted condescending',
  'Changed the music to their own playlist as soon as I left the room',
  'Volunteered to carve the turkey, but didn\'t actually know how',
  'Generally obnoxious',
  'Cut me in line',
  'Ate the last slice of pizza',
  'Brought "paper products" to the pot luck',
  'Talked over me when I was telling a story',
  'Looked at me funny',
  'Spoiled Star Wars',
];

const getForgivenessStatus = () => {
  if (Math.random() > 0.9) return true;
  return false;
};

for (let i = 0; i < 1000; i++) {
  const item = {
    id: uniqueId(),
    fullName: faker.name.findName(),
    transgression: sample(transgressions),
    dateAdded: faker.date.past(4),
    forgiven: getForgivenessStatus(),
  };

  data.push(item);
}

fs.writeFileSync(path.join(__dirname, '..', 'public', 'data.json'), JSON.stringify(data));
fs.writeFileSync(path.join(__dirname, '..', 'src', 'data.json'), JSON.stringify(data));
