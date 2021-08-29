import axios from "../../plugins/axios";
// import * as endpoints from "./endpoints-const";


const state = {
    filters: {
      date_from: null,
      date_to: null,
      period: null,
      enable_group: null,
      field_id: null,
      entityType_id: null,
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
};

const getters = {
  getFilters: (state) => state.filters,
  getSeries: (state) => state.series,
  getEntityTypes: (state) => state.entityTypes,
  getIs_loding_entitytypes: (state) => state.is_louding_entitytypes,
  getPeriods: (state) => state.periods,
};

const mutations = {
  setFilters: (state, filters) => state.filters = filters,
  setEntitytypes: (state, entityTypes) => state.entityTypes = entityTypes,
  setSeries: (state, series) => state.series = series,
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
  // async updateChartSeries({commit}){
  //   return await  axios
  //     .get("/statistics/fields/" + state.field_id,
  //       { params: {state.filters}  }
  //     ).then( ({ data }) => {
  //       return data;
  //     });
  // }


};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};