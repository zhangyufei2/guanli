<template>
	<div class="new">
		<div class="new_top">
			<Top title1="促销管理&nbsp;&nbsp;/&nbsp;&nbsp;秒杀管理&nbsp;&nbsp/&nbsp;&nbsp;新增秒杀"></Top>
		</div>
		<div class="new_img">
			<img
				src="@/assets/image/chang.png"
				alt=""
			>
		</div>
		<p class="new_mage">新增秒杀</p>
		<p style="margin-left:30px">基本信息</p>
		<div class="tab">
			<form action="">
				<span>*</span>
				秒杀标题 <input
					type="text"
					v-model="goodsMSName"
					placeholder="&nbsp;&nbsp;&nbsp;&nbsp;请填写秒杀标题"
				> <br>

				<span>*</span>
				商品编号 <input
					type="text"
					v-model="goodsSale"
				> <br>

				<div class="block">
					<span>*</span>活动时间
					<span class="demonstration"></span>
					<el-date-picker
						v-model="value2"
						type="daterange"
						start-placeholder="2022-06-18 00:00:00"
						end-placeholder="2022-06-20 23:59:59"
						:default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
					/>
				</div>

				<span>*</span>活动省份 <input
					type="text"
					v-model="goodsCity"
					placeholder="&nbsp;&nbsp;&nbsp;&nbsp;添加省份"
				>
				<br>
				<br>
				<p class="city">
					<span style="color: gray;">已选省份：</span>浙江省,江苏省,山东省
				</p>
				<div class="btn">
					<br>
					<button>取消</button>
					<button @click.prevent="add">创建</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import Top from '@/components/Top.vue'
import { ref } from 'vue'
export default {
	name: 'NewSeckill',
	setup() {
		
		const goodsMSName = ref("")
		const goodsSale = ref("")
		const goodsCity = ref("")
		let goodsLIST = ref('{}')
		const add = () => {
			// console.log(localStorage.getItem('list'))
			let newToken = JSON.parse(localStorage.getItem('list'))
			//	console.log(newToken)
			goodsLIST.value = newToken.slice(0, 1)
			//console.log(goodsLIST.value)
			let res = {}
			goodsLIST.value.map(i => {
console.log(i)
				res.timeStart= '2022-06-018'
				res.timeEnt = '2022-06-20'
				res.market= 1
				res.goodsKD=1
				res.goodsName= "婴幼儿奶瓶ppsu材质"
				res.goodsMSName= goodsMSName.value
				res.goodsSale= goodsSale.value
				res.goodsCity = goodsCity.value


			})
      console.log(res)
			newToken.unshift(res)
			console.log(newToken)
			localStorage.setItem('list', JSON.stringify(newToken))
			alert("您已经成功创建！")
		}
		return {
			add,
			goodsMSName, goodsSale, goodsCity, goodsLIST
		}
	},
	components: {
		Top
	}
};
</script>

<style lang="less" scoped>
.new {
	.new_top {
		margin-left: -5px;
	}
	.new_img {
		height: 40px;
		img {
			height: 100%;
		}
	}
	.new_mage {
		position: relative;
		top: -30px;
		font-size: 16px;
		left: 6px;
	}
	.tab {
		margin: 60px auto;
		width: 500px;
		height: 300px;
		//border: 1px solid red;
		span {
			color: red;
		}
		input {
			width: 348px;
			border: 1px solid #ccc;
			margin-bottom: 6px;
			height: 29px;
			margin-top: 5px;
			text-decoration: 5px;
		}
		.city {
			margin-left: 70px;
		}
		.btn {
			margin-left: 280px;

			button {
				width: 50px;
				height: 30px;
				cursor: pointer;
				margin-right: 5px;
				background: #fff;

				border: 1px solid black;
			}
			button:nth-of-type(2) {
				background: #ffa79c;
				color: #fff;
				border-style: none;
			}
			button:hover {
				background: #95b56d;
				color: #fff;
				border-style: none;
			}
		}
	}
}
</style>