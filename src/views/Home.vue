<template>
  <div class="home">
    <div class="container py-2">
      <div class="card-deck mb-2" v-for="(row,i) in rowCount" :key="row">
        <template v-for="item in items.slice((i*itemCount), (i*itemCount + itemCount))">
          <card-component
            :key="item.id"
            :id="item.id"
            :author="item.author"
            :height="item.height"
            :width="item.width"
            :url="item.url"
            :downloadUrl="item.download_url"
          ></card-component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import card from "@/components/card/card";

export default {
  name: "Home",
  data() {
    return {
      page: 1,
      limit: 6,
      rowCount: 0,
      itemCount: 3,
      items: []
    };
  },
  components: {
    "card-component": card
  },
  async beforeMount() {
    const { page } = this.$route.params;
    if (!isNaN(page)) {
      this.page = page;
      await this.getData(this.page, this.limit);
    }
  },
  watch: {
    async $route() {
      const { page } = this.$route.params;
      if (!isNaN(page)) {
        this.page = page;
        await this.getData(this.page, this.limit);
      }
    }
  },
  methods: {
    async getData(page, limit) {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      this.items = response.data;
      this.rowCount = Math.ceil(response.data.length / this.itemCount);
      console.log(this.rowCount, this.items);
    }
  }
};
</script>

<style lang="sass" scoped>
@import  '../assets/sass/variables.sass'

.home
  height: 100vh - ($header-height + $footer-height)
</style>
