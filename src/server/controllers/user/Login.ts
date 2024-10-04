import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { UserProvider } from '../../database/providers'


interface IBodyProps {
    email: String,
    senha: String
}

export const login = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const user = await UserProvider.get(req.body.email)

  if (user instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: user.message
      }
    })
  }

  if (user.senha === req.body.senha) {
    return res.status(StatusCodes.ACCEPTED).json(true)
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json(false)
  }
}
