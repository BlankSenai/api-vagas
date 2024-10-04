import { Knex } from '../../knex'
import { IUser } from '../../models'

export const get = async (email: String): Promise<IUser | Error> => {
  try {
    const [result] = await Knex('user')
      .select('*')
      .where('email', '=', email)

    if (result) return result

    return new Error('Erro ao consultar os registros')
  } catch (error) {

    return new Error('Erro ao consultar os registros')
  }
}
