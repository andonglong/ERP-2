<template>
<div class="record-box">
  <div class="record-container">
    <div class="info-box" v-for=" item in recordData.data ">
      <div class="date c999">{{item.operationtime | formatDate}}</div>
      <div class="info">
        <div>
          <img class="Avatar" :src="item.img"> </div>
        <div>
          <div class="name c333">{{item.username}}</div>
          <div class="info c666" v-html="item.operationcentent"></div>
        </div>
      </div>
    </div>
    <div class="loading" v-show=" recordData && recordData.data.length >= 10 ? true:false ">
      <i class="el-icon-loading" v-if="RecordLoadingText != '没有更多'"></i>
      <span>{{RecordLoadingText}}</span>
    </div>
  </div>
</div>
</template>

 <script>
import $util from 'common/js/util.js'
import api from 'api/request.js'
export default {
    props: ['recordData'],
    data () {
        return {
            RecordPageIndex: 1,
            RecordLoadingText: '加载中...'
        }
    },
    created () {
        // this.fetchRecordData(this.RecordPageIndex)
    },
    mounted () {
        // let _this = this
        let recordScroll = document.querySelectorAll('.record-box')
        recordScroll[0].addEventListener('scroll', function (e) {
            e = e || window.event
            let distance = e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight
            if (distance < 10) {
              // let PageIndex = _this.recordData.PageIndex = ++_this.recordData.PageIndex
                // if ((_this.drawingData.uploadRecordDataSum - PageIndex * _this.Pagesize) < -10) {
                //     console.log(_this.LoadingText)
                //     setTimeout(() => { _this.LoadingText = '没有更多' }, 500)
                //     return;
                // }
                // _this.fetchAffixData(PageIndex, _this.Pagesize)
            }
        })
    },
    beforeUpdate () {
        //  console.log(this.recordData)
    },
    updated () {
    },
    filters: {
        formatDate: function (value) {
            return $util.DateFormat(value, 'yyyy/MM/dd hh:mm:ss')
        }
    },
    methods: {
        fetchRecordData (PageIndex, Pagesize) {
            // this.recordData.data = [{ "companyid": "10018", "factoryid": "1122", "inorderid": "166196091", "operationcentent": "ddd", "operationtime": 1499827018000, "productmodel": "SVCK42", "serialno": "1", "username": "maxwell" }]
            let obj = this.recordData
            let param = { inorderid: obj.inorderid, productmodel: obj.productmodel, productserialno: obj.productserialno, pageindex: PageIndex, pagesize: Pagesize }
            api.order.getdrawingsheetbyorderid(param).then(res => {
                this.drawingData.uploadRecord = this.drawingData.uploadRecord.concat(res.data.datalist.reverse())
                this.drawingData.uploadRecordDataSum = res.data.datasum
            })
        }
    }
}
</script>

 <style lang="stylus">
  .record-box
    height: 100%
    overflow-y: auto
    .record-container
        width: 93%
        height: 100%
        margin: 0 auto
        padding-top: 20px
        box-sizing:border-box
        > div:first-child
           border-top: 1px solid #e5e5e5
        .info-box
           min-height: 76px
           padding: 15px 20px 20px 20px
           background-color: #f8f8f8
           border-bottom: 1px solid #e5e5e5
           .date
             text-align: right
           .info
             display: flex
           .Avatar
             width: 48px
             height: 48px
             margin: 0 20px 0 5px
             border-radius: 24px
             vertical-align: top
           .name
             font-size: 18px
             margin-bottom: 16px
           .info
             line-height: 1.5
             letter-spacing: 1px
           .red
             color: #FF4949
        .loading
           display:flex
           justify-content: center
           align-items: center
           height: 40px
           .el-icon-loading
             margin-right: 5px
 </style>
