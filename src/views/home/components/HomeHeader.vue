<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function logout() {
    router.push('/');
  }
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 px-4 py-3"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/images/scrapbook.png"
          alt="Logo"
          width="30"
          height="24"
        />
        Photo Diary</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-supported-content"
        aria-controls="navbar-supported-content"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-supported-content">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page"
              >Favorites</a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">Settings</a>
          </li>
        </ul>
        <div class="d-flex ms-auto">
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><span class="me-2">Hello, Ralph Maron Eda</span>
              <i class="bi bi-person"></i
            ></a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button type="button" @click="logout" class="dropdown-item">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .position-sticky {
    z-index: 1030; /* Ensure it appears above other content */
  }
</style>
