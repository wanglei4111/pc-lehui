<template>
    <div id="Print">
        <div class="title">
            <h4>打印设置</h4>
        </div>
        <div class="content">
            <div class="content-left">
                <print-list></print-list>
            </div>
            <div class="content-right">
                <serch-list></serch-list>
            </div>
        </div>
        
        <div class="footer">
            <button>取消</button>
            <button class="save">保存</button>
        </div>
        <div class="fullbg" v-if="fullbg">
            <div class="printSetting">
                <div class="printSettingBox-85">
                    <div class="box85-50">
                        <h1>功能:</h1>
                        <ul>
                            <li><p>打印机备注</p> <input class="box85-50-textInput" type="text"></li>
                            <li><input type="checkbox"> <p>打印交易凭证</p></li>
                            <li><input type="checkbox"> <p>打印点餐小票</p></li>
                            <li><input type="checkbox"> <p>打印账单汇总</p></li>
                            <li><input type="checkbox"> <p>打印二维码</p></li>
                        </ul>
                    </div>
                    <div class="box85-50">
                        <h1>参数:</h1>
                        <ul>
                            <li>
                                <p>打印机连接方式:</p>
                                <select v-model="typeValue" ref="typeSelect">
                                    <option v-for="(printType,typeIndex) in typeLists" v-bind:value="typeIndex">{{printType}}</option>  
                                </select>
                            </li>
                            <li v-if="showType == 0">
                                <p>名称:</p>
                                <select>
                                    <option></option>
                                </select>
                            </li>
                            <li v-if="showType == 1">
                                <p>IP:</p>
                                <input type="number">
                            </li>
                            <li v-if="showType == 2">
                                <p>端口:</p>
                                <select>
                                    <option>ddd</option>
                                </select>
                            </li>
                            <li><p>波特率:</p>
                                <select>
                                    <option v-for="(printBaudrate,index) in baudrateLists">{{printBaudrate}}</option>    
                                </select>
                            </li>
                            <li>
                                <p>打印纸宽度:</p>
                                <select>
                                    <option v-for="(printWidth,index) in widthLists">{{printWidth}}</option>
                                </select>
                            </li>
                            <li>
                                <p>打印小票张数:</p>
                                <select>
                                    <option v-for="(printNumber,index) in numberLists">{{printNumber}}</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="printSettingBox-15">
                    <button @click="printSetCancel">取消</button>
                    <button class="save" @click="printSetSave">保存</button>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import bus from '@/assets/printBus';
import serchList from '@/components/print/serchList.vue'
import printList from '@/components/print/printList.vue'

export default {
    name:'Print',
    data() {
        return {
            fullbg:false,
            printSettingLists:[],
            typeLists:['驱动','网口','USB','并口','串口'],
            baudrateLists:[100,200],
            widthLists:[58,80],
            numberLists:[1,2,3],
            showType:'',
            selected:2,
            typeValue:'',
        }
    },
    components:{
        'serch-list' : serchList,
        'print-list' : printList,
    },
    mounted() {
        var self = this;
        bus.$on('printSetting',function(val){
            self.fullbg = true;
            
        });
        
        
    },
    methods: {
        printSetCancel:function(){
            this.fullbg = false;
        },
        printSetSave:function(){
            this.fullbg = false;
        },
    },
    watch: {
        typeValue:function(){
            let value = this.$refs.typeSelect.value;
            if(value == 0){
                this.showType = 0
            }else if(value == 1){
                this.showType = 1
            }else{
                this.showType = 2
            };
        }
    },
}
</script>

<style scoped>
    #Print{
        position: relative;
        border-bottom: 1px solid rgb(225, 225, 225);
        padding:30px 0 50px 0; 
        width: 100%; 
    }
    .title{
        width: 100px;
        float: left;
    }
    
    .content{
        position: relative;
        width: 590px;
        float: left;
    }

    .content-left{
        width: 360px;
        float: left;
    }
    .content-right{
        width: 230px;
        float: left;
    }

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

    .fullbg{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-color:rgb(0,0,0,0.6);
        z-index: 1;
    }
    .printSetting{
        position: relative;
        top: 60px;
        width: 400px;
        height: 250px;
        margin:auto;
        background-color: white;
        box-shadow: 0 0 10px black;
        z-index: 2;
    }    
    .printSettingBox-85{
        width: 100%;
        height: 85%;
        border-bottom: 1px solid rgb(225, 225, 225);
    }
    .box85-50{
        width: 50%;
        height: 100%;
        float: left;
        box-sizing: border-box;
        padding: 10px;
    }
    .box85-50 li{
        list-style-type: none;
        line-height: 30px;
    }
    .box85-50 h1{
        font-size: 18px;
    }
    .box85-50 p{
        font-size: 13px;
        display: inline;
    }
    .box85-50-textInput{
        width: 60px;
    }
    .printSettingBox-15{
        width: 100%;
        height: 15%;
    }
    .printSettingBox-15 button{
        float: right;
        width: 60px;
        height: 22px;
        border-radius:5px;
        margin: 7px 10px 0 0;
    }
    
    
</style>