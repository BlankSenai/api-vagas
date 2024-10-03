import { Knex } from '../../knex'
import { ISpace } from '../../models'

export const post = async (space: Omit<ISpace, 'id'>): Promise<Number | Error> => {
  try {
    const [result] = await Knex('space').insert(space).returning('id')

    if (result) return result.id
    
    return new Error('Erro ao cadastrar o registro')
  } catch (error) {
    
    return new Error('Erro ao cadastrar o registro')
  }
}
