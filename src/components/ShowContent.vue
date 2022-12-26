<template>
  <div class="slide">
    <div class="img_desc" :data-desc="desc" :data-fl="floorLocation" :data-link="link" :data-name="name"
      :data-path="path" :data-text="text" :data-tm="time">
      <img :alt="name" :src="require(`@/${path}`)" />
      <div v-if="time" class="img_desc__desc stack">
        <span style="--index: 0">{{ text }}</span>
        <span style="--index: 1">{{ text }}</span>
        <span style="--index: 2">{{ text }}</span>
      </div>
      <div v-if="time === undefined" class="img_desc__furnitures stack">
        <span style="--index: 0">{{ desc }} | {{ name }}</span>
        <span style="--index: 1">{{ desc }} | {{ name }}</span>
        <span style="--index: 2">{{ desc }} | {{ name }}</span>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
.slider {
  border: 1px black solid;
}

.img_desc {
  display: flex;
  flex-direction: column;
  width: 100vw;

  img {
    width: 100%;
    height: 100%;
  }

  &__desc {
    text-align: center;
    padding: 0.7vw;
    margin-top: 0.2vw;
    color: var(--color);
    --stacks: 3
  }

  &__furnitures {
    margin-top: 0.2vw;
    color: var(--color);
    height: fit-content;
    --stacks: 3
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
    animation: stack 140ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards calc(var(--index) * 10ms),
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

@media screen and (min-width: 1020px) {
  .img_desc {
    &__desc {
      height: fit-content;
    }
  }

  span {
    font-size: 1.3vw;
  }

  .stack {
    margin-bottom: 3vw;
  }
}
</style>

<script>
export default {
  name: "ShowContent",
  props: {
    desc: String,
    floorLocation: String,
    link: String,
    name: String,
    path: String,
    text: String,
    time: String,
  },
};
</script>
