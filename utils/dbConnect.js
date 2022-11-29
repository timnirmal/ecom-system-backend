import mongoose from "mongoose";

export const connect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        mongoose.connection.once("open", () => {
            // eslint-disable-next-line no-console
            console.log("connected to MongoDb");
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
};

export const disconnect = (done) => {
    mongoose.disconnect(done);
};
