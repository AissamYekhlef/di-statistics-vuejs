<template>
     <div id="chart">
       <v-btn
       @click="updateChart"
       color="primary"
       >
      Refresh chart
       </v-btn>
        <apexchart type="donut" height="350" :options="chartOptions" :series="getFieldStatistics" v-model="getFieldStatistics"></apexchart>
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
  computed: mapGetters("fields", ["getSeries","getFilters","getEntityTypes", "getCategories", "getFieldSelected","getFieldStatistics"]),
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
        labels: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
        legend: {

        }
        },
    };
  }, 
  methods:{
    ...mapActions("fields", ['updateChartSeries']),
    updateChart(){
        // window.setInterval(
            this.updateChartSeries();
        // , 2000);
      
      
    //   this.series =  [22,55,66,33,33,55,88,77];
      this.series =  this.getFieldStatistics;
    console.log(this.getFieldStatistics);
    
    },  
    // updateFieldStatDynamicly(){

    // }

    
  },
  mounted(){
    // setInterval(() => this.updateChart(), 5000, this.updateDynamicly); 
    
    
  }
};

</script>

<style scoped>

</style>
