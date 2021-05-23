import { defineComponent } from 'vue';
import classes from './index.module.scss';

const Home = defineComponent({
  setup() {
    return () => (
      <div class={classes.home}>
        {/* 头部装饰 */}
        <div class={classes.home__moon}></div>
        <div class={classes['home__star-gruop']}>
          <div class={classes.home__star}></div>
          <div class={classes.home__star}></div>
          <div class={classes.home__star}></div>
          <div class={classes.home__star}></div>
        </div>
        {/* 诗句卡片 */}
        <div class={classes.verse}>
          <div class={classes.verse__title}>
            <p>玉楼春·城上风光莺语乱</p>
            <p>钱惟演〔宋代〕</p>
          </div>
          <p class={classes.verse__text}>
            城上风光莺语乱，城下烟波春拍岸。绿杨芳草几时休，泪眼愁肠先已断。
            <br />
            情怀渐觉成衰晚，鸾镜朱颜惊暗换。昔时多病厌芳尊，今日芳尊惟恐浅。(渐觉 一作：渐变；鸾镜 一作:鸾鉴)
          </p>
        </div>
      </div>
    );
  },
});

export default Home;
