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
    entityTypeSelected: null,
    entityTypes: [],
    series: [],
    is_loding_entitytypes: false,
    periods: [
      'hourly',
      'daily',
      'weekly',
      'monthly',
      'yearly',
    ],
    categories: [],
};

const getters = {
  getFilters: (state) => state.filters,
  getSeries: (state) => state.series,
  getEntityTypes: (state) => state.entityTypes,
  getIs_loding_entitytypes: (state) => state.is_louding_entitytypes,
  getPeriods: (state) => state.periods,
  getCategories: (state) => state.categories,
  getFieldSelected: (state) => state.fieldSelected,
};

const mutations = {
  setFilters: (state, filters) => state.filters = filters,
  setEntitytypes: (state, entityTypes) => state.entityTypes = entityTypes,
  setSeries: (state, series) => state.series = series,
  setCategories: (state, categories) => state.categories = categories,
  setFieldSelected: (state, fieldSelected) => state.fieldSelected = fieldSelected,
  setEntityTypeSelected: (state, entityTypeSelected) => state.entityTypeSelected = entityTypeSelected,
  setIs_loding_entitytypes: (state, is_loding_entitytypes) => state.is_loding_entitytypes = is_loding_entitytypes ,
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
        
        commit('setSeries', series);
        commit('setCategories', categories);
                
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