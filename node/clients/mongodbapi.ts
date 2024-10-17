import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

class MongoDBAPI extends ExternalClient {
  headers: any
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      '',
      context,
      options
    )
    this.headers = {
      'Content-Type': 'application/ejson',
      apiKey:
        '',
    }
  }

  public async getData(
    clusterName: string,
    database: string,
    collection: string,
    filter: any
  ) {
    return await this.http.post(
      'action/find',
      {
        dataSource: clusterName,
        database: database,
        collection: collection,
        filter: filter,
      },
      {
        headers: this.headers
      }
    )
  }
}

export default MongoDBAPI
