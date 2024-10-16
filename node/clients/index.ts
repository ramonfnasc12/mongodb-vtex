import { IOClients } from '@vtex/api'
import MongoDBClass from './mongodb'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get mongo() {
    return this.getOrSet('mongo', MongoDBClass)
  }
}
