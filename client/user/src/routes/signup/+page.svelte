<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
</script>

<Card.Root class="mx-auto max-w-sm bg-opacity-30">
  <Card.Header>
    <Card.Title class="text-xl">Sign Up</Card.Title>
    <Card.Description
      >Click on the button to create an account</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <div class="grid gap-4">
      <Button variant="outline" class="w-full">Sign up with Google</Button>
    </div>
    <div class="mt-4 text-center text-sm">
      Already have an account?
      <a href="/login" class="underline"> Sign in </a>
    </div>
  </Card.Content>
</Card.Root>
