import { IOClients } from '@vtex/api'
import MongoDBClass from './mongodb'
import MongoDBAPI from './mongodbapi'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get mongo() {
    return this.getOrSet('mongo', MongoDBClass)
  }
  public get mongoApi() {
    return this.getOrSet('mongoApi', MongoDBAPI)
  }
}
