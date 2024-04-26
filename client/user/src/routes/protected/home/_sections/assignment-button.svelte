<script lang="ts">
  import { ArrowBigDown } from "lucide-svelte";
  import type { ComponentType } from "svelte";
  import type { Icon } from "lucide-svelte";

  export let title: string = "Classwork";
  export let url: string = "/";
  export let icon: ComponentType<Icon> = ArrowBigDown;
</script>

<a href={url} class="w-24 h-20 bg-white rounded-lg relative flex items-center">
  <span
    class="absolute bottom-3 left-0 right-0 flex items-center justify-center"
    >{title}</span
  >
  <div
    class="absolute -top-10 left-2 w-20 h-20 bg-primary rounded-full shadow-md flex items-center justify-center"
  >
    <!-- {icon} -->
    <svelte:component this={icon} size={"30"} color={"white"} />
  </div>
</a>
