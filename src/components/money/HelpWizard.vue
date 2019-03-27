<template>
    <div id="HelpWizard">
        <div class="header">
            <h5>帮助设置向导</h5>
            <ul v-for="(item,index) in items">
                <li>
                    <button @click="clickHelp(index)">{{item}}</button>
                </li>
            </ul>
        </div>
        <div class="body">
            <div class="box-help" v-if="portShow==0">
                <p></p>
            </div>
            <div class="box-help" v-if="portShow==1">b</div>
            <div class="box-help" v-if="portShow==2">c</div>
            <div class="box-help" v-if="portShow==3">d</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HelpWizard',
    data() {
        return {
            items:['虚拟串口','物理监听','窗口获取','小票获取'],
            portShow:'',
        }
    },
    methods: {
        clickHelp:function(index){
            this.portShow = index
        }
    },
}
</script>
<style scoped>
    #HelpWizard{
        width: 100%;
        box-sizing: border-box;
        padding:0 15px 0 15px;

    }
    .header{
        width: 100%;
        overflow: hidden;
    }
    .header h5{
        text-align: center;
        margin: 0 0 20px 0;
    }
    .header ul{
        width: 100%;
    }
    .header ul li{
        list-style: none;
        float: left;
        width: 25%;
        text-align: center;
    }
    .header ul li button{
        width: 70px;
        height: 20px;
    }

    .box-help{
        overflow: scroll;
        width: 100%;
        height: 500px;
        margin-top: 10px;
        border: 1px solid rgb(176, 176, 176);
        background-color: white;
    }
</style>
