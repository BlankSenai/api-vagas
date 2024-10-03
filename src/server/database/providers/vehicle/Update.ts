import { Knex } from '../../knex'
import { IVehicle } from '../../models'

export const update = async (vehicle: Omit<IVehicle, 'id'>, id: Number): Promise<Number | Error> => {
  try {
    const result = await Knex('vehicle')
      .update(vehicle)
      .where('id', '=', id)

    if (result) return result
    
    return new Error('Erro ao cadastrar o registro')
  } catch (error) {
    
    return new Error('Erro ao cadastrar o registro')
  }
}
