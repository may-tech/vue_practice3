const app = new Vue({
  el: '#app',
  data:{
    items:["Vue.js","v-for","v-model","v-on"],
    addItemValue: "Please add text"
  },
  methods: {
    addItemFunction: function(){
      this.items.push(this.addItemValue);
      this.addItemValue="";
    }
  }
})