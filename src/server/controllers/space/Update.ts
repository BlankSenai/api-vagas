import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ISpace } from '../../database/models'
import { SpaceProvider } from '../../database/providers'


interface IBodyProps {
  space: Omit<ISpace, 'id' | 'numeroVaga'>
  id: Number
}

export const update = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await SpaceProvider.update(req.body.space, req.body.id)

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.OK).send()
}
