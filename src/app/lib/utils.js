export const connnectToDb = async () => {
    const connection = {};

    try{
        if(connection.isConnected) return;
        await mongoose.connect("mongodb://127.0.0.1:27017/getPaisaDB");

        connection.isConnected = db.connections[0].readyState;
    }catch(error){
        throw new Error(error);
    }
}