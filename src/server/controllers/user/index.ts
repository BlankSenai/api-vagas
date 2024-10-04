import * as login from './Login'
import * as signUp from './SignUp'

export const UserController = {
    ...login,
    ...signUp
}