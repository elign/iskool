<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { onMount } from "svelte";
  import { setUser } from "$lib/stores/user";
  import { toast } from "svelte-sonner";
  import { goto } from "$app/navigation";
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  let email: string, password: string;

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const response = await fetch(`${VITE_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role: "teacher" }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log("Signup successful!", user);
      setUser({
        email: user.newUser.email,
        role: user.newUser.role,
        userId: user.newUser.userId,
      });
      toast.success("Signup successful!");
      goto("/dashboard"); // Redirect to login page
    } else {
      const error = await response.text();
      console.error("Signup error:", error);
      toast.error(error.split(":")[1].split('"')[1]);
      // Handle errors appropriately (e.g., display error message to user)
    }
  }
</script>

<div class="flex items-center justify-center min-h-[70vh]">
  <Card.Root class="mx-auto max-w-md shadow-md">
    <Card.Header>
      <Card.Title class="text-2xl text-primary">Sign Up</Card.Title>
      <Card.Description
        >Enter your information to create an account</Card.Description
      >
    </Card.Header>
    <Card.Content>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            bind:value={email}
          />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" bind:value={password} />
        </div>
        <Button on:click={handleSubmit} type="submit" class="w-full"
          >Create an account</Button
        >
        <!-- <Button variant="outline" class="w-full">Sign up with GitHub</Button> -->
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <a href="/" class="underline"> Sign in </a>
      </div>
    </Card.Content>
  </Card.Root>
</div>
