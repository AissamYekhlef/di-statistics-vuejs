<template>
  <v-container fluid>
    <div class="charts-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Charts</h1>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow"
            >Latest Reports</v-btn>
          </template>

        </v-menu>
      </v-row>
       <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :return-value.sync="date_from"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date_from"
                label="Start Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date_from"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="menu1 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu1.save(date_from)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :return-value.sync="date_to"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date_to"
                label="To Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date_to"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="menu2 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu2.save(date_to)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        
      </v-row>
      <v-row no-gutters class="d-flex justify-space-between">
        <v-col
          cols="12"
          sm="4"
        >
        <!-- TODO add context name prefix for item-text -->
          <template>
            <v-select
              :items="getEntityTypes"
              item-text="name"
              item-value="id"
              label="Entity Type"
              @change="changeFieldsItems"
              dense
              outlined
            ></v-select>
          </template>
        </v-col>
          
      </v-row>

       <v-row no-gutters class="d-flex align-center">
        <v-col
          cols="12"
          sm="4"
          
        >
            <v-select
            :items="fieldsItems"
            item-text="name"
            item-value="id"
            label="Field Name"
            @change="changeFieldSelected"
            dense
            outlined
          ></v-select>
          </v-col>
           <v-col
              cols="6"
              sm="4">
              <v-select
                :items="getPeriods"
                label="Period"
                @change="changePeriodSelected"
              >
              </v-select>
            </v-col>
      </v-row>
    <!-- TODO add filter period select -->
      <v-radio-group
      v-model="enable_group"
      label="Enable Group"
      @change="changeEnabling"
    >
      <v-radio
        label="Enable"
        value="enable"
      ></v-radio>
      <v-radio
        label="Disable"
        value="disable"
      ></v-radio>
    </v-radio-group>
    <!-- <v-row>
     
    </v-row> -->

    <!-- TODO create simple chart to apply just 1 field -->
      <v-row>
        <v-col cols="12" md="8">
                  <ColumnChart ></ColumnChart>
        </v-col>
        <!-- <v-col cols="12" md="8">
                  <ColumnWithLabelsChart></ColumnWithLabelsChart>
        </v-col>
        <v-col cols="12" md="8">
                  <TestColumn></TestColumn>
        </v-col> -->
      </v-row>
    </div>
  </v-container>
</template>

<script>

import ColumnChart from '@/components/charts/ColumnChart.vue';
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'Charts',
  components: {
    ColumnChart,
  },
  computed: {
    ...mapGetters("fields",
        ["getEntityTypes", "getIs_loding_entitytypes", "getFilters", "getPeriods"]
    )
    },
  data() {
    return {
      date_to: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date_from: '2021-02-01',
      menu1: false,
      menu2: false,
      periods: [],
      periodSelected: "monthly",
      enable_group: "disable",
      entityTypes: [],
      fieldsItems:[],
      fieldSelected:{},
      entityTypeSelected: null,
      render : false,
    
      menu: [
        // 'Edit',
        'Share',
        // 'Delete',
        'Print'
      ],
     
    };
  },
  methods: {
    ...mapActions("fields", ['load_entitytypes']),
    changeFieldsItems(entityType_id){
        const entityType = this.getEntityTypes.find(entityType => entityType.id === entityType_id ); 
        this.entityTypeSelected = entityType;
        this.fieldsItems = entityType._fields; 
    },
    changeFieldSelected(fieldId){
      this.fieldSelected = this.fieldsItems.find(field => field.id === fieldId );
      this.render = ! this.render;
      this.updateFilters();
    },
    changePeriodSelected(period){
      this.periodSelected = period;
      this.updateFilters();
    },
    changeEnabling(){
      this.updateFilters();    
    },
    updateChart(){
      
      console.log('updatChart');
    },
    updateFilters(){

      const filters = {
        date_from: this.date_from,
        date_to: this.date_to,
        period: this.periodSelected,
        enable_group: this.enable_group,
        field_id: this.fieldSelected.id,
        entityType_id: this.entityTypeSelected.id,
      };
      
      this.$store.commit("fields/setFilters", filters );
      console.log(filters);
      

    },
    generateData(count, yrange) {
      let i = 0;
      let series = [];
      while (i < count) {
        let x = "w" + (i + 1).toString();
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
          x: x,
          y: y,
        });
        i++;
      }
      return series;
    },
    generateChartSeries() {
      let series = [];

      for (let i=0; i < 5; i++) {
        let y = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
        series.push(y)
      }
    return series;
    },
  },
  created() {
    this.load_entitytypes();
  },
};
</script>
