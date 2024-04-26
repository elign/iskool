<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import AssignmentButton from "./_sections/assignment-button.svelte";
  import { School, Home, BookA, ArrowRight } from "lucide-svelte";
  import NotificationButton from "./_sections/notification-button.svelte";
</script>

<main>
  <h3 class="text-2xl font-medium text-primary">Hello Garvit 👋</h3>
  <p>Welcome to Shemford online school.</p>

  <section
    class="bg-[url('/images/cover.jpg')] bg-cover w-full h-44 mt-10 rounded-lg flex items-center"
  >
    <div
      class="bg-gradient-to-r from-primary to-transparent h-full w-full rounded-lg p-8"
    >
      <h2 class="text-white text-xl font-semibold pb-2 w-5/12">
        Annual Tech Fest 2024
      </h2>
      <Button size="sm" variant="secondary" class=" shadow-md">Know More</Button
      >
    </div>
  </section>

  <section class="flex justify-between mt-16">
    <AssignmentButton
      title="Classwork"
      url="/protected/assignments/classwork"
      icon={School}
    />
    <AssignmentButton
      title="Homework"
      url="/protected/assignments/homework"
      icon={Home}
    />
    <AssignmentButton
      title="Language"
      url="/protected/assignments/language"
      icon={BookA}
    />
  </section>

  <section class="mt-6">
    <h2>Notifications</h2>
    <div class="mt-4 grid grid-cols-2 gap-2">
      <NotificationButton
        title="Monthly Calendar"
        url="/protected/monthly-planner"
      />
      <NotificationButton
        title="Circular & Notices"
        url="/protected/notice-board"
      />
      <NotificationButton
        title="Club Activities"
        url="/protected/club-activities"
      />
      <NotificationButton title="Others" />
    </div>
  </section>
  <section class="mt-8 grid">
    <Button size="lg" class="flex justify-between" href="/protected/class-test"
      >Tests & Results <ArrowRight /></Button
    >
  </section>
</main>
