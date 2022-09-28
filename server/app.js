import express from 'express';
import admin_login from './admin/login.js'
import user_register from './user/registration.js'
import user_list from './user/user-list.js'
import delete_user from './user/delete-user.js'
import update_user from './user/update-user.js'
import user_login from './user/login.js'
import user_info from './user/user-info.js'
import api_list from './user/api-list.js'
import add_api from './user/add-api.js'
import delete_api from './user/delete-api.js'
import api_token from './user/api-token.js'
import api_info from './user/api-info.js'
import wallet_balance from './web_api/wallet-balance.js'
import coin_tickers from './web_api/coin-tickers.js'
import closed_pnl from './web_api/closed-pnl.js'

const app = express();
const port = 3000;


app.use('/',user_register);
app.use('/',user_list);
app.use('/',delete_user);
app.use('/',update_user);
app.use('/',user_login);
app.use('/',admin_login);
app.use('/',user_info);
app.use('/',api_list);
app.use('/',add_api);
app.use('/',delete_api);
app.use('/',api_token);
app.use('/',api_info);
app.use('/',wallet_balance);
app.use('/',coin_tickers);
app.use('/',closed_pnl);

app.listen(port,() =>{
    console.log(`Server started on port ${port}`);
});