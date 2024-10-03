import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { VehicleProvider } from '../../database/providers'


export const deleteById = async (req: Request, res: Response) => {
  const result = await VehicleProvider.deleteById(req.body.id)

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.OK).send()
}
