<script lang="ts">
  import { page } from "$app/stores";
  import * as Tabs from "$lib/components/ui/tabs";
  const workType = $page.params.workType;
</script>

<!-- <p>{workType}</p> -->

<Tabs.Root value={workType} class="w-[400px]">
  <Tabs.List>
    <Tabs.Trigger value="classwork">Classwork</Tabs.Trigger>
    <Tabs.Trigger value="homework">Homework</Tabs.Trigger>
    <Tabs.Trigger value="language">Language</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="classwork">
    Make changes to your account here.
  </Tabs.Content>
  <Tabs.Content value="homework">Change your password here.</Tabs.Content>
  <Tabs.Content value="language">
    Make changes to your account here.
  </Tabs.Content>
</Tabs.Root>
