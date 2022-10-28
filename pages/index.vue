<template>
  <main class='xl:max-w-screen-xl md:max-w-[1170px] sm:max-w-[707px] max-w-[360px] mx-auto xl:my-8 md:my-[36px] my-[20px]'>
    <h1 class='xl:text-34 md:text-26 sm:text-26 text-20 font-medium text-primary sm:px-0 px-[15px]'>Валютный калькулятор</h1>
    <div class='flex sm:flex-row flex-col sm:gap-9 gap-[17px] xl:mt-10 md:mt-[31px] sm:mt-[20px] mt-[24px] px-[15px]'>
      <div class='basis-2/4 grow shrink flex flex-col xl:gap-8 md:gap-5 sm:gap-5 gap-[19px]'>
        <CalculatorInput v-for='item in inputs' :key='item.id' :item='item'></CalculatorInput>
        <div class='flex gap-[33px] bg-secondary sm:px-[31px] px-[26px] xl:pt-[36px] md:pt-[28px] sm:pt-[34px] pt-[20px] xl:pb-[41px] md:pb-[34px] sm:pb-[34px] pb-[20px] rounded-2xl items-center'>
          <div>
            <img :src='require(`@/assets/svg/info_red.svg`)' alt='info'>
          </div>
          <div class='font-bold xl:text-24 md:text-20 sm:text-16 text-14 text-primary'>
            Итого: {{ total }}
          </div>
        </div>
      </div>
      <div class='basis-2/4 grow shrink bg-secondary rounded-2xl xl:px-[30px] md:px-[24px] px-[15px] xl:py-[40px] md:py-[32px] sm:py-[22px] py-[26px]'>
        <h2 class='text-primary xl:text-18 md:text-15 text-13 font-medium uppercase xl:mb-[50px] md:mb-[40px] sm:mb-[25px] mb-[30px]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, itaque quam
        </h2>
        <div class='flex md:gap-[30px] sm:gap-[20px] gap-[30px] sm:flex-row flex-col'>
          <div class='md:basis-2/4 sm:basis-2/3 grow shrink'>
            <ul class='flex flex-col xl:gap-[30px] md:gap-[25px] text-14'>
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
              <li>Point 4</li>
              <li>Point 5</li>
              <li>Point 6</li>
            </ul>
          </div>
          <div class='md:basis-2/4 sm:basis-1/3 grow shrink grid md:grid-cols-2 sm:grid-cols-1 grid-cols-4 md:gap-x-[15px] gap-x-[7px] gap-y-[9px]'>
            <div>
              <img class='md:rounded-none rounded-tr-[15px] rounded-bl-[15px]' :src='require(`@/assets/images/img-1.jpg`)' alt='image'>
            </div>
            <div>
              <img class='md:rounded-tr-[50px] rounded-tl-[15px] rounded-br-[15px]' :src='require(`@/assets/images/img-2.jpg`)' alt='image'>
            </div>
            <div>
              <img class='md:rounded-bl-[50px] sm:rounded-tl-[15px] sm:rounded-br-[15px] rounded-tl-0 rounded-br-0 rounded-tr-[15px] rounded-bl-[15px]' :src='require(`@/assets/images/img-3.jpg`)' alt='image'>
            </div>
            <div>
              <img class='md:rounded-none rounded-tl-[15px] rounded-br-[15px]' :src='require(`@/assets/images/img-4.png`)' alt='image'>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='bg-secondary sm:rounded-2xl xl:mt-[40px] md:mt-[24px] sm:mt-[20px] mt-[17px] xl:px-[51px] md:px-[33px] sm:px-[20px] px-[15px] xl:py-[65px] md:py-[55px] sm:py-[32px] py-[26px] flex sm:flex-row flex-col sm:gap-0 gap-[29px] text-[#093078] sm:text-left text-center'>
      <div class='basis-[57%]'>
        <div class='xl:text-34 md:text-[29px] sm:text-18 text-16 sm:font-medium font-bold'>Нужна помощь?</div>
        <div class='xl:text-34 md:text-[29px] sm:text-18 text-16 sm:font-medium font-bold xl:mb-[30px] md:mb-[25px] sm:mb-[16px] mb-[20]'>Мы поможем! Просто свяжитесь с нами.</div>
        <div class='text-[#404456] md:text-13 sm:text-10 text-12 font-normal'>Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.</div>
      </div>
      <div class='basis-[43%] text-center'>
        <div>
          <a href='tel:88008889028' class='xl:text-[50px] md:text-[40px] sm:text-24  text-26 font-medium'>8 (800) 888-90-28</a>
        </div>
        <div class='md:mt-[36px] mt-[16px] md:mb-[20px] sm:mb-[5px] mb-[8px] text-[#404456] xl:text-24 md:text-18 text-12 uppercase'>или</div>
        <div>
          <a href='mailto:info@example.ru' class='xl:text-34 md:text-24 sm:text-20 text-18'>info@example.ru</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CalculatorInput from '../components/CalculatorInput'
export default {
  name: 'index',
  components: { CalculatorInput },
  data: () => ({
    inputs: [
      {
        id: 1,
        title: 'Валюта 1',
        placeholder: 'Введите название или код'
      },
      {
        id: 2,
        title: 'Валюта 2',
        placeholder: 'Введите название или код'
      },
      {
        id: 3,
        title: 'Количество',
        placeholder: 'Введите число'
      }
    ]
  }),
  computed: {
    total() {
      return this.$store.getters['mainStore/total']
    }
  }
}
</script>
