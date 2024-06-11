<script lang="ts">
  import "../app.css";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { Button } from "$lib/components/ui/button/index";
  import { Toaster } from "$lib/components/ui/sonner";
  import { toggleMode } from "mode-watcher";
  import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />
<Toaster />
<main class="min-h-screen bg-image">
  <slot />
  <Button
    on:click={toggleMode}
    variant="outline"
    size="icon"
    class="fixed bottom-10 right-10 shadow-2xl"
  >
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
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
