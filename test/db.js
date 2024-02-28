const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const seedData =require('./data/seedData');

const modelEnum = {
    Users: 'users',
    Blogs: 'blogs',
}

const Seeder = {

    async insert(model, data) {
        try {
            const result = await mongoose.connection.collection(model).insertMany(data);
            console.log(`inserted ${result.insertedCount} records for ${model}`)
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async seedAllData() {
        try {
            console.log('seeding all data...')
            await Seeder.insertUsers();
            await Seeder.insertBlogs();
            console.log('✅ All data has been seeded 🧪🧪')
        } catch (err) {
            console.log('unable to seed all data', err);
            throw new Error(err.message);
        }
    },

    async insertUsers() {
        try {
            console.log('seeding users...')
            await Seeder.insert(modelEnum.Users, seedData.users);
        } catch (err) {
            console.log('unable to seed users', err);
            throw new Error(err.message);
        }
    },

    async insertBlogs() {
        try {
            console.log('seeding blogs...')
            await Seeder.insert(modelEnum.Blogs, seedData.blogs);
        } catch (err) {
            console.log('unable to seed blogs', err);
            throw new Error(err.message);
        }
    },


}



// Define a new instance of "MongoMemoryServer" to automatically start server
let mongoServer = null;


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};




const mongodbTestHelper = {

    /**
    * Provide connection to a new in-memory database server.
    */
    async connect() {
        
        // Prevent MongooseError: Can't call `openUri()` on an active connection with different connection strings
        await mongoose.disconnect();

        // Spin up an actual/real MongoDB server programmatically from node, for testing
        mongoServer = await MongoMemoryServer.create();

        const mongoUri = mongoServer.getUri();
        mongoose.connect(mongoUri, options, err => {
            if (err) {
                console.error(err);
            } else {
                console.log('✅ successfully connected to in-memory mongodb for testing');
            }
        });
    },

    async seed() {
        try {
            await Seeder.seedAllData();
        } catch (err) {
            console.log('unable to seed in-memory mongodb', err);
            throw new Error(err.message);
        }
    },


    /**
    * Remove and close the database and server.
    */
    async close() {
        await mongoose.disconnect();
        await mongoServer.stop();
    },

    /**
     * Remove all data from collections.
     */
    async clear() {
        // console.log('clearing in-memory mongo db...');
        const collections = mongoose.connection.collections;

        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany({});
        }
    },

    /**
     * Clear data from collections and seed with fresh data
     */
    async setUp() {
        try {
            await mongodbTestHelper.clear();
            await mongodbTestHelper.seed();
        } catch (err) {
            console.log('unable to set up in-memory testing for mongodb', err);
            throw new Error(err.message);
        }
    },
}


module.exports = mongodbTestHelper;