<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const username = ref<string>('');
  const password = ref<string>('');

  const showResponse = ref<boolean>(false);
  const response = ref('Invalid password.');

  function login() {
    console.log(`Username: ${username.value}, Password: ${password.value}`);

    if (username.value === '' && password.value === '') {
      showResponse.value = true;
      response.value = 'Invalid password.';
      return;
    } else if (password.value.length < 8) {
      showResponse.value = true;
      response.value = 'Password must be more than or equal to 8 characters.';
      return;
    }
    showResponse.value = false;
    response.value = '';

    if (username.value === 'ralphmaron' && password.value === 'iscuteee') {
      router.push('/home');
    } else {
      showResponse.value = true;
      response.value = 'Invalid credentials.';
    }
  }
</script>

<template>
  <div class="container" style="max-width: 500px">
    <div class="card">
      <div class="card-content">
        <form @submit.prevent="login" class="p-5">
          <h3 class="text-primary fw-bold">Welcome Back!</h3>
          <p class="mb-3 text-secondary">
            Please enter your credentials to continue.
          </p>
          <div class="col mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="username"
              class="form-control"
              placeholder="Enter Username"
            />
          </div>
          <div class="col mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              class="form-control"
              placeholder="Enter Password"
            />
          </div>

          <p class="text-danger" v-if="showResponse">{{ response }}</p>

          <button type="submit" class="btn btn-primary w-100 mt-3">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
