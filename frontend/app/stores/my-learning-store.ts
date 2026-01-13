export const useMyLearningStore = defineStore("myLearningStore", () => {

    const course = ref<{
        id: any,
        author: string,
        learners: number,
        total_ratings: number,
        rating: number,
        progress: { percent: number, total: number, completed: number }
        certifications?: string,

        contents: any[],
        overview: string,
        reviews: any[],
        q_and_a: any[],
    }>({
        id: null,
        author: 'Jane Hones',
        learners: 184,
        total_ratings: 123,
        rating: 4.8,
        progress: { percent: 25, total: 120, completed: 23 },
        contents: [
            { title: 'Introduction', isCompleted: false, duration: '12:20', type: 'video' },
            { title: 'How to Use Figma', isCompleted: true, duration: '12:20', type: 'video' },
            { title: 'Prototyping', isCompleted: false, duration: '12:20', type: 'file' },
            { title: 'User Research', isCompleted: false, duration: '12:20', type: 'file' },
            { title: 'User Research', isCompleted: false, duration: '12:20', type: 'file' },
            { title: 'User Research', isCompleted: false, duration: '12:20', type: 'file' },
            { title: 'User Research', isCompleted: false, duration: '12:20', type: 'file' },
            { title: 'User Research', isCompleted: false, duration: '12:20', type: 'file' },
            { title: 'UX Designs', isCompleted: false, duration: '12:20', type: 'video' },
            { title: 'UX Designs', isCompleted: false, duration: '12:20', type: 'video' },
            { title: 'UX Designs', isCompleted: false, duration: '12:20', type: 'video' },
            { title: 'How to Use Figma', isCompleted: true, duration: '12:20', type: 'video' },
            { title: 'How to Use Figma', isCompleted: true, duration: '12:20', type: 'video' },
            { title: 'How to Use Figma', isCompleted: true, duration: '12:20', type: 'video' },
        ],
        overview: `
        <p>Lorem ipsum dolor sit amet consectetur. Lorem adipiscing integer elementum in a ultrices tincidunt massa malesuada. Non nunc nulla sed amet tempus id in sagittis viverra. Tellus nulla consequat laoreet sed est at pellentesque malesuada. Et leo risus sapien pellentesque. Nec adipiscing tempor lobortis eget in aliquet ut.</p>
        <p>Egestas mattis pharetra vitae lacus ut cursus velit. Massa lorem eu pretium malesuada semper neque. Lectus amet vel at volutpat. Nam lectus lectus egestas eu sed sollicitudin et. Augue cursus sit in elementum hendrerit aliquam etiam euismod ultricies. Cursus enim mi elit mauris id neque semper vel mollis. Cras diam ultricies ut suscipit. Nunc natoque ut interdum libero ut velit suscipit. Sapien laoreet laoreet placerat urna. Sagittis leo arcu nisl sed. Convallis facilisi urna nulla facilisis. Platea amet nunc luctus orci laoreet aliquam nulla id. Turpis egestas odio at tempus feugiat rhoncus nunc parturient. Enim id elit suspendisse non.</p>
        <p>Commodo urna gravida morbi donec. Aenean ipsum dis hendrerit at enim commodo odio consequat. Penatibus ligula in
        tincidunt feugiat. Ullamcorper gravida eget nulla in. Pretium euismod at posuere massa egestas amet varius
        praesent.
        </p>`,
        reviews: [],
        q_and_a: [],
    })



    const newReview = reactive({
        modal: false,
        rating: null,
        review: ''
    })

    const toggleNewReviewModal = () => newReview.modal = !newReview.modal



    return {
        course,
        newReview,
        toggleNewReviewModal
    }
})