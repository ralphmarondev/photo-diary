<template>
  <div
    class="col-md-3 d-none d-md-flex flex-column"
    style="
      position: sticky;
      top: 0;
      background: white;
      z-index: 1;
      overflow-y: auto;
      height: calc(100vh - 56px);
    "
  >
    <div class="mt-3">
      <div class="card vh-75">
        <div class="card-content p-3 text-center">
          <img
            src="@/assets/images/mountain.png"
            alt="Profile"
            height="100"
            width="100"
            style="border-radius: 50%; object-fit: cover"
            class="mb-3"
          />
          <p class="text-primary fs-5">Ralph Maron Eda</p>
          <hr />
          <p class="text-secondary">
            Ralph Maron Eda, a fourth-year Computer Engineering student, excels
            in software development, focusing on mobile and web applications.
          </p>
          <div class="row mb-3 text-center">
            <div class="col">
              <button class="btn btn-outline-primary">Edit Profile</button>
            </div>
          </div>
          <hr />
          <div class="row justify-content-center">
            <div class="col-auto">
              <a
                href="https://www.facebook.com"
                target="_blank"
                class="text-decoration-none"
              >
                <i class="bi bi-facebook fs-5"></i>
              </a>
            </div>
            <div class="col-auto">
              <a
                href="https://www.instagram.com"
                target="_blank"
                class="text-decoration-none"
              >
                <i class="bi bi-instagram fs-5"></i>
              </a>
            </div>
            <div class="col-auto">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                class="text-decoration-none"
              >
                <i class="bi bi-tiktok fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .vh-75 {
    height: 75vh;
  }
</style>
