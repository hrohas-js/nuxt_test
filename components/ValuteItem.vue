<template>
  <div
    class='md:basis-1/3 sm:basis-2/4 basis-full rounded-2xl bg-gray xl:px-[30px] md:px-[24px] sm:px-[40px] px-[24px] sm:pt-[39px] pt-[26px] sm:pb-[48px] pb-[40px] cursor-pointer transition-all hover:drop-shadow-[0px_2px_10px_rgba(0,0,0,0.15)]'>
    <div class='xl:mb-[37px] md:mb-[33px] sm:mb-[37px] mb-[24px]'>
      <img v-if='(intId + 1) % 2 == 0' :src='require(`@/assets/svg/money_red.svg`)' alt='money'>
      <img v-else :src='require(`@/assets/svg/money_blue.svg`)' alt='money'>
    </div>
    <div class='mb-[30px] md:text-20 sm:text-18 text-17 text-primary font-bold'>{{ valute.CharCode }}</div>
    <div class='sm:mb-[40px] mb-[29px] xl:text-16 md:text-15 text-14 text-[#111111]'>{{ valute.Name }}</div>
    <ul class='flex flex-col sm:gap-[25px] gap-[18px] font-medium xl:text-16 md:text-15 text-14 text-[#1c1c1c]'>
      <li>Номинал: {{ valute.Nominal }}</li>
      <li>Курс: {{ valute.Value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ValuteItem',
  props: {
    valute: Object,
    intId: Number
  }
}
</script>