<script setup lang="ts">
  import { defineProps } from 'vue';

  // eslint-disable-next-line vue/no-setup-props-destructure
  const { date, image, title, description, location } = defineProps<{
    date: string;
    image: string;
    title: string;
    description: string;
    location: string;
  }>();
</script>

<template>
  <div class="container mb-3">
    <div class="card" style="max-width: 600px">
      <div class="card-content">
        <div class="row mx-2 mt-2 align-items-center">
          <div class="col-auto">
            <img
              src="@/assets/images/scrapbook.png"
              alt="App Logo"
              style="
                height: 60px;
                width: 60px;
                object-fit: cover;
                border-radius: 50%;
                border: 1px solid purple;
              "
            />
          </div>
          <div class="col">
            <p class="text-primary text-start fs-5 mb-1">Photo Diary</p>
            <p class="mb-0">{{ date }}</p>
          </div>
        </div>
        <hr />
        <div class="row m-2">
          <img
            :src="image"
            alt="Photo Diary Image"
            style="max-height: 300px; object-fit: cover; min-height: 200px"
          />
        </div>

        <d class="row m-2">
          <p class="text-primary">{{ title }}</p>
          <p class="text-secondary">{{ description }}</p>
          <p class="text-tertiary">{{ location }}</p>
        </d>
      </div>
    </div>
  </div>
</template>
