<template>
  <div class="img_desc">
    <v-carousel height="100%" width="100%" :show-arrows="false" hide-delimiters>
      <v-carousel-item v-for="(item, i) in list" :key="i" cover class="carousel">
        <v-img
          :src="item?.src"
          max-width="100%"
          max-height="100%"
          class="mr-auto"
          absolute
        ></v-img>
        <div class="img_desc__desc stack" v-if="type !== 9">
          <span style="--index: 0">{{ list[i]?.text }}</span>
          <span style="--index: 1">{{ list[i]?.text }}</span>
          <span style="--index: 2">{{ list[i]?.text }}</span>
        </div>
        <div class="img_desc__furnitures stack" v-if="type === 9">
          <span style="--index: 0">{{ list[i]?.desc }} | {{ list[i]?.name }}</span>
          <span style="--index: 1">{{ list[i]?.desc }} | {{ list[i]?.name }}</span>
          <span style="--index: 2">{{ list[i]?.desc }} | {{ list[i]?.name }}</span>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style lang="scss" scoped>
.img_desc {
  height: 100%;
  width: 50%;

  &__desc {
    text-align: center;
    color: var(--color);
    --stacks: 3;
  }

  &__furnitures {
    color: var(--color);
    min-height: fit-content;
    --stacks: 3;
    padding: 15px;
    width: 100%;
  }
  .stack {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 0.6rem;
  }

  .stack span {
    font-weight: 500;
    grid-row-start: 1;
    grid-column-start: 1;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 140ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards
        calc(var(--index) * 10ms),
      glitch 3s ease infinite 3s alternate-reverse;
  }

  .stack span:nth-child(odd) {
    --glitch-translate: 8px;
  }
  .stack span:nth-child(even) {
    --glitch-translate: -8px;
  }

  @keyframes stack {
    0% {
      opacity: 0;
      transform: translateX(-50%);
      text-shadow: -2px 3px 0 rgba(250, 250, 0, 0.753), 2px -3px 0 rgba(0, 0, 255, 0.753);
    }
    60% {
      opacity: 0.5;
      transform: translateX(50%);
    }
    80% {
      transform: none;
      opacity: 1;
      text-shadow: 2px -3px 0 rgba(250, 250, 0, 0.753), 2px -3px 0 rgba(0, 0, 255, 0.753);
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes glitch {
    0% {
      text-shadow: -2px 3px 0 rgba(250, 250, 0, 0.753), 2px -3px 0 rgba(0, 0, 255, 0.753);
      transform: translate(var(--glitch-translate));
    }
    2% {
      text-shadow: 2px -3px 0 rgba(250, 250, 0, 0.753), -2px 3px 0 rgba(0, 0, 255, 0.753);
    }
    4%,
    100% {
      text-shadow: none;
      transform: none;
    }
  }
}

@media screen and (max-width: 1020px) {
  .img_desc {
    width: 100%;
  }
}
</style>

<script>
import store from "../store/index";
export default {
  name: "ShowContent",
  props: ["type"],
  store,
  data() {
    return {};
  },
  computed: {
    list() {
      return this.getList();
    },
  },
  watch: {
    list: "getList",
  },
  methods: {
    getList: () => {
      return store.getters.getlistImg;
    },
  },
  updated() {
    this.getList();
  },
};
</script>
