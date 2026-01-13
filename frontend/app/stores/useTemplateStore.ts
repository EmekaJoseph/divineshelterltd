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


  interface AccountMenuInterface {
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
      title: 'About Us',
      routePath: '/about-us',
    },
    {
      title: 'Services',
      routePath: '/',
      hasDropDown: true,
      dropdownItems: [
        { title: "Building Construction", routePath: '/services/building-construction' },
        { title: "Real Estate and Property Sales", routePath: '/services/real-estates' },
        { title: "Project Management", routePath: '/services/project-management' },
        { title: "Training", routePath: '/services/training' },
        { title: "Hydraform / Alternative Building Systems", routePath: '/services/hydraform-alternative-building-systems' },
      ],
      relatedRoutes: [
        '/about',
        '/advisory-board'
      ]
    },
    {
      title: 'Building Materials',
      routePath: '/building-materials'
    },

    {
      title: 'Projects',
      routePath: '/projects'
    },

    {
      title: 'Request a Quote',
      routePath: '/request-a-quote',
    },
    {
      title: 'Blog',
      routePath: '/blog'
    },
    {
      title: 'Contact Us',
      routePath: '/contact-us'
    },
  ]


  const getRelatedRoutes = (dropdownItems: any[]) => {
    return dropdownItems.map((x: any) => x.routePath)
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


  return {
    navBarMenus,
    accountMenus,
    themeColors,
    activateToolTip,
    vueSelectPositioning,
    getRelatedRoutes,
  }
})
