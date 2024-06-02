<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/book-reviews">Book Reviews</router-link> |
      <router-link to="/film-reviews">Film Reviews</router-link> |
      <router-link to="/game-reviews">Game Reviews</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
