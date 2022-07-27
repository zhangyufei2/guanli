<template>
    <div class="seckill">
        <div class="top"><Top title1="促销管理&nbsp;&nbsp;/&nbsp;&nbsp;优惠卷管理"></Top></div>
		<div class="client_top">
			<div class="top_left">
				状态筛选 <input
					type="text"
					name=""
					id=""
					value="全部"
				>
				优惠卷类型 &nbsp; &nbsp;<input
					type="text"
					name=""
					id=""
					value=""
				>
        商品名称 &nbsp; &nbsp;<input
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
			<button>新增优惠卷</button>
			<button>批量终止</button>
			<button>批量删除</button>
		</div>

    		<table>
			<tr>
				<th>优惠卷名称</th>
				<th>方式</th>
				<th>领取时间</th>
				<th>使用条件</th>
				<th>已领取</th>
				<th>发放商家</th>
				<th>状态</th>
			
				<th>操作</th>
			</tr>
			<tr
				v-for="i in dateList"
				:key="i.goodsId"
			>
				<td v-if="i.goodsSal==0">
					<input type="checkbox">
				满300立减80元
				</td>
        <td v-if="i.goodsSal==1">
					<input type="checkbox">
				满99立减10元
				</td>
				<td v-if="i.goodsAway==0">
				
			领取
				</td>
        <td v-if="i.goodsAway==1">
				
				发放
				</td>
				<td>{{i.goodsTime}}</td>
					<td>{{i.goodsFormat}}</td>
				<td>{{i.goodsAll}}</td>
			
				
				
				
				<td v-if="i.market==0">平台</td>
				<td v-if="i.market==1">贝贝熊</td>
   	<td v-if="i.goodsHome==0">已过期</td>
				<td v-if="i.goodsHome==1">进行中</td>
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
import { product5 } from "@/mock/products";
export default {
    name: 'Coupons',
    setup() {
		const list = ref([]);
		const dateList = ref([])
		onMounted(async () => {
			const { result } = await product5.getData5({
				page: 2,
				size: 8,
			})
			dateList.value = result
			// console.log(dateList.value)
		})

		return { list, dateList }
	},
components: { 
  Top
}
   
};
</script>

<style lang="less" scoped>
.seckill{ 
.top{ 
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