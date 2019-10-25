import {CHANGETITLE} from '@/common/const'
const mutations = {
  [CHANGETITLE](state, info) {
   
   state.navigateTitle=info.navigateTitle;
   state.navigateCurrent=info.navigateCurrent;
  }
}

export default mutations

