<script lang="ts">
  import { toast } from '$lib/util'
  import { goto } from '$app/navigation'
  import Select from 'svelte-select'
  import { sanity } from '../../../lib/config'
  export let exams, subjects, teachers, classes, sections
  let test: any = {}
  let formChanged = false

  async function submit() {
    const { date } = test
    let { exam, subject, classs, section, totalMarks } = test
    exam = exam?._id || exam
    subject = subject?._id || subject
    classs = classs?._id || classs
    section = section?._id || section
    totalMarks = +totalMarks
    if (!date || !exam || !subject || !classs || !section || !totalMarks) {
      toast('Please provide all information', 'error')
      return
    }
    const doc = {
      _type: 'test',
      exam,
      subject,
      classs,
      section,
      totalMarks,
    }
    const res = await sanity.create(doc)
    goto(`/schools/tests`)
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', res)
  }
</script>

<div class="flex justify-between">
  <h1 class="text-3xl font-bold">Create New Test</h1>
  <a
    href="/schools/tests"
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
      <span class="hidden text-xs font-normal text-base-content/50 md:block"
        >Prev</span
      > <span>Menu</span>
    </div>
  </a>
</div>
<form on:submit|preventDefault={submit}>
  <div class="grid grid-cols-3 gap-2">
    <div>
      Date <input
        type="date"
        bind:value={test.date}
        placeholder="Date"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div>
      Total Marks
      <input
        type="number"
        bind:value={test.totalMarks}
        placeholder="Total Marks"
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div>
      Exam: <Select
        items={exams}
        bind:value={test.exam}
        optionIdentifier="_id"
        labelIdentifier="name"
        on:select={() => (formChanged = true)}
      />
    </div>
    <div>
      Subject: <Select
        items={subjects}
        bind:value={test.subject}
        optionIdentifier="_id"
        labelIdentifier="name"
        on:select={() => (formChanged = true)}
      />
    </div>
    <div>
      Invigilator <Select
        items={teachers}
        bind:value={test.invigilator}
        optionIdentifier="_id"
        labelIdentifier="name"
        on:select={() => (formChanged = true)}
      />
    </div>
    <div>
      Moderator <Select
        items={teachers}
        bind:value={test.moderator}
        optionIdentifier="_id"
        labelIdentifier="name"
        on:select={() => (formChanged = true)}
      />
    </div>
    <div>
      Class <Select
        items={classes}
        bind:value={test.classs}
        optionIdentifier="_id"
        labelIdentifier="name"
        on:select={() => (formChanged = true)}
      />
    </div>
    <div>
      Section <Select
        items={sections}
        bind:value={test.section}
        optionIdentifier="_id"
        labelIdentifier="name"
        on:select={() => (formChanged = true)}
      />
    </div>
  </div>
  <div>
    <button class="btn mt-4" type="submit">Save Test</button>
  </div>
</form>
