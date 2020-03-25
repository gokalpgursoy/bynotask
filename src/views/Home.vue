<template>
  <div class="home">
    <div class="container py-2">
      <div class="row mb-2 d-none d-md-block">
        <div class="col-md-3 offset-md-9 d-flex justify-content-end">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-dark" @click="changeItemCount(1)">
              <i class="fas fa-bars"></i>
            </button>
            <button type="button" class="btn btn-dark" @click="changeItemCount(2)">
              <i class="fa fa-columns"></i>
            </button>
            <button type="button" class="btn btn-dark" @click="changeItemCount(3)">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
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
      <div class="row d-flex justify-content-center mt-2 mb-5">
        <div class="col-md-3">
          <button class="btn btn-block" @click="getData(Number(page) + 1, limit)">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
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
  // watch: {
  //   async $route() {
  //     const { page } = this.$route.params;
  //     console.log('PAGE GG', page);
  //     if (!isNaN(page)) {
  //       this.page = page;
  //       await this.getData(this.page, this.limit);
  //     }
  //   }
  // },
  methods: {
    async getData(page, limit) {
      this.page = page;
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      this.items = [...this.items, ...response.data];
      this.rowCount = Math.ceil(this.items.length / this.itemCount);
    },
    changeItemCount(count) {
      this.itemCount = count;
      this.rowCount = Math.ceil(this.items.length / this.itemCount);
    }
  }
};
</script>

<style lang="sass" scoped>
@import  '../assets/sass/variables.sass'

.home
  height: 100vh - ($header-height + $footer-height)
</style>
