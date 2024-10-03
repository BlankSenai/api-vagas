import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { IVehicle } from '../../database/models'
import { VehicleProvider } from '../../database/providers'


interface IBodyProps extends Omit<IVehicle, 'id'> {}

export const post = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await VehicleProvider.post(req.body)

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.CREATED).json(result)
}
