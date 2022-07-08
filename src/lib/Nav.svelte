<div class="navbar bg-base-100">
  <div class="container  mx-auto ">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl normal-case" href="/my">Dashboard</a>
    </div>
    {#if 1 === 0}
      <div class="flex-none">
        <div class="dropdown-end dropdown">
          <button tabindex="0" class="avatar btn btn-ghost btn-circle">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </button>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a class="" href="/schools/students">Students</a>
            </li>
            <li>
              <a class="" href="/schools/subjects">Subjects</a>
            </li>
            <li>
              <a class="" href="/schools/class">Class</a>
            </li>
            <li>
              <a class="" href="/schools/section">Section</a>
            </li>
            <li>
              <a class="" href="/schools/tests"> Setup Tests </a>
            </li>
            <!-- <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li> -->
            <!-- <li><a>Settings</a></li> -->
            <li><a href="/">Logout</a></li>
          </ul>
        </div>
      </div>
    {:else}
      <a class="btn btn-ghost normal-case" href="/auth/otp-login">Login</a>
    {/if}
  </div>
</div>
