import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { SpaceProvider } from '../../database/providers'


export const get = async (req: Request, res: Response) => {
  const result = await SpaceProvider.get()

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.OK).json(result)
}
