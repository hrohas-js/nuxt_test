<template>
  <header class="bg-[#f8f8f8]">
    <div class="xl:max-w-screen-xl md:max-w-[1170px] sm:max-w-[707px] max-w-[294px] mx-auto py-4 xl:px-0 px-[15px]">
      <nav class="flex gap-8">
        <NuxtLink class="text-12 text-[#666666] hover:text-[#343434] transition" active-class="text-[#343434]" to="/">Калькулятор</NuxtLink>
        <NuxtLink class="text-12 text-[#666666] hover:text-[#343434] transition" active-class="text-[#343434]" to="/valutes">Курс рубля</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop'
}
</script>
