<template>
  <div class="all">

    <div class="top">
      <Top title1="商品管理&nbsp;&nbsp;/&nbsp;&nbsp;全部商品"></Top>
    </div>
    <div class="client_top">
      <div class="top_left">
        订单状态 <input type="text" name="" id="" value="全部订单">
        订单状态 &nbsp; &nbsp;<input type="text" name="" id="" value="订单编号">
      </div>
      <div class="top_right">
        <button class="search">查询</button>
        <button>重置</button>
      </div>

    </div>
    <div class="all_btn">
      <button>商品新增</button>
      <button>批量上架</button>
      <button>批量下架</button>
      <button>批量删除</button>
    </div>
    <table>
      <tr>
        <th>商品编号</th>
        <th>商品名称</th>
        <th>供应商</th>
        <th>售价</th>
        <th>库存</th>
        <th>销量</th>
        <th>状态</th>
        <th>创建日期</th>
        <th>操作</th>
      </tr>
      <tr v-for="i in dateList" :key="i.goodsId">
        <td>
          <input type="checkbox">
          {{ i.goodsSale }}
        </td>
        <td>{{ i.goodsName }}</td>
        <td>{{ i.supplier }}</td>
        <td>{{ i.goodsPic.toFixed(2) }}</td>
        <td>{{ i.goodsTory }}</td>
        <td>{{ i.goodsKD }}</td>
        <td>{{ i.market }}</td>
        <td>{{ i.time }}</td>
        <td>
          <button>修改</button>
          <button>删除</button>
        </td>
      </tr>
    </table>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="100" />
    </div>
  </div>

</template>

<script>
import Top from '@/components/Top.vue'
import { onMounted, ref } from 'vue'
import { product3 } from "@/mock/products";
export default {
  name: 'AllGoods',
  setup() {

    const list = ref([]);
    const dateList = ref([])
    onMounted(async () => {
      if (localStorage.getItem('AllGoods')) {
        dateList.value = JSON.parse(localStorage.getItem('AllGoods'))
      } else {
        const { result } = await product3.getData3({
          page: 2,
          size: 8,
        })
        localStorage.setItem('AllGoods', JSON.stringify(result))
        dateList.value = result
        console.log(dateList.value)
      }


    })

    return { list, dateList }
  },
  components: {
    Top
  }
};
</script>

<style lang="less" scoped>
.all {
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
