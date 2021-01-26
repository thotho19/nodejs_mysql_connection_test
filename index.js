// Package Importing 
const fs = require('fs'),
    mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: "nodejs",
    password: "Nodejs1997!",
    database: "test_db"
})


connection.connect(err => {
    if(err) {
        console.log(`Mysql connection Error:${err}`);
    }else{
        console.log('Data base has been connected correctly :D ')
    }
});
try {
    // =====
    // Read the entir json file
    const gameData = fs.readFileSync("./json/allGames.json", "utf8");
    // convert utf8 to json objects
    const gameJson = JSON.parse(gameData);
    // loop throw the jsonData and store into the database 
    
    gameJson.applist.apps.forEach(async game => {
        const query = await connection.query('INSERT INTO mygames SET ?' , game , (error , results , fields)=>{
            if (error) throw error;
        })
    });
} catch (err) {
    console.log(err);
}