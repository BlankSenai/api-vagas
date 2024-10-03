import { Knex } from '../../knex'
import { IVehicle } from '../../models'

export const post = async (vehicle: Omit<IVehicle, 'id'>): Promise<Number | Error> => {
  try {
    const [result] = await Knex('vehicle').insert(vehicle).returning('id')

    if (result) return result.id
    
    return new Error('Erro ao cadastrar o registro')
  } catch (error) {
    
    return new Error('Erro ao cadastrar o registro')
  }
}
