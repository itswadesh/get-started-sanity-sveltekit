<script>
  export let data
</script>

<article>
  <main>
    <div class="flex items-center justify-between">
      <h1 class="mb-3 text-3xl font-bold">Students</h1>
      <a
        href="/"
        class="btn btn-ghost btn-sm mb-2 gap-2 normal-case md:btn-md lg:gap-3"
        ><svg
          class="h-6 w-6 fill-current md:h-8 md:w-8"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          /></svg
        >
        <div class="flex flex-col items-start">
          <span
            class="hidden text-xs font-normal text-base-content/50 md:block"
          >
            Prev
          </span>
          <span>Dashboard</span>
        </div>
      </a>
    </div>
    {#await data}
      <p>...waiting</p>
    {:then data}
      <!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
      {#if data}
        <div class="overflow-hidden ">
          <!-- {JSON.stringify(data, null, 2)} -->
          <div class="border-t border-gray-200">
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th>Reg No</th>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>School</th>
                  </tr>
                </thead>
                <tbody>
                  {#each data as student, ix}
                    <tr>
                      <td>{student.regNo}</td>
                      <td>{student.rollNo}</td>
                      <td>{student.name}</td>
                      <td>{student.phone}</td>
                      <td>{student.address}</td>
                      <td>{student.school?.name}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      {:else}
        <pre> No school found </pre>
      {/if}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </main>
</article>
