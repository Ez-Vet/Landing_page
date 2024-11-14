<template>
  <footer class="footer">
    <p>{{ $t('Footer.a') }}</p>
    <div class="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="../assets/instagram.png" alt="Instagram" class="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="../assets/twitter.png" alt="Twitter" class="social-icon" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="../assets/facebook.png" alt="Facebook" class="social-icon" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #7068C0;
  color: #fff;
  font-size: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 32px;
  height: 32px;
  transition: transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.1);
  /* Efecto de agrandado al pasar el mouse */
}
</style>
