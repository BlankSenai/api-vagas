import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { IUser } from '../../database/models'
import { UserProvider } from '../../database/providers'


interface IBodyProps extends Omit<IUser, 'id'> {}

export const signUp = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await UserProvider.post(req.body)

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    })
  }

  return res.status(StatusCodes.CREATED).json(result)
}
