import { createStore } from 'vuex'
export default createStore({
  state: {
    formData: {
      data: {
        org: { id: 0, label: 'Организатор', values: '' },
        tel: { id: 1, label: 'Телефон', values: '' },
        email: { id: 2, label: 'Email', values: '' },
        city: { id: 3, label: 'Город организатора', values: '' },
        name: { id: 4, label: 'Название', values: '' },
        descr: { id: 5, label: 'Подробное описание', values: '' },
        rating: { id: 6, label: 'Рейтинг', values: '' },
        adress: { id: 7, label: 'Адрес', values: '' }

      },
      events: [
        { id: 0, beginDate: '', beginTime: '', endDate: '', endTime: '' }
      ],
      url: ''
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  namespaced: true
})
