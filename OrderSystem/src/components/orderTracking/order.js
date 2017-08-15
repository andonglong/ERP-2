import util from '../../common/js/util'
import { Notification } from 'element-ui'

export default {
	// 交货日期倒计时、延期、关闭状态处理
	checkDateDiff: function (order) {
		let obj = {}
		let nowDate =	new Date()
				nowDate = nowDate.toLocaleDateString()
		let diff = util.GetDateDiff(nowDate, order.deliverydatetime.split(' ')[0]) // 时间差
		let per = Math.round(order.qualifiedamount / order.orderamount * 10000) / 100.00		// 完成比例
		if (order.orderitemstatus == 1) {
			obj.name = 'bgc9'
			obj.num = `关闭`
		} else {
			// 订单状态=正常，当前流程状态=发货，完成比例<100%
			if (order.technologyname === '发货' && per < 100) {
				if (diff <= 0) {
					obj.num = diff === 0 ? '交货' : `${Math.abs(diff)}天`
					obj.name = 'bgc7'
				} else if (diff >= 1 && diff <= 3) {
					obj.name = 'bgc5'
					obj.num = `剩${Math.abs(diff)}天`
				}
			}
		}
		return obj
	},
	// 验证是否勾选订单
	checkChoseorder: res => {
		if (res) {
			return true
		} else {
			Notification({
        title: '温馨提示',
        message: '请勾选订单',
        type: 'warning',
        duration: 3000,
        offset: 60
      })
      return false
		}
	},
	checkList: function () {
		let arr = [{
        id: '1',
        label: '下单日',
        checked: true,
        name: 'createtime'
      }, {
        id: '2',
        label: '客户订单号',
        checked: true,
        name: 'outorderid'
      }, {
        id: '3',
        label: '产品名称',
        checked: true,
        name: 'productname'
      }, {
        id: '4',
        checked: true,
        name: 'productmodel',
        label: '产品型号'
      }, {
        id: '5',
        checked: true,
        name: 'orderamount',
        label: '订单数量'
      }, {
        id: '6',
        checked: true,
        name: 'planamount',
        label: '计划数量'
      }, {
        id: '7',
        checked: true,
        name: 'deliverydatetime',
        label: '交货日期'
      }, {
        id: '8',
        checked: true,
        name: 'inorderid',
        label: '跟单号'
      }, {
        id: '9',
        checked: true,
        name: 'serialno',
        label: '产品序号'
      }, {
        id: '10',
        checked: true,
        name: 'clientname',
        label: '客户名称'
      }, {
        id: '11',
        name: 'price',
        checked: false,
        label: '单价'
      }, {
        id: '12',
        name: 'totle',
        checked: false,
        label: '总金额'
      }, {
        id: '13',
        checked: true,
        name: 'technologyroute',
        label: '工艺路线'
      }, {
        id: '14',
        checked: true,
        name: 'technologyamount',
        label: '工序数'
      }, {
        id: '22',
        checked: true,
        name: 'completepercent',
        label: '工艺路线完成比'
      }, {
        id: '15',
        label: '当前流程',
        name: 'nowtechnology',
        checked: true,
        children: [{
          id: '16',
          checked: true,
          name: 'technologyname',
          label: '流程名称'
        }, {
          id: '17',
          checked: true,
          name: 'completeamount',
          label: '完成数量'
        }, {
          id: '18',
          checked: true,
          name: 'qualifiedamount',
          label: '合格数量'
        }, {
          id: '19',
          checked: true,
          name: 'technologystatus',
          label: '状态'
        }, {
          id: '20',
          checked: true,
          name: 'completePercent',
          label: '完成比例'
        }]
      }, {
        id: '21',
        checked: true,
        name: 'lasttime',
        label: '最近操作时间'
      }, {
        id: '23',
        checked: false,
        name: 'remark',
        label: '备注'
      }
	]
		return arr
	}
}
