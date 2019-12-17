import { mount } from '@vue/test-utils'
import Fooo from '../src/Fooo.vue'

describe('Fooo', () => {
  it('should not render qux', async () => {
    const wrapper = mount(Fooo)
    wrapper.setData({
      show: false
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('.v-leave').exists()).toBeFalsy()
    expect(wrapper.text()).not.toMatch(/qux/)
    expect(wrapper.text()).toMatch(/baz/)
  })
})
