<script lang="ts">
  interface Event {
    date: string;
    title: string;
    description: string;
    bgColor: string;
  }
  let events: Event[] = [
    {
      date: "11",
      title: "Jyotibafule Jayanti & Eid Ul Fitr",
      description: "Holiday",
      bgColor: "#D32E36",
    },
    {
      date: "13",
      title: "Baishakhi & Ambedkar Jayanti",
      description: "Special Assembly and celebration.",
      bgColor: "#D32E36",
    },
    {
      date: "11",
      title: "Bulletin Board Decoration",
      description: "Holiday",
      bgColor: "",
    },
    {
      date: "11",
      title: "Jyotibafule Jayanti & Eid Ul Fitr",
      description: "Holiday",
      bgColor: "",
    },
    {
      date: "11",
      title: "Jyotibafule Jayanti & Eid Ul Fitr",
      description: "Holiday",
      bgColor: "#D32E36",
    },
  ];
</script>

<main>
  <h2 class="text-primary text-3xl leading-loose">Monthly Planner</h2>
  <h3 class="text-xl">April 2024</h3>
  {#each events as event}
    <div class="flex gap-3 items-center my-5">
      <h4 class="font-semibold text-4xl text-primary">{event.date}</h4>
      <div
        style={`border-color: ${event.bgColor};`}
        class="w-full px-2 pt-2 pb-3 rounded-md border-l-4 border-primary bg-primary-foreground"
      >
        <h4 class="text-sm leading-6 font-medium">{event.title}</h4>
        <p class="text-xs">{event.description}</p>
      </div>
    </div>
  {/each}
</main>
