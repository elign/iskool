<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";

  export let title: string = "Classwork";
  export let url: string = "/";
</script>

<Button
  class="flex gap-2 bg-opacity-95 bg-white text-primary hover:text-white shadow-md"
  size="lg"
  href={url}
>
  {title}
</Button>
