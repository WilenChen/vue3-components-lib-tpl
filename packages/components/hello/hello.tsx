import { defineComponent } from 'vue';

const Hello = defineComponent({
  name: 'Hello',
  props: {
    label: {
      default: '',
      type: String,
    },
  },
  setup() {
    return () => <span>你好</span>;
  },
});

export default Hello;
