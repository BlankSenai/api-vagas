import { Knex } from '../../knex'
import { ISpace } from '../../models'

export const get = async (): Promise<ISpace[] | Error> => {
  try {
    const result = await Knex('space')
      .select('*')

    if (result) return result

    return new Error('Erro ao consultar os registros')
  } catch (error) {

    return new Error('Erro ao consultar os registros')
  }
}
