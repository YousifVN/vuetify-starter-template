<script lang="ts" setup>
import { IconHomeFilled } from '@tabler/icons-vue';
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl font-bold underline mb-9">
      index page {{ $t('test') }}
    </h1>

    <p>mdi icon <VIcon>mdi-home</VIcon></p>
    <p>tabler icon <VIcon><IconHomeFilled /></VIcon></p>
  </div>
</template>

