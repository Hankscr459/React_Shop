import express from 'express'
const router = express.Router()
import { 
    addOrderItems, 
    getOrderById, 
    updateOrderToPaid,
    getMyOrders,
    getOrders,
    updateOrderToDelivered
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authorMiddleware.js'

router.route('/')
    .get(protect, admin, getOrders)
    .post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put( updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router