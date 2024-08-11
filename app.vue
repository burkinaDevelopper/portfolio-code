<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      rel: "stylesheet"
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css"
    },
    { rel: "stylesheet", href: "~/assets/css/tailwind.output.css" },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      rel: "stylesheet"
    },
    {
      rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
      integrity: "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",
      crossorigin: "anonymous", referrerpolicy: "no-referrer"
    }
  ],
  script: [
    { src: "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" },
    { src: "~/assets/js/charts-lines.js" },
    { src: "~/assets/js/charts-pie.js" },
    { src: "~/assets/js/init-alpine.js" },
  ],

})
</script>
