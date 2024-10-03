import { Knex } from '../../knex'

export const deleteById = async (id: Number): Promise<Number | Error> => {
  try {
    const result = await Knex('vehicle')
      .where('id', '=', id)
      .del()

    if (result) return result

    return new Error('Erro ao remover os registros')
  } catch (error) {

    return new Error('Erro ao remover os registros')
  }
}
