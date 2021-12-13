<template>
  <!-- <div class="img_desc" v-for="i in list" :key="i.index"
    @click="()=>{}">-->
  <div :id="time" class="img_desc" @click="swipeTime()">
    <img :alt="name" :src="require(`@/${path}`)" />
    <div class="img_desc__desc">{{ desc }} {{ name }} {{ time }}</div>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.img_desc {
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
  }

  &__desc {
    margin-bottom: 0.5rem;
  }
}
</style>

<script>

export default {
  name: 'ShowContent',
  props: {
    name: String,
    path: String,
    floorLocation: String,
    time: String,
    desc: String,
  },
  methods: {
    swipeTime: () => {
      console.log('click swipeTime fct');
    },
  },
};
</script>
