<script>
export default {
  name: "changelang.component",
  data() {
    return {
      isEnglish: this.$i18n.locale === 'en'
    };
  },
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.isEnglish ? 'en' : 'es';
    },
    navigateToLogin() {
      window.location.href = "https://ezvet.netlify.app"; // Redirige al enlace deseado
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="logo">
      <!-- Imagen de logo -->
      <img src="../assets/ez-vet.png" alt="ez.Vet Logo" class="logo-image" />
    </div>

    <div class="center-content">
      <!-- Botón de inicio de sesión con evento de redirección -->
      <button class="login-button" @click="navigateToLogin">{{ $t('Hero.sesion') }}</button>
      <nav class="nav">
        <a href="#about" class="nav-link">{{ $t('Header.about') }}</a>
        <a href="#plans" class="nav-link">{{ $t('Header.plans') }}</a>
        <a href="#testimonials" class="nav-link">{{ $t('Header.testi') }}</a>
        <a href="#AboutProject" class="nav-link">{{ $t('Header.AboutProject') }}</a>
        <a href="#AboutTeam" class="nav-link">{{ $t('Header.AboutTeam') }}</a>
      </nav>
    </div>
    <pv-togglebutton v-model="isEnglish" onLabel="EN" offLabel="ES" @change="toggleLanguage" class="px-10" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #7068C0;
  color: #fff;
  width: 99vw;
  min-height: 13vh;
  box-sizing: border-box;
}

.logo {
  margin-right: auto;
}

.logo-image {
  width: 170px;
  height: auto;
}

.center-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  flex-grow: 1;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  color: #00BFB2;
}

.login-button {
  background-color: #B9B9D2;
  color: #000000;
  border: 1px solid #000000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.login-button:hover {
  background-color: #00BFB2;
  color: #fff;
}
</style>
