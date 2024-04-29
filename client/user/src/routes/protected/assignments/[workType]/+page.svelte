<script lang="ts">
  import { page } from "$app/stores";
  import * as Tabs from "$lib/components/ui/tabs";
  const workType = $page.params.workType;
  import Notification from "./_sections/notification.svelte";

  interface Assignment {
    subject: string;
    code: string;
    text: string;
    imgUrl: string;
  }
</script>

<!-- <p>{workType}</p> -->

<Tabs.Root value={workType}>
  <Tabs.List>
    <Tabs.Trigger value="classwork">Classwork</Tabs.Trigger>
    <Tabs.Trigger value="homework">Homework</Tabs.Trigger>
    <Tabs.Trigger value="language">Language</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="classwork">
    <p class="text-center font-semibold text-gray-700">Today</p>
    <Notification />
    <Notification />
    <Notification />
  </Tabs.Content>
  <Tabs.Content value="homework"
    ><p class="text-center font-semibold text-gray-700">Today</p>
    <Notification />
    <Notification />
    <Notification />
  </Tabs.Content>
  <Tabs.Content value="language">
    <p class="text-center font-semibold text-gray-700">Today</p>
    <Notification />
    <Notification />
    <Notification />
  </Tabs.Content>
</Tabs.Root>
