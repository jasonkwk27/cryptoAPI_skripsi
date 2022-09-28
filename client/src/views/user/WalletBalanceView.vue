<template>
    <div class = " bg-[#0F4C75] w-full h-full flex ">
        <div class = "basis-2/12 m-3"></div>
        <div class = "fixed bg-[#1B262C] text-center rounded-lg shadow-xl h-screen m-3  flex-auto w-2/12">
            <a href = "/home">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto mt-20 rounded-md ">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div class = "">
                        <h1 class = "text-[#BBE1FA] text-l">Home</h1>
                    </div>
            </div>
            </a>

            <a href = "/personal-info">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md">
                <div class = "mr-1 p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" fill="#BBE1FA"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Personal Info</h1>
                    </div>
            </div>
            </a>

            <a href = "#" @click ="api_clicked = !api_clicked">
            <div class = "flex items-center w-11/12 m-auto  hover:bg-[#0F4C75] rounded-md relative">
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
            <div class = "flex items-center  bg-gradient-to-r from-[#0F4C75] to-[#1B262C] w-11/12 m-auto rounded-md">
                    <div class = "mr-1 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M20.5,6H5.5c-.789,0-1.53-.376-2-.999,.457-.607,1.184-1.001,2-1.001H22.5c1.972-.034,1.971-2.967,0-3H5.5C2.468,1,0,3.467,0,6.5v11c0,3.033,2.468,5.5,5.5,5.5h15c1.93,0,3.5-1.57,3.5-3.5V9.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,13.5c0,.276-.225,.5-.5,.5H5.5c-1.379,0-2.5-1.122-2.5-2.5V8.396c.763,.39,1.618,.604,2.5,.604h15c.275,0,.5,.224,.5,.5v10Zm-2-5c-.034,1.972-2.967,1.971-3,0,.034-1.972,2.967-1.971,3,0Z" fill="#BBE1FA"/></svg>
                    </div>
                    <div>
                        <h1 class = "text-[#BBE1FA] text-l">Wallet Balances</h1>
                    </div>
            </div>
            </a>

            <a href = "#" @click ="ts_clicked = !ts_clicked">
            <div class = "flex items-center hover:bg-[#0F4C75] w-11/12 m-auto rounded-md relative">
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


        <div class = "flex-auto">
            <div class = "flex items-center bg-[#1B262C] text-center rounded-lg shadow-xl h-fit max-w-full mt-3 mr-3 mb-3 ">
                <h1 class = "text-[#BBE1FA] text-3xl p-3 w-11/12 ml-28 ">Wallet Balances</h1>  
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

            <div class = "flex">
                <div class = "bg-[#1B262C] basis-5/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = " flex-auto p-3 h-full w-full text-center">
                        <h1 class = "text-[#3282B8] text-3xl p-10 m-3 ">Total Networth</h1> 
                        <h1 class = "text-[#BBE1FA] text-3xl pb-3 m-3">$ {{this.total_networth}}</h1> 
                        <h1 class = "text-[#BBE1FA] text-3xl pb-3 m-3">{{1/this.coin_list["BTC"].price*this.total_networth}} BTC</h1> 
                    </div>

                </div>
                
                <div class = "bg-[#1B262C]  basis-7/12 mt-3 mr-3 mb-3 rounded-lg shadow-xl">
                    <div class = "w-fit text-center m-auto p-3 h-fit">
                        <h1 class = "text-[#3282B8] text-3xl pb-3 w-11/12 ">Networth Allocation</h1> 
                        <canvas id="doughnutChart" class =""></canvas>
                    </div>
                </div>
            </div>

            <div class = "bg-[#1B262C] rounded-lg shadow-xl h-fit mt-3 mr-3 mb-3">
                <div class = "coin_list max-w-full">
                    <table class = "table-auto w-full">
                    <tr>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Symbol</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Current Price</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Amount</th>
                        <th class = "px-5 py-3 text-left text-[#3282B8]">Value</th>
                    </tr>
                    <tr v-for="(coin,index) in coin_list" :key="index">
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{index}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">$ {{this.coin_list[index].price}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">{{this.coin_list[index].wallet_balance}}</td>
                            <td class = "px-5 py-3 text-left text-[#BBE1FA] ">$ {{this.coin_list[index].wallet_balance * this.coin_list[index].price}}</td>

                    </tr>
                    </table>
                </div>
            </div>

        </div>



        

    
    </div>

</template>

<script>
import axios from 'axios';
import Chart from 'chart.js/auto'
export default{
    data(){
        return{
            api_clicked : false,
            ts_clicked : false,
            coin_list : {},
            symbols : [],
            asset_value : [],
            total_networth : 0,
        }
    },
    created(){
        if(getCookie("userToken") == ""){
        this.$router.push('/login');
        }
        else {

            axios({
                method: 'get',
                url: 'http://localhost:3000/api/bybit/wallet-balance',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'authorization' : 'Bearer '+getCookie("apiToken")
                }
            })
            .then((res)=>{
                this.coin_list = res.data;
                this.symbols = Object.getOwnPropertyNames(this.coin_list);
                    axios({
                        method: 'get',
                        url: 'http://localhost:3000/api/bybit/coin-tickers',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                        }
                    }).then(
                        (result)=>{                   
                            for(let i = 0;i<this.symbols.length;i++){
                                for(let j = 0;j<result.data.length;j++){
                                    if(this.symbols[i] == "USDT"){
                                        this.coin_list[this.symbols[i]].price = 1;
                                        break;
                                    }
                                    else if(this.symbols[i] == "LUNA"){
                                        this.coin_list[this.symbols[i]].price = 0;
                                        break;
                                    }
                                    else if (result.data[j].symbol == this.symbols[i] + "USDT"){
                                        this.coin_list[this.symbols[i]].price = result.data[j].mark_price;
                                        break;
                                    }
                                }
                                this.asset_value[i] = this.coin_list[this.symbols[i]].price * this.coin_list[this.symbols[i]].wallet_balance;
                                this.total_networth = this.total_networth + (this.coin_list[this.symbols[i]].price * this.coin_list[this.symbols[i]].wallet_balance);
                            }
                            this.donut();
                        }
                        
                    )
            })
        }
       
    },
    methods: {
        logout(){
            delete_cookie("userToken");
            delete_cookie("apiToken");
            this.$router.push('/login');
        },
        donut(){
            const ctx = document.getElementById('doughnutChart').getContext('2d');
                const doughnutChart = new Chart(ctx,{
                    type: 'doughnut',
                    data: {
                        labels: this.symbols,
                        datasets: [{
                            label: 'Portfolio Allocation',
                            data: this.asset_value,
                            backgroundColor: ["#E0ACD5",'#3993DD','#F4EBE8','#29E7CD','#6A3E37','#DCF2B0','#C2EABD','#C0BABC','#C7AC92','#CD533B','#99B2DD','#7FB685'],
                            hoverOffset: 4
                        }]
                    },

                });
                doughnutChart.show;
        },

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