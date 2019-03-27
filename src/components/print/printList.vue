<template>
    <div id="printList">
        <div class="title">
            <h5>当前已连接小票机</h5>
        </div>
        <div class="nonthing" v-if="choosePrint">
            <h2>暂无</h2>
        </div>
        <div class="choosedPrint" v-for="(print,index) in printLists">
            <ul>
                <li>{{print.note}}</li>
                <li>{{print.type}}</li>
                <li>{{print.name}}</li>
            </ul>
            <div class="control">
                <button @click="printSetting(index)">设置</button>
                <button @click="removePrint(index)">删除</button>
            </div>
        </div>
    </div>
</template>

<script>
import bus from '@/assets/printBus';

export default {
    name:'printList',
    data() {
        return {
            choosePrint: true,
            printLists:[],
            printNote:'打印机',
            printEmpty:'',
        }     
    },
    mounted() {
        var self = this;
        bus.$on('connection',function(val) {
            self.printLists.push(val);
        });
        bus.$on('pushEmpty',function(){
            self.printLists.push(self.printEmpty)
        })
    },
    watch: {
        printLists: function(){
            if(this.printLists.length>0){
                this.choosePrint = false;
            }else{
                this.choosePrint = true;
            }
        }
    },
    methods: {
        printSetting:function(index){
            bus.$emit('printSetting',this.printLists[index]);
        },
        removePrint:function(index){
            this.printLists.splice(index,1)
        }
    },
}
</script>

<style scoped>
    #printList{
        width: 100%;
        box-sizing: border-box;
    }
    h5{
        text-align: center;
    }
    h2{
        position: relative;
        text-align: center;
        color: rgb(200,200,200);
        top: 20px;
    }
    .choosedPrint{
        overflow: hidden;
        width: 100%;
        height: 30px;
        border: 1px solid rgb(176,176,176);
        border-radius: 10px;
        background-color: rgb(225,225,225);
        margin: 0 0 20px 0;
        
    }
    .choosedPrint ul li{
        list-style: none;
        float: left;
        line-height: 30px;
        font-size: 13px;
        width: 33%;
        text-align: center;
            
    }
    .choosedPrint ul li:first-child{
        padding-right:3px; 
    }
    .choosedPrint ul li:nth-child(2){
        width: 30px;
    }
    .control{
        height: 100%;
        float: right;
    }
    .control button{
        position: relative;
        top: 2px;
        width: 40px;
        height: 25px;
        border-radius: 10px;
    }
</style>