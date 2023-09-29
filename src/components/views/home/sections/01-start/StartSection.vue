<template>
  <section style="max-height: 80vh" data-id="4a6c06e" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\/\/kimara2024.fi\/wp-content\/uploads\/2023\/07\/Sivu-aallot_PITKA.mp4&quot;}">
    <div style="position: relative;">
      <video style="max-height: 80vh; width: 100%; object-fit: fill" autoplay="" muted="" playsinline="" loop="" src="https://kimara2024.fi/wp-content/uploads/2023/07/Sivu-aallot_PITKA.mp4"></video>
      <div class="start-section_text_and_logo">
        <div class="start-section__logo">
          <OpenElectionCompassLogo width="1em" />
        </div>
        <h1 class="start-section__heading">
          {{ $t('title') }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import OpenElectionCompassLogo from '/src/components/elements/OpenElectionCompassLogo.vue';
import PageSection from '/src/components/elements/PageSection.vue';

export default {
  name: 'StartSection',
  components: {
    OpenElectionCompassLogo,
  },
};
</script>

<style lang="scss">
.start-section_text_and_logo {
  margin-top: 0px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  text-align: center;
  color: white;
}

.start-section__logo {
  width: 30%;
  display: inline-block;
  font-size: 4em;
  @media (min-width: 48em) {
    font-size: 6em;
  }
}

.start-section__heading {
  font-family: Shrikhand, Lexend, sans-serif;
  // `align-self` needed for IE11
  align-self: center;
  font-size: 2em;
  line-height: 1.25;
  margin-top: 20px;
  text-align: center;
  @media (min-width: 38em) {
    font-size: 2em;
  }
  @media (min-width: 48em) {
    font-size: 3em;
  }
  @media (min-width: 64em) {
    font-size: 4em;
  }
}

.start-section__subtitle {
  // `align-self` needed for IE11
  align-self: center;
  font-size: 0.875em;
  text-align: center;
  color: #999;
  @media (min-width: 48em) {
    font-size: 1.125em;
  }
  @media (min-width: 64em) {
    font-size: 1.25em;
  }
}
</style>
