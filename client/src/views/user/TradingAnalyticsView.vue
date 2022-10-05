<template>
    <div :class = "[bg_height]" class = "bg-[#0F4C75] w-full flex ">
        <div class = "basis-2/12 m-3"></div>
        <div class = "fixed bg-[#1B262C] text-center rounded-lg shadow-xl h-screen m-3 flex-auto w-2/12">
            <a href = "/personal-info">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto  mt-20 rounded-md">
                <div class = "mr-1 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" fill="#BBE1FA"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Personal Info</h1>
                    </div>
            </div>
            </a>

            <a href = "#" @click ="api_clicked = !api_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md relative">
                    <div class = "mr-1 p-3">
                        <svg id="Layer_1" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m22 0h-2.172a2.978 2.978 0 0 0 -2.121.879l-8.361 8.36a7.537 7.537 0 1 0 5.415 5.415l1.239-1.239v-2.415h3v-3h2.414l1.707-1.707a2.983 2.983 0 0 0 .879-2.122v-2.171a2 2 0 0 0 -2-2zm0 4.171a1 1 0 0 1 -.293.708l-1.121 1.121h-3.586v3h-3v3.585l-1.545 1.545a5.64 5.64 0 0 1 .545 2.37 5.5 5.5 0 1 1 -5.5-5.5 4.236 4.236 0 0 1 2.369.544l9.252-9.251a1.009 1.009 0 0 1 .707-.293h2.172zm-17 13.829a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">API Management</h1>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-if = "!api_clicked">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" fill="#BBE1FA"/></svg>
                    </div>
            </div>
            </a>

            <a href = "/add-api" v-if="api_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">Add API Key</h1>
            </div>
            </a>

            <a href = "/api-info" v-if="api_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">API Info</h1>
            </div>
            </a>

            <a href = "/wallet-balance">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M20.5,6H5.5c-.789,0-1.53-.376-2-.999,.457-.607,1.184-1.001,2-1.001H22.5c1.972-.034,1.971-2.967,0-3H5.5C2.468,1,0,3.467,0,6.5v11c0,3.033,2.468,5.5,5.5,5.5h15c1.93,0,3.5-1.57,3.5-3.5V9.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,13.5c0,.276-.225,.5-.5,.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V8.396c.763,.39,1.618,.604,2.5,.604h15c.275,0,.5,.224,.5,.5v10Zm-2-5c-.034,1.972-2.967,1.971-3,0,.034-1.972,2.967-1.971,3,0Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Wallet Balances</h1>
                    </div>
            </div>
            </a>

            <a href = "#" @click ="ts_clicked = !ts_clicked">
            <div class = "flex items-center  bg-gradient-to-r from-[#0F4C75] to-[#1B262C]  w-11/12 m-auto rounded-md relative">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M12,0A12.043,12.043,0,0,0,4,3.06V0H2V5.143A1.859,1.859,0,0,0,3.857,7H9V5H4.86A10,10,0,1,1,2,12H0A12,12,0,1,0,12,0Z" fill="#BBE1FA"/><polygon points="11 7 11 12.414 14.293 15.707 15.707 14.293 13 11.586 13 7 11 7" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Trading Statistics</h1>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-if = "!ts_clicked">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div class = "mr-1 p-3 absolute right-0" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15"><path d="M22.5,18a1.5,1.5,0,0,1-1.061-.44L13.768,9.889a2.5,2.5,0,0,0-3.536,0L2.57,17.551A1.5,1.5,0,0,1,.449,15.43L8.111,7.768a5.505,5.505,0,0,1,7.778,0l7.672,7.672A1.5,1.5,0,0,1,22.5,18Z" fill="#BBE1FA"/></svg>
                    </div>
            </div>
            </a>

            <a href = "/trading-history" v-if = "ts_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">Trading History</h1>
            </div>
            </a>

            <a href = "/trading-analytics" v-if = "ts_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">Trading Analytics</h1>
            </div>
            </a>


        </div>


        <div class = "flex-auto basis-10/12">
            <div class = "flex items-center bg-[#1B262C] text-center rounded-lg shadow-xl h-fit max-w-full mt-3 mr-3 mb-3 ">
                <h1 class = "text-[#BBE1FA] text-3xl p-3 w-11/12  ml-28 ">Trading Analytics</h1>  
                <a href = "#" @click="logout()">
                <div class = " flex items-center hover:bg-[#0F4C75] rounded-md">
                    <div class = "mr-1 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><title>11-arrow</title><path d="M22.763,10.232l-4.95-4.95L16.4,6.7,20.7,11H6.617v2H20.7l-4.3,4.3,1.414,1.414,4.95-4.95a2.5,2.5,0,0,0,0-3.536Z" fill="#BBE1FA"/><path d="M10.476,21a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H9.476a1,1,0,0,1,1,1V8.333h2V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H9.476a3,3,0,0,0,3-3V15.667h-2Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div class = "pr-3">
                        <h1 class = "text-[#BBE1FA] text-l">Logout</h1>
                    </div>
                </div>
                </a> 
            </div>

            <template v-if="api_validity">
            <div class = "h-fit mt-3 mr-3 mb-3">
                <div class = "bg-[#1B262C] text-center w-1/4 m-auto rounded-lg shadow-xl">
                    <h1 class = "text-[#BBE1FA] text-3xl p-3">Longs</h1>  
                </div>

                <div class = "flex items-center text-center rounded-lg  max-w-full">
                <div class = "bg-[#1B262C]  h-max basis-4/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "flex  basis-1/2 max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl m-auto">Longs Winrate</h1>
                        </div>
                        <div class = "items-center basis-1/2">
                            <h1 class= "text-lg"></h1>
                            <h1 class = "text-[#BBE1FA]  text-2xl">{{long_winrate.toFixed(2)}}%</h1>
                            <h1 class = "text-[#BBE1FA]  text-md"><span style="color: green">{{long_win}} W </span>/ <span style="color: red">{{total_long-long_win}} L</span></h1>
                            <h1 class= "text-lg"></h1>
                        </div>

                    </div>

                </div>

                <div class = "bg-[#1B262C]  h-max basis-4/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "flex  basis-1/2  max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl text-right m-auto">Longs PnL</h1>
                        </div>
                        <div class = "items-center  basis-3/4 ">
                            <h1 class = "text-[#BBE1FA] text-2xl">{{long_pnl.toFixed(5)}} $</h1>
                        </div>

                    </div>

                </div>

                <div class = "bg-[#1B262C]  h-max basis-4/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "flex   basis-1/2  max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl text-right m-auto">Total Longs</h1>
                        </div>
                        <div class = "items-center  basis-1/2 ">
                            <h1 class = "text-[#BBE1FA]  text-2xl">{{total_long}}</h1>
                        </div>

                    </div>

                </div>
                </div>
            </div>

            <div class = "h-fit mt-3 mr-3 mb-3">
                <div class = "bg-[#1B262C] text-center w-1/4 m-auto rounded-lg shadow-xl">
                    <h1 class = "text-[#BBE1FA] text-3xl p-3">Shorts</h1>  
                </div>
                <div class = "flex items-center text-center rounded-lg  max-w-full">
                <div class = "bg-[#1B262C]  h-max basis-4/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "flex  basis-1/2 max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl m-auto">Shorts Winrate</h1>
                        </div>
                        <div class = "items-center basis-1/2">
                            <h1 class= "text-lg"></h1>
                            <h1 class = "text-[#BBE1FA]  text-2xl">{{short_winrate.toFixed(2)}} %</h1>
                            <h1 class = "text-[#BBE1FA]  text-md"><span style="color: green">{{short_win}} W </span>/ <span style="color: red">{{total_short-short_win}} L</span></h1>
                            <h1 class= "text-lg"></h1>
                        </div>

                    </div>

                </div>

                <div class = "bg-[#1B262C]  h-max basis-4/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "flex  basis-1/2  max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl text-right m-auto">Shorts PnL</h1>
                        </div>
                        <div class = "items-center  basis-3/4 ">
                            <h1 class= "text-lg"></h1>
                            <h1 class = "text-[#BBE1FA] text-2xl">{{short_pnl.toFixed(5)}} $</h1>
                            <h1 class= "text-lg"></h1>
                        </div>

                    </div>

                </div>

                <div class = "bg-[#1B262C]  h-max basis-4/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "flex   basis-1/2  max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl text-right m-auto">Total Shorts</h1>
                        </div>
                        <div class = "items-center  basis-1/2 ">
                            <h1 class= "text-lg"></h1>
                            <h1 class = "text-[#BBE1FA]  text-2xl">{{total_short}}</h1>
                            <h1 class= "text-lg"></h1>
                        </div>

                    </div>

                </div>
                </div>
            </div>


            <div class = "h-fit mt-3 mr-3 mb-3">
                <div class = "bg-[#1B262C] text-center w-1/4 m-auto rounded-lg shadow-xl">
                    <h1 class = "text-[#BBE1FA] text-3xl p-3">Best Winning Trades</h1>  
                </div>

                <div class = "bg-[#1B262C] rounded-lg shadow-xl mt-3 mr-3">
                <div class = "trade_list">
                    <table class = "table-auto w-full border-separate border-spacing-2">
                    <tr>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Symbol</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Contract Type</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Quantity</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Entry Price</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Exit Price</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Entry Date</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">% PnL from Margin</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Closed PnL</th>
                    </tr>
                    <tr>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#16a34a] " v-if = "trade_list[best_longidx].side == 'Sell' " >{{trade_list[ best_longidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#b91c1c]" v-else>{{trade_list[ best_longidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]" v-if = "trade_list[best_longidx].order_type == 'Market' && trade_list[best_longidx].side == 'Sell'">Market Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[best_longidx].order_type == 'Market' && trade_list[best_longidx].side == 'Buy'">Market Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[best_longidx].order_type == 'Limit' && trade_list[best_longidx].side == 'Sell'">Limit Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[best_longidx].order_type == 'Limit' && trade_list[best_longidx].side == 'Buy'">Limit Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[best_longidx].qty}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[best_longidx].avg_entry_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[best_longidx].avg_exit_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{new Date(trade_list[best_longidx].created_at*1000).toDateString()}}</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[best_longidx].closed_pnl/(trade_list[best_longidx].qty*trade_list[best_longidx].avg_entry_price) *100 > 0 ">{{(trade_list[best_longidx].closed_pnl/(trade_list[best_longidx].qty*trade_list[best_longidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{(trade_list[best_longidx].closed_pnl/(trade_list[best_longidx].qty*trade_list[best_longidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[best_longidx].closed_pnl > 0 ">$ {{trade_list[best_longidx].closed_pnl}}</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{trade_list[best_longidx].closed_pnl}}</td>
                    </tr>

                    <tr>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#16a34a] " v-if = "trade_list[best_shortidx].side == 'Sell' " >{{trade_list[best_shortidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#b91c1c]" v-else>{{trade_list[best_shortidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]" v-if = "trade_list[best_shortidx].order_type == 'Market' && trade_list[best_shortidx].side == 'Sell'">Market Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[best_shortidx].order_type == 'Market' && trade_list[best_shortidx].side == 'Buy'">Market Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[best_shortidx].order_type == 'Limit' && trade_list[best_shortidx].side == 'Sell'">Limit Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[best_shortidx].order_type == 'Limit' && trade_list[best_shortidx].side == 'Buy'">Limit Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[best_shortidx].qty}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[best_shortidx].avg_entry_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[best_shortidx].avg_exit_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{new Date(trade_list[best_shortidx].created_at*1000).toDateString()}}</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[best_shortidx].closed_pnl/(trade_list[best_shortidx].qty*trade_list[best_shortidx].avg_entry_price) *100 > 0 ">{{(trade_list[best_shortidx].closed_pnl/(trade_list[best_shortidx].qty*trade_list[best_shortidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{(trade_list[best_shortidx].closed_pnl/(trade_list[best_shortidx].qty*trade_list[best_shortidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[best_shortidx].closed_pnl > 0 ">$ {{trade_list[best_shortidx].closed_pnl}}</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{trade_list[best_shortidx].closed_pnl}}</td>
                    </tr>
                       

                    </table>
                </div>
                </div>
            </div>

            <div class = "h-fit mt-3 mr-3 mb-3">
                <div class = "bg-[#1B262C] text-center w-1/4 m-auto rounded-lg shadow-xl">
                    <h1 class = "text-[#BBE1FA] text-3xl p-3">Worst Losing Trades</h1>  
                </div>

                <div class = "bg-[#1B262C] rounded-lg shadow-xl mt-3 mr-3">
                <div class = "trade_list">
                    <table class = "table-auto w-full border-separate border-spacing-2">
                    <tr>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Symbol</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Contract Type</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Quantity</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Entry Price</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Exit Price</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Entry Date</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">% PnL from Margin</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Closed PnL</th>
                    </tr>

                    <tr>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#16a34a] " v-if = "trade_list[worst_longidx].side == 'Sell' " >{{trade_list[worst_longidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#b91c1c]" v-else>{{trade_list[worst_longidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]" v-if = "trade_list[worst_longidx].order_type == 'Market' && trade_list[worst_longidx].side == 'Sell'">Market Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[worst_longidx].order_type == 'Market' && trade_list[worst_longidx].side == 'Buy'">Market Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[worst_longidx].order_type == 'Limit' && trade_list[worst_longidx].side == 'Sell'">Limit Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[worst_longidx].order_type == 'Limit' && trade_list[worst_longidx].side == 'Buy'">Limit Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[worst_longidx].qty}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[worst_longidx].avg_entry_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[worst_longidx].avg_exit_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{new Date(trade_list[worst_longidx].created_at*1000).toDateString()}}</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[worst_longidx].closed_pnl/(trade_list[worst_longidx].qty*trade_list[worst_longidx].avg_entry_price) *100 > 0 ">{{(trade_list[worst_longidx].closed_pnl/(trade_list[worst_longidx].qty*trade_list[worst_longidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{(trade_list[worst_longidx].closed_pnl/(trade_list[worst_longidx].qty*trade_list[worst_longidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[worst_longidx].closed_pnl > 0 ">$ {{trade_list[worst_longidx].closed_pnl}}</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{trade_list[worst_longidx].closed_pnl}}</td>
                    </tr>

                    <tr>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#16a34a] " v-if = "trade_list[worst_shortidx].side == 'Sell' " >{{trade_list[worst_shortidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#b91c1c]" v-else>{{trade_list[worst_shortidx].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]" v-if = "trade_list[worst_shortidx].order_type == 'Market' && trade_list[worst_shortidx].side == 'Sell'">Market Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[worst_shortidx].order_type == 'Market' && trade_list[worst_shortidx].side == 'Buy'">Market Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[worst_shortidx].order_type == 'Limit' && trade_list[worst_shortidx].side == 'Sell'">Limit Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "trade_list[worst_shortidx].order_type == 'Limit' && trade_list[worst_shortidx].side == 'Buy'">Limit Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[worst_shortidx].qty}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[worst_shortidx].avg_entry_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{trade_list[worst_shortidx].avg_exit_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{new Date(trade_list[worst_shortidx].created_at*1000).toDateString()}}</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[worst_shortidx].closed_pnl/(trade_list[worst_shortidx].qty*trade_list[worst_shortidx].avg_entry_price) *100 > 0 ">{{(trade_list[worst_shortidx].closed_pnl/(trade_list[worst_shortidx].qty*trade_list[worst_shortidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{(trade_list[worst_shortidx].closed_pnl/(trade_list[worst_shortidx].qty*trade_list[worst_shortidx].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "trade_list[worst_shortidx].closed_pnl > 0 ">$ {{trade_list[worst_shortidx].closed_pnl}}</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{trade_list[worst_shortidx].closed_pnl}}</td>
                    </tr>
                       
                       

                    </table>
                </div>
                </div>
            </div>

            <div class = "flex items-center text-center rounded-lg  w-full">
                <div class = "bg-[#1B262C]  h-max w-4/5 m-auto rounded-lg shadow-xl">
                    <div class = "p-3  items-center ">
                        <div class = "flex    max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-3xl text-right m-auto">Trade Result By Day</h1>
                        </div>
                        <div class = "items-center">
                            <canvas id="barChart" class =""></canvas>
                        </div>

                    </div>

                </div>

            </div>


        
            </template>

        </div>



    
    
    </div>

</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Chart from 'chart.js/auto'
export default{
    data(){
        return{
            api_clicked : false,
            ts_clicked : false,
            trade_list : {},
            total_long : 0,
            total_short :0,
            long_winrate : 0,
            short_winrate :0,
            long_pnl : 0,
            short_pnl : 0,
            long_win :0,
            short_win : 0,
            best_longidx : -1,
            worst_longidx : -1,
            best_shortidx : -1,
            worst_shortidx : -1,
            pnl_byDate : [],
            api_validity : false,
            bg_height : 'h-screen' 
        }
    },
    created(){
        if(getCookie("userToken") == ""){
        this.$router.push('/login');
        }
        else {
            const data = qs.stringify({
                pair : getCookie("pair"),
                from : new Date(getCookie("dateFrom")*1000),
                to : new Date(getCookie("dateTo")*1000)
            });
            axios({
                method: 'post',
                url: 'http://localhost:3000/api/bybit/closed-pnl',
                data: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+getCookie("apiToken")
                 }
            }).then(
                (result)=>{
                    if(result.data.result !=null){
                        this.trade_list = result.data;
                        let best_long = Number.MIN_VALUE,worst_long = Number.MAX_VALUE,best_short = Number.MIN_VALUE,worst_short = Number.MAX_VALUE;
                        for(let i = 0;i<7;i++){
                            this.pnl_byDate[i] = 0;
                        }
                        for(let i = 0;i<result.data.length;i++){
                            if(result.data[i].side == 'Sell'){
                                this.total_long++;
                                this.long_pnl = this.long_pnl + result.data[i].closed_pnl ;
                                if(result.data[i].closed_pnl >= best_long){
                                    best_long = result.data[i].closed_pnl;
                                    this.best_longidx = i;
                                }
                                if(result.data[i].closed_pnl <= worst_long){
                                    worst_long = result.data[i].closed_pnl;
                                    this.worst_longidx = i;
                                }
                                if(result.data[i].closed_pnl > 0){
                                    this.long_win++;
                                }

                            
                            }
                            else{
                                this.total_short++;
                                this.short_pnl = this.short_pnl + result.data[i].closed_pnl;
                                if(result.data[i].closed_pnl >= best_short){
                                    best_short = result.data[i].closed_pnl;
                                    this.best_shortidx = i;
                                }
                                if(result.data[i].closed_pnl <= worst_short){
                                    worst_short = result.data[i].closed_pnl;
                                    this.worst_shortidx = i;
                                }
                                if(result.data[i].closed_pnl > 0){
                                    this.short_win++;
                                }
                            }
                            this.pnl_byDate[new Date(result.data[i].created_at*1000).getDay()] = this.pnl_byDate[new Date(result.data[i].created_at*1000).getDay()] + result.data[i].closed_pnl;
                        }
                        this.long_winrate = this.long_win / this.total_long * 100;
                        this.short_winrate = this.short_win / this.total_short * 100;
                        this.bg_height = 'h-fit';
                        }
                        else{
                            console.log(result.data);
                        }
   
                }
            ).then(
                ()=>{
                    this.showbarChart();
                }
            )
        }
       
    },
    methods: {
        logout(){
            delete_cookie("userToken");
            delete_cookie("apiToken");
            delete_cookie("pair");
            delete_cookie("dateFrom");
            delete_cookie("dateTo");
            this.$router.push('/login');
        },
        showbarChart(){
            if(document.getElementById("barChart") != null){
            const ctx = document.getElementById('barChart').getContext('2d');  
            const barChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                        datasets: [{
                            label: 'PnL by Day of the Week',
                            data: [this.pnl_byDate[0],this.pnl_byDate[1],this.pnl_byDate[2],this.pnl_byDate[3],this.pnl_byDate[4],this.pnl_byDate[5],this.pnl_byDate[6]],
                            backgroundColor :function(context) {
                            const index = context.dataIndex;
                            const value = context.dataset.data[index];
                            return value < 0 ? 'red' : 'green'; // draw negative values in red      
                            },
                            borderColor:function(context) {
                            const index = context.dataIndex;
                            const value = context.dataset.data[index];
                            return value < 0 ? 'red' : 'green'; // draw negative values in red      
                            },
                            hoverOffset : 4                   
                        }]
                    },
                    options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                            legend: {
                            display: false
                            }
                    }
                }
                });
                barChart.show;
            }
        }
    }
    
}

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  
}

function getCookie(param){
            let name = param + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
}

</script>