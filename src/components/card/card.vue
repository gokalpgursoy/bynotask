<template>
  <div class="card mb-3" :id="id">
    <div class="card-header bg-dark text-light text-center">
      <h6>Author: {{author}}</h6>
    </div>
    <img class="card-img-top" :src="downloadUrl" alt="Card image cap" />
    <div class="card-body text-center p-0 py-2 px-2">
      <div class="row">
        <div class="col-md-6 col-lg-3 offset-lg-3 my-1">
          <a
            :href="downloadUrl"
            class="btn btn-sm btn-dark btn-block"
            target="_blank"
            title="Download"
          >
            <i class="fa fa-download"></i>
          </a>
        </div>
        <div class="col-md-6 col-lg-3 my-1">
          <a :href="url" class="btn btn-sm btn-info btn-block" target="_blank" title="Visit">
            <i class="fa fa-eye"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="card-footer text-center p-0">
      <small>{{width}} x {{height}}</small>
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
    downloadUrl: String
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
  border-bottom: 1px solid white
    // padding-bottom: 5px
  img
    background-color: #f7f7f7
    height: 300px
    object-fit: contain
  sizes
    position: absolute
    width: 100%
    height: 100%
</style>