import { createPopper, type VirtualElement } from '@popperjs/core'

export const useTemplateStore = defineStore('template', () => {

  const activateToolTip = ref<number>(1)

  interface NavBarMenuInterface {
    title: string,
    routePath: string,
    hasDropDown?: Boolean
    dropdownItems?: any[]
    relatedRoutes?: string[]
  }


  const navBarMenus: NavBarMenuInterface[] = [

    {
      title: 'Home',
      routePath: '/',
    },
    {
      title: 'About',
      routePath: '/about',
      hasDropDown: true,
      dropdownItems: [
        { title: "Who We Are", routePath: '/about' },
        { title: "Advisory Board", routePath: '/advisory-board' },
      ],
      relatedRoutes: [
        '/about',
        '/advisory-board'
      ]
    },
    {
      title: 'Recognition',
      routePath: '/recognition'
    },
    {
      title: 'Membership',
      routePath: '/membership'
    },
    {
      title: 'Resources',
      routePath: '/mentorship',
      hasDropDown: true,
      dropdownItems: [
        { title: "Mentorship", routePath: '/mentorship' },
        { title: "Facilitators", routePath: '/facilitators' },
      ],
      relatedRoutes: [
        '/mentorship',
        '/facilitators'
      ]
    },
    {
      title: 'Blog',
      routePath: '/#landing-blog'
    },
    {
      title: 'Contact Us',
      routePath: '/contact-us'
    },
  ]


  interface AccountMenuInterface {
    title: string,
    routePath: string,
    hasDropDown?: Boolean
    dropdownItems?: any[]
    relatedRoutes?: string[]
  }


  const accountMenus: AccountMenuInterface[] = [

    {
      title: 'Dashboard',
      routePath: '/account/dashboard',
    },
    {
      title: 'Learning Center',
      routePath: '/account/learning-center',
      relatedRoutes: [
        '/account/cart',
        '/account/cart/checkout',
        '/account/my-learning',
        '/account/my-learning/details',
      ]
    },
    {
      title: 'Forum',
      routePath: '/account/forum',
      relatedRoutes: [
        '/account/forum/guest',
      ]
    },

    {
      title: 'Members',
      routePath: '/account/members',
    },

    {
      title: 'events',
      routePath: '/account/events',
    }
  ]


  const themeColors = reactive({
    base: '#293567',
    accountBg: '#F5F7FD'
  })


  const vueSelectPositioning = (dropdownList: HTMLElement, component: { $refs: { toggle: Element | VirtualElement; }; $el: { classList: { toggle: (arg0: string, arg1: boolean) => void; }; }; }, { width }: any) => {
    dropdownList.style.width = width

    const calculatePlacement = () => {
      const rect = component.$refs.toggle.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const spaceAbove = rect.top
      const spaceBelow = viewportHeight - rect.bottom

      return spaceBelow < spaceAbove ? 'top' : 'bottom'
    }

    const placement = calculatePlacement()

    const popper = createPopper(component.$refs.toggle, dropdownList, {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -1],
          },
        },
        {
          name: 'toggleClass',
          enabled: true,
          phase: 'write',
          fn({ state }) {
            component.$el.classList.toggle(
              'drop-up',
              state.placement === 'top'
            )
          },
        },
      ],
    })

    return () => popper.destroy()
  }


  return { navBarMenus, accountMenus, themeColors, activateToolTip, vueSelectPositioning }
})
