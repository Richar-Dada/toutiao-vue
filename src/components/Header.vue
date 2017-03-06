<template>
    <div>
        <x-header :left-options="false" class="header">今日头条</x-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import { XHeader, Actionsheet } from 'vux';

    export default {
      components: {
        XHeader,
        Actionsheet,
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
