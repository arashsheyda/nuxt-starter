import Vue from 'vue';
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    sm: 575,
    md: 767,
    lg: 1199,
    xl: Infinity,
  },
  defaultBreakpoint: 'xl',
});
