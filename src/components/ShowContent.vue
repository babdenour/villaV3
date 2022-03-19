<template>
  <div
    class="img_desc"
    :data-tm="time"
    :data-name="name"
    :data-path="path"
    :data-fl="floorLocation"
    :data-desc="desc"
  >
    <img :alt="name" :src="require(`@/${path}`)" />
    <div class="img_desc__desc stack" style="--stacks: 3">
      <span style="--index: 0">{{ desc }} {{ name }} {{ time }}</span>
      <span style="--index: 1">{{ desc }} {{ name }} {{ time }}</span>
      <span style="--index: 2">{{ desc }} {{ name }} {{ time }}</span>
    </div>
  </div>
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
    margin-top: 0.2vw;
    color: var(--color);
    height: 2vh;
  }
  .stack {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 0.5rem;
  }

  .stack span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    // font-size: 16px;
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

@media screen and (min-width: 1020px) {
  .img_desc {
    &__desc {
      height: 3.3vh;
    }
  }

  span {
    font-size: 2vw;
  }
}
</style>

<script>
export default {
  name: "ShowContent",
  props: {
    name: String,
    path: String,
    floorLocation: String,
    time: String,
    desc: String,
  },
};
</script>
