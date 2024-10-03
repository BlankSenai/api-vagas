import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ISpace } from '../../database/models'
import { SpaceProvider } from '../../database/providers'


interface IBodyProps extends Omit<ISpace, 'id'> {}

export const post = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await SpaceProvider.post(req.body)

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.CREATED).json(result)
}
