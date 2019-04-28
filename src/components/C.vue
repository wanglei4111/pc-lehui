<template>
    <div id="C">
        <div class="title">
            <h4>功能</h4>    
        </div>
        
        <div class="content">
            <div class="box">
                <div class="box-left">
                    <h5>支付方式 :</h5>
                </div>
                <div class="box-right">
                    <ul>
                        <li>
                            <input type="checkbox" v-model="configs.payMethods" value="1">
                            <p>是否支持微信</p>
                        </li>
                        <li>
                            <input type="checkbox" v-model="configs.payMethods" value="2">
                            <p>是否支持支付宝</p>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="box">
                <div class="box-left">
                    <h5>扫码设备 :</h5>
                </div>
                <div class="box-right">
                    <ul>
                        <li>
                            <input type="checkbox" v-model="configs.supportScanBox" value="1" >
                            <p>是否支持扫码枪或新大陆盒子</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="box">
                <div class="box-left">
                    <h5>基础设置 :</h5>
                </div>
                <div class="box-right">
                    <ul> 
                        <li>
                            <input type="checkbox" v-model="configs.automaticStartup" value="1">
                            <p>开机自动启动</p>
                        </li>
                        <li>
                            <input type="checkbox" v-model="configs.confirmCollectMoney" value="0">
                            <p>手动确认收款</p>
                        </li>
                        
                        <li>
                            <input type="radio" v-model="configs.popupLh" value="1">
                            <p>单击悬浮窗打开乐惠助手</p>
                        </li>
                        <li>
                            <input type="radio" v-model="configs.popupLh" value="2">
                            <p>双击悬浮窗打开乐惠助手</p>
                        </li>
                        <br/>
                        <li>
                            <label>语音音量</label>
                            <select v-model="configs.voiceVolume">
                                <option v-for="(voiceVolume,voiceVolumeIndex) in voiceVolumeLists" :value="voiceVolume">{{voiceVolume}}</option>
                            </select>
                        </li>
                        <li>
                            <label>弹窗快捷键</label>
                            <select v-model="configs.openLh">
                                <option v-for="(shortcut,shortcutIndex) in shortcutLists" :value="shortcut">{{shortcut}}</option>
                            </select>
                        </li>
                        <!--
                        <li>
                            <p>语音播报</p>
                            <div class="bar">
                            <div class="barControl"></div>
                            </div>
                        </li>
                        -->
                        <li>
                            <button>初始化窗口</button>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div class="box">
                <div class="box-left">
                    <h5>扫码设置 :</h5>
                </div>
                <div class="box-right">
                    <ul>
                        <li>
                            <label>扫码识别间隔</label>
                            <select v-model="configs.scanIntervalSelected">
                                <option v-for="(scanInterval,scanIntervalIndex) in scanIntervalLists" :value="scanInterval">{{scanInterval}}</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
        
        <div class="footer">
            <button>取消</button>
            <button class="save" @click='saveConfig'>保存</button>
        </div>
    </div>
</template>

<script>

export default {
    name:'C',
    data() {
        return {
            shortcutLists:['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'],
            scanIntervalLists:[80,120,150,200,300],
            voiceVolumeLists:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            configs:{
                payMethods:[],
                supportScanBox:[],
                automaticStartup:[],
                confirmCollectMoney:[],
                popupLh:[],
                voiceVolume:1,
                openLh:'F1',
                scanIntervalSelected:80
            }
        }
    },
    methods:{
        saveConfig:function(){
            var url = '/submitConfig'
            var data = {
                id : 1,
                moduleName : '',
                configs : this.configs
            }
            axios.post(url, data).then((response)=>{
                console.log(response)
            }).
            catch(function(error){
                console.log('请求失败')
            })
        }
    }
}
</script>

<style scoped>
    #C{
        border-bottom: 1px solid rgb(225, 225, 225);
        padding:30px 0 50px 0; 
        width: 100%;
    }
    /*标题*/
    .title{
        width: 100px;
        float: left;
        margin: 0 0 40px 0;
    }
    
    /**/
    .content{
        position: relative;
        width: 590px;
        float: left;
    }
    
    .box{
        width: 100%;
        padding: 0 0 40px 40px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .box-left{
        width: 120px;
        float: left;
    }
    .box-right{
        width: 340px;
        float: left;
    }
    .box-right ul li{
        list-style: none;
        line-height: 30px;
    }
    .box-right ul li p{
        position: relative;
        display: inline;
        font-size: 13px;
        top: -3px;
    }
    .box-right ul li input{
        zoom: 1.5;
    }
    .box-right ul li label{
        font-size: 13px;
    }
    .box-right ul li button{
        width: 120px;
        height: 25px;
        border-radius:5px; 
    }

    /*喇叭*/
    .bar{
        position: relative;
        width: 150px;
        height: 6px;
        border: 1px solid rgb(220, 220, 220);;
        border-radius: 10px;
        background-color: rgb(220, 220, 220);
    }
    .barControl{
        position: relative;
        top: -3px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: black;
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
</style>
