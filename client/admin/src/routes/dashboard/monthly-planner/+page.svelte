<script lang="ts">
  import { onMount } from "svelte";
  import { fetchEvents, createEvent } from "./api";
  import type { Event } from "$lib/types";
  import { Input } from "$lib/components/ui/input";
  import Label from "$lib/components/ui/label/label.svelte";
  import { Textarea } from "$lib/components/ui/textarea";
  import * as Select from "$lib/components/ui/select";
  import { Button } from "$lib/components/ui/button";
  import { toHumanReadableDate } from "$lib/utils";
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import {
    type DateValue,
    DateFormatter,
    getLocalTimeZone,
  } from "@internationalized/date";
  import { cn } from "$lib/utils.js";
  import { Calendar } from "$lib/components/ui/calendar";
  import * as Popover from "$lib/components/ui/popover";

  const df = new DateFormatter("en-US", {
    dateStyle: "long",
  });

  let events: Event[] = [];
  let date: DateValue | undefined = undefined;
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
    if (!date) {
      message = "Please select a date for the event.";
      return; // Prevent further execution if date is missing
    }
    const formattedDate = date?.toString();
    const apiDate: Date = new Date(formattedDate as string);
    console.log(apiDate, eventType);
    try {
      const response = await createEvent({
        date: apiDate,
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

<div class="flex p-10 gap-10">
  <div class="w-1/3">
    <form
      on:submit={handleSubmit}
      class="flex flex-col gap-3 bg-background p-4 rounded-md shadow-md"
    >
      <h2 class="text-2xl font-semibold">Monthly Planner</h2>
      <div>
        <Label for="date">Date:</Label>
        <br />
        <Popover.Root openFocus>
          <Popover.Trigger asChild let:builder>
            <Button
              variant="outline"
              class={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
              builders={[builder]}
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              {date
                ? df.format(date.toDate(getLocalTimeZone()))
                : "Select a date"}
            </Button>
          </Popover.Trigger>
          <Popover.Content class="w-auto p-0">
            <Calendar bind:value={date} initialFocus />
          </Popover.Content>
        </Popover.Root>
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
        <Select.Root
          selected={eventType}
          onSelectedChange={(v:String) => {}
        >
          <Select.Trigger class="w-full">
            <Select.Value placeholder="Select" />
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
  <div class="w-1/3 max-h-[80vh] overflow-y-scroll px-4 no-scrollbar">
    {#each events as event}
      <div class="bg-background p-3 mb-3 rounded-md shadow-md">
        <h3 class="text-primary font-semibold">{event.eventName}</h3>
        <p><strong>Date:</strong> {toHumanReadableDate(event.date)}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Type:</strong> {event.eventType}</p>
      </div>
    {/each}
  </div>
</div>
