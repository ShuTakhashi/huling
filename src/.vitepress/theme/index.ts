import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import HLDocAfter from './components/HLDocAfter.vue';
import './scss/index.scss';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(HLDocAfter),
    });
  },
};
