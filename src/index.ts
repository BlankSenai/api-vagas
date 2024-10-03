import { server } from './server/Server'
import { Knex } from './server/database/knex'

Knex.migrate.latest()
  .then(() => {
    Knex.seed.run()
      .then(() => {
        server.listen('3333', () => console.log('Server rodando'))
      })
  })
