<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
</script>

<Card.Root class="mx-auto max-w-sm bg-opacity-30">
  <Card.Header>
    <Card.Title class="text-xl">Login</Card.Title>
    <Card.Description
      >Click on the button to login to your account</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <div class="grid gap-4">
      <Button variant="outline" class="w-full">Login with Google</Button>
    </div>
    <div class="mt-4 text-center text-sm">
      Don&apos;t have an account?
      <a href="/signup" class="underline">Sign up</a>
    </div>
  </Card.Content>
</Card.Root>
