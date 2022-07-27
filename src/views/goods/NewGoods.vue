<template>
  <div class="new">
    <div class="new_top">
      <Top title1="商品管理&nbsp;&nbsp;/&nbsp;&nbsp;全部商品&nbsp;&nbsp/&nbsp;&nbsp;新增商品"></Top>
    </div>
    <div class="new_img">
      <img src="@/assets/image/chang.png" alt="" />
    </div>
    <p class="new_mage">新增商品</p>
    <p style="margin-left: 30px">基本信息</p>
    <div class="tab">
      <form action="">
        <span>*</span>
        商品编号
        <input type="text" v-model="goodsSale" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;请填写商品编号" />
        <br />

        <span>*</span>
        商品名称
        <input type="text" v-model="goodsName" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;请填写商品名称" />
        <br />

        <span>*</span>供应商家<input type="text" v-model="supplier" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;" />
        <br />
        <span>*</span>销售销量
        <input type="text" v-model="goodsKD" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;" />
        <br />
        <span>*</span>销售售价
        <input type="text" v-model="goodsPic" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;" />
        <br />
        <br />
        <p class="city"><span style="color: gray">已选省份：</span>浙江省</p>
        <div class="btn">
          <br />
          <button>取消</button>
          <button @click.prevent="add">创建</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { ref } from "vue";
export default {
  name: "NewGoods",
  setup() {
    const goodsSale = ref("");
    const goodsName = ref("");
    const supplier = ref("");
    const goodsKD = ref("");
    const goodsPic = ref("");
    const goodsTory = ref("");
    const market = ref("");
    let GoodsLIST = ref("");
    let time = ref("");
    const add = () => {
      let GoodsToken = JSON.parse(localStorage.getItem("AllGoods"));
      GoodsLIST.value = GoodsToken.slice(0, 1);
      let res = {};
      GoodsLIST.value.map((i) => {
        console.log(i);
        res.market = "销售中";
        res.timeStart = "2022-06-018";
        res.timeEnt = "2022-06-20";
        res.goodsPic = goodsPic.value - 0;
        res.goodsTory = "6543";
        //res.goodsName = "婴幼儿奶瓶ppsu材质"
        res.goodsSale = goodsSale.value;
        res.goodsKD = goodsKD.value;
        res.supplier = supplier.value;
        res.goodsName = goodsName.value;

        res.time = "2022-06-07";
      });
      console.log(res);
      GoodsToken.unshift(res);
      localStorage.setItem("AllGoods", JSON.stringify(GoodsToken));
      alert("您已经成功创建！");
    };

    return {
      goodsSale,
      goodsName,
      supplier,
      goodsKD,
      GoodsLIST,
      time,
      add,
      goodsTory,
      market,
    };
  },
  components: {
    Top,
  },
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
