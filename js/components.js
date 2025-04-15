defineComponent('IconArrowLeft', {
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" class="w-6 h-6">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
    `
});

defineComponent('IconArrowRight', {
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" class="w-6 h-6">
            <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
    `
});

defineComponent('IconEyeVisible', {
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-5">
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <path fill="currentColor" d="M15.29 18.12L14 16.78l-.07-.07l-1.27-1.27a4 4 0 0 1-.61.06A3.5 3.5 0 0 1 8.5 12a4 4 0 0 1 .06-.61l-2-2L5 7.87a15.9 15.9 0 0 0-2.87 3.63a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.5 9.5 0 0 0 3.23-.67ZM8.59 5.76l2.8 2.8A4 4 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a4 4 0 0 1-.06.61l2.68 2.68l.84.84a15.9 15.9 0 0 0 2.91-3.63a1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.5 9.5 0 0 0-3.23.67Zm12.12 13.53L19.41 18l-2-2l-9.52-9.53L6.42 5L4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7l7.31 7.3l.07.07L16 17.41l.59.59l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"/>
        </svg>
    `
});

defineComponent('IconEyeHidden', {
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-5 h-5">
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <path fill="currentColor" d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5c-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1m-9.87 4a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5"/>
        </svg>
    `
});

defineComponent('IconSearch', {
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#9ca3af" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/>
        </svg>
    `
});

defineComponent('IconFilter', {
    template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
            <path fill="none" stroke="#9ca3af" stroke-width="1.5" d="M19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3Z"/>
        </svg>
    `
});

defineComponent('Card', {
    template: `
        <div class="p-5">
            <div class="relative mx-auto" style="width: calc(100% - 60px);">
                <div class="relative h-36">
                    <div v-if="currentCard" 
                         :key="currentCard.cardId"
                         class="w-full h-32 bg-gradient-to-r rounded-xl shadow-lg absolute inset-0" 
                         :class="currentCard.gradient">
                    </div>
                </div>
                <button v-show="showPrevButton"
                        @click="previousCard" 
                        class="absolute top-1/2 -left-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full">
                    <IconArrowLeft />
                </button>
                <button v-show="showNextButton"
                        @click="nextCard"
                        class="absolute top-1/2 -right-10 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full">
                    <IconArrowRight />
                </button>
            </div>
            <div class="relative" style="height: 84px">
                <div v-if="currentCard" 
                     :key="currentCard.cardId"
                     class="bg-white rounded-xl -mt-10 shadow-md overflow-hidden absolute inset-x-0">
                    <div class="p-3">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600 text-sm">Card number</span>
                            <div class="flex items-center gap-2">
                                <span class="font-medium transition-opacity duration-300 opacity-100">{{currentCard.cardNumber}}</span>
                                <button @click="toggleVisibility" class="text-gray-600 hover:text-gray-800">
                                    <IconEyeVisible v-if="isVisible" />
                                    <IconEyeHidden v-else />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div :class="currentCard.bgColor" class="text-white p-3 rounded-b-xl">
                        <div class="flex justify-between items-center">
                            <span class="text-sm opacity-90">Card type</span>
                            <span class="font-medium transition-opacity duration-300 opacity-100">{{currentCard.cardType}}</span>
                        </div>
                        <div v-if="currentCard.subType" class="text-right text-sm font-medium mt-0.5">{{currentCard.subType}}</div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center gap-2 mt-5">
                <span v-for="(card, index) in cards" 
                      :key="card.cardId"
                      @click="goToCard(index)"
                      :class="[
                          'h-2 rounded-full transition-all duration-300 cursor-pointer',
                          index === activeIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'
                      ]">
                </span>
            </div>
        </div>
    `,
    data() {
        return {
            cards: [
                { cardId: 'card1', cardNumber: '407459******9601', unmaskedNumber: '4074591234569601', cardType: 'Woori Visa Platinum Credit', subType: 'VV Lux Point Card', gradient: 'from-gray-700 to-gray-800', bgColor: 'bg-blue-500' },
                { cardId: 'card2', cardNumber: '512378******4321', unmaskedNumber: '5123781234564321', cardType: 'Shinhan MasterCard Gold', subType: 'Premium Rewards', gradient: 'from-yellow-600 to-yellow-700', bgColor: 'bg-yellow-600' },
                { cardId: 'card3', cardNumber: '356012******7890', unmaskedNumber: '3560121234567890', cardType: 'KB JCB Signature', subType: 'Travel Miles', gradient: 'from-green-600 to-green-700', bgColor: 'bg-green-600' },
                { cardId: 'card4', cardNumber: '622123******5678', unmaskedNumber: '6221231234565678', cardType: 'Hana UnionPay Diamond', subType: 'Shopping & Dining', gradient: 'from-purple-600 to-purple-700', bgColor: 'bg-purple-600' }
            ],
            isVisible: false,
            activeIndex: 0
        };
    },
    computed: {
        currentCard() {
            return this.cards[this.activeIndex];
        },
        showPrevButton() {
            return this.activeIndex > 0;
        },
        showNextButton() {
            return this.activeIndex < this.cards.length - 1;
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
            this.cards[this.activeIndex].cardNumber = this.isVisible
                ? this.currentCard.unmaskedNumber
                : this.currentCard.unmaskedNumber.replace(/\d{6}(?=\d{4}$)/, '******');
        },
        nextCard() {
            this.isVisible = false;
            this.activeIndex = (this.activeIndex + 1) % this.cards.length;
            this.resetCardNumbers();
        },
        previousCard() {
            this.isVisible = false;
            this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
            this.resetCardNumbers();
        },
        goToCard(index) {
            if (index >= 0 && index < this.cards.length) {
                this.isVisible = false;
                this.activeIndex = index;
                this.resetCardNumbers();
            }
        },
        resetCardNumbers() {
            this.cards.forEach(card => {
                card.cardNumber = card.unmaskedNumber.replace(/\d{6}(?=\d{4}$)/, '******');
            });
        }
    }
});

defineComponent('SubCardMenu', {
    props: {
        title: String,
        active: Boolean
    },
    template: `
        <div class="flex flex-col items-center justify-center justify-self-center max-w-[100px] p-1 cursor-pointer transition-all duration-300"
             :class="active ? 'opacity-100' : 'opacity-50'">
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200">
                <div class="w-4 h-4 bg-gray-400"></div> <!-- Placeholder for icon -->
            </div>
            <span class="text-[10px] text-center mt-1 break-words">{{ title }}</span>
        </div>
    `
});

defineComponent('CardMenu', {
    data() {
        return {
            menus: [
                { title: 'Open new card', active: true },
                { title: 'Card limit', active: true },
                { title: 'Transaction history', active: true },
                { title: 'Hive-rewards', active: true },
                { title: 'Card re-issue', active: true },
                { title: 'Block/Unblock Card', active: true },
                { title: 'Report lost/fraud', active: true },
                { title: 'Credit card payment', active: false }
            ]
        };
    },
    template: `
        <div class="p-5">
            <div class="grid grid-cols-4 gap-1 bg-white rounded-xl shadow-md p-4 items-start">
                <SubCardMenu v-for="(menu, index) in menus" 
                             :key="index" 
                             :title="menu.title" 
                             :active="menu.active" />
            </div>
        </div>
    `
});

defineComponent('CardPromotionItem', {
    props: {
        title: String
    },
    template: `
        <div class="flex-shrink-0 w-64 bg-white rounded-xl shadow-md overflow-hidden">
            <div class="w-full h-24 bg-gray-200"></div> <!-- Placeholder for image -->
            <div class="p-2">
                <h3 class="text-sm font-medium text-gray-800 text-left line-clamp-2 overflow-hidden">{{ title }}</h3>
            </div>
        </div>
    `
});

defineComponent('CardPromotion', {
    props: {
        title: String,
        promotions: Array,
    },
    methods: {
        handleViewAll() {
            this.$router.push('/promotion'); // Navigate to the /promotion page
        }
    },
    template: `
        <div class="mt-5">
            <div class="flex justify-between items-center px-5">
                <h2 class="text-sm font-medium text-gray-800">{{ title }}</h2>
                <a href="#" class="text-sm text-blue-600" @click.prevent="handleViewAll">View all</a>
            </div>
            <div class="flex gap-4 justify-between overflow-x-auto mt-3 px-5 py-2 scrollbar-hide"
                 style="-ms-overflow-style: none; scrollbar-width: none;">
                <CardPromotionItem 
                    v-for="(promotion, index) in promotions" 
                    :key="index" 
                    :title="promotion.title" 
                />
            </div>
        </div>
    `
});

defineComponent('BottomBar', {
    template: `
        <div class="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
            <button 
                @click="extractClasses"
                class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Extract Tailwind Classes
            </button>
        </div>
    `,
    methods: {
        extractClasses() {
            const classes = window.tailwindUtils.extractClasses();
            window.tailwindUtils.saveClasses(classes);
        }
    }
})

defineComponent('PromotionItemDetail', {
    props: {
        image: String,
        title: String,
        linkText: String,
        imageBorderRadius: {
            type: Number,
            default: 12 // Default to 12px if not provided
        }
    },
    methods: {
        handleReadMore() {
            this.$emit('read-more', this.title); // Emit the "read-more" event with the title as payload
        }
    },
    template: `
        <div class="flex items-center bg-white shadow-md overflow-hidden p-3 mb-4 rounded-lg">
            <div 
                class="w-[140px] h-20 bg-gray-200 flex items-center justify-center rounded-lg"
            >
                <span class="text-xs text-gray-500">Image</span>
            </div>
            <div class="h-full w-px bg-gray-300 border-dotted border-r border-gray-400 mx-2"></div>
            <div class="flex-1 text-left">
                <h3 class="text-xs font-medium text-gray-800 line-clamp-3 overflow-hidden">{{ title }}</h3>
                <a href="#" class="text-xs text-blue-600 mt-2 inline-block" @click.prevent="handleReadMore">{{ linkText }}</a>
            </div>
        </div>
    `
});

defineComponent('FilterPopup', {
    data() {
        return {
            selectedCardProducts: [], // Array to track selected card products
            selectedFields: [], // Array to track selected fields
            cardProducts: [
                'Thẻ ghi nợ nội địa Woori Napas',
                'Thẻ ghi nợ quốc tế Woori Visa Debit',
                'Thẻ ghi nợ quốc tế Woori Visa Debit Z',
                'Thẻ ghi nợ quốc tế sinh viên',
                'Thẻ tín dụng quốc tế hạng chuẩn Woori Visa Classic',
            ],
            fields: [
                'All',
                'Travel',
                'Food & Drink',
                'Health & Beauty',
                'Entertainment',
                'Education',
                'Shopping'
            ]
        };
    },
    methods: {
        closePopup() {
            this.$emit('close'); // Emit a close event to hide the popup
        },
        isChecked(product, list) {
            return list.includes(product);
        },
        toggleSelection(product, list) {
            if (this.isChecked(product, list)) {
                const index = list.indexOf(product);
                list.splice(index, 1);
            } else {
                list.push(product);
            }
        }
    },
    template: `
        <div 
            class="fixed w-full inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
            @click.self="closePopup"
        >
            <div 
                class="bg-white rounded-t-xl shadow-lg w-full max-w-md max-h-[90vh]"
            >
                <h2 class="text-lg font-bold text-gray-800 text-center my-5">Filter Information</h2>
                <div class="overflow-y-auto max-h-[75vh] px-5 py-5">
                    <div class="mb-4 flex items-center justify-between">
                        <label class="text-sm font-medium text-gray-700 mr-4">Location</label>
                        <input 
                            type="text" 
                            placeholder="Province/City" 
                            class="border border-gray-300 rounded-lg p-2 text-sm w-[70%]"
                        >
                    </div>
                    <div class="mb-4 text-start">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Field</label>
                        <div class="flex flex-wrap gap-2">
                            <button 
                                v-for="field in fields" 
                                :key="field" 
                                class="px-3 py-1 text-sm border rounded-lg"
                                :class="selectedFields.includes(field) ? 'bg-blue-500 text-white' : 'text-gray-700'"
                                @click="toggleSelection(field, selectedFields)"
                            >
                                {{ field }}
                            </button>
                        </div>
                    </div>
                    <div class="text-start">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Card Product</label>
                        <div class="flex flex-col gap-2">
                            <label 
                                v-for="product in cardProducts" 
                                :key="product" 
                                class="flex items-center text-sm"
                            >
                                <div class="relative flex items-center justify-center">
                                    <input 
                                        type="checkbox" 
                                        class="absolute opacity-0 w-[18px] h-[18px] cursor-pointer"
                                        :checked="isChecked(product, selectedCardProducts)"
                                        @change="toggleSelection(product, selectedCardProducts)"
                                    >
                                    <div 
                                        class="w-[18px] h-[18px] rounded-lg flex items-center justify-center"
                                        :class="isChecked(product, selectedCardProducts) ? 'bg-blue-500' : 'bg-white border border-solid border-gray-400'"
                                    >
                                        <svg 
                                            v-if="isChecked(product, selectedCardProducts)" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="12" 
                                            height="12" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path fill="#ffffff" d="M9 16.2L4.8 12l-1.4 1.4L9 19l11-11-1.4-1.4z"/>
                                        </svg>
                                    </div>
                                </div>
                                <span class="ml-2">{{ product }}</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
});
