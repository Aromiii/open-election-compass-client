<template>
  <div>
    <MainNavigation
      @open-language-switch="showLanguageSwitch = true"
      @open-friends-join-modal="showFriendsJoinModal = true"
      @open-friends-invite-modal="showFriendsInviteModal = true"
      @reset="bus.emit('reset', { seconds: 15 })"
    >
      <template v-slot:site>
        <SectionWatcher>
          <start-section />
          <main :aria-roledescription="$t('views.home.home.role-aria')">
            <introduction-section />
            <theses-section />
            <party-section v-if="thesesComplete" />
            <match-section v-if="partiesChosen" />
          </main>
          <footer-section />
          <guide-button v-if="ready" />
        </SectionWatcher>
      </template>
    </MainNavigation>
  </div>
</template>

<script>
import FooterSection from '/src/components/views/home/sections/07-footer/FooterSection.vue';
import GuideButton from '/src/components/elements/GuideButton.vue';
import IntroductionSection from '/src/components/views/home/sections/02-introduction/IntroductionSection.vue';
import MainNavigation from '/src/components/elements/MainNavigation.vue';
import MatchSection from '/src/components/views/home/sections/05-match/MatchSection.vue';
import SectionWatcher from '/src/components/elements/SectionWatcher.vue';
import StartSection from '/src/components/views/home/sections/01-start/StartSection.vue';
import ThesesSection from '/src/components/views/home/sections/03-theses/ThesesSection.vue';
import PartySection from '/src/components/views/home/sections/04-party/PartySection.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      ready: false,
      showLanguageSwitch: false,
      showFriendsInviteModal: false,
      showFriendsJoinModal: false,
    };
  },
  mounted() {
    this.ready = true;
  },
  computed: {
    thesesComplete() {
      return this.$store.getters['theses/complete'];
    },
    partiesChosen() {
      return this.$store.getters['parties/chosen'];
    },
  },
  components: {
    FooterSection,
    GuideButton,
    IntroductionSection,
    MainNavigation,
    MatchSection,
    SectionWatcher,
    StartSection,
    ThesesSection,
    PartySection,
  },
};
</script>
