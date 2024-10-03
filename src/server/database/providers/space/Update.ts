import { Knex } from '../../knex'
import { ISpace } from '../../models'

export const update = async (space: Omit<ISpace, 'id' | 'numeroVaga'>, id: Number): Promise<Number | Error> => {
  try {
    const result = await Knex('space')
      .update(space)
      .where('id', '=', id)

    if (result) return result
    
    return new Error('Erro ao cadastrar o registro')
  } catch (error) {
    
    return new Error('Erro ao cadastrar o registro')
  }
}
