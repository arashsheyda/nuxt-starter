import Vue from 'vue';
import VueTippy, { TippyComponent } from 'vue-tippy';

Vue.use(VueTippy, {
  directive: 'tippy',
  flipDuration: 0,
  placement: 'top',
  arrow: true,
  animation: 'shift-away',
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false,
      },
    },
  },
});

Vue.component('Tippy', TippyComponent);
