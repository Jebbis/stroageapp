
export default async (req, res) => {
    const { MongoClient } = require("mongodb");
    try {
        const uri = process.env.MONGODB_URL;
        console.log("URI: " + uri);
        const client = await MongoClient(uri);
        const db = client.db("sample_mflix");

        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        res.json(movies);
    } catch (e) {
        console.error(e);
    }
};