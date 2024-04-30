<script>
  import "../app.pcss";
  import "@fontsource/open-sans";
</script>

<div
  class="min-h-screen max-w-sm p-4 m-auto bg-[url('/images/app-bg.svg')] bg-bottom md:bg-contain bg-cover"
>
  <slot />
</div>

<style>
  :global(body) {
    font-family: "Open Sans Variable", sans-serif;
  }
</style>