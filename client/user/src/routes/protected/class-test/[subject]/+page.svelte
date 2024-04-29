<script>
  import { page } from "$app/stores";
  const slug = $page.params.subject;
  import * as Table from "$lib/components/ui/table";
</script>

Subject {slug}

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head>Date</Table.Head>
      <Table.Head>Marks</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell class="font-medium">23 Jan</Table.Cell>
      <Table.Cell>10/10</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell class="font-medium">23 Jan</Table.Cell>
      <Table.Cell>10/10</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
