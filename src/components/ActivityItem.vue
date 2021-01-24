<template>
  <article class="post">
    <h4 class="title">{{ activity.title }}</h4>
    <p>{{ textUtility_capitilize(categories[activity.category].text) }}</p>
    <p>{{ activity.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a> updated {{ prettyTime(activity.updatedAt) }} &nbsp;
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
  import textUtility_capitilize from '@/mixins/textUtility';
  import moment from 'moment';

  export default {
    mixins: [textUtility_capitilize],
    props: {
        categories: {
          type: Object,
          required: true
        },
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
      uppercase(value) {
        if(!value) return '';

        return value.toUpperCase();
      },
      prettyTime(timeStamp) {
        if(!timeStamp) return ''

        return moment(timeStamp).format('LLL');
      },
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

.post .title {
  margin-bottom: 5px;
}
    
</style>