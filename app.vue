<script setup lang="ts">
const { data } = await useFetch<{
  serverRuntime: string
  password: string
}>('/api/bun')
</script>

<template>
  <div>
    <code>
        <pre>
        <span>Server Runtime: {{ data?.serverRuntime }}</span>
      </pre>
        <pre>
        <span>Hashed Password: {{ data?.password }}</span>
      </pre>
        <pre>
        <span>Current Date: {{ new Date().toISOString }}</span>
      </pre>
      </code>
  </div>
</template>
