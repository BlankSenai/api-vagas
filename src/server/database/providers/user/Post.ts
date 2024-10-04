import { Knex } from '../../knex'
import { IUser } from '../../models'

export const post = async (user: Omit<IUser, 'id'>): Promise<Number | Error> => {
  try {
    const [result] = await Knex('user').insert(user).returning('id')

    if (result) return result.id
    
    return new Error('Erro ao cadastrar o registro')
  } catch (error) {
    
    return new Error('Erro ao cadastrar o registro')
  }
}
