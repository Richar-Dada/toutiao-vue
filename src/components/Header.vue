<template>
    <div>
        <x-header :left-options="false" class="header">今日头条</x-header>
        <header-nav>ddd</header-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import { XHeader, Actionsheet } from 'vux';
    import HeaderNav from './HeaderNav';

    export default {
      components: {
        XHeader,
        Actionsheet,
        HeaderNav,
      },
      data() {
        return {};
      },
    };
</script>

<style lang="less">
  .header{
      background-color: #d43d3d!important;
  }
</style>
