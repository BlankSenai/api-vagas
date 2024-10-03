import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { IVehicle } from '../../database/models'
import { VehicleProvider } from '../../database/providers'


interface IBodyProps {
  vehicle: Omit<IVehicle, 'id'>
  id: Number
}

export const update = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await VehicleProvider.update(req.body.vehicle, req.body.id)

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.OK).send()
}
