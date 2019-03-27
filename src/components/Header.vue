<template>
    <div id="Header">
        <div class="title">
            <p>设置</p>
            <span class="titleNote">
                <p>版本: {{note}}</p> 
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>客服: 400 878 6703</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button>返回</button>
            </span>
        </div>
        <div class="fill"></div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {
            note:'V 2.0.2'
        }
    },
}
</script>


<style scoped>
    #Header{
        border-bottom: 1px solid rgb(225, 225, 225);
    }
    .title>p{
        font-size: 20px;
        color: rgb(51, 51, 51);
        margin: 2px 0;
        display: inline;
    }
    .titleNote{
        float: right;
        color: rgb(0, 78, 0);
    }
    .titleNote button{
        border-radius: 5px;
        width: 60px;
        height: 26px;
        font-size: 14px;
        color: white;
        background-color:rgb(171, 52, 24) ;
    }
    .titleNote p{
        font-size: 10px;
        display: inline;
    }
    .fill{
        border: 1px solid rgb(225, 225, 225);
        width: 42px;
        height: 1px;
        background-color: rgb(225, 225, 225);
    }
</style>
