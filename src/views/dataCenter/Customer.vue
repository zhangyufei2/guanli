<template>
  <div>
    <Top title1="数据中心&nbsp;&nbsp;/&nbsp;&nbsp;客户数据"></Top>
    <div class="slices">
      <ul>
        <li>
          <div class="li_left">
            <p>浏览人数</p>
            <h2>125</h2>
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon007.png" alt="" />
          </div>
          <div class="li_left">
            <p>注册人数</p>
            <h2>3456</h2>
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon008.png" alt="" />
          </div>
        </li>
        <li>
          <div class="li_left">

            <h2> 125</h2> -->
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon009.png" alt="" />
          </div>
          <div class="li_left">
            <p>评论人数</p>
            <h2>3456</h2>
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon010.png" alt="" />
          </div>
        </li>

        <li>
          <div class="li_left">
            <p>下单人数</p>
            <h2>96</h2>
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon011.png" alt="" />
          </div>
          <div class="li_left">
            <p>评论人数</p>
            <h2>3456</h2>
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon007.png" alt="" />
          </div>
        </li>
        <li>
          <div class="li_left">
            <p>关注人数</p>
            <h2>4568</h2>
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon007.png" />
          </div>
          <div class="li_left">
            <p>评论人数</p>
            <h2>3456</h2>
          </div>
          <div class="li_right">
            <img src="@/assets/image/slices/icon008.png" alt="" />
          </div>
        </li>
      </ul>
    </div>
    <h2 style="margin-left: 40px;margin-top: 20px;margin-bottom: 10px;">成交排行</h2>
    <div class="center">
      <div class="slices_city">
        <div class="example-block">
          <span class="example-demonstration">地区</span>

          <el-cascader v-model="value" :options="options" @change="handleChange" />

        </div>
      </div>
      <div class="slices_time">
        <div class="block">
          <span class="demonstration">时间&nbsp;&nbsp;</span>
          <el-date-picker v-model="value1" type="daterange" range-separator="--" start-placeholder="开始日期"
            end-placeholder="结束日期" />
        </div>
      </div>
      <div>
        <a-button type="primary" @click="showModal" style="color: black;">查询</a-button>
        <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
          <p>
            <input type="text" placeholder="订单号" style="height: 30px; width: 300px" v-model="order" />
          </p>
        </a-modal>

        <button @click="reset" style="top:-2px;position: relative;">重置</button>
      </div>
    </div>
    <table>
      <tr>
        <th>订单管理</th>
        <th>收货人</th>
        <th>收货地址</th>
        <th>订单状态</th>
        <th style="width: 190px">操作</th>
      </tr>
      <tr v-for="i in dateList" :key="i.goodsId">
        <td>
          <input type="checkbox" />
          {{ i.goodsSale }}
        </td>
        <!-- <td>{{i.goodsPic.toFixed(2)}}</td>
				<td>{{i.goodsKD.toFixed(2)}}</td> -->
        <td>{{ i.name }}</td>
        <td>{{ i.city }}</td>
        <!-- <td>{{i.goodsStar}}</td> -->
        <td>{{ i.goodsClass }}</td>
        <td>
          <!-- <button>修改</button>
					<button>删除</button> -->
          {{ i.goodsTimes }}
        </td>
      </tr>
    </table>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="page" current-page="current" v-model="current"
        default-current-page="1" @current-change="handleCurrentChange" :hide-on-single-page="true" />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { onMounted, ref } from "vue";
import { product } from "@/mock/products";
export default {
  name: "Customer",
  components: {
    Top,
  },
  setup() {

    const list = ref([]);
    const dateList = ref([]);
    const order = ref("");
    const page = ref(null);
    const current = ref(1);
    // 翻页
    const handleCurrentChange = async (val) => {
      current.value = val;
      const { result, data } = await product.getData({ page: val, size: 8 });
      dateList.value = result;
    };
    //获取数据
    onMounted(async () => {
      const { result, data } = await product.getData({ page: 1, size: 8 });
      dateList.value = result;
      list.value = data;
      page.value = data.length;
    });
    //弹框显示
    const visible = ref(false);
    const showModal = () => {
      visible.value = true;
    };
    //查询
    const handleOk = (e) => {
      dateList.value = list.value.filter((e) => e.goodsSale == order.value);
      order.value = "";
      visible.value = false;
    };
    //重置
    const reset = async () => {
      page.value = 1;
      const { result, data } = await product.getData({ page: 1, size: 8 });
      dateList.value = result;
      page.value = data.length;
    };
    return {
      list,
      dateList,
      visible,
      showModal,
      handleOk,
      order,
      page,
      reset,
      handleCurrentChange,
      current,
    };
  },
};
</script>

<style lang="less" scoped>
.slices {

  margin-top: -20px;
  height: 140px;
  background: #f6f6f6;

  ul {
    display: flex;
    justify-content: space-around;
    // justify-content: space-evenly;
    list-style: none;

    li {
      margin-top: 20px;
      border-radius: 20px;
      margin-left: -14px;
      background: #fff;
      display: flex;
      //border: 1px solid red;
      width: 320px;
      height: 95px;
      justify-content: space-evenly;

      .li_right {
        img {
          width: 55px;
          height: 38px;
          margin-top: 27px;
        }
      }
    }
  }

  margin-top: -20px;
  height: 100px;
  background: #f6f6f6;

  ul {
    display: flex;
    justify-content: space-around;
    // justify-content: space-evenly;
    list-style: none;

    li {
      align-items: center;

      margin-top: 10px;
      border-radius: 20px;
      margin-left: -14px;
      background: #fff;
      display: flex;
      //border: 1px solid red;
      width: 250px;
      height: 95px;
      justify-content: space-evenly;
      margin-right: 10px;
      padding-top: 10px;

      .li_left {
        h2 {
          font-size: 22px;
          margin-top: 6px;
        }
      }

      .li_right {
        img {
          width: 47px;
          height: 38px;
          margin-top: 10px;
        }
      }
    }
  }
}

.center {
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;

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
}

table {
  margin-top: 5px;
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  th,
  td {
    text-align: center;
    line-height: 35px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border-collapse: collapse;
    width: 100%;
    text-align: center;

    th,
    td {
      text-align: center;
      line-height: 28px;
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

  }
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

.page {
  padding-top: 10px;
  margin: 0 auto;

  width: 100px;
}
</style>
