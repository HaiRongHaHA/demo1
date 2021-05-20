import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';

const Home = defineComponent({
  setup() {
    const abc = {
      1: 'dd',
      2: '44',
    };
    const store = useStore();
    const name = computed(() => store.state.user.name);
    const { phone } = store.state.user;
    const { token } = store.state;
    console.log(store.getters['user/namePhone'], 'storestore');
    // namePhone
    const get = async () => {
      await store.dispatch('user/getInfo');
    };
    console.log(abc);

    return () => (
      <div>
        <p>token: {token}</p>
        <p>名字：{name.value}</p>
        <p>手机号：{phone}</p>
        <button onClick={get}>修改</button>
      </div>
    );
  },
});

export default Home;
