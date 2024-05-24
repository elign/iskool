<script lang="ts">
  import Home from "lucide-svelte/icons/home";
  import LineChart from "lucide-svelte/icons/line-chart";
  import Package from "lucide-svelte/icons/package";
  import Package2 from "lucide-svelte/icons/package-2";
  import PanelLeft from "lucide-svelte/icons/panel-left";
  import Search from "lucide-svelte/icons/search";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";
  import UsersRound from "lucide-svelte/icons/users-round";

  import BookOpenCheck from "lucide-svelte/icons/book-open-check";
  import ClipBoardPen from "lucide-svelte/icons/clipboard-pen";
  import CalendarCheck2 from "lucide-svelte/icons/calendar-check-2";
  import CandleStickChart from "lucide-svelte/icons/candlestick-chart";
  import UserPlus from "lucide-svelte/icons/user-plus";

  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";

  import { page } from "$app/stores";
  import { derived } from "svelte/store";
  import type { ComponentType } from "svelte";
  import type { Icon, IconNode } from "lucide-svelte";

  console.log($page.url.pathname);
  // Create a derived store for breadcrumbs
  const breadcrumbs = derived(page, ($page) => {
    const parts = $page.url.pathname
      .split("/")
      .filter((part) => part.length > 0);
    return parts.map((part, index) => {
      const path = `/${parts.slice(0, index + 1).join("/")}`;
      return { name: part, path };
    });
  });

  type MenuItem = {
    name: string;
    href: string;
    icon: ComponentType<Icon>;
  };

  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      href: "",
      icon: Home,
    },
    {
      name: "Homework",
      href: "/homework",
      icon: BookOpenCheck,
    },
    {
      name: "Notices",
      href: "/notices",
      icon: ClipBoardPen,
    },
    {
      name: "Monthly Planner",
      href: "/monthly-planner",
      icon: CalendarCheck2,
    },
    {
      name: "Test Results",
      href: "/test-results",
      icon: CandleStickChart,
    },
    {
      name: "Students",
      href: "/students",
      icon: UserPlus,
    },
  ];
</script>

<div class="flex min-h-screen w-full flex-col bg-muted/40">
  <aside
    class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex"
  >
    <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
      <img src="/images/logo.png" />
      <span class="sr-only">Acme Inc</span>

      {#each menuItems as item}
        <Tooltip.Root>
          <Tooltip.Trigger asChild let:builder>
            <a
              href={"/dashboard" + item.href}
              class={$page.url.pathname === "/dashboard" + item.href
                ? "group flex h-16 w-16 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                : "flex h-16 w-16 items-center justify-center rounded-lg hover:bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"}
              use:builder.action
              {...builder}
            >
              <svelte:component
                this={item.icon}
                class="h-5 w-5 transition-all group-hover:scale-110"
              />
              <span class="sr-only">{item.name}</span>
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">{item.name}</Tooltip.Content>
        </Tooltip.Root>
      {/each}
    </nav>
  </aside>
  <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <header
      class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
    >
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            size="icon"
            variant="outline"
            class="sm:hidden"
          >
            <PanelLeft class="h-5 w-5" />
            <span class="sr-only">Toggle Menu</span>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left" class="sm:max-w-xs">
          <nav class="grid gap-6 text-lg font-medium">
            <img src="/images/logo.png" class="h-10" />
            <span class="sr-only">Acme Inc</span>
            {#each menuItems as item}
              <a
                href={"/dashboard" + item.href}
                class={$page.url.pathname === "/dashboard" + item.href
                  ? "flex items-center gap-4 px-2.5 text-white bg-primary rounded-md"
                  : "flex items-center gap-4 px-2.5 text-muted-foreground"}
              >
                <svelte:component
                  this={item.icon}
                  class="h-5 w-5 transition-all group-hover:scale-110"
                />
                {item.name}
              </a>
            {/each}
          </nav>
        </Sheet.Content>
      </Sheet.Root>
      <Breadcrumb.Root class="hidden md:flex">
        <Breadcrumb.List>
          {#each $breadcrumbs as breadcrumb}
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href={breadcrumb.path}
                >{breadcrumb.name.toUpperCase()}</Breadcrumb.Link
              >
            </Breadcrumb.Item>
          {/each}
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <div class="relative ml-auto flex-1 md:grow-0">
        <Search
          class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
        />
        <Input
          type="search"
          placeholder="Search..."
          class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            variant="outline"
            size="icon"
            class="overflow-hidden rounded-full"
            builders={[builder]}
          >
            <!-- <img
              src="/images/placeholder-user.jpg"
              width={36}
              height={36}
              alt="Avatar"
              class="overflow-hidden rounded-full"
            /> -->
            U
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header>
    <slot></slot>
  </div>
</div>
