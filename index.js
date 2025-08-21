require('dotenv/config')

const db= require("./db")
 const {usersTable}= require('./drizzle/schema');
 //dotenv.config()
async function getAllUsers() {
    const users = await db.select().from(usersTable)
    console.log(`User in Db`,users);
    return users;
}

getAllUsers();

async function createUser({id,name,email}) {
    await db.insert(usersTable).values({
        id,
        name,
        email,
    })
}

createUser({id:1,name:"Devansh",email:'devansh@gmail.com'});
createUser({id:2,name:"Pandey",email:'pandey@gmail.com'});