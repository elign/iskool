<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";  
  interface Subject {
    name: string;
    code: string;
  }
  const subjects: Subject[] = [
    {
      name: "Science",
      code: "1",
    },
    {
      name: "SST",
      code: "2",
    },
    {
      name: "Maths",
      code: "3",
    },
    {
      name: "SST",
      code: "2",
    },
    {
      name: "Maths",
      code: "3",
    },
    {
      name: "Maths",
      code: "3",
    },
  ];
</script>

<main>
  <div class="grid grid-cols-2 gap-4">
    {#each subjects as subject}
      <Button
        href={`/protected/class-test/${subject.code}`}
        class="flex items-center justify-center w-36 h-36 bg-primary-foreground text-primary text-xl rounded-full cursor-pointer shadow-lg bg-opacity-95 hover:shadow-sm hover:text-primary-foreground duration-300"
      >
        {subject.name}
      </Button>
    {/each}
  </div>
</main>
