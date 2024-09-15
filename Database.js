const { MongoClient } = require('mongodb');

const url = 
    "mongodb+srv://agarwalshivam168:ENJckABgr6DwVC3A@cluster0.1rzmu.mongodb.net/";

const client = new MongoClient(url);

async function main() {
    // Establishing connection with MongoDB
    await client.connect();
    const db = client.db('MyDatabase')
    const collection = db.collection('user_details');

    // Inserting a document in collection
    /*
    const data = {
        firstname: "Shivansh",
        lastname: "Agarwal",
        age: "21",
        mobile: "6306889328",
    }
    const insertResult = await collection.insertOne(data);
    console.log('Insertion Result:', insertResult);
    */

    // Updating a document in collection
    /*
    const updateResult = await collection.updateOne({'firstname': 'Shivam'}, {'$set': {'mobile': '8707650678'}});
    console.log('Updation Result:', updateResult);
    */

    
    // Reading documents from collection
    const findResult = await collection.find({}).toArray()
    console.log('Found docs: ', findResult);

    return "done"
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())
