<template>
    <div :class = "[bg_height]" class = "bg-[#0F4C75] w-full flex" >
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
            <div class = "flex items-center  bg-gradient-to-r from-[#0F4C75] to-[#1B262C] w-11/12 m-auto rounded-md relative">
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

            <a href = "trading-analytics" v-if = "ts_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                <h1 class = "text-[#BBE1FA] text-l p-1 ml-11">Trading Analytics</h1>
            </div>
            </a>


        </div>


        <div class = "flex-auto basis-10/12">
            <div class = "flex items-center bg-[#1B262C] text-center rounded-lg shadow-xl h-fit max-w-full mt-3 mr-3 mb-3 ">
                <h1 class = "text-[#BBE1FA] text-3xl p-3 w-11/12  ml-28 ">Trading History</h1>  
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

            <div class = "flex items-center bg-[#1B262C] text-center rounded-lg shadow-xl  w-fit h-fit mt-3 mr-3 mb-3 ">
                <form  @submit.prevent = "handleSubmit">
                <div class = "flex rounded-lg">  
                    <div class = "mx-5 my-3 rounded-lg">
                        <div class = "flex items-center bg-[#0F4C75] outline-white outline-1 hover:outline rounded-lg">
                            <input type ="text" class = "py-3 px-5  bg-[#0F4C75] text-[#BBE1FA] rounded-lg focus:outline-none" v-model = "symbol_input"  @click ="symbol_clicked = !symbol_clicked" placeholder = "Select a pair">
                            <a href = "#">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="15" height="15" class = "m-3" v-if="!symbol_clicked"  @click ="symbol_clicked = !symbol_clicked"><path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" fill="#BBE1FA"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" v-else class = "m-3" viewBox="0 0 513.749 513.749" style="enable-background:new 0 0 513.749 513.749;" xml:space="preserve" width="15" height="15" @click = "symbol_inputChanged">
                            <g>
                                <path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"  fill="#BBE1FA"/>
                            </g>
                            </svg>
                            </a>
                        </div>
                        <div class = "bg-[#0F4C75] rounded-lg h-60 absolute overflow-y-auto ml-3" v-if="symbol_clicked">
                            <a href="#">
                                <li v-for="(coin,index) in coinsymbols_filtered" :key="index" class = "list-none  hover:bg-[#3282B8] text-[#BBE1FA]" @click = "symbol_clicked = !symbol_clicked; symbol_input = coinsymbols_filtered[index].symbol">
                                {{ coinsymbols_filtered[index].symbol }}
                                </li>
                            </a>

                        </div>
                    </div>

                    <div class = "m-3 bg-[#0F4C75] rounded-lg outline-white outline-1 hover:outline h-fit">
                        <datepicker class = " bg-[#0F4C75] text-[#BBE1FA] p-3 rounded-lg" v-model="date_from" :upper-limit="date_to"/>
                    </div>

                    <div class = "m-3 bg-[#0F4C75] rounded-lg outline-white outline-1 hover:outline h-fit">
                        <datepicker class = " bg-[#0F4C75] text-[#BBE1FA] p-3 rounded-lg" v-model="date_to"  :lower-limit="date_from" />
                    </div>

                    <div class = "m-3 h-fit">
                        <button type="submit" class = "py-3 px-5 bg-[#3282B8] text-[#1B262C] font-bold rounded-full hover:bg-[#0F4C75] hover:text-[#BBE1FA]" @click="search_clicked = true">Search</button>
                    </div>

                    <div class="bg-[#1B262C] w-fit flex items-center rounded-lg" v-if="search_clicked">
                    <nav aria-label="Page navigation example">
                        <ul class="flex list-style-none">
                        <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#BBE1FA] hover:bg-[#0F4C75] focus:shadow-none"
                            href="#" aria-label="Previous"  @click = "previous_page()">
                            <span aria-hidden="true">&laquo;</span>
                            </a></li>
                        <li class="page-item" v-for="index in total_page" :key="index"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#BBE1FA]  hover:bg-[#0F4C75] focus:shadow-none"
                            href="#" @click = "change_page(index)">{{index}}</a></li>
                        <li class="page-item"><a
                            class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  text-[#BBE1FA]  hover:bg-[#0F4C75] focus:shadow-none"
                            href="#" aria-label="Next"   @click = "next_page()">
                            <span aria-hidden="true">&raquo;</span>
                            </a></li>
                        </ul>
                    </nav>
                    </div>

                </div>
                </form>
            </div>

            <div class = "bg-[#1B262C] rounded-lg shadow-xl mt-3 mr-3" v-if="search_clicked">
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
                        <tr v-for="(user,index) in sliced_tradelist" :key="index" class = "">
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#16a34a] " v-if = "sliced_tradelist[index].side == 'Sell' " >{{sliced_tradelist[index].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] border-l-4 border-l-[#b91c1c]" v-else>{{sliced_tradelist[index].symbol}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]" v-if = "sliced_tradelist[index].order_type == 'Market' && sliced_tradelist[index].side == 'Sell'">Market Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "sliced_tradelist[index].order_type == 'Market' && sliced_tradelist[index].side == 'Buy'">Market Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "sliced_tradelist[index].order_type == 'Limit' && sliced_tradelist[index].side == 'Sell'">Limit Buy</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA]"  v-if = "sliced_tradelist[index].order_type == 'Limit' && sliced_tradelist[index].side == 'Buy'">Limit Sell</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{sliced_tradelist[index].qty}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{sliced_tradelist[index].avg_entry_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{sliced_tradelist[index].avg_exit_price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{new Date(sliced_tradelist[index].created_at*1000).toDateString()}}</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "sliced_tradelist[index].closed_pnl/(sliced_tradelist[index].qty*sliced_tradelist[index].avg_entry_price) *100 > 0 ">{{(sliced_tradelist[index].closed_pnl/(sliced_tradelist[index].qty*sliced_tradelist[index].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{(sliced_tradelist[index].closed_pnl/(sliced_tradelist[index].qty*sliced_tradelist[index].avg_entry_price) * 100).toFixed(2)}} %</td>
                            <td class = "px-5 py-3 text-left text-[#16a34a]" v-if = "sliced_tradelist[index].closed_pnl > 0 ">$ {{sliced_tradelist[index].closed_pnl}}</td>
                            <td class = "px-5 py-3 text-left text-[#b91c1c]" v-else>$ {{sliced_tradelist[index].closed_pnl}}</td>
                        </tr>

                    </table>
                </div>
            </div>

            <div class = "flex items-center text-center rounded-lg  max-w-full"  v-if="search_clicked">
                <div class = "bg-[#1B262C]  h-max basis-1/2 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "flex   basis-1/2  max-w-full">
                            <h1 class = "text-[#BBE1FA]  text-3xl text-right m-auto">Long/Short Ratio</h1>
                        </div>
                        <div class = "items-center  basis-1/2 ">
                            <canvas id="doughnutChart" class =""></canvas>
                        </div>

                    </div>

                </div>

                <div class = "basis-1/2 h-full ">
                <div class = "bg-[#1B262C]  h-1/2 basis-1/2 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "items-center  w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl m-auto">Winrate</h1>
                            <h1 class = "text-[#BBE1FA]  text-2xl">{{this.win_rate.toFixed(2)}} %</h1>
                            <h1 class = "text-[#BBE1FA]  text-md"><span style="color: green">{{this.total_win}} W </span>/ <span style="color: red">{{this.trade_list.length-this.total_win}} L </span></h1>
                        </div>
                    </div>


                </div>

                
                <div class = "bg-[#1B262C]  h-1/2 basis-1/2 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "flex p-3 w-full items-center ">
                        <div class = "items-center w-full">
                            <h1 class = "text-[#BBE1FA]  text-4xl m-auto">PnL</h1>
                            <h1 class = "text-[#BBE1FA] text-2xl">{{this.pnl.toFixed(5)}} $</h1>
                        </div>
                    </div>


                </div>
                </div>

            </div>

            <div class = "items-center text-center  mt-3 mr-3 w-full" v-if="search_clicked">
                <div class = "bg-[#1B262C]  w-4/5 m-auto rounded-lg shadow-xl">
                    <canvas id="lineChart" class =""></canvas>
                </div>

            </div>
            


        </div>



        

    </div>

    
</template>

 
<script>
import Datepicker from "vue3-datepicker";
import axios from 'axios';
import qs from 'qs';
import Chart from 'chart.js/auto'
export default{
    components: {
        Datepicker,
    },
    data(){
        return{
            api_clicked : false,
            ts_clicked : false,
            symbol_clicked : false,
            trade_list : {},
            sliced_tradelist : {},
            date_from: new Date(),
            date_to : new Date(),
            coin_symbols : {},
            coinsymbols_filtered : {},
            symbol_input : getCookie("pair"),
            total_page : 1,
            current_page:1,
            max_list : 8,
            search_clicked :false,
            win_rate : 0,
            pnl : 0,
            total_win : 0,
            pnlArray : [],
            dateArray : [],
            chart_rendered :0,
            bg_height : 'h-screen',
            total_long : 0
        }
    },
    created(){
        if(getCookie("userToken") == ""){
        this.$router.push('/login');
        }
        else {  
            axios({
                        method: 'get',
                        url: 'http://localhost:3000/api/bybit/coin-tickers',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        }
            }).then(
                (result)=>{
                    for(let i = 0;i<result.data.length ;i++){
                        if(result.data[i].symbol.includes("USDT")){
                            this.coin_symbols[i] = result.data[i];
                            this.coinsymbols_filtered[i] = result.data[i];
                        }
                    }
                }
            )

            
        }
       
    },
    methods: {
        handleSubmit(){
            const data = qs.stringify({
                pair : this.symbol_input,
                from : this.date_from,
                to : this.date_to
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
                    this.trade_list = result.data;
                    var temp_pnlArray = [],temp_dateArray = [];
                    this.pnlArray = [],this.dateArray = [],this.total_long = 0;
                    this.pnlArray[0] = 0;
                    for(let i = 0,j=result.data.length-1;i<result.data.length;i++,j--){
                        temp_pnlArray[j] = result.data[i].closed_pnl;
                        temp_dateArray[j] = new Date(result.data[i].created_at*1000).toDateString();
                    }

                    for(let i = 0,j = 0;i<result.data.length;i++){
                        if(i == result.data.length-1){
                                this.dateArray[j] = temp_dateArray[i];
                                this.pnlArray[j] = 0;
                        }
                        else if(temp_dateArray[i] != temp_dateArray[i+1]){
                            this.dateArray[j] = temp_dateArray[i];
                            this.pnlArray[j] = 0;  
                            j++;

                        }
                    }

                    for(let i = 0,j = 1,k=0;i<result.data.length;i++){
                        if(i == result.data.length-1){
                            for(let l = i-j+1;l<=i;l++){
                                this.pnlArray[k] = temp_pnlArray[l] + this.pnlArray[k];
                            }
                            if(k >0){
                                this.pnlArray[k] = this.pnlArray[k-1] + this.pnlArray[k];
                            }
                        }
                        else{
                            if(temp_dateArray[i] == temp_dateArray[i+1]){
                                j++;
                            }
                            else{
                                for(let l = i-j+1;l<=i;l++){
                                    this.pnlArray[k] = temp_pnlArray[l] + this.pnlArray[k];
                                }
                                if(k >0){
                                    this.pnlArray[k] = this.pnlArray[k-1] + this.pnlArray[k];
                                }
                                
                                k++;
                                j = 1;
                            }
                        }
                    }

                    document.cookie = `pair=${this.symbol_input}`;
                    document.cookie = `dateFrom=${new Date(this.date_from).getTime()/1000}`;
                    document.cookie = `dateTo=${new Date(this.date_to).getTime()/1000}`;
                    this.calculateWinrate();
                    this.pnl = 0;
                    this.calculatePnL();
                    this.calculateLSRatio();
                    this.total_page = Math.floor((this.trade_list.length + this.max_list - 1) / this.max_list);
                    this.change_page(1);

                    if(this.chart_rendered == 0){
                        this.showlineChart();
                        this.showDoughnutChart()
                    }
                    else{
                        this.updatelineChart();
                        this.updatedoughnutChart();
                    }

                    this.bg_height = 'h-fit';

                }
            )
        },
        logout(){
            delete_cookie("userToken");
            delete_cookie("apiToken");
            delete_cookie("pair");
            delete_cookie("dateFrom");
            delete_cookie("dateTo");
            this.$router.push('/login');
        },
        change_page(index){
            this.current_page = index;
            this.sliced_tradelist = this.trade_list.slice((this.current_page-1)*this.max_list,this.current_page*this.max_list);
        },
        previous_page(){
            if(this.current_page > 1){
                this.current_page = this.current_page - 1;
                this.sliced_tradelist = this.trade_list.slice((this.current_page-1)*this.max_list,this.current_page*this.max_list);
            }
        },
        next_page(){
            if(this.current_page < this.total_page){
                this.current_page = this.current_page + 1 ;
                this.sliced_tradelist = this.trade_list.slice((this.current_page-1)*this.max_list,this.current_page*this.max_list);
            }
        },
        calculateWinrate(){
            var total_trade = this.trade_list.length;
            var total_win = 0;
            for(let i = 0;i<this.trade_list.length;i++){
                if(this.trade_list[i].closed_pnl >0){
                    total_win++;
                }
            }
            this.total_win = total_win;
            this.win_rate = total_win/total_trade * 100;
        },
        calculatePnL(){
            for(let i = 0;i<this.trade_list.length;i++){
                this.pnl = this.trade_list[i].closed_pnl + this.pnl;
            }
        },
        calculateLSRatio(){
            for(let i = 0;i<this.trade_list.length;i++){
                if(this.trade_list[i].side == "Sell"){
                    this.total_long ++;
                }
            }
        },
        symbol_inputChanged(){
            this.coinsymbols_filtered = {};
           for(let i in this.coin_symbols){
                if(this.coin_symbols[i].symbol.includes(this.symbol_input.toUpperCase())){
                    this.coinsymbols_filtered[i] = this.coin_symbols[i];
                
                }
           }
           this.showDoughnutChart();
        },
        showlineChart(){
                const ctx = document.getElementById('lineChart').getContext('2d');  
                const lineChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: this.dateArray,
                        datasets: [{
                            data: this.pnlArray,
                            fill: {
                                target: 'origin',
                                above: 'rgba(43, 122, 11,0.5)',
                                below: 'rgba(230, 72, 72,0.5)' 
                            },
                            borderColor: 'rgb(27, 38, 50)'                      
                        }]
                    },
                    options :{
                        tension:0.4,
                        plugins: {
                            legend: {
                            display: false
                            }
                        }
                    },
                });
                this.chart_rendered++;
                lineChart.show;


        },
        updatelineChart(){
            let chartStatus = Chart.getChart("lineChart"); 
            if (chartStatus != undefined) {
                chartStatus.data.datasets[0].data = null;
                chartStatus.data.labels = null;
                chartStatus.data.datasets[0].data = this.pnlArray;
                chartStatus.data.labels = this.dateArray;
                chartStatus.update();
            }

        },
        showDoughnutChart(){
            const ctx = document.getElementById('doughnutChart').getContext('2d');  
                const doughnutChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Longs','Shorts'],
                        datasets: [{
                            data: [this.total_long,this.trade_list.length-this.total_long],
                            backgroundColor :[
                                'rgb(125, 206, 19)',
                                'rgb(230, 72, 72)'
                            ],
                            borderColor: 'rgb(27, 38, 50)'  ,
                            hoverOffset : 4                   
                        }]
                    },
                    options :{


                    },
                });
                this.chart_rendered++;
                doughnutChart.show;
        },
        updatedoughnutChart(){
            let chartStatus = Chart.getChart("doughnutChart"); 
            if (chartStatus != undefined) {
                chartStatus.data.datasets[0].data = null;
                chartStatus.data.datasets[0].data = [this.total_long,this.trade_list.length-this.total_long];
                chartStatus.update();
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