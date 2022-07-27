<template>
  <div class="client">
    <!-- 客户数据 -->
    <div class="top">
      <Top title1="数据中心&nbsp;&nbsp;/&nbsp;&nbsp;实时数据"></Top>
    </div>
    <ul>
      <li>
        <div class="client_left">
          <p>今日成交额</p>
          <h1>97842</h1>
          <p>较昨日<span>+2.31%</span></p>
        </div>
        <div class="client_right">
          <img src="@/assets/icon/icon10.png" alt="" />
        </div>
        <div class="client_img">
          <img src="@/assets/icon/juxingkuang04.png" alt="" />
        </div>
      </li>
      <li>
        <div class="client_left">
          <p>今日订单量</p>
          <h1>842</h1>
          <p>较昨日<span style="color: #c4de9b">-5.31%</span></p>
        </div>
        <div class="client_right">
          <img src="@/assets/icon/icon11.png" alt="" />
        </div>
        <div class="client_img">
          <img src="@/assets/icon/juxing06.png" alt="" />
        </div>
      </li>
      <li>
        <div class="client_left">
          <p>今日访客量</p>
          <h1>6842</h1>
          <p>较昨日<span>+8.45%</span></p>
        </div>
        <div class="client_right">
          <img src="@/assets/icon/icon12.png" alt="" />
        </div>
        <div class="client_img">
          <img src="@/assets/icon/juxing07.png" alt="" />
        </div>
      </li>
      <li>
        <div class="client_left">
          <p>待付款订单</p>
          <h1>18</h1>
          <p>较昨日<span style="color: #c4de9b">-3.31%</span></p>
        </div>
        <div class="client_right">
          <img src="@/assets/icon/icon13.png" alt="" />
        </div>
        <div class="client_img">
          <img src="@/assets/icon/juxing08.png" alt="" />
        </div>
      </li>
    </ul>
    <!-- <h3 style="margin-left: 50px;margin-top: 40px;z-index: 99999;">成交金额</h3> -->
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 100%; height: 180px"></div>
    <div class="footer">
      <div class="footer_left">
        <p style="font-size: 20px; margin-bottom: 10px">销量排行榜</p>
        <table>
          <tr>
            <td>序号</td>
            <td>商品</td>
            <td>销量</td>
            <td>成交金额</td>
          </tr>
          <tr>
            <td>01</td>
            <td>
              <img src="@/assets/icon/tupian01.png" alt="" />
              <span>PUSP奶瓶款式</span>
            </td>
            <td>244</td>
            <td>7669761</td>
          </tr>
          <tr>
            <td>02</td>
            <td>
              <img src="@/assets/icon/tupian02.png" alt="" />
              <span>PUSP奶瓶款式</span>
            </td>
            <td>842</td>
            <td>589211</td>
          </tr>
          <tr>
            <td>03</td>
            <td>
              <img src="@/assets/icon/tupian03.png" alt="" /><span>PUSP奶瓶款式</span>
            </td>
            <td>4322</td>
            <td>96131</td>
          </tr>
          <tr>
            <td>04</td>
            <td>
              <img src="@/assets/icon/tupian04.png" alt="" /><span>PUSP奶瓶款式</span>
            </td>
            <td>45542</td>
            <td>137531</td>
          </tr>
        </table>
      </div>

      <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
      <div id="yuan" style="width: 700px; height: 200px"></div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import { onMounted } from "vue";
import * as echarts from "echarts";
export default {
  name: "RealTimes",
  setup() {

    onMounted(() => {
      var myChart = echarts.init(main);
      var option;

      option = {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#FDC5BE",
                },
                {
                  offset: 1,
                  color: "#FCE5CF",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: "Line 2",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#FFACA2",
                },
                {
                  offset: 1,
                  color: "rgba(253,192,185,.6)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 282, 111, 234, 220, 340, 310],
          },
        ],
      };

      option && myChart.setOption(option);
      document.getElementById("main").setAttribute("_echarts_instance_", "");
    });
    onMounted(() => {
      var myChart = echarts.init(yuan);
      var option;

      option = {
        title: {
          text: "品牌销售额占比",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["CityA", "CityB", "CityD", "CityC", "CityE"],
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],

            data: [
              { value: 1548, name: "CityE", itemStyle: { color: "#C4DE9B" }, },
              { value: 735, name: "CityC", itemStyle: { color: "#FFDB92" } },
              { value: 434, name: "CityB", itemStyle: { color: "#A5D1FF" } },
              { value: 805, name: "CityA", itemStyle: { color: "#FFA79C" } },
            ],
          },
        ],
      };

      option && myChart.setOption(option);

      document.getElementById("yuan").setAttribute("_echarts_instance_", "");
    });

    return {};
  },
  components: {
    Top,
  },
};
</script>

<style lang="less" scoped>
.client {
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;

    li {
      width: 200px;
      //  background: pink;
      //  border: 1px solid black;
      margin-right: 10px;

      display: flex;
      height: 90px;

      justify-content: space-around;

      .client_left {
        z-index: 999;

        margin-top: 10px;

        h1 {
          margin-bottom: 4px;
          font-size: 20px;
        }

        p {
          margin-bottom: 5px;

          span {
            color: red;
          }
        }
      }

      .client_right {
        z-index: 999;

        img {
          margin-top: 22px;
          width: 40px;
          height: 50px;
        }
      }

      .client_img {
        position: absolute;
        margin-right: -10px;

        // border: 1px solid red;
        img {
          width: 230px;
          height: 80px;
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    margin-left: 50px;
    margin-top: 10px;
    height: 300px;

    .footer_left {
      padding-top: 20px;

      table {
        margin-top: 20px;
        text-align: center;
        border-collapse: collapse;
        width: 600px;

        td {
          border: 1px solid black;
          height: 30px;
          padding: 6px;

          span {
            margin-left: 5px;
            vertical-align: middle;
          }
        }
      }
    }

    #yuan {
      margin-top: 65px;
    }
  }
}
</style>
