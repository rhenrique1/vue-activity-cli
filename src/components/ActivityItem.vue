<template>
  <article class="post">
    <h4>{{ activity.title }}</h4>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a> {{ activity.updatedAt }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>Progress: <span :class="progressBarColor">{{ activity.progress }} %</span></span>
      </div>
    </div>
  </article>
</template>
<script>
    export default {
        props: {
            activity: {
                type: Object,
                required: true
            }
        }, 
        computed: {
          progressBarColor() {
            if(this.activity.progress <= 0) {
              return 'color-red';
            } 
            else if(this.activity.progress <= 50) {
              return 'color-orange';
            }
            else {
              return 'color-green';
            }
          },
        },
        methods: {

        }
    }
</script>
<style scoped>

.color-red {
  color: red;
}
.color-orange {
  color: orange;
}
.color-green {
  color: green;
}
    
</style>