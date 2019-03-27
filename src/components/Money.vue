<template>
    <div id="Money">
        <div class="title">
            <h4>获取金额</h4>
        </div>
        <div class="content">
            <div class="content-left">
                <div class="box">
                    <div class="box-header">
                        <input type="radio" name="getAmount" v-model="getAmount" value="0"><h5>不使用自动获取</h5>
                    </div>
                </div>
                <div class="box">
                    <div class="box-header">
                        <input type="radio" name="getAmount" v-model="getAmount" value="1"><h5>虚拟串口</h5>
                    </div>
                    <div class="box-body">
                        <!--<div class="fullbg"></div>-->
                        <ul>
                            <li>
                                <p>客显口</p>
                                <select :disabled="disabled !== 1">
                                    <option v-for="facts in factsLists">{{facts}}</option>
                                </select>
                                
                            </li>
                            <li>
                                <p>对接口</p>
                                <select  ref="connectionPortIntoSelect" :disabled="disabled !== 1">
                                    <option v-for="virtual in virtualLists">{{virtual}}</option>
                                </select>
                                <p> ⇌ <span class="connectionPort" v-if="connectionPortShow">{{connectionPortOut}}</span></p>
                            </li>
                        </ul>
                        <button @click="createPort" :disabled="disabled !==1">创建对接口</button><br/>
                        <button :disabled="disabled !==1">检测客显口</button>
                    </div>
                </div>
                <div class="box">
                    <div class="box-header">
                        <input type="radio" name="getAmount" v-model="getAmount" value="2" ><h5>物理监听</h5>
                        <div class="box-body">
                            <!--<div class="fullbg"></div>-->
                            <p>监听口</p>
                            <select :disabled="disabled !== 2">
                                <option v-for="facts in factsLists">{{facts}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="box-header">
                        <input type="radio" name="getAmount" v-model="getAmount" value="3"><h5>窗口获取</h5>
                        <div class="box-body">
                            <!--<div class="fullbg"></div>-->
                            <input class="windowIpt" type="number" :disabled="disabled !== 3">
                            <button :disabled="disabled !== 3">抓取</button>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="box-header">
                        <input type="radio" name="getAmount" v-model="getAmount" value="4"><h5>小票获取</h5>
                        <div class="box-body">
                            <!--<div class="fullbg"></div>-->
                            <ul>
                                <li class="printMoneyGetType">
                                    <p>获取的小票机类型</p>
                                    <select v-model="printMoneyTypeValue" ref="printMoneyTypeSelect" :disabled="disabled !== 4">
                                        <option v-for="(printMoneyType,printMoneyTypeIndex) in printMoneyTypeLists" v-bind:value="printMoneyTypeIndex">{{printMoneyType}}</option>
                                    </select>
                                    <ul v-if="printMoneyTypeShow == 0" class="printMoneyTypeShow">
                                        <li><p>获取IP :</p><input class="printMoneyIpt" type="number"  :disabled="disabled !== 4"></li>
                                        <li><p>获取端口(9100)</p>
                                            <select :disabled="disabled !== 4">
                                                <option></option>
                                            </select>
                                        </li>
                                    </ul>
                                    <ul v-if="printMoneyTypeShow == 1" class="printMoneyTypeShow">
                                        <li><p>获取串口</p>
                                            <select :disabled="disabled !== 4">
                                                <option></option>
                                            </select>
                                        </li>
                                        <li><p>串口波特率</p>
                                            <select :disabled="disabled !== 4">
                                                <option></option>
                                            </select>
                                        </li>
                                        <li><p>串口校验位</p>
                                            <select :disabled="disabled !== 4">
                                                <option></option>
                                            </select>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>转发的类型</p>
                                    <select :disabled="disabled !== 4">
                                        <option></option>
                                    </select>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </li>
                                <li>
                                    <p>金额前缀 :</p><input class="printMoneyIpt" type="text" :disabled="disabled !== 4">
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="box-header">
                        <input type="radio" name="getAmount" v-model="getAmount" value="5"><h5>直接显示</h5>
                    </div>
                    <div class="box-body">
                        <p>客显口</p>
                        <select :disabled="disabled !== 5">
                            <option v-for="facts in factsLists">{{facts}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="content-right">
                <help-wizard></help-wizard>
            </div>
        </div>
        <div class="footer">
            <button>取消</button>
            <button class="save">保存</button>
        </div>
    </div>
</template>

<script>
import moneyCom from '@/components/money/moneyCom.vue'
import HelpWizard from '@/components/money/HelpWizard.vue'

export default {
    name:'Money',
    data() {
        return {
            getAmount:0,
            connectionPort:'COM3',
            factsLists:['无','com1','com2'],
            virtualLists:['无'],
            connectionPortShow:false,
            printMoneyTypeLists:['网口','串口'],
            printMoneyTypeShow:false,
            printMoneyTypeValue:'',
            connectionPortOut:'COM4',
            disabled:'',
            printMoneyIp:'',
        }
    },
    components:{
        'money-com' : moneyCom,
        'help-wizard' : HelpWizard,
    },
    watch:{
        printMoneyTypeValue:function(){
            let value = this.$refs.printMoneyTypeSelect.value;
            if(value == 0){
                this.printMoneyTypeShow = 0
            }else if(value == 1){
                this.printMoneyTypeShow = 1
            };
        },
        getAmount:function(){
            if (this.getAmount.value == 0){
                this.disabled = 0
            }else if (this.getAmount == 1){
                this.disabled = 1
            }else if (this.getAmount == 2){
                this.disabled = 2
            }else if (this.getAmount == 3){
                this.disabled = 3
            }else if (this.getAmount == 4){
                this.disabled = 4
            }else if (this.getAmount == 5){
                this.disabled = 5
            }else{
                this.disabled = 10
            }
        },
    },
    methods: {
        createPort:function(){
            this.connectionPortShow = true;
        }
    },
}
</script>


<style scoped>
    #Money{
        border-bottom: 1px solid rgb(225, 225, 225);
        padding:30px 0 50px 0;
        width: 100%;  
    }
    /*标题*/
    .title{
        width: 100px;
        float: left;
    }
    /*正文*/
    .content{
        position: relative;
        width: 590px;
        float: left;
    }
    /*设置部分*/
    .fullbg{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-color:rgb(160,160,160,0.4);
        z-index: 2;
    }


    .content-left{
        width: 260px;
        float: left;
    }
    .box{
        width: 100%;
        padding: 0 0 40px 40px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .box-header{
        margin: 0 0 15px 0;
    }
    .box-header input{
        zoom: 1.5;
    }
    .box-header h5{
        margin: 0 0 0 10px;
        display: inline;
        position: relative;
        top: -3px;
    }
    .box-body{
        position: relative;
        margin: 0 0 0 40px;
    }
    .box-body select{
        position: relative;
    }
    .box-body ul li{
        list-style: none;
        line-height: 30px;
    }
    .box-body p{
        display: inline;
        font-size: 13px;
    }
    .box-body button{
        position: relative;
        width: 80px;
        height: 22px;
        border-radius: 5px;
        margin: 5px 0 0 0;
    }
    /*对接口*/
    .connectionPort{
        border: 1px solid rgb(200, 200, 200);
        border-radius: 5px;
        color: rgb(150, 150, 150);
    }
    /*窗口获取框*/
    .windowIpt{
        width: 50px;
        height: 15px;
    }
    /*小票金额部分*/
    .printMoneyIpt{
        width:100px ;
    }
    .printMoneyTypeShow{
        margin: 0 0 30px 20px;        
    }
    .printMoneyGetType{
        /*
        border: 1px solid rgb(176, 176, 176);
        */
        border-radius: 10px;
    }


    /*帮助向导部分*/
    .content-right{
        width: 330px;
        float: left;
    }
    /*底部保存取消栏*/
    .footer{
        clear: both;    
    }
    .footer button{
        float: right;
        width: 60px;
        height: 22px;
        border-radius:5px;
        margin: 0 10px 0 0;
    }    
    .save{
        background-color:rgb(76,130,204) ;
        color: white;
    }
</style>