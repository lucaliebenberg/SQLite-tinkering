import fs from 'node:fs';

const db = fs.readFile('./data.db', (err, data) => {
    if (!err){
        console.log(`DB loaded successfully: ${db}`); 
    } else {
        console.log(`DB failed to load: ${err}`);
    }
});
console.log(`DB: ${db}`);


/***
const createQuery = () => ```sql
CREATE TABLE friends(
    name TEXT,
    surname TEXT,
    age INTEGER,
    marriageStatus BOOLEAN
);
```
console.log(`QUERY: ${createQuery}`);

console.log('Attempting to execute query into DB');

try {
    db.createQuery();
    console.log('Query executed successfully');
} catch {
    throw new Error(`Failed to execute query);
}
***/
