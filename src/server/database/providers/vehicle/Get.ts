import { Knex } from '../../knex'
import { IVehicle } from '../../models'

export const get = async (): Promise<IVehicle[] | Error> => {
  try {
    const result = await Knex('vehicle')
      .select('*')

    if (result) return result

    return new Error('Erro ao consultar os registros')
  } catch (error) {

    return new Error('Erro ao consultar os registros')
  }
}
