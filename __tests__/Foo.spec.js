import { mount } from '@vue/test-utils'
import Foo from '../src/Foo.vue'

const transitionStub = () => ({
  render: function (h) {
    return this.$options._renderChildren
  }
})

describe('Foo', () => {
  it('should not render qux', async () => {
    const wrapper = mount(Foo)
    wrapper.setData({
      show: false
    })

    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.v-leave').exists()).toBeFalsy()
    expect(wrapper.text()).not.toMatch(/qux/)
  })

  it('should not render qux but this time it works correctly', async () => {
    const wrapper = mount(Foo, {
      stubs: {
        transition: transitionStub()
      }
    })
    wrapper.setData({
      show: false
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.v-leave').exists()).toBeFalsy()
    expect(wrapper.text()).not.toMatch(/qux/)
  })
})
