<script setup lang="ts">
const getServerRuntime = () => {
  try {
    return Bun.env.RUNTIME_ENV
  } catch (e: any) {
    return `node (ERROR: ${e.message})`
  }
}
</script>

<template>
  <div>
    <!-- <NuxtWelcome /> -->
    {{ getServerRuntime() }}
  </div>
</template>
