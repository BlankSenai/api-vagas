import { Router } from 'express'
import { VehicleController, SpaceController } from '../controllers'

const router = Router()

router.get('/vehicles', VehicleController.get)
router.post('/vehicles', VehicleController.post)
router.delete('/vehicles', VehicleController.deleteById)
router.put('/vehicles', VehicleController.update)

router.get('/spaces', SpaceController.get)
router.post('/spaces', SpaceController.post)
router.delete('/spaces', SpaceController.deleteById)
router.put('/spaces', SpaceController.update)

export { router }
