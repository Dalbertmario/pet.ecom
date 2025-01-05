import pkg from 'pg'

const db = new pkg.Pool({
    port:5432,
    database:'pets',
    password:'suthachristi',
    user:'postgres',
    host:'localhost'
})

db.connect(()=>{
    console.log('conneted')
})

export default db;