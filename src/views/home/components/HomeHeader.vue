<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 px-4 py-3"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Photo Diary</a>
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
          <button class="btn btn-outline-primary px-4">ABOUT</button>
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
