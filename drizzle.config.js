const dotenv =require('dotenv')

const {defineConfig} =require("drizzle-kit");
dotenv.config();
const config = defineConfig({
    dialect:"postgresql",
    out:"./drizzle",
    schema:"./drizzle/schema.js",
    dbCredentials: {
       url:"process.env.DATBASE_URL"
    },
});

module.exports=config;