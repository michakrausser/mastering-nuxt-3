<template>
  <div class="prose w-full max-w-2xl h-9">
    <h1 class="text-2xl font-bold">Log in to {{ course.title }}</h1>
    <button
        class="bg-blue-500 text-white font-bold mt-6 py-2 p-4 rounded"
        @click="login"
    >
      Log in with Github
    </button>
  </div>
</template>

<script setup lang="ts">
const course = await useCourse()
const { query } = useRoute()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

watchEffect( async () => {
  if ( user.value ) {
    await navigateTo( query.redirectTo as string, {
      replace: true
    })
  }
})

const login = async () => {
  const redirectTo = `${ window.location.origin }${ query.redirectTo }`
  const { error } = await supabase.auth.signInWithOAuth( {
    provider: 'github',
    options: { redirectTo }
  })
  if ( error ) {
    console.error( error )
  }
}
</script>
