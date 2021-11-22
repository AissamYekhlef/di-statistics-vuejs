import axios from "../../plugins/axios";
import Vue from "vue";

// import * as endpoints from "./endpoints-const";


const state = {
    filters: {
      date_from: null,
      date_to: null,
      period: null,
      enable_group: null,
      field_id: null,
      entitytype_id: null,
    },
    fieldSelected: null,
    fieldCategories: [],
    entityTypeSelected: null,
    entityTypeSelectedToCompare: null,
    entityTypes: [],
    series: [],
    seriesToCompare: [],
    fieldStatistics: [],
    is_loding_entitytypes: false,
    periods: [
      'hourly',
      'daily',
      'weekly',
      'monthly',
      'yearly',
    ],
    categories: [],
    categoriesToCompare: [],
};

const getters = {
  getFilters: (state) => state.filters,
  getSeries: (state) => state.series,
  getSeriesToCompare: (state) => state.seriesToCompare,
  getEntityTypes: (state) => state.entityTypes,
  getIs_loding_entitytypes: (state) => state.is_louding_entitytypes,
  getPeriods: (state) => state.periods,
  getCategories: (state) => state.categories,
  getCategoriesToCompare: (state) => state.categoriesToCompare,
  getEntityTypeSelected: (state) => state.entityTypeSelected,
  getFieldSelected: (state) => state.fieldSelected,
  getFieldStatistics: (state) => state.fieldStatistics,
  getFieldCategories: (state) => state.fieldCategories,
};

const mutations = {
  setFilters: (state, filters) => state.filters = filters,
  setEntitytypes: (state, entityTypes) => state.entityTypes = entityTypes,
  setSeries: (state, series) => state.series = series,
  setSeriesToCompare: (state, series) => state.seriesToCompare = series,
  setFieldStatistics: (state, fieldStatistics) => state.fieldStatistics = fieldStatistics,
  setCategories: (state, categories) => state.categories = categories,
  setCategoriesToCompare: (state, categories) => state.categoriesToCompare = categories,
  setFieldSelected: (state, fieldSelected) => state.fieldSelected = fieldSelected,
  setEntityTypeSelected: (state, entityTypeSelected) => state.entityTypeSelected = entityTypeSelected,
  setEntityTypeSelectedToCompare: (state, entityTypeSelectedToCompare) => state.entityTypeSelectedToCompare = entityTypeSelectedToCompare,
  setIs_loding_entitytypes: (state, is_loding_entitytypes) => state.is_loding_entitytypes = is_loding_entitytypes ,
  setFieldCategories: (state, fieldCategories) => state.fieldCategories = fieldCategories ,
};

const actions = {
   async load_entitytypes({commit}) {
    commit('setIs_loding_entitytypes', true);
     return await  axios
      .get("/entitytypes",
        { params: {with_fields: true}  }
      ).then( ({ data }) => {
          commit('setEntitytypes', data);
          commit('setIs_loding_entitytypes', false);
        return data;
      });
  },
  updateChartSeries({commit}){
    return axios
      .get("/statistics/fields/" + state.filters.field_id, {params: state.filters}

      ).then( ({ data }) => {
        const series = data.series.map(({count}) => count);
        let categories = [];

        if(data.period == "daily" ){
          categories = data.series.map(({day,month, year}) => day + " - " + month + " - " + year);
        }
        if(data.period == "hourly" ){
          categories = data.series.map(({hour, day,month, year}) => hour + ":00 " + day + " - " + month + " - " + year);
        }
        if(data.period == "yearly"){
            categories = data.series.map(({year}) => year);
        }
        if(data.period == "monthly" || data.period == "weekly"){
            categories = data.series.map(({month, year}) =>  Vue.moment(month, 'MM').format('MMMM') + " - " + year);
        }
        if(data.period == "weekly"){
            categories = data.series.map(({week, month, year}) =>  "w " + week + " | " + month + " - " + year);
        }
        if(data.field_statistics != null){
          const fieldStatistics = data.field_statistics.map(({count}) => count);
          const fieldCategories = data.field_statistics.map(({value}) => value);
          commit('setFieldStatistics', fieldStatistics);
          commit('setFieldCategories', fieldCategories);
        }
        console.log("state.series.count : " );
        console.log(state.series.length > 0);
        
        if(state.series.length > 0){
          commit('setSeriesToCompare', series);
          commit('setCategoriesToCompare', categories);
        }else{
          commit('setSeries', series);
          commit('setCategories', categories);
        }
        
                
        return data;
      });
  }


};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};