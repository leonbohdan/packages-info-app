<script setup>
const openLink = () => {
  window.open('https://github.com/leonbohdan', '_blank').focus();
};
</script>

<template>
  <div class="d-flex align-center justify-center flex-column">
    <div class="mb-3">
      <v-btn icon href="https://github.com/leonbohdan/packages-info-app">
        <v-icon>
          mdi-github
        </v-icon>
      </v-btn>

      <v-btn icon href="https://www.linkedin.com/in/bohdan-leonets/">
        <v-icon>
          mdi-linkedin
        </v-icon>
      </v-btn>

      <v-btn icon href="https://t.me/lbwkm" style="opacity: 0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          width="23"
          height="23"
          viewBox="-2 -2 28 28"
          style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"
        ><path d="M12 0C5.374 0 0 5.372 0 12c0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12Zm3.224 17.871c.188.133.43.166.646.085a.678.678 0 0 0 .422-.491c.507-2.382 1.737-8.412 2.198-10.578a.457.457 0 0 0-.151-.443.47.47 0 0 0-.465-.082c-2.446.906-9.979 3.732-13.058 4.871a.484.484 0 0 0-.316.467.483.483 0 0 0 .346.445c1.381.413 3.193.988 3.193.988s.847 2.558 1.288 3.858a.512.512 0 0 0 .352.336.505.505 0 0 0 .474-.121l1.805-1.704s2.084 1.527 3.266 2.369Zm-6.423-5.062.98 3.231.218-2.046 5.941-5.358a.162.162 0 0 0 .019-.22.165.165 0 0 0-.219-.037l-6.939 4.43Z"/></svg>
      </v-btn>
    </div>

    <div class="d-flex align-center">
      Made by:&nbsp;

      <button
        class="text-decoration-underline"
        @click="openLink"
      >
        leonbohdan
      </button>
    </div>
  </div>
</template>
