<template>
    <div id="serchList">
        <div class="title">
            <h5>打印机列表</h5>
        </div>    
        <div class="box">
            <ul v-for="(print,index) in printLists" v-if="serched">
                <li>
                    <p>{{print.name}}</p>
                    <br/>
                    <button><p>测试</p></button>
                    <button @click="connection(index)"><p>连接</p></button>
                </li>
            </ul>
        </div>
        <div class="footer">
            <button @click="serched=true">搜索打印机</button>
            <button @click="pushEmpty()">添加自定义</button>
        </div>
    </div>
</template>

<script>
import bus from '@/assets/printBus';

export default {
    name:'serchList',
    data() {
        return {
            serched:false,
            printLists:[
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
                {note:'打印机',name:'GP-80160(Cut) Series',type:'驱动'},
            ],
        }
    },
    methods:{
        connection:function(index){
            var val = this.printLists[index];
            bus.$emit('connection',val)
        },
        pushEmpty:function(){
            bus.$emit('pushEmpty')
        }
    }
}
</script>

<style scoped>
    .serchList{
        width: 100%;
        padding: 0 0 0 40px;
        box-sizing: border-box;
    }
    .serchList h5{
        text-align: center;
    }

    .serchList_box{
        overflow: scroll;
        width: 100%;
        height: 200px;
        border: 1px solid rgb(176, 176, 176);
        background-color: white;
    }
    .serchList_box ul li{
        list-style: none;
        text-align: center;
        margin: 0 0 3px 0;
        border-bottom: 1px solid rgb(240, 240, 240);   
    }
    .serchList_box ul li button{
        width: 40px;
        border-radius: 5px;
        color: rgb(0, 59, 107);
    }
    .serchList_box ul li p{
        display: inline;
        font-size: 13px;    
    }
    .serchList_footer{
        width: 100%;
        margin: 10px 0 40px 0;
    }
    .serchList_footer button{
        width: 100px;
        height: 30px;
        display: block;
        margin: 0 auto;
        border-radius: 5px;
    }
</style>

