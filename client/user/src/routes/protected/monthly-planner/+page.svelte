<script lang="ts">
  interface Event {
    date: string;
    title: string;
    description: string;
    eventType: string;
  }
  let events: Event[] = [];

  async function loadEvents(): Promise<Event[]> {
    try {
      const response = await fetch("http://localhost:4000/current");
      if (response.ok) {
        const eventsData = await response.json();
        return eventsData as Event[]; // Assuming response is an array of events
      } else {
        throw new Error("Failed to load events.");
      }
    } catch (error) {
      console.error("Error loading events:", error);
      return []; // Return empty array on error (optional)
    }
  }
  async function onMount() {
    events = await loadEvents();
  }
</script>

<main>
  <h2 class="text-primary text-3xl leading-loose">Monthly Planner</h2>
  <h3 class="text-xl">April 2024</h3>
  {#each events as event}
    <div class="flex gap-3 items-center my-5">
      <h4 class="font-semibold text-4xl text-primary">{event.date}</h4>
      <div
        class="w-full px-2 pt-2 pb-3 rounded-md border-l-4 border-primary bg-primary-foreground"
      >
        <h4 class="text-sm leading-6 font-medium">{event.title}</h4>
        <p class="text-xs">{event.description}</p>
      </div>
    </div>
  {/each}
</main>
