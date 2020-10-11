import express from 'express'
const router = express.Router()
import { 
    addOrderItems, 
    getOrderById, 
    updateOrderToPaid 
} from '../controllers/orderController.js'
import { protect } from '../middleware/authorMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put( updateOrderToPaid)

export default router