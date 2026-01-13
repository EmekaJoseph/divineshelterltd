export const useLandingModalStore = defineStore("landingModalStore", () => {


    const advisoryInfo = reactive<{ modal: Boolean, content: any }>({
        modal: false,
        content: null
    })
    const advisoryInfoSwitch = (content: any) => {
        advisoryInfo.modal = !advisoryInfo.modal
        advisoryInfo.content = content
    }




    return {
        advisoryInfo,
        advisoryInfoSwitch
    }
})