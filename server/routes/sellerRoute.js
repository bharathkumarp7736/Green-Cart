
import express from 'express';
import { isSellerAuth, sellerLogin, sellerLogout } from '../controllers/sellerController.js';
import authSeller from '../middleware/authSeller';

const sellerRoute = express.Router();

sellerRoute.post('/login', sellerLogin);
sellerRoute.get('/is-auth', authSeller,isSellerAuth);
sellerRoute.get('/logout', sellerLogout);

export default sellerRoute;