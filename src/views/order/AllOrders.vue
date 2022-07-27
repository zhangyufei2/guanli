<template>
  <div class="client">
    <Top
      title1="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单管理&nbsp;&nbsp;/&nbsp;&nbsp;全部订单"
    ></Top>
    <div class="client_top">
      <div class="top_left">
        订单状态
        <input type="text" disabled placeholder="全部订单" />
        订单状态 &nbsp; &nbsp;
        <input type="text" placeholder="订单编号" v-model="order" />
      </div>
      <div class="top_right">
        <button type="primary" @click="search" style="color: black">
          查询
        </button>
        <button @click="reset" style="top: -2px; position: relative">
          重置
        </button>
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
      <tr v-for="i in dateList" :key="i.goodsId">
        <td>
          <input type="checkbox" />
          {{ i.goodsSale }}
        </td>
        <td>{{ (i.goodsPic-0).toFixed(2) }}</td>
        <td>{{ (i.goodsKD-0).toFixed(2) }}</td>
        <td>{{ i.name }}</td>
        <td>{{ i.city }}</td>
        <td v-if="i.goodsStar == 0">支付宝</td>
        <td v-if="i.goodsStar == 1">微信</td>
        <td v-if="i.goodsClass == 0" style="color: #c4de9b">未发货</td>
        <td v-if="i.goodsClass == 1" style="color: red">已发货</td>
        <td style="text-align: center">
          <div style="text-align: center">
            <a-button type="primary" @click="showModal(i.goodsSale)">修改</a-button>
            <a-button @click="confirm(i.goodsSale)">删除</a-button>
            
            <a-modal
              v-model:visible="visible"
              title="订单修改"
              ok-text="确认"
              cancel-text="取消"
              @ok="submit"
            >
              <form>
                
                <input
                  type="text"
                  v-model="goodsSale"
                  disabled
                  placeholder="订单管理"
                /><br />
                <input
                  type="text"
                  placeholder="实付金额"
                  v-model="goodsPic"
                />
                <br />
                <input
                  type="text"
                  v-model="goodsKD"
                  placeholder=" 快递金额"
                /><br />
                <input
                  type="text"
                  
                  placeholder="收货人"
                  v-model="name"
                /><br />
                <input
                  type="text"
                 
                  placeholder="支付方式"
                  v-model="city"
                /><br />
                <input
                  type="number"
                  min="0"
                  max="1"
                 
                  placeholder=" 订单状态"
                  v-model="goodsStar"
                /><br />
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
        :total="page"
        current-page="current"
        v-model="current"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
//import { onMounted, ref } from 'vue'
import { product2 } from "@/mock/products";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, onMounted, createVNode } from "vue";
import { Modal } from "ant-design-vue";
export default defineComponent({
  setup() {
    
    const list = ref([]);
    const dateList = ref([]);
    const visible = ref(false);
    const page = ref(null);
    const current = ref(1);

    const showModal = (i) => {
      visible.value = true;
      goodsSale.value =  i
    };
    onMounted(async () => {
      if (sessionStorage.getItem("list")) {
        dateList.value = JSON.parse(sessionStorage.getItem("dateList"));
        list.value = JSON.parse(sessionStorage.getItem("list"));
        page.value = list.value.length;
      } else {
        const { result, data2 } = await product2.getData2({
          page: 1,
          size: 7,
        });
        sessionStorage.setItem("dateList", JSON.stringify(result));
        sessionStorage.setItem("list", JSON.stringify(data2.data));
        dateList.value = JSON.parse(sessionStorage.getItem("dateList"));
        list.value = JSON.parse(sessionStorage.getItem("list"));
        page.value = data2.data.length;
      }
    });

    // 翻页
    const handleCurrentChange = (val) => {
      current.value = val;
      dateList.value = list.value.slice((val - 1) * 7, val * 7 > list.value.length ? list.value.length-1 : val * 7);
      page.value = list.value.length;
    };
    const order = ref("");
    const goodsSale = ref("");
    const goodsPic = ref("");
    const goodsKD = ref("");
    const name = ref("");
    const city = ref("");
    const goodsStar = ref("");

    //查询
    const search = async () => {
      dateList.value = await list.value.filter(
        (e) => e.goodsSale == order.value
      );
      order.value = "";
    };
    //重置
    const reset = async () => {
      page.value = 1;
      dateList.value = await JSON.parse(sessionStorage.getItem("list")).slice(
        0,
        7
      );
      list.value = await JSON.parse(sessionStorage.getItem("list"));
      page.value = list.value.length;
    };

    const confirm = (i) => {
      Modal.confirm({
        title: "Confirm",
        icon: createVNode(ExclamationCircleOutlined),
        content: "您确认要删除吗",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          console.log(i);
          dateList.value = dateList.value.filter((e) => e.goodsSale != i);
          sessionStorage.setItem("dateList", JSON.stringify(dateList.value));
          list.value = list.value.filter((e) => e.goodsSale != i);
          sessionStorage.setItem("list", JSON.stringify(list.value));
          page.value = list.value.length;
          visible.value = false
        },
      });
    };
    const submit = () => {
      let data = dateList.value.find(e=>e.goodsSale == goodsSale.value)
      if(data){
        data.goodsPic = goodsPic.value || data.goodsPic
        data.goodsKD = goodsKD.value || data.goodsKD
        data.name = name.value || data.name
        data.city = city.value || data.city
        data.goodsStar = goodsStar.value || data.goodsStar
        dateList.value.splice(dateList.value.findIndex(e=>e.goodsSale == goodsSale.value),1,data)
        dateList.value = dateList.value
      }
     visible.value = false
    };
    
    return {
      list,
      goodsSale,
      goodsPic,
      goodsKD,
      name,
      city,
      goodsStar,
      submit,
      dateList,
      visible,
      showModal,
      confirm,
      search,
      reset,
      page,
      order,
      current,
      handleCurrentChange,
    };
  },
  components: {
    Top,
  },
});
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
