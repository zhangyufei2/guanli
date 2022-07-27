<template>
	<div class="seckill">
		<div class="top">
			<Top title1="促销管理&nbsp;&nbsp;/&nbsp;&nbsp;秒杀管理"></Top>
		</div>
		<div class="client_top">
			<div class="top_left">
				状态筛选 <input
					type="text"
					name=""
					id=""
					value="全部"
				>
				秒杀编号 &nbsp; &nbsp;<input
					type="text"
					name=""
					id=""
					value=""
				>
				秒杀名称 &nbsp; &nbsp;<input
					type="text"
					name=""
					id=""
					value=""
				>
			</div>
			<div class="top_right">
				<button class="search">查询</button>
				<button>重置</button>
			</div>

		</div>
		<div class="all_btn">
			<button>新增秒杀</button>
			<button>批量终止</button>
			<button>批量删除</button>
		</div>

		<table>
			<tr>
				<th>秒杀编号</th>
				<th>秒杀名称</th>
				<th>关联商品</th>
				<th>开始时间</th>
				<th>结束时间</th>
				<th>活动地区</th>
				<th>状态</th>
				<th>限购数量</th>
				<th>操作</th>
			</tr>
			<tr
				v-for="i in dateList"
				:key="i.goodsId"
			>
				<td>
					<input type="checkbox">
					{{i.goodsSale}}
				</td>
				<td>{{i.goodsMSName}}</td>
				<td>{{i.goodsName}}</td>
				<td>{{i.timeStart}}</td>
				<td>{{i.timeEnt}}</td>
				<td>{{i.goodsCity}}</td>

				<td v-if="i.market==0">已过期</td>
				<td v-if="i.market==1">进行中</td>
				<td>{{i.goodsKD}}</td>
				<td>
					<button>修改</button>
					<button>删除</button>
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
import Top from '@/components/Top.vue'
import { onMounted, ref } from 'vue'
import { product4 } from "@/mock/products";
export default {
	name: 'Seckill',
	setup() {
		
		const list = ref([]);
		const dateList = ref([])
		onMounted(async () => {
			// const { result } = await product4.getData4({
			// 	page: 2,
			// 	size: 8,
			// })
			if (localStorage.getItem('list')) {
				dateList.value = JSON.parse(localStorage.getItem('list'))
			} else{

				const { result } = await product4.getData4({
					page: 2,
					size: 8,
				})
				localStorage.setItem('list', JSON.stringify(result))
				dateList.value = result
			}

		
			console.log(dateList.value)
			
		})

		return { list, dateList }
	},
	components: {
		Top
	}

};
</script>

<style lang="less" scoped>
.seckill {
	.top {
		margin-left: -4px;
	}
	.client_top {
		margin-left: 30px;
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
	.all_btn {
		button {
			border-radius: 5px;
			margin-left: 33px;
			margin-right: -10px;
			background: #fff;
			border-style: none;
			border: 1px solid gray;
			width: 80px;
		}

		button:nth-of-type(1) {
			background: #ffa79d;
			border-style: none;
			color: #fff;
		}
	}
	table {
		border-collapse: collapse;
		width: 100%;
		text-align: center;
		margin-top: 10px;

		th,
		td {
			text-align: center;
			line-height: 35px;
			border: 1px solid #ccc;
			cursor: pointer;
		}
		button {
			cursor: pointer;
			width: 50px;
			margin-left: 3px;
			background: #fff;
			border-style: none;
			border: 1px solid black;
			height: 28px;
			border-radius: 5px;
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
	.page {
		padding-top: 10px;
		margin: 0 auto;
		width: 100px;
	}
}
</style>