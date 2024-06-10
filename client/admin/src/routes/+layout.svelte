<script>
  import "../app.css";
  import { Toaster } from "$lib/components/ui/sonner";
</script>

<Toaster />
<main class="min-h-screen bg-image">
  <slot />
</main>

<style>
  .bg-image {
    background-image: url(/images/background.jpg); /* Placeholder for missing image */
    background-color: rgba(
      255,
      255,
      255,
      0.8
    ); /* Adjust the color and opacity */
    background-blend-mode: lighten; /* Choose the appropriate blend mode */
    position: relative;
    color: black; /* Adjust based on your needs */
  }
</style>
