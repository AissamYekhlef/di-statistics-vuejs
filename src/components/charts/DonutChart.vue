<template>
     <div id="chart">
       <v-btn
       @click="updateChart"
       color="primary"
       >
      Refresh chart
       </v-btn>
        <apexchart type="donut" height="350" :options="{...chartOptions, labels: getFieldCategories}" :series="getFieldStatistics" v-model="getFieldStatistics"></apexchart>
      </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  name: "DonutChart",
  computed: mapGetters("fields", 
  ["getSeries","getFilters","getEntityTypes", "getCategories", "getFieldSelected","getFieldStatistics","getFieldCategories"]),
  data: function() {
    return {
      series: [
          1,2,3,
          4,5,6,7,8
      ],  
      chartOptions: {
        dataLabels: {
            enabled: true,
        },
        // colors: [config.light.primary, config.light.secondary, config.light.success, config.light.warning],
        // labels: this.getFieldCategories,
        legend: {

        }
        },
    };
  }, 
  methods:{
    ...mapActions("fields", ['updateChartSeries']),
    updateChart(){

      this.series =  this.getFieldStatistics;
      this.chartOptions = {
        ...this.chartOptions,
        labels: this.getFieldCategories
      };
    
      this.updateChartSeries();
      console.log(this.getFieldStatistics);
      
    },  
  }
};

</script>

<style scoped>

</style>
