<!-- <template>
  <div>
    <div
      id="main" v-if="router" 
      style="width: 102vw; height: 100vh; margin-left: -17px"
    ></div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter()
    onMounted(() => {
        var main =  document.getElementById('main')

      var myChart = echarts.init(main, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });
      var ROOT_PATH =
        "https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
      var option;
      $.getJSON(
        ROOT_PATH + "/data-gl/asset/data/flights.json",
        function (data) {
          function getAirportCoord(idx) {
            return [data.airports[idx][3], data.airports[idx][4]];
          }
          var routes = data.routes.map(function (airline) {
            return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
          });
          myChart.setOption({
            geo3D: {
              map: "world",
              shading: "color",
              environment: ROOT_PATH + "/data-gl/asset/starfield.jpg",
              silent: true,
              groundPlane: {
                show: false,
              },
              light: {
                main: {
                  intensity: 0,
                },
                ambient: {
                  intensity: 0,
                },
              },
              viewControl: {
                distance: 50,
              },
              itemStyle: {
                color: "#111",
              },
              boxHeight: 0.5,
            },
            series: [
              {
                type: "lines3D",
                coordinateSystem: "geo3D",
                effect: {
                  show: true,
                  trailWidth: 2,
                  trailLength: 0.2,
                },
                blendMode: "lighter",
                lineStyle: {
                  width: 0,
                  color: "rgb(50, 50, 150)",
                  opacity: 0.2,
                },
                data: routes,
              },
            ],
          });
        }
      );
      window.addEventListener("keydown", function () {
        myChart.dispatchAction({
          type: "lines3DToggleEffect",
          seriesIndex: 0,
        });
      });

      if (option && typeof option === "object") {
        myChart.setOption(option);
      }

      window.addEventListener("resize", myChart.resize);
    });

    onMounted(()=>{
      setTimeout(()=>{
            router.push("/login")
      },3000)
    })
    return {
      router
    }
  },
};
</script>

<style lang="less" scoped>
html,
body,
div {
  margin: 0;
  padding: 0;
}
</style> -->
