<template>
  <div id="app">
    <Header />
    <HeroSection />
    <PlansSection />
    <TestimonialsSection />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import PlansSection from './components/PlansSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    HeroSection,
    PlansSection,
    TestimonialsSection,
    Footer,
  },
};
</script>

<style>
/* Estilos globales opcionales */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
