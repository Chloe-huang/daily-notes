import Vue from 'vue';
import Toast from './index.vue';

//挂载dom 
function create (Component, props) {
  const vm = new Vue({
    render: h => h(Component, {props}),
  }).$mount()

  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]

  comp.remove = function() {
    document.body.removeChild(vm.$el)
  }
}