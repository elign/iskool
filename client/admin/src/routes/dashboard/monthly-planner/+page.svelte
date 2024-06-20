<script lang="ts">
  import { onMount } from "svelte";
  import { fetchEvents, createEvent } from "./api";
  import type { Event } from "$lib/types";
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import Label from "$lib/components/ui/label/label.svelte";
  import { Textarea } from "$lib/components/ui/textarea";
  import * as Select from "$lib/components/ui/select";
  import { Button } from "$lib/components/ui/button";

  let events: Event[] = [];
  let date: string = "";
  let eventName: string = "";
  let description: string = "";
  let eventType: string = "";
  let message: string = "";

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

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    try {
      const response = await createEvent({
        date,
        eventName,
        description,
        eventType,
      });
      if (response.ok) {
        message = "Event created successfully!";
        await loadEvents();
      } else {
        message = "Failed to create event.";
      }
    } catch (error) {
      message = "Failed to create event.";
      console.error("Failed to create event:", error);
    }
  }
</script>

<div class="flex p-10 gap-20">
  <div class="w-1/3">
    <form
      on:submit={handleSubmit}
      class="flex flex-col gap-3 bg-background p-4 rounded-md shadow-md"
    >
      <h2 class="text-2xl font-semibold">Monthly Planner</h2>
      <div>
        <Label for="date">Date:</Label>
        <Input type="date" id="date" bind:value={date} required />
      </div>
      <div>
        <Label for="eventName">Event Name:</Label>
        <Input type="text" id="eventName" bind:value={eventName} required />
      </div>
      <div>
        <Label for="description">Description:</Label>
        <Textarea id="description" bind:value={description} required></Textarea>
      </div>
      <div>
        <Label for="eventType">Event Type:</Label>
        <Select.Root>
          <Select.Trigger class="w-[180px]">
            <Select.Value placeholder="Theme" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="holiday">Holiday</Select.Item>
            <Select.Item value="festival">Festival</Select.Item>
            <Select.Item value="competition">Competition</Select.Item>
            <Select.Item value="exam">Exam</Select.Item>
          </Select.Content>
          <Select.Input name="eventType" bind:value={eventType} />
        </Select.Root>
      </div>
      <Button class="mt-5" type="submit">Submit</Button>
    </form>
    {#if message}
      <p>{message}</p>
    {/if}
  </div>
  <div class="w-2/3">
    {#each events as event}
      <div class="card">
        <h3>{event.eventName}</h3>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Type:</strong> {event.eventType}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
