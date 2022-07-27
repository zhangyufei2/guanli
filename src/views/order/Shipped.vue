<template>
	<div class="client">
		<Top title1="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单管理&nbsp;&nbsp;/&nbsp;&nbsp;已支付订单"></Top>
		<div class="client_top">
			<div class="top_left">
				订单状态 <input
					type="text"
					name=""
					id=""
					value=""
          placeholder="已支付订单"
				>
				订单状态 &nbsp; &nbsp;<input
					type="text"
					name=""
					id=""
					value=""
          placeholder="订单编号"
				>
			</div>
			<div class="top_right">
				<button class="search">查询</button>
				<button>重置</button>
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
				v-for="i in dateList"
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
        <td>{{i.goodsYes}}</td>
				<td style=" text-align: center;">
					<!-- <button>修改</button>
					<button>删除</button> -->
					<div style=" text-align: center;">
						<a-button
							type="primary"
							@click="showModal"
						>修改</a-button>
						<a-button @click="confirm">删除</a-button>
						<a-modal
							v-model:visible="visible"
							title="订单修改"
							ok-text="确认"
							cancel-text="取消"
							@ok="hideModal"
						>

							<form>
								<input
								
									type="text"
									name=""
									id=""
									placeholder="订单管理"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder="实付金额"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder=" 快递金额"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder="收货人"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder="支付方式"
								><br>
								<input
									type="text"
									name=""
									id=""
									placeholder=" 订单状态"
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
				:total="100"
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

		const showModal = () => {
			visible.value = true;
		};

		const hideModal = () => {
			visible.value = false;
		};

		const confirm = () => {
			Modal.confirm({
				title: 'Confirm',
				icon: createVNode(ExclamationCircleOutlined),
				content: '您确认要删除吗',
				okText: '确认',
				cancelText: '取消',
			});
		};
		onMounted(async () => {
			const { result } = await product6.getData22({
				page: 2,
				size: 7,
			})
			dateList.value = result
			// console.log(dateList.value)
		})

		return {
			list, dateList, visible,
			showModal,
			hideModal,
			confirm,
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