<template>
    <div id="hot-news">
        <flexbox orient="vertical" :gutter="0">
            <flexbox-item v-for="item in newsData" :key="item.id">
                <cell-box is-link>
                   {{ item.title }}
                </cell-box>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, Divider, Group, Cell, CellBox } from 'vux';

    export default {
      data() {
        return {
          newsData: {},
        };
      },
      components: {
        Flexbox,
        FlexboxItem,
        Divider,
        Group,
        Cell,
        CellBox,
      },
      created() {
        const that = this;
        const url = 'http://m.toutiao.com/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A135380CC204941&cp=58C2247914D1FE1&min_behot_time=0';
        this.$http.jsonp(url)
          .then((res) => {
            that.newsData = res.data.data;
            console.log(that.newsData);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
</script>
