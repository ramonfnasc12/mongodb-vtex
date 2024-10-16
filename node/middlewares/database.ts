export async function getDatabase(ctx: Context, next: () => Promise<any>) {
  const db = 'forum_db'
  const collection = 'posts_and_replies'
  try{
    const response = await ctx.clients.mongo.getData(db, collection)
    
    ctx.status = 200
    ctx.body = response
    ctx.set('no-cache', 'no-cache')
    await next()
  } catch(e){
    ctx.status = 500
    ctx.body = e
  }
}
