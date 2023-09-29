<template>
  <footer class="footer-section" style="">
    <PageSection class="footer-section__open-source">
      <div class="footer-section__project">
        <a href="https://kimara2024.fi" class="footer-section__logo">
          <OpenElectionCompassLogo class="footer-section__logo" width="50px" color="#718096" />
        </a>
        <i18n-t
          class="footer-section__project-link"
          keypath="views.home.footer.section.explanation"
          tag="p"
          for="oec"
        >
          <a href="https://open-election-compass.com" target="_blank">{{
              $t("views.home.footer.section.oec")
            }}</a>
        </i18n-t>
      </div>
    </PageSection>
  </footer>
</template>

<script>
import OpenElectionCompassLogo from "/src/components/elements/OpenElectionCompassLogo.vue";
import PageSection from "/src/components/elements/PageSection.vue";

export default {
  name: "FooterSection",
  components: {
    PageSection,
    OpenElectionCompassLogo
  },
};
</script>

<style lang="scss">
.footer-section__open-source {
  border-top: 20px solid #100122;
  background: #100122;
}

.footer-section__logo {
  flex: none;
  margin: 0 auto 1.5em auto;
  @media (min-width: 40em) {
    margin-top: 0;
    margin-inline-end: 2em;
    margin-bottom: 0;
    margin-inline-start: 0;
  }
}

.footer-section__project {
  max-width: 20em;
  margin: 0 auto;
  @media (min-width: 40em) {
    display: flex;
    align-items: center;
  }
}

.footer-section__project-link {
  font-size: 0.875em;
  font-weight: bold;
  color: #718096;
  text-align: center;
  @media (min-width: 40em) {
    text-align: start;
  }
  a {
    text-decoration: underline;
  }
}
</style>
