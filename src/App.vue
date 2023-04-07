<script setup>
import PackagesList from '@/components/PackagesList.vue';
</script>

<template>
  <v-app>
    <v-app-bar app elevation="1">
      <v-container>
        <v-toolbar-title>Packages info bar</v-toolbar-title>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <PackagesList />
      </v-container>
    </v-main>

    <v-footer app>
      <v-container>
        <BaseFooter />
      </v-container>
    </v-footer>
  </v-app>
</template>
