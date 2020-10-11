import express from 'express'
const router = express.Router()
import { 
    addOrderItems, 
    getOrderById, 
    updateOrderToPaid,
    getMyOrders
} from '../controllers/orderController.js'
import { protect } from '../middleware/authorMiddleware.js'

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put( updateOrderToPaid)

export default router