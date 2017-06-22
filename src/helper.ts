import Component, { createDecorator } from 'vue-class-component'

export default function Getter (getterType: string) {
  return createDecorator((options, key) => {
    if (!options.computed) options.computed = {}
    options.computed[key] = function () {
      return this.$store.getters[getterType]
    }
  })
}