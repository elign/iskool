<script>
    export let event;
  </script>
  
  <div class="bg-white rounded-md shadow-md p-4 flex flex-col space-y-2">
    <h3 class="text-lg font-medium text-gray-800">{event.eventName}</h3>
    <p class="text-gray-600">{event.date}</p>
    <p class="text-gray-600 truncate overflow-hidden">{event.description}</p>
    <span class="text-sm font-medium text-blue-500">{event.eventType}</span>
  </div>
  
  <style>
    /* Style for truncated description (optional) */
    .truncate {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  </style>
  