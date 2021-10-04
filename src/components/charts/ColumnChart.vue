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
import { mapGetters, mapActions } from "vuex";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  name: "ColumnChart",
  computed: mapGetters("fields", ["getSeries","getFilters","getEntityTypes", "getCategories", "getFieldSelected"]),
  data: function() {
    return {
      seriesDB:{
        name: 'field name',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        categories: ['feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
      },
      series: [

      ],  
      chartOptions: {
            chart: {
              type: 'bar',
              height: 250,
                toolbar:{
                  export: {
                    csv: {
                      headerCategory: 'Date',
                    }
                  }
                }
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
    ...mapActions("fields", ['updateChartSeries']),
    updateChart(){
      this.updateChartSeries();
      
      this.chartOptions = {
      ...this.chartOptions,
      xaxis: {
        categories: this.getCategories,
      },
      }
      this.series = [{
        name: 'Number_entities',
        data: this.getSeries
      }];   // return chartOptions;
      

      console.log(this.getSeries);

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
