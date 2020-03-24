<template>
  <div class="card">
    <img class="card-img-top" src="https://picsum.photos/id/0/5616/3744" alt="Card image cap" />
    <div class="card-body text-center">
      <h4 class="card-title">Author: Alejandro Escamilla</h4>
      <div class="row">
        <div class="col-md-6 my-1">
          <a
            href="https://picsum.photos/id/1/5616/3744"
            class="btn btn-sm btn-dark btn-block"
            target="_blank"
          >Download</a>
        </div>
        <div class="col-md-6 my-1">
          <a
            href="https://unsplash.com/photos/LNRyGwIJr5c"
            class="btn btn-sm btn-info btn-block"
            target="_blank"
          >Visit</a>
        </div>
      </div>
    </div>
    <div class="card-footer text-center">
      <div class="row">
        <div class="col-md-6">
          <small class="text-muted">Height: 3744px</small>
        </div>
        <div class="col-md-6">
          <small class="text-muted">Width: 5616px</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card"
};
</script>

<style>
</style>