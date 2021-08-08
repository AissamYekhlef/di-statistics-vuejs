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
              :items="getEntityTypes()"
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

       <v-row no-gutters class="d-flex justify-space-between">
        <v-col
          cols="12"
          sm="4"
        >
            <v-select
            :items="fieldsItems"
            item-text="name"
            item-value="field_id"
            label="Field Name"
            @change="changeFieldSelected"
            dense
            outlined
          ></v-select>
          </v-col>
      </v-row>

    <!-- TODO create simple chart to apply just 1 field -->
      <v-row>
        <v-col cols="12" md="8">
                  <ColumnChart :fieldname="fieldSelected.name"></ColumnChart>
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


export default {
  name: 'Charts',
  components: {
    ColumnChart,
  },
  data() {
    return {
      date_to: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date_from: '2021-02-01',
      menu1: false,
      menu2: false,

      entityTypes:[
        
      ],
      fieldsItems:[
        // default : empty array
      ],
      fieldSelected:{
        field_id: 11,
        entitytype_id: 1,
        name: 'parent_entity'
      },
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
    changeFieldsItems(entityType_id){
        // console.log(entityType_id)
        // console.log(this.entityTypes);
        const entityType = this.entityTypes.find(entityType => entityType.id === entityType_id ); 
        // console.log("entityType.fields");
        this.fieldsItems = entityType.fields; 
        // console.log(entityType.fields);
    },
    changeFieldSelected(fieldId){
      
      console.log('FieldSelected id' + fieldId );
      console.log('changeFieldSelected');
      console.log(this.fieldsItems);

      this.fieldSelected = this.fieldsItems.find(field => field.field_id === fieldId );
      
      console.log('Field selected ' + this.fieldSelected);
      this.render = ! this.render;
    },
    updateChart(){
      console.log('updatChart');
      // console.log(this.fieldSelected);
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
    // TODO create api GET /entityTypes
    getEntityTypes(){
      return [
        {
          id: 1,
          name: 'Subject',
          context:{
            id: 1,
            name: 'Subject_data'
          },
          // TODO fields of entityType
          fields: [
            {
              field_id: 9,
              entitytype_id: 1,
              name: 'entity_storage_position#row',
            },
            {
              field_id: 11,
              entitytype_id: 1,
              name: 'parent_entity',
            },
            {
              field_id: 13,
              entitytype_id: 1,
              name: 'updated_at',
            },
            {
              field_id: 16,
              entitytype_id: 1,
              name: 'Active',
            },
            {
              field_id: 14,
              entitytype_id: 1,
              name: 'id',
            },
          ]
        },
        {
          id: 2,
          name: 'Visit',
          context:{
            id: 1,
            name: 'Subject_data'
          },
          fields: [
            {
              field_id: 1,
              entitytype_id: 2,
              name: 'visit_date',
            },
            {
              field_id: 2,
              entitytype_id: 2,
              name: 'entt_fk_subject',
            },
            {
              field_id: 8,
              entitytype_id: 2,
              name: 'entity_fk_to_storage',
            },
            {
              field_id: 11,
              entitytype_id: 2,
              name: 'parent_entity',
            },
            {
              field_id: 12,
              entitytype_id: 2,
              name: 'created_at',
            },
            {
              field_id: 10,
              entitytype_id: 2,
              name: 'entity_storage_position#column	',
            },
          ]
        },
        {
          id: 3,
          name: 'CRF',
          context:{
            id: 1,
            name: 'Subject_data'
          },
        },
        {
          id: 4,
          name: 'Sample',
          context:{
            id: 1,
            name: 'Subject_data'
          },
        },
        {
          id: 5,
          name: 'Freezer_-80',
          context:{
            id: 3,
            name: 'Storage'
          },
        },
        {
          id: 6,
          name: 'Shelf',
          context:{
            id: 3,
            name: 'Storage'
          },
        },
        {
          id: 7,
          name: 'Rack',
          context:{
            id: 3,
            name: 'Storage'
          },
        },
        {
          id: 8,
          name: 'Plate',
          context:{
            id: 3,
            name: 'Storage'
          },
        },

      ]

    },
    // TODO create api GET /fields?entityTpe='Subject'
    getFieldsNamesByEntityType() {
      
    }
  },
  created() {
    this.entityTypes = this.getEntityTypes();
  },
};
</script>
