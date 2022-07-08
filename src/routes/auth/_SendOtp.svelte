<script>
  import TextboxFloating from '$lib/ui/TextboxFloating.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let phone, loading
</script>

<div>
  <h6 class="mb-3 text-center text-gray-600">Please Enter Mobile Number</h6>

  <form class="mb-8" on:submit|preventDefault={() => dispatch('send', phone)}>
    <TextboxFloating
      type="tel"
      label="Mobile Number"
      class="mb-1 w-full"
      required
      bind:value={phone}
    />

    <p class="mb-5 text-sm font-light text-gray-500">Ex. +918XXXXXXXX</p>

    <button
      class="btn btn-primary mx-auto w-full max-w-sm {loading ? 'loading' : ''}"
      type="submit"
    >
      SEND OTP
    </button>
  </form>
</div>
