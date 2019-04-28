<template>
    <div id="configs">
        <!-- 抬头 -->
        <div class="header">
            <div class="header_title">
                <p>设置</p>
                <span class="header_title_note">
                    <p>版本: V{{general.note}}</p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <p>客服: 400 878 6703</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button>返回</button>
                </span>
            </div>
            <div class="header_fill"></div>
        </div>
        <!-- 基础 -->
        <div class="main_box">
            <div class="box_title">
                <h4>功能</h4>
            </div>
            <div class="box_content"> 
                <div class="box_content_classification">
                    <div class="box_content_classification_title">
                        <h5>支付方式 :</h5>
                    </div>
                    <div class="box_content_classification_content">
                        <ul>
                            <li>
                                <input type="checkbox" v-model="configs.base.payMethods" :value="1">
                                <p>是否支持微信</p>
                            </li>
                            <li>
                                <input type="checkbox" v-model="configs.base.payMethods" :value="2">
                                <p>是否支持支付宝</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="box_content_classification">
                    <div class="box_content_classification_title">
                        <h5>扫码设备 :</h5>
                    </div>
                    <div class="box_content_classification_content">
                        <ul>
                            <li>
                                <input type="checkbox" v-model="configs.base.supportScanbox" :value="1">
                                <p>是否支持扫码枪或新大陆盒子</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="box_content_classification">
                    <div class="box_content_classification_title">
                        <h5>基础设置 :</h5>
                    </div>
                    <div class="box_content_classification_content">
                        <ul>
                            <li>
                                <input type="checkbox" v-model="configs.base.autoStartup" :value="1">
                                <p>开机自动启动</p>
                            </li>
                            <li>
                                <input type="checkbox"  v-model="configs.base.confirmReceiptting" :value="1">
                                <p>手动确认收款</p>
                            </li>
                            <li>
                                <input type="radio" v-model="configs.base.popupLh" :value="1">
                                <p>单击悬浮窗打开乐惠助手</p>
                            </li>
                            <li>
                                <input type="radio" v-model="configs.base.popupLh" :value="2">
                                <p>双击悬浮窗打开乐惠助手</p>
                            </li>
                            <br/>
                            <li>
                                <label>弹窗快捷键</label>
                                <select v-model="configs.base.lhShortKey">
                                    <option v-for="lhShortKeyValue in general.lhShortKeyValueLists">{{lhShortKeyValue}}</option>
                                </select>
                            </li>                    
                            <li>
                                <button>初始化窗口</button>
                            </li>

                        </ul>
                    </div>
                </div>

                <div class="box_content_classification">
                    <div class="box_content_classification_title">
                        <h5>扫码设置 :</h5>
                    </div>
                    <div class="box_content_classification_content">
                        <ul>
                            <li>
                                <label>扫码识别间隔</label>
                                <select v-model="configs.base.scanInterval">
                                    <option v-for="scanIntervals in general.scanIntervalLists">{{scanIntervals}}</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="box_footer">
                <button>取消</button>
                <button class="box_footer_save" @click="baseSubmitSave">保存</button>
            </div>
        </div>
        <!-- 金额 -->
        <div class="main_box">
            <div class="box_title">
                <h4>获取金额</h4>
            </div>
            <div class="box_content">
                <div class="box_content_left">
                    <div class="box_content_classification">
                        <div class="box_content_classification_title width260px">
                            <input type="radio" v-model="configs.amounts.getAmountWay" :value="0"><h5>不使用自动获取</h5>
                        </div>
                    </div>
                    <div class="box_content_classification">
                        <div class="box_content_classification_title width260px">
                            <input type="radio" v-model="configs.amounts.getAmountWay" :value="1"><h5>虚拟串口</h5>
                        </div>
                        <div class="box_content_classification_content staticLeft40px">
                            <!--<div class="fullbg"></div>-->
                            <ul>
                                <li>
                                    <p>客显口</p>
                                    <select v-model="configs.amounts.virtualMonitor.connectedFactPort">
                                        <option v-for="factPort in configs.amounts.factPortLists">{{factPort}}</option>
                                    </select>
                                </li>
                                <li>
                                    <p>对接口</p>
                                    <select v-model="configs.amounts.virtualMonitor.acceptVirtualInputPort">
                                        <option v-for="virtualInputPort in configs.amounts.virtualInpuPortLists">{{virtualInputPort}}</option>
                                    </select>
                                    <p> ⇌ <span class="connectionPort"></span></p>
                                </li>
                            </ul>
                            <button >创建对接口</button><br/>
                            <button >检测客显口</button>
                        </div>
                    </div>
                    <div class="box_content_classification">
                        <div class="box_content_classification_title width260px">
                            <input type="radio"  v-model="configs.amounts.getAmountWay" :value="2"><h5>物理监听</h5>
                        </div>
                        <div class="box_content_classification_content staticLeft40px">
                            <!--<div class="fullbg"></div>-->
                            <p>监听口</p>
                            <select v-model="configs.amounts.physicalMonitor.connecterFactPort">
                                <option v-for="factPort in configs.amounts.factPortLists">{{factPort}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="box_content_classification">
                        <div class="box_content_classification_title width260px">
                            <input type="radio" v-model="configs.amounts.getAmountWay" :value="3"><h5>窗口获取</h5>
                        </div>
                        <div class="box_content_classification_content staticLeft40px">
                            <!--<div class="fullbg"></div>-->
                            <input class="windowIpt" type="number" >
                            <button >抓取</button>
                        </div>
                    </div>
                    <div class="box_content_classification">
                        <div class="box_content_classification_title width260px">
                            <input type="radio" v-model="configs.amounts.getAmountWay" :value="4"><h5>小票获取</h5>
                        </div>
                        <div class="box_content_classification_content staticLeft40px">
                            <!--<div class="fullbg"></div>-->
                            <ul>
                                <li class="printMoneyGetType">
                                    <p>获取的小票机类型</p>
                                    <select >
                                        <option></option>
                                    </select>
                                    <ul class="printMoneyTypeShow">
                                        <li><p>获取IP :</p><input class="printMoneyIpt" type="number"  ></li>
                                        <li><p>获取端口(9100)</p>
                                            <select >
                                                <option></option>
                                            </select>
                                        </li>
                                    </ul>
                                    <ul class="printMoneyTypeShow">
                                        <li><p>获取串口</p>
                                            <select >
                                                <option></option>
                                            </select>
                                        </li>
                                        <li><p>串口波特率</p>
                                            <select >
                                                <option></option>
                                            </select>
                                        </li>
                                        <li><p>串口校验位</p>
                                            <select >
                                                <option></option>
                                            </select>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>转发的类型</p>
                                    <select >
                                        <option></option>
                                    </select>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </li>
                                <li>
                                    <p>金额前缀 :</p><input class="printMoneyIpt" type="text" >
                                </li>   
                            </ul>
                        </div>
                    </div>
    
                    <div class="box_content_classification">
                        <div class="box_content_classification_title width260px">
                            <input type="radio" v-model="configs.amounts.getAmountWay" :value="5"><h5>直接显示</h5>
                        </div>
                        <div class="box_content_classification_content staticLeft40px">
                            <p>客显口</p>
                            <select>
                                <option v-for="factPort in configs.amounts.factPortLists">{{factPort}}</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="box_content_right">
                    <div class="helpWizard">
                        <div class="helpWizard_header">
                            <h5>帮助设置向导</h5>
                            <ul>
                                <li v-for="(monitorWay,monitorWayIndex) in general.monitorWayLists">
                                    <button @click="helperShow(monitorWayIndex)">{{monitorWay}}</button>
                                </li>
                            </ul>
                        </div>
                        <div class="helpWizard_body">
                            <div class="helpWizard_body_content" v-show="general.helper==0"></div>
                            <div class="helpWizard_body_content" v-show="general.helper==1">b</div>
                            <div class="helpWizard_body_content" v-show="general.helper==2">c</div>
                            <div class="helpWizard_body_content" v-show="general.helper==3">d</div>
                            <div class="helpWizard_body_content" v-show="general.helper==4">e</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box_footer">
                <button>取消</button>
                <button class="box_footer_save">保存</button>
            </div>
        </div>
        <!-- 打印 -->
        <div class="main_box">
            <div class="box_title">
                <h4>打印设置</h4>
            </div>
            <div class="box_content">
                <div class="box_content_left width360px">
                    <div class="printList">
                        <div class="box_content_classification_title">
                            <h5>当前已连接小票机</h5>
                        </div>
                        <!-- <div class="nonthing" v-if="choosePrint">
                            <h2>暂无</h2>
                        </div> -->
                        <div class="printList_choosedPrint">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div class="printList_choosedPrint_control">
                                <button>设置</button>
                                <button>删除</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box_content_right width230px">
                    <div class="serchList">
                        <div class="box_content_classification_title">
                            <h5>打印机列表</h5>
                        </div>
                        <div class="serchList_box">
                            <ul>
                                <li v-for="">
                                    <p></p>
                                    <br/>
                                    <button><p>测试</p></button>
                                    <button><p>连接</p></button>
                                </li>
                            </ul>
                        </div>
                        <div class="serchList_footer">
                            <button>搜索打印机</button>
                            <button>添加自定义</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box_footer">
                <button>取消</button>
                <button class="box_footer_save">保存</button>
            </div>
            <div class="fullbg" v-if="general.printDiy">
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
                                    <select  >
                                        <option ></option>  
                                    </select>
                                </li>
                                <li>
                                    <p>名称:</p>
                                    <select>
                                        <option></option>
                                    </select>
                                </li>
                                <li>
                                    <p>IP:</p>
                                    <input type="number">
                                </li>
                                <li>
                                    <p>端口:</p>
                                    <select>
                                        <option>ddd</option>
                                    </select>
                                </li>
                                <li><p>波特率:</p>
                                    <select>
                                        <option ></option>    
                                    </select>
                                </li>
                                <li>
                                    <p>打印纸宽度:</p>
                                    <select>
                                        <option></option>
                                    </select>
                                </li>
                                <li>
                                    <p>打印小票张数:</p>
                                    <select>
                                        <option></option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="printSettingBox-15">
                        <button>取消</button>
                        <button class="save">保存</button>
                    </div>                
                </div>
            </div>
        </div>

    </div>
</template>
<script>


export default {
    name:'configs',
    data() {
        return {
            general:{
                printDiy:false,
                note:'2.0.2',
                lhShortKeyValueLists:['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'],
                scanIntervalLists:[80,100,120,150,200,300],
                monitorWayLists:['虚拟串口','物理监听','窗口获取','小票获取','直接显示'],
                helper:0,
            },
            configs:{
                base:{
                    payMethods:[],
                    supportScanbox:[],
                    autoStartup:[],
                    confirmReceiptting:[],
                    popupLh:1,
                    lhShortKey:'F1',
                    scanInterval:'80'
                },
                amounts:{
                    getAmountWay:1,
                    factPortLists:[],
                    virtualInputPortLists:[],
                    virtualMonitor:{
                        virtualInputPort:'',
                        acceptVirtualInputPort:'',
                        connecttingFactPort:''
                    },
                    physicalMonitor:{
                        connecttingFactPort:''
                    },
                    windowMonitor:{
                        windowMonitorData:''
                    },
                    receiptMonitor:{

                    }
                },
                print:{

                }
            }
            // pc:{
            //     note:'2.0.2'
            // },
            // selectDate:{
            //     lhShortKeyValueLists:['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'],
            //     scanIntervalLists:[80,100,120,150,200,300]
            // },
            // base:{
            //     payMethods:[],
            //     supportScanBox:[],
            //     automaticStartup:[],
            //     confirmReceipt:[],
            //     barControl:[],
            //     popuplh:1,
            //     lhShortKey:'F1',
            //     scanIntervalSelected:80
            // },
            // amounts:{
            //     general:{
            //         getAmountWayDisabled:1,
            //     },
            //     getAmountWay:1,
            //     factPortLists:[],
            //     virtualInputPortLists:[],
            //     virtualMonitor:{
            //         virtualInputPort:'',
            //         acceptVirtualInputPort:'',
            //         connecttingFactPort:''
            //     },
            //     physicalMonitor:{
            //         connecttingFactPort:''
            //     },
            //     windowMonitor:{
            //         windowMonitorData:''
            //     },
            //     receiptMonitor:{

            //     }
            // },
            // print:{
            //     printLists:[],
            //     connectedPrintLists:[]
            // }
        }
    },
    methods:{
        baseSubmitSave:function(){
            var url = '/'
            var data = {
                id:1,
                moduleName:'',
                configs:this.configs.base
            }
            axios.post(url,data).then((response)=>{
                console.log(response)
            }).
            catch(function(error){
                console.log('请求失败')
            })
        },
        helperShow:function(monitorWayIndex) {
            this.general.helper = monitorWayIndex
        }
    },
    watch:{
        // /*金额*/
        // 'amounts.getAmountWay':function(){
        //     if (this.getAmount.value == 0){
        //         this.disabled = 0
        //     }else if (this.getAmount == 1){
        //         this.disabled = 1
        //     }else if (this.getAmount == 2){
        //         this.disabled = 2
        //     }else if (this.getAmount == 3){
        //         this.disabled = 3
        //     }else if (this.getAmount == 4){
        //         this.disabled = 4
        //     }else if (this.getAmount == 5){
        //         this.disabled = 5
        //     }else{
        //         this.disabled = 10
        //     }
        // }
    }
}
</script>
<style>
/*header*/
    .header{
        border-bottom: 1px solid rgb(225, 225, 225);
    }
    .header_title>p{
        font-size: 20px;
        color: rgb(51, 51, 51);
        margin: 2px 0;
        display: inline;
    }
    .header_title_note{
        float: right;
        color: rgb(0, 78, 0);
    }
    .header_title_note button{
        border-radius: 5px;
        width: 60px;
        height: 26px;
        font-size: 14px;
        color: white;
        background-color:rgb(171, 52, 24) ;
    }
    .header_title_note p{
        font-size: 10px;
        display: inline;
    }
    .header_fill{
        border: 1px solid rgb(225, 225, 225);
        width: 42px;
        height: 1px;
        background-color: rgb(225, 225, 225);
    }
/*main*/
    .main_box{
        position: relative;
        border-bottom: 1px solid rgb(225, 225, 225);
        padding: 30px 0 50px 0;
        width: 100%;
    }
    .box_title{
        width: 100px;
        float: left;
        margin: 0 0 40px 0;

    }
    .box_content{
        position: relative;
        width: 590px;
        float: left;
    }
    .box_content_left{
        width: 260px;
        float: left;
    }
    .box_content_right{
        width: 330px;
        float: left;
    }
    .box_content_classification{
        width: 100%;
        padding: 0 0 40px 40px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .box_content_classification_title{
        width: 120px;
        float: left;
    }
    .box_content_classification_title input{
        zoom: 1.5;
    }
    .box_content_classification_title h5{
        margin: 0 0 0 10px;
        display: inline;
        position: relative;
        top: -3px;
    }
    .box_content_classification_content{
        width: 340px;
        float: left;
    }
    .box_content_classification_content select{
        position: relative;
    }
    .box_content_classification_content button{
        position: relative;
        width: 80px;
        height: 22px;
        border-radius: 5px;
        margin: 5px 0 0 0;
    }
    .box_content_classification_content p {
        position: relative;
        display: inline;
        font-size: 13px;
        top: -3px;
    }
    .box_content_classification_content ul li {
        list-style: none;
        line-height: 30px;
    }
    .box_content_classification_content ul li input {
        zoom: 1.5;
    }
    .box_content_classification_content ul li label {
        font-size: 13px;
    }
    .box_content_classification_content ul li button {
        width: 120px;
        height: 25px;
        border-radius: 5px;
    }
/*单独属性*/    
    .width260px{
        width: 260px;
    }
    .width360px{
        width: 360px;
    }
    .width230px{
        width: 230px;
    }
    .staticLeft40px{
        position: relative;
        left: 40px;
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
/*已连接打印机*/
    .printList{
        width: 100%;
        box-sizing: border-box;
    }
    .printList h5{
        text-align: center;
    }
    .printList h2{
        position: relative;
        text-align: center;
        color: rgb(200,200,200);
        top: 20px;
    }
    .printList_choosedPrint{
        overflow: hidden;
        width: 100%;
        height: 30px;
        border: 1px solid rgb(176,176,176);
        border-radius: 10px;
        background-color: rgb(225,225,225);
        margin: 0 0 20px 0;
        
    }
    .printList_choosedPrint ul li{
        list-style: none;
        float: left;
        line-height: 30px;
        font-size: 13px;
        width: 33%;
        text-align: center;
            
    }
    .printList_choosedPrint ul li:first-child{
        padding-right:3px; 
    }
    .printList_choosedPrint ul li:nth-child(2){
        width: 30px;
    }
    .printList_choosedPrint_control{
        height: 100%;
        float: right;
    }
    .printList_choosedPrint_control button{
        position: relative;
        top: 2px;
        width: 40px;
        height: 25px;
        border-radius: 10px;
    }
    
/*搜索的小票机列表*/
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
/**/

/*获取金额向导*/
    .helpWizard{
        width: 100%;
        box-sizing: border-box;
        padding:0 15px 0 15px;

    }
    .helpWizard_header{
        width: 100%;
        overflow: hidden;
    }
    .helpWizard_header h5{
        text-align: center;
        margin: 0 0 20px 0;
    }
    .helpWizard_header ul{
        width: 100%;
    }
    .helpWizard_header ul li{
        list-style: none;
        float: left;
        width: 20%;
        text-align: center;
    }
    .helpWizard_header ul li button{
        width: 56px;
        height: 20px;
    }

    .helpWizard_body_content{
        overflow: scroll;
        width: 100%;
        height: 500px;
        margin-top: 10px;
        border: 1px solid rgb(176, 176, 176);
        background-color: white;
    }

/*保存、取消*/
    .box_footer {
        clear: both;
    }
    .box_footer button {
        float: right;
        width: 60px;
        height: 22px;
        border-radius: 5px;
        margin: 0 10px 0 0;
    }
    .box_footer_save {
        background-color: rgb(76, 130, 204);
        color: white;
    }

</style>
