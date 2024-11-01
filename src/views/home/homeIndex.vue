<script setup lang="ts">
  import HomeHeader from './components/HomeHeader.vue';
  import PhotoDiaryCard from './components/PhotoDiaryCard.vue';
</script>

<template>
  <div>
    <HomeHeader />
    <div class="container mt-3">
      <PhotoDiaryCard />
      <PhotoDiaryCard />
    </div>
  </div>
</template>
