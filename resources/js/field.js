Nova.booting((Vue, router, store) => {
    Vue.component('index-emoji-textarea', require('./components/IndexField'))
    Vue.component('detail-emoji-textarea', require('./components/DetailField'))
    Vue.component('form-emoji-textarea', require('./components/FormField'))
})
