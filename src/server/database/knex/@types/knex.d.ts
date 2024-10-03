import { ISpace, IVehicle } from '../../models'

declare module 'knex/types/tables' {
  interface Tables {
    vehicle: IVehicle,
    space: ISpace
  }
}
