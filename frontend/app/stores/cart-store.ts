
export interface cartItemInterface {
    id: number | string,
    image: string,
    level: string,
    category: string,
    title: string,
    text: string,
    stars: number,
    rating: number,
    total_rating: number,
    duration: string,
    no_of_lectures: number,
    price: number
}


export const useCartStore = defineStore("cartStore", () => {

    const items = ref<cartItemInterface[]>([
        {
            id: 1,
            image: '/images/account/learning/image.png',
            level: "Intermediate",
            category: "Interactive Workshop",
            title: "AI-Powered Risk Analytics",
            text: "Learn to implement artificial intelligence tools for enhanced risk assessment and monitoring",
            stars: 5,
            rating: 4.7,
            total_rating: 1248,
            duration: "8.5 hours",
            no_of_lectures: 42,
            price: 50.45
        },
        {
            id: 2,
            image: '/images/account/learning/image.png',
            level: "Advanced",
            category: "Innovative Storytelling with Data",
            title: "Python for Data Analysis",
            text: "Develop advanced skills in creating compelling visual narratives to drive business decisions",
            stars: 5,
            rating: 4.9,
            total_rating: 3567,
            duration: "14.2 hours",
            no_of_lectures: 78,
            price: 50.9
        },
        {
            id: 3,
            image: '/images/account/learning/image.png',
            level: "Beginner",
            category: "Machine Learning",
            title: "Deep Learning Specialization",
            text: "Build neural networks and understand CNNs, RNNs, LSTM, and transformers",
            stars: 5,
            rating: 4.8,
            total_rating: 2891,
            duration: "32.5 hours",
            no_of_lectures: 156,
            price: 50
        },
        {
            id: 4,
            image: '/images/account/learning/image.png',
            level: "Beginner",
            category: "Design",
            title: "UI/UX Design Principles",
            text: "Learn user-centered design, wireframing, prototyping, and usability testing",
            stars: 5,
            rating: 4.5,
            total_rating: 892,
            duration: "6.3 hours",
            no_of_lectures: 35,
            price: 50
        },
        {
            id: 5,
            image: '/images/account/learning/image.png',
            level: "Intermediate",
            category: "Business",
            title: "Digital Marketing Strategy",
            text: "Create effective marketing campaigns across social media, SEO, and email",
            stars: 5,
            rating: 4.7,
            total_rating: 2105,
            duration: "11.8 hours",
            no_of_lectures: 64,
            price: 5000
        },
    ]);

    const tax = ref<number>(400.00)


    const removeFromCart = (id: number | string) => {
        items.value = items.value.filter((item: cartItemInterface) => item.id != id)
    }


    const newReview = reactive({
        modal: false,
        rating: null,
        review: ''
    })

    const toggleNewReviewModal = () => newReview.modal = !newReview.modal



    return {
        items,
        tax,
        removeFromCart,
        newReview,
        toggleNewReviewModal
    }
})