const pg = require('pg')
const ClientClass = pg.Client
const pgUrl = "postgres://xdllavqs:RLxOAlt8fOrYKsD-BGYms1Snqpnq6q5w@chunee.db.elephantsql.com/xdllavqs"
const client = new ClientClass(pgUrl)

async function connect(client) {
try {
    await client.connect()
    console.log(`Client connected.`)

    const {rows} = await client.query('CREATE TABLE LOGIN (email serial primary key, name text)')
    console.table(rows)
    await client.end()
}
catch(ex){
    console.log("some error" + ex)
}
finally {
    await client.end()
}
}

connect(client)