import mongoose from "mongoose";

let cachedConnection = null;

const connectToMongodb = async () => {
    if (cachedConnection) {
        console.log("using cached connection");
        return cachedConnection;
    }

    try {
        cachedConnection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected");
        return cachedConnection;
    } catch (error) {
        console.log(`An error occured in mongoose ${error}`);
    }
};

export default connectToMongodb;
