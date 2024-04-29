<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { UserCircle } from "lucide-svelte";
</script>

<header class="mb-6 flex justify-between items-center">
  <a href="/protected" class="text-primary text-2xl font-semibold">iskool</a>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger
      ><UserCircle class="text-primary" size="30" /></DropdownMenu.Trigger
    >
    <DropdownMenu.Content side="left">
      <DropdownMenu.Group>
        <DropdownMenu.Label>Profile</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item href="/protected/add-student"
          >Add Student</DropdownMenu.Item
        >
        <DropdownMenu.Item href="/protected/student-care"
          >Student Care</DropdownMenu.Item
        >
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</header>
