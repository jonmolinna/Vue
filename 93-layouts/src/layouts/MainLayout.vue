<template>
    <div class="container">
    <div class="navbar">
      <NavbarMenu />
    </div>
    <div class="main-content-container">
      <div class="menu">
        <SidebarMenu />
      </div>
      <div class="main-content">
        <slot name="main"></slot>
      </div>
      <div class="main-content">
        <slot name="authentication"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import NavbarMenu from '@/components/NavbarMenu.vue';
    import SidebarMenu from '@/components/SidebarMenu.vue';
</script>