import mysql from "mysql2";

// export const db = mysql.createConnection({

//     // host     : process.env.host,
//     // user     : process.env.username,
//     // password : process.env.password,
//     // database : process.env.database_name,

//     host     : '217.21.95.103',
//     user     : 'u441185430_courier_sol',
//     password : 'u441185430_Courier_Sol',
//     database : 'u441185430_courier_sol',

//   });

export const db = mysql.createPool({
  host: "bc9l2opzx6n6p4waxna6-mysql.services.clever-cloud.com", // replace with your hostname
  user: "ucbklspytrzlwyno", // replace with your username
  password: "nmpA3wrXcHpcP5c5FcCB", // replace with your password
  database: "bc9l2opzx6n6p4waxna6", // replace with your database name
  //waitForConnections: true, // this will queue up new connections if all connections are in use
  // connectionLimit: 10, // this will limit the number of connections in the pool
  //queueLimit: 0, // this will put a limit on the number of queued connections
});

// For pool initialization, see above
db.getConnection(function (err, conn) {
  if (err) throw err;
  console.log("Successfully connect to the database.");
  // Do something with the connection
  //conn.query(/* ... */);
  // Don't forget to release the connection when finished!
  db.releaseConnection(conn);
});
// db.connect((error) => {
//   if (error) throw error;
//   console.log('Successfully connected to the database.');
// });

// db.on('error', function(err) {
//   console.log(err); // 'ER_BAD_DB_ERROR'
// });
