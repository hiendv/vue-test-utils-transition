import { mount } from '@vue/test-utils'
import Bar from '../src/Bar.vue'

describe('Bar', () => {
  it('should work', async () => {
    const wrapper = mount(Bar)
    wrapper.setData({
      show: false
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.text()).not.toMatch(/qux/)

    wrapper.setData({
      show: true
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toMatch(/qux/)
  })

  it('should work with mocks', async () => {
    const beforeEnter = jest.fn()
    const enter = jest.fn((el, done) => {
      done()
    })
    const afterEnter = jest.fn()
    const beforeLeave = jest.fn()
    const leave = jest.fn((el, done) => {
      done()
    })
    const afterLeave = jest.fn()

    const wrapper = mount(Bar, {
      propsData: {
        beforeEnter,
        enter,
        afterEnter,
        beforeLeave,
        leave,
        afterLeave
      }
    })

    wrapper.setData({
      show: false
    })
    // beforeLeave, leave, afterLeave
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).not.toMatch(/qux/)

    wrapper.setData({
      show: true
    })
    // beforeEnter, enter, afterEnter
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toMatch(/qux/)

    wrapper.setData({
      show: false
    })
    // beforeLeave, leave, afterLeave
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).not.toMatch(/qux/)

    expect(beforeLeave.mock.calls.length).toBe(2)
    expect(leave.mock.calls.length).toBe(2)
    expect(afterLeave.mock.calls.length).toBe(2)
    expect(beforeEnter.mock.calls.length).toBe(1)
    expect(enter.mock.calls.length).toBe(1)
    expect(afterEnter.mock.calls.length).toBe(1)
  })
})
