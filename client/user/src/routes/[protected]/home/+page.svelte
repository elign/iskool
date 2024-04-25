<script>
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<main>
  <h3 class="text-2xl font-medium text-primary">Hello Garvit 👋</h3>
  <p>Welcome to Shemford online school.</p>

  <section
    class="bg-[url('/images/cover.jpg')]  bg-cover w-full h-48 mt-10 rounded-lg flex items-center "
  >
    <div class="bg-gradient-to-r from-primary to-transparent h-full w-full rounded-lg p-8">
      <h2 class="text-white text-xl font-semibold pb-2 w-5/12">Annual Tech Fest 2024</h2>
      <Button size="sm" variant="secondary" class=" shadow-md">Know More</Button>
    </div>
  </section>
</main>
