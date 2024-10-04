import { ISpace, IUser, IVehicle } from '../../models'

declare module 'knex/types/tables' {
  interface Tables {
    vehicle: IVehicle,
    space: ISpace,
    user: IUser
  }
}
