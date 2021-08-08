<template>
     <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series" v-model="series"></apexchart>
      </div>
</template>

<script>
import Vue from "vue";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  name: "ColumnChart",
  props : [
    'fieldname'
  ],
  data: function() {
    return {
      series: [{
            name: this.fieldname,
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, 
          // {
          //   name: 'updated_at',
          //   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          // }, 
          // {
          //   name: 'name',
          //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          // }
          ],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: ' (thousands)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + " thousands"
                }
              }
            }
          },
    };
  },
};
</script>

<style scoped>

</style>
