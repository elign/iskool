<script lang="ts">
  import { onMount } from "svelte";

  interface Event {
    date: string;
    eventName: string;
    description: string;
    eventType: string;
  }
  let events: Event[] = [];

  export async function fetchEvents(): Promise<Event[]> {
    const response = await fetch("http://localhost:4000/events/current");
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return response.json();
  }

  onMount(async () => {
    await loadEvents();
  });

  async function loadEvents() {
    try {
      events = await fetchEvents();
    } catch (error) {
      console.error("Failed to load events:", error);
    }
  }

  function extractDate(dateString: string) {
    const dateObject = new Date(dateString);
    const day = String(dateObject.getDate()).padStart(2, "0");
    return day;
  }
</script>

<main>
  <h2 class="text-primary text-3xl leading-loose">Monthly Planner</h2>
  <h3 class="text-xl">April 2024</h3>
  {#each events as event}
    <div class="flex gap-3 items-center my-5">
      <h4 class="font-semibold text-4xl text-primary">
        {extractDate(event.date)}
      </h4>
      <div
        class="w-full px-2 pt-2 pb-3 rounded-md border-l-4 border-primary bg-primary-foreground"
      >
        <h4 class="text-sm leading-6 font-medium">{event.eventName}</h4>
        <p class="text-xs">{event.description}</p>
      </div>
    </div>
  {/each}
</main>
