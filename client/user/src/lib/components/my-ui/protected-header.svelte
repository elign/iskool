<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<header class="mb-6 flex justify-between">
  <span class="text-primary text-2xl font-semibold">iskool</span>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Billing</DropdownMenu.Item>
        <DropdownMenu.Item>Team</DropdownMenu.Item>
        <DropdownMenu.Item>Subscription</DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</header>
