<template>
  <div class="new">
    <div class="new_top">
      <Top
        title1="促销管理&nbsp;&nbsp;/&nbsp;&nbsp;秒杀管理&nbsp;&nbsp/&nbsp;&nbsp;新增秒杀"
      ></Top>
    </div>
    <div class="new_img">
      <img src="@/assets/image/chang.png" alt="" />
    </div>
    <p class="new_mage">新增优惠卷</p>
    <p style="margin-left: 30px">基本信息</p>
    <div class="tab">
      <form action="">
        <span>*</span>
        秒杀标题
        <input
          type="text"
          v-model="titleValue"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;请填写秒杀标题"
        />
        <br />

        <span>*</span>
        商品编号 <input type="text" v-model="MallValue" /> <br />

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

        <span>*</span>活动省份
        <input
          type="text"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;添加省份"
          v-model="cityValue"
        />
        <br />
        <span>*</span>发放商家
        <input
          type="text"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;"
          v-model="merchantValue"
        />
        <br />
        <span>*</span>优惠面值
        <input
          type="input"
          v-model="faceValue"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;"
        />
        <br />
        <span>*</span>发放数量<input
          type="input"
          v-model="numValue"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;"
        />
        <br />
        <br />
        <p class="city">
          <span style="color: red">*</span>使用门槛：
          <input type="radio" value="1" class="one" v-model="door" />
          有门槛
          <input class="two" type="radio" value="2" v-model="door" />
          无门槛
        </p>

        <p class="city">
          <span style="color: red">*</span>有效期：
          <input
            type="radio"
            name="2"
            id=""
            class="one"
            style="margin-left: 42px"
          />
          指定有效期
        </p>

        <div class="block" style="margin-left: 50px">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value2"
            type="daterange"
            start-placeholder="2022-06-08"
            end-placeholder="2022-06-20"
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
          />
        </div>
        <div class="btn">
          <br />
          <button>取消</button>
          <!-- <button @click.prevent="add">创建
         
          </button> -->

          <a-button type="primary" @click="showModal">创建</a-button>
          <a-modal
            ref="modalRef"
            v-model:visible="visible"
            :wrap-style="{ overflow: 'hidden' }"
            @ok="handleOk"
          >
            <p>秒杀标题是:{{ titleValue }}</p>
            <p>商品编号是:{{ MallValue }}</p>
            <p>活动省份是:{{ cityValue }}</p>
            <p>发放商家是:{{ merchantValue }}</p>
            <p>优惠面值是:{{ faceValue }}</p>
            <p>使用门槛是：{{ door }}</p>

            <template #title>
              <div ref="modalTitleRef" style="width: 100%; cursor: move">
                您已经创建成功喔~~
              </div>
            </template>
            <template #modalRender="{ originVNode }">
              <div :style="transformStyle">
                <component :is="originVNode" />
              </div>
            </template>
          </a-modal>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { Modal } from "ant-design-vue";
import { defineComponent, ref, computed, watch, watchEffect } from "vue";
import { useDraggable } from "@vueuse/core";
export default defineComponent({
  name: "NewSeckill",
  setup() {
   
    const visible = ref(false);
    const modalTitleRef = ref(null);

    const titleValue = ref("");
    const MallValue = ref("");
    const cityValue = ref("");
    const merchantValue = ref("");
    const faceValue = ref("");

    const numValue = ref("");
    const door = ref("");
    const showModal = () => {
      visible.value = true;
      if (door.value == 1) door.value = "有门槛";
      if (door.value == 2) door.value = "无门槛";
    };

    const { x, y, isDragging } = useDraggable(modalTitleRef);

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    const startX = ref(0);
    const startY = ref(0);
    const startedDrag = ref(false);
    const transformX = ref(0);
    const transformY = ref(0);
    const preTransformX = ref(0);
    const preTransformY = ref(0);
    const dragRect = ref({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    });
    watch([x, y], () => {
      if (!startedDrag.value) {
        startX.value = x.value;
        startY.value = y.value;
        const bodyRect = document.body.getBoundingClientRect();
        const titleRect = modalTitleRef.value.getBoundingClientRect();
        dragRect.value.right = bodyRect.width - titleRect.width;
        dragRect.value.bottom = bodyRect.height - titleRect.height;
        preTransformX.value = transformX.value;
        preTransformY.value = transformY.value;
      }

      startedDrag.value = true;
    });
    watch(isDragging, () => {
      if (!isDragging) {
        startedDrag.value = false;
      }
    });
    watchEffect(() => {
      if (startedDrag.value) {
        transformX.value =
          preTransformX.value +
          Math.min(
            Math.max(dragRect.value.left, x.value),
            dragRect.value.right
          ) -
          startX.value;
        transformY.value =
          preTransformY.value +
          Math.min(
            Math.max(dragRect.value.top, y.value),
            dragRect.value.bottom
          ) -
          startY.value;
      }
    });
    const transformStyle = computed(() => {
      return {
        transform: `translate(${transformX.value}px, ${transformY.value}px)`,
      };
    });
    return {
      visible,
      showModal,
      handleOk,
      modalTitleRef,
      transformStyle,
      door,
      MallValue,
      titleValue,
      faceValue,
      numValue,
      cityValue,
      merchantValue,
    };
  },
  components: {
    Top,
  },
});
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
    margin: -13px auto;
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

      input {
        margin-left: 30px;

        top: 10px;
      }
      .one {
        position: relative;
        top: 10px;
        height: 12px;
        width: 12px;
        top: 2px;
      }
      .two {
        position: relative;
        top: 10px;
        height: 12px;
        width: 12px;
        top: 2px;
      }
    }

    .btn {
      margin-left: 280px;

      button {
        width: 55px;
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
.ant-modal-body {
  background: pink;
}
</style>
