<template>
  <div class="about">
    <router-link to="/">
      <img class="about__logo" src="../../public/logo.png" alt="logo" />
    </router-link>
    <h1>Villa Theoreme</h1>
    <i style="font-size: 1.9vh; text-align: center"
      >A villa to house a line of furniture by Theoreme Editions</i
    >
    <div class="about__text">
      <p><strong>Introduction</strong></p>
      <p>
        The project preserves the shell of a six storey building <br />
        Emulate the feeling of inhabiting a villa with an abstract relationship to the
        environment<br />
        Through the variety of natural light<br />
      </p>
      <p><strong>The Villa’s Architecture</strong></p>
      <p>
        The six-storey building is located in Paris’ Palais Royal, with its south façade
        facing the garden.
      </p>
      <p>
        <span class="about__text__ywl">
          The project conserves the building’s original façades and party walls. All
          partition walls are removed.</span
        >
      </p>
      <p>
        <span class="about__text__ywl">
          Between the second and sixth storeys an opening is made at the center of the
          slabs, new floors, at new levels, are suspended between the east and west
          walls</span
        >
      </p>
      <p>
        These added platforms are made of 3-millimeter thin steel beams, braced with steel
        cables, and covered by perforated metal panels. They sometimes align with the
        existing storeys, sometimes sit slightly below them, or sometimes float above
        them, creating a variety of level and height experiences.
      </p>
      <p>
        Stairs are positioned on the side of the platforms against the west wall. Above
        the platforms, the roof is replaced by a glazed ceiling.
      </p>
      <p>
        The added platforms function as a core in the building, connecting on the
        horizontal plane the north and south areas, and on the vertical plane each
        storey.<span class="about__text__ywl">
          The result is an array of unique spaces all interconnected by the transparency
          of the floors and the circulating natural light.</span
        >
      </p>
      <p>
        The overall lightness of the space is enhanced by the materials chosen for the
        fixed, pivoting and sliding partitions: translucent Japanese paper and perforated
        steel panels. Because of this permeable configuration it is<span
          class="about__text__ywl"
          >possible to perceive light entering from the south, north, and roof opening. As
          the light shifts throughout the day, and changes between seasons, it repeatedly
          creates new variations of natural ambiance. The result is a collection of
          different conditions. Time is perceptible in the way it reflects in each space;
          the materials absorb blue and yellow light in the morning, orange and pink light
          in the evening.</span
        >
      </p>
      <p>
        Every room offers a different potential relationship with the park in the south.
        The garden can be a background, a distant perspective, an extension, something one
        overlooks, something one is hidden from, its presence manifest with different
        views, sounds and smells. One can sit by the windows and smell the trees or leave
        them open to hear the rain on the leaves, the kids playing with the pebbles.
      </p>
      <p>
        <span class="about__text__ywl">
          Each area is independent and simultaneously a part of the adjacent one.</span
        >
      </p>
      <p>
        <span class="about__text__ywl">
          There is no fixed room only a structure that acts as a base for this evolutive
          landscape like fragmentation of the spaces.</span
        >
      </p>
      <p>
        The large translucent pivoting and sliding doors offer a way to modulate these
        connections.
      </p>
      <p>
        <span class="about__text__ywl"
          >A variety of potential use and spatial appropriation are offered to the
          inhabitants:</span
        >
        a large open living room partly sunk, a suspended room overlooking it, an interior
        terrace connecting the bathroom and the bedrooms, an inner balcony connecting the
        top square room facing the park and a long room on
      </p>
      <p>
        the north both illuminated by the light coming glazed roof, and an isolated attic
        room giving access to the roof itself on which it is possible to lay like a garden
        slope.
      </p>
      <p>
        <span class="about__text__ywl"
          >Every space can become a place to sleep, to read, a dining room or a gathering
          room,</span
        >room, depending on how many people are sharing the villa, the pool can be the
        background to a private conversation, the bathroom a place around which to gather
        and chat, the top living room can become a guest bedroom, the floor overlooking
        the living room can become a dining room, the terrace connecting the bedroom and
        the bathroom a surface to lay and watch the stars....
      </p>
      <p>
        <span class="about__text__ywl">
          The transparency, multiple sources of natural and spatial continuity together
          with absence of defined boundaries and functions allow the building to behave as
          a receptacle for the environment, where the luxury of abundant space is used for
          flexibility and freedom to invent new ways of living.
        </span>
      </p>
      <p>
        <span class="about__text__ywl">
          This dynamic and undefined spatial organization try to replicate the special
          feeling of staying in a villa by its connection to an environment.
        </span>
      </p>
    </div>
    <a style="font-size: 1.8vh;" href="https://github.com/babdenour" target="_blank">dev by abdenour</a>
  </div>
</template>

<script>
export default {
  name: "About",
}
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 100%;
  // padding: 3px;
  // position: absolute;
  // top: 20%;

  &__logo {
    width: 100%;
    padding: 3px;
  }
  &__text {
    width: 95%;
    text-align: start;
    font-size: 1.8vh;

    &__ywl {
      background-color: yellow;
      width: fit-content;
    }
  }
}
</style>
