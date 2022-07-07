<script lang="ts">
  import '../app.css'
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
  import { ToastContainer, FlatToast } from 'svelte-toasts'
</script>

<div class="flex min-h-screen flex-col bg-gray-50">
  <Nav />
  <div class="container my-4 mx-auto flex-1">
    <slot />
  </div>
  <Footer />
</div>

<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>
