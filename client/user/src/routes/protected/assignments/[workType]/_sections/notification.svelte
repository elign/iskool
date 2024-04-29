<script lang="ts">
  export let subject = "English";
  export let message =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  export let img = "/images/placeholder.avif";
</script>

<div class="bg-primary-foreground p-4 mx-1 my-3 rounded-md border-l-4 border-primary">
    <h3 class="font-semibold text-primary text-lg">{subject}</h3>
    <p class="text-sm">{message}</p>
    {#if img != ""}
        <img class="mt-4 rounded-md shadow-md" src={img} alt={img}/>
    {/if}
</div>