<script setup lang="ts">
  import HomeHeader from './components/HomeHeader.vue';
  import LeftHomeContent from './components/LeftHomeContent.vue';
  import RightHomeContent from './components/RightHomeContent.vue';
  import PhotoDiaryCard from './components/PhotoDiaryCard.vue';
</script>

<template>
  <div>
    <HomeHeader />
    <div class="container">
      <div class="row h-100">
        <LeftHomeContent />

        <!-- Center Column for Cards -->
        <div class="col-md-6">
          <div
            class="d-flex flex-column align-items-center"
            style="
              height: calc(100vh - 56px);
              overflow-y: auto;
              padding: 20px 0;
            "
          >
            <PhotoDiaryCard
              date="November 1, 2024"
              :image="require('@/assets/images/mountain.png')"
              title="A day to remember"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam!"
              location="Mars"
              style="width: 100%; max-width: 600px; margin-bottom: 20px"
            />
            <PhotoDiaryCard
              date="November 1, 2024"
              image="https://drive.google.com/uc?id=1HEt6HT0rOYOhqoI6JeKCVIbN1W0p2S9t"
              title="A day to remember"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, totam!"
              location="Mars"
              style="width: 100%; max-width: 600px; margin-bottom: 20px"
            />
          </div>
        </div>

        <RightHomeContent />
      </div>
    </div>
  </div>
</template>
