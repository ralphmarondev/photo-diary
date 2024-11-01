<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary px-4 py-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/images/scrapbook.png"
          alt="Logo"
          width="30"
          height="24"
        />
        Photo Diary
      </a>
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
        <div class="d-flex ms-auto">
          <button
            class="btn btn-outline-primary px-4"
            data-bs-toggle="modal"
            data-bs-target="#about-modal"
          >
            ABOUT
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
