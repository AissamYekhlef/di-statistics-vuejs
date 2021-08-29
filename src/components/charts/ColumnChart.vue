<template>
     <div id="chart">
       <v-btn
       @click="updateChart"
       color="primary"
       >
      Refresh chart
       </v-btn>
        <apexchart type="bar" height="350" :options="chartOptions" :series="series" v-model="series"></apexchart>
      </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  name: "ColumnChart",
  computed: mapGetters("fields", ["getSeries","getFilters","getEntityTypes"]),
  data: function() {
    return {
      seriesDB:{
        name: 'field name',
        data: [44, 55,  57, 56, 61, 58, 63, 60, 66],
        categories: ['ggg', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      series: [

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
                text: ' (entities)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val + " entity"
                }
              }
            }
          },
    };
  }, 
  methods:{
    // ...mapGetters("fields/getFilters"),
    updateChart(){
      console.log("this.getFilters");
      console.log(this.getFilters);


      this.chartOptions = {
            ...this.chartOptions,
            xaxis: {
              categories: this.getSeries,
            },
          }
      this.series = [{
        name: 'storage_row',
        data: [15, 25,  10, 56, 40, 70, 11, 23, 50]
       }];   // return chartOptions;
      console.log(this.getFilters);


    }
  },
  created(){
    console.log(this.seriesDB.data);
    this.series.push({
      name: this.seriesDB.name,
      data: this.seriesDB.data
    });

    console.log(this.getFilters);
    console.log(this.getSeries);
    
    console.log(this.getEntityTypes);
    
    
  }
};

</script>

<style scoped>

</style>
