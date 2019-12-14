import { createConnection } from 'typeorm';

createConnection()
  .then(async connection => {
  })
  .catch(e => {
    console.log(e);
  });
