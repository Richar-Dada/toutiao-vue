<template>
    <div id="header-nav">
        <div class="nav-box">
            <ul id="nav">
                <li class="nav-item">
                    <a href="javascript:;">推荐</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">热点</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">社会</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">娱乐</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">军事</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">科技</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">汽车</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">体育</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">财经</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:;">国际</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import AlloyTouch from 'alloytouch';
    import Transform from 'css3transform';

    export default {
      data() {
        return {};
      },
      mounted() {
        const nav = document.querySelector('#nav');
        Transform(nav, true);
        new AlloyTouch({
          touch: nav,
          target: nav,
          vertical: false,
          property: 'translateX',
          max: 720,
          touchMove: function touchMove(evt, value) {
            console.log();
            if (value > 0) {
              nav.translateX = 0;
            }
          },
          touchEnd: function touchMove(evt, value) {
            console.log();
            if (value > 0) {
              nav.translateX = 0;
            }
          },
        });
      },
    };
</script>

<style lang="less" scoped>
.nav-box{
    overflow: hidden;
    ul {
        clear: both;
        width: 720px;
        .nav-item {
            height: 44px;
            background-color:#ccc;
            line-height: 44px;
            float: left;
            list-style: none;
            a {
                text-decoration: none;
                padding:0 20px;
                color: black;

            }
        }
    }
}
    
</style>
