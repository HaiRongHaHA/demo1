import { defineComponent } from 'vue';
import classes from './index.module.scss';

const Home = defineComponent({
  setup() {
    return () => (
      <div class={classes.home}>
        <div class={classes.home__moon}></div>
        <div class={classes['home__star-gruop']}>
          <div class={classes.home__star}></div>
          <div class={classes.home__star}></div>
          <div class={classes.home__star}></div>
          <div class={classes.home__star}></div>
        </div>
      </div>
    );
  },
});

export default Home;
