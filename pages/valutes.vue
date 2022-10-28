<template>
  <main
    class='xl:max-w-screen-xl md:max-w-[1170px] sm:max-w-[707px] max-w-[360px] mx-auto xl:my-8 md:my-[36px] my-[20px] sm:px-0 px-[15px]'>
    <h1 class='xl:text-34 sm:text-26 text-20 font-medium text-primary'>Курс рубля</h1>
    <div class='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[30px] gap-[20px] md:mt-[40px] mt-[20px]'>
      <ValuteItem v-for='(item, index) in valutes' :key='item.ID' :valute='item' :int-id='index'></ValuteItem>
    </div>
    <div class='xl:text-30 sm:text-24 text-18 font-medium text-primary'>
      Идет загрузка, подождите...
    </div>
    <div
      class='rounded-2xl bg-gray xl:mt-[30px] md:mt-[48px] sm:mt-[30px] mt-[16px] xl:px-[31px] sm:px-[25px] px-[28px] xl:pt-[36px] md:pt-[40px] sm:pt-[30px] pt-[32px] md:pb-[41px] sm:pb-[30px] pb-[32px] flex xl:gap-[33px] md:gap-[20px] sm:gap-[25px] gap-[30px] sm:flex-row flex-col sm:items-center'>
      <div>
        <img :src='require(`@/assets/svg/info_blue.svg`)' alt='info'>
      </div>
      <div class='font-bold md:text-20 sm:text-18 text-16 text-primary'>
        Телефон: <a href='tel:88008889028'>8 (800) 888-90-28</a>, email: <a href='mailto:info@example.ru'>info@example.ru</a>.
      </div>
    </div>
  </main>
</template>

<script>
import ValuteItem from '~/components/ValuteItem'

export default {
  name: 'course',
  components: { ValuteItem },
  computed: {
    valutes() {
      return this.$store.state.mainStore.valutes
    }
  }
}
</script>
