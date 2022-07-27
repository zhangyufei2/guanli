<template>
	<div class="client">
		<Top title1="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单管理&nbsp;&nbsp;/&nbsp;&nbsp;待订单"></Top>
		<div class="client_top">
			<div class="top_left">
				订单状态 <input
					type="text"
					name=""
					id=""
					value=""
					placeholder="待支付订单"
				>
				订单状态 &nbsp; &nbsp;<input
					type="text"
					name=""
					id=""
					placeholder="订单编号"
					v-model="valNum"
				>
			</div>
			<div class="top_right">
				<button
					class="search"
					@click="search"
				>查询</button>
				<button @click="now">重置</button>
			</div>
		</div>

		<table>
			<tr>
				<th>订单管理</th>
				<th>实付金额</th>
				<th>快递金额</th>
				<th>收货人</th>
				<th>收货地址</th>
				<th>支付方式</th>
				<th>订单状态</th>
				<th style="width: 190px">操作</th>
			</tr>
			<tr
				v-for="(i,index) in dateList"
				:key="i.goodsId"
			>
				<td>
					<input type="checkbox">
					{{i.goodsSale}}
				</td>
				<td>{{i.goodsPic.toFixed(2)}}</td>
				<td>{{i.goodsKD.toFixed(2)}}</td>
				<td>{{i.name}}</td>
				<td>{{i.city}}</td>
				<td v-if="i.goodsStar==0">支付宝</td>
				<td v-if="i.goodsStar==1">微信</td>
				<!-- <td>{{i.goodsClass}}</td> -->
				<!-- <td
					v-if="i.goodsClass==0"
					style="color:#C4DE9B;"
				>未发货</td>
				<td
					v-if="i.goodsClass==1"
					style="color:red;"
				>已发货</td> -->
				<td>{{i.goodsNo}}</td>
				<td style=" text-align: center;">
					<!-- <button>修改</button>
					<button>删除</button> -->
					<div style=" text-align: center;">
						<a-button
							type="primary"
							@click="showModal(i.goodsSale)"
						>修改</a-button>
						<a-button @click="confirm(i.goodsId,index)">删除</a-button>
						<a-modal
							v-model:visible="visible"
							title="订单修改"
							ok-text="确认"
							cancel-text="取消"
							@ok="submit(i.goodsSale)"
						>

							<form>
								<input
									type="text"
									name=""
									id=""
									placeholder="订单管理"
									v-model="goodsSale"

								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder="实付金额"
									v-model="goodsPic"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder=" 快递金额"
									v-model="goodsKD"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder="收货人"
									v-model="name"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder="收货地址"
									v-model="city"
								><br>
								<input
									type="number"
									name=""
									id=""
									placeholder=" 订单状态"
									v-model="goodsStar"
								><br>

							</form>
						</a-modal>
					</div>
				</td>
			</tr>
		</table>
		<div class="page">
			<el-pagination
				background
				layout="prev, pager, next"
				:total="tatol"
				@current-change="changgePage"
				current-page="currentPage"
				v-model="currentPage"
			/>
		</div>
	</div>

</template>
<script>
import Top from '@/components/Top'
//import { onMounted, ref } from 'vue'
import { product6 } from "@/mock/products";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, onMounted, createVNode } from 'vue';
import { Modal } from 'ant-design-vue';
export default defineComponent({
	setup() {
		
		const list = ref([]);
		const dateList = ref([])
		const visible = ref(false);
		// const page = ref();
		const current = ref(1);
		const tatol = ref(1)
		const currentPage = ref("")
		const valNum = ref("")
		//修改变量 
		const order = ref("");
		const goodsSale = ref("");
		const goodsPic = ref("");
		const goodsKD = ref("");
		const name = ref("");
		const city = ref("");
		const goodsStar = ref("");
   
		const showModal = (i) => {
			visible.value = true;
      goodsSale.value=i
		};

		const hideModal = () => {
			visible.value = false;
		};
		//删除
		const confirm = (id, index) => {

			// console.log(id)
			// dateList.value = dateList.value.filter(i => i.goodsId !== id)
			// console.log(dateList.value)
			// dateList.value.splice(index, 1)
			// console.log(dateList.value.length)
			Modal.confirm({
				title: 'Confirm',
				icon: createVNode(ExclamationCircleOutlined),
				content: '您确认要删除吗',
				okText: '确认',
				cancelText: '取消',
				//删除
				onOk() {
					dateList.value.splice(index, 1)
				},
			});
		};
		//修改
		const submit = () => {

			let dataNow = dateList.value.find(e => e.goodsSale == goodsSale.value)
			if (dataNow) {
			//dataNow.goodsSale =goodsSale.value=i
				dataNow.goodsPic = goodsPic.value - 0 || dataNow.goodsPic - 0
				dataNow.goodsKD = goodsKD.value - 0 || dataNow.goodsKD - 0
				dataNow.name = name.value || dataNow.name
				dataNow.city = city.value || dataNow.city
				//dataNow.goodsStar = goodsStar.value || dataNow.goodsStar
			 dateList.value.splice(dateList.value.findIndex(e => e.goodsSale == goodsSale.value), 1, dataNow)
				dateList.value = dateList.value
			}
   
      visible.value = false
		}
		//查询
		const search = () => {

			dateList.value = list.value.filter(v => v.goodsSale == valNum.value)
		}
		//重置：

		const now = async () => {
			// dateList.value = list.value
			const { result } = await product6.getData22({ page: 2, size: 7 })
			dateList.value = result
		}
		//切换分页
		const changgePage = async (val) => {

			console.log(1)
			currentPage.value = val
			const { result } = await product6.getData22({ page: val, size: 7 })
			dateList.value = result
		}
		onMounted(async () => {
			const { result, num, newDate } = await product6.getData22({ page: 2, size: 7 })
			// list.value = data
			//  page.value = dateList.value.length
			dateList.value = result
			list.value = newDate
			tatol.value = num
			//console.log(dateList.value.length)
			// console.log(dateList.value)
		})

		return {
			list, dateList, visible, changgePage,
			showModal,
			hideModal,
			confirm,
			tatol,
			currentPage,
			// page,
			current,
			valNum,
			search,
			now,
			submit,
			goodsSale,
			goodsPic,
			goodsKD,
			name,
			city,
			goodsStar,
			order,
      
		}
	},
	components: {
		Top
	}

})
</script>

<style lang="less" scoped>
.client {
	text-align: center;
	margin-left: -2px;

	.client_top {
		margin-left: 80px;
		line-height: 70px;
		display: flex;
		justify-content: space-between;
		input {
			cursor: pointer;
			margin-right: 15px;
			border: 2px solid wheat;
			border-color: #66b1fe;
			height: 24px;
		}
		.top_right {
			margin-right: 20px;
			button {
				cursor: pointer;
				margin-right: 10px;
				width: 50px;
				height: 30px;
				background: #fff;
				border: 1px solid black;
			}
			.search {
				background: #ffa79d;
				color: #fff;
				border: 1px solid wheat;
			}
		}
	}
	table {
		border-collapse: collapse;
		width: 95%;
		text-align: center;
		th,
		td {
			text-align: center;
			line-height: 38px;
			border: 1px solid #ccc;
			cursor: pointer;
			text-align: center;
		}

		button {
			text-align: center;
			cursor: pointer;
			width: 80px;
			margin-left: 3px;
			background: #fff;
			border-style: none;
			border: 1px solid gray;
			// height: 35px;
			border-radius: 5px;
			color: black;
		}
		button:hover {
			background: pink;
			color: #fff;
			border: none;
		}
		tr:nth-child(even) {
			background: #ffefef;
		}
		tr:hover {
			background: #a5d1fe;
		}
	}
}
.page {
	padding-top: 10px;
	margin: 0 auto;
	width: 100px;
}

.ant-modal-content {
	form {
		text-align: center;
		input {
			width: 200px;
			border: 1px solid #ccc;
			background: #fff;
			height: 25px;
			margin-bottom: 5px;
		}
	}
}
</style>