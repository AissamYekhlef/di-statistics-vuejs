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
    series: null
};

const getters = {
  getFilters: (state) => state.filters,
  getSeries: (state) => state.series,
  getEntityTypes: (state) => state.entityTypes
};

const mutations = {
  setEntitytypes: (state, entityTypes) => state.entityTypes = entityTypes,
  setSeries: (state, series) => state.series = series,
  setEntityTypeSelected: (state, entityTypeSelected) => state.entityTypeSelected = entityTypeSelected,
};

const actions = {
   async get_entitytypes({commit}) {
     return await  axios
      .get("/entitytypes",
        { params: {with_fields: true}  }
      ).then( ({ data }) => {
          commit('setEntitytypes', data);
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