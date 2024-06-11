<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { setUser } from "$lib/stores/user";
  import { toast } from "svelte-sonner";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { userStore } from "$lib/stores/user";
  import { get } from 'svelte/store';
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  let email: string, password: string;

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const response = await fetch(`${VITE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role: "teacher" }),
    });

    if (response.ok) {
      const user = await response.json();
      console.log("Signin successful!", user);
      setUser({
        email: user.user.email,
        role: user.user.role,
        userId: user.user.userId,
      });
      toast.success("Signin successful!");
      goto("/dashboard"); // Redirect to login page
    } else {
      const error = await response.text();
      console.error("Signin error:", error);
      toast.error(error.split(":")[1].split('"')[1]);
      // Handle errors appropriately (e.g., display error message to user)
    }
  }

  onMount(() => {
    const user = get(userStore);
    if (user) {
      // Redirect to dashboard if already logged in
      goto("/dashboard");
    }
  });
</script>

<div class="flex items-center justify-center h-[70vh]">
  <Card.Root class="mx-auto max-w-sm shadow-md">
    <Card.Header>
      <Card.Title class="text-2xl text-primary">Teacher Login</Card.Title>
      <Card.Description
        >Enter your email below to login to your account</Card.Description
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
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <!-- <a href="##" class="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </a> -->
          </div>
          <Input id="password" type="password" bind:value={password} required />
        </div>
        <Button type="submit" class="w-full" on:click={handleSubmit}
          >Login</Button
        >
        <!-- <Button variant="outline" class="w-full">Login with Google</Button> -->
      </div>
      <!-- <div class="mt-4 text-center text-sm">
              Don&apos;t have an account?
              <a href="##" class="underline">Sign up</a>
            </div> -->
    </Card.Content>
  </Card.Root>
</div>
