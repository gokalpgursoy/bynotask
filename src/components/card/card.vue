<template>
  <div class="card" :id="id">
    <div class="size-box">
      <small>{{width}} x {{height}}</small>
    </div>
    <img class="card-img-top" :src="downloadUrl" alt="Card image cap" />
    <div class="card-body text-center p-0 py-2 px-2">
      <div class="row">
        <div class="col-md-6 my-1">
          <a
            :href="downloadUrl"
            class="btn btn-sm btn-dark btn-block"
            target="_blank"
          >Download</a>
        </div>
        <div class="col-md-6 my-1">
          <a
            :href="url"
            class="btn btn-sm btn-info btn-block"
            target="_blank"
          >Visit</a>
        </div>
      </div>
    </div>
    <div class="card-footer text-center p-0">
      <small class="text-muted">Author: {{author}}</small>
      <!-- <div class="row">
        <div class="col-md-6">
          <small class="text-muted">Width: {{height}}</small>
        </div>
        <div class="col-md-6">
          <small class="text-muted">Height: {{width}}</small>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    id: String,
    author: String,
    width: Number,
    height: Number,
    url: String,
    downloadUrl: String,
  }
};
</script>

<style lang="sass" scoped>
  .size-box
    position: absolute
    color: white
    width: 100%
    background-color: #343a40
    text-align: center
  img
    height: 200px
    object-fit: cover
  sizes
    position: absolute
    width: 100%
    height: 100%
</style>