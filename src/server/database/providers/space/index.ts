import * as get from './Get'
import * as post from './Post'
import * as deleteById from './Delete'
import * as update from './Update'

export const SpaceProvider = {
  ...get,
  ...post,
  ...deleteById,
  ...update
}