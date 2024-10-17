import { IOClient } from "@vtex/api";
//import {mongoClient} from '../index'

class MongoDBClass extends IOClient {

    public async getData(database: string, collection: string){
        //return mongoClient.db(database).collection(collection).find({})
        return {}
    }
}

export default MongoDBClass