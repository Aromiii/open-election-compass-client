<template>
  <PageSection class="match-section" full data-section="match">
    <h2 class="match-section__heading">
      {{ $t('views.home.match.section.heading') }}
    </h2>
    <p class="match-section__explanation">
      {{ $t('views.home.match.section.explanation') }}
    </p>
    <ul>
      <li v-for="{ party, percentage } in results" :key="party.alias">
        <MatchDisplay :party="party" :percentage="percentage" />
      </li>
    </ul>
    <nav class="match-section__links">
      <ul>
        <li v-for="(link, index) in footerLinks" :key="index">
          <a :href="$t(`footer-links.${index}.href`)" target="_blank">
            {{ $t(`footer-links.${index}.text`) }}
          </a>
        </li>
      </ul>
    </nav>
  </PageSection>
</template>

<script>
import { mapGetters } from 'vuex';
import MatchDisplay from '/src/components/views/home/sections/05-match/MatchDisplay.vue';
import PageSection from '/src/components/elements/PageSection.vue';

export default {
  name: 'MatchSection',
  components: {
    MatchDisplay,
    PageSection,
  },
  computed: {
    ...mapGetters({
      selectedParties: 'parties/selectedParties',
      theses: 'theses/theses',
      results: 'parties/results',
    }),
    footerLinks() {
      return this.$store.getters["footerLinks/links"];
    }
  },
};
</script>

<style lang="scss">
.match-section__links {
  color: #ffb16f;
  nav {
    color: #100122;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media screen and (max-width: 550px) {
      gap: 25px;
    }
  }
  a {
    @media screen and (max-width: 550px) {
      font-size: 15px;
      padding: 10px 15px;
      overflow: hidden;
    }

    font-family: Lexend, sans-serif;
    font-size: 25px;
    font-weight: 700;
    transition: 0.3s;
    padding: 20px 40px;
    background: #100122;
    border-radius: 100px;
  }
  a:hover {
    @media screen and (max-width: 550px) {
      padding: 15px 15px;
    }

    color: white;
    padding: 25px 70px;
  }
}

.match-section {
  background-color: #ee5b61;
}

.match-section__heading {
  color: #fff;
}

.match-section__explanation {
  margin-bottom: 2.5em;
}
</style>
