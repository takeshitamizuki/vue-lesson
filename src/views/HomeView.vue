<template>
  <h2>Home</h2>
  <p{{ $route.meta }}></p>
  <h3>Blog</h3>
  <RouterLink :to=" { path: 'blog', params: { id: [2, 1] } }">New Release!</RouterLink>
  <RouterView/>
</template>