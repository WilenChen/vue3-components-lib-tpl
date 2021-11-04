import { defineComponent } from 'vue';
import { Hello } from '../packages/components';
const Demo = defineComponent({
  setup() {
    return () => (
      <div>
        <Hello />
        ，我在TSX里。
      </div>
    );
  },
});
export default Demo;
