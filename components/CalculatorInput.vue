<template>
  <div class='flex flex-col gap-4 relative'>
    <label class='xl:text-16 md:text-14 sm:text-14 text-dark font-medium' for='coin1'>{{ item.title }}</label>
    <input class='xl:text-14 md:text-12 sm:text-12 border border-solid border-[#dfdfdf] rounded-[5px] p-5' type='text'
           id='coin1'
           :placeholder='item.placeholder' v-model='inputValue' @input='validateInputValue'>
    <div v-if='inputValue.length > 0 && item.id != 3 && showed'
         class='absolute top-full rounded-[5px] p-5 bg-gray w-full h-[100px] overflow-auto z-30'>
      <div class='bg-gray transition hover:bg-secondary cursor-pointer' v-for='elem in searchResult' :key='elem.ID' @click='fetchInputChoose(elem)'>
        {{ elem.CharCode }} - {{ elem.Name }} - Курс: {{ elem.Value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorInput',
  data: () => ({
    inputValue: '',
    showed: false
  }),
  props: {
    item: Object
  },
  computed: {
    searchResult() {
      if (this.inputValue.length > 0) {
        switch (this.item.id) {
          case 1:
            let boxValute2 = this.$store.state.mainStore.valute2
            if (boxValute2 != null) {
              return this.filteredValutes([...this.$store.state.mainStore.valutes], this.inputValue, boxValute2.ID)
            } else {
              return this.filteredValutes([...this.$store.state.mainStore.valutes], this.inputValue)
            }
            break
          case 2:
            let boxValute1 = this.$store.state.mainStore.valute1
            if (boxValute1 != null) {
              return this.filteredValutes([...this.$store.state.mainStore.valutes], this.inputValue, boxValute1.ID)
            } else {
              return this.filteredValutes([...this.$store.state.mainStore.valutes], this.inputValue)
            }
            break
          default:
            return []
            break
        }
      }
    }
  },
  methods: {
    fetchInputChoose(choose) {
      this.showed = false
      this.inputValue = choose.Name
      switch (this.item.id) {
        case 1:
          this.$store.commit('mainStore/SET_VALUTE1', choose)
          break
        case 2:
          this.$store.commit('mainStore/SET_VALUTE2', choose)
          break
      }
    },
    filteredValutes(array, inputValue, id = '') {
      return array.filter(elem => {
        return elem.CharCode.toLowerCase().indexOf(inputValue.toLowerCase()) != -1 || elem.Name.toLowerCase().indexOf(inputValue.toLowerCase()) != -1 && elem.ID != id
      })
    },
    validateInputValue() {
      this.showed = true
      if (this.item.id == 1 || this.item.id == 2) {
        this.inputValue = this.inputValue.replace(/[0-9]/, '')
      } else {
        this.inputValue = this.inputValue.replace(/\W/, '').replace(/[A-Za-z]/, '')
        this.$store.commit('mainStore/SET_AMOUNT', this.inputValue)
      }
    }
  }
}
</script>