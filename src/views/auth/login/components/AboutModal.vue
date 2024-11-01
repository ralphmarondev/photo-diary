<template>
  <div
    class="modal fade"
    id="about-modal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="about-modal-label"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="about-modal-label">
            About Photo Diary
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Photo Diary is a collection of photos and memories from my college
          life, both in school and beyond. It includes moments from OJT,
          competitions, school events, and times spent with my classmates. Each
          picture is a small piece of my journey through college, highlighting
          the experiences and achievements that have shaped me along the way.
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-dismiss="modal">
            Aww, okay, close!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
