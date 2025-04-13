definePage('HomePage', {
    data() {
        return {
            promotions1: [
                { title: 'Chương trình ưu đãi dành cho chủ thẻ VV Lux Point igigf njdgnjf ngjfngjf ngjfngjf' },
                { title: 'Hurry up and swipe your card' },
                { title: 'Travel with your card' }
            ],
            promotions2: [
                { title: 'Woori Store Discount 1' },
                { title: 'Woori Store Discount 2' },
                { title: 'Woori Store Discount 3' }
            ]
        };
    },
    methods: {
        handleViewAllPromotions() {
            console.log('View all promotions clicked');
            // Navigate to PromotionPage or handle logic
        },
        handleViewAllWooriStore() {
            console.log('View all Woori Store promotions clicked');
            // Navigate to PromotionPage or handle logic
        }
    },
    template: `
        <div>
            <Card />
            <CardMenu />
            <CardPromotion 
                title="Chương trình ưu đãi" 
                :promotions="promotions1" 
                :onViewAll="handleViewAllPromotions" />
            <CardPromotion 
                title="Ưu đãi Woori store" 
                :promotions="promotions2" 
                :onViewAll="handleViewAllWooriStore" />
        </div>
    `
});

definePage('PromotionPage', {
    data() {
        return {
            searchQuery: '',
            showFilterPopup: false, // State to control the visibility of the filter popup
            promotions: [
                {
                    image: '', // Placeholder for now
                    title: 'Premium service gift for Woori VV Lux Point cardholders 2025',
                    linkText: 'Read more'
                },
                {
                    image: '', // Placeholder for now
                    title: 'Golf Gift Voucher reward for Woori Platinum cardholders',
                    linkText: 'Read more'
                },
                {
                    image: '', // Placeholder for now
                    title: 'Swipe Woori cards, get new year\'s lucky money',
                    linkText: 'Read more'
                },
                {
                    image: '', // Placeholder for now
                    title: 'Cherish your birthday with Woori VV Card',
                    linkText: 'Read more'
                },
                {
                    image: '', // Placeholder for now
                    title: '0% interest installment payment at partner stores',
                    linkText: 'Read more'
                }
            ]
        };
    },
    computed: {
        filteredPromotions() {
            return this.promotions.filter(promotion =>
                promotion.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        handleReadMore(title) {
            console.log(`Read more clicked for: ${title}`);
            // Add logic to navigate to the promotion detail page or handle the event
        },
        toggleFilterPopup() {
            this.showFilterPopup = !this.showFilterPopup; // Toggle the popup visibility
        }
    },
    template: `
        <div class="bg-gray-100 min-h-screen">
            <div class="bg-blue-500 mb-4">
                <div class="flex justify-between items-center px-4 py-8">
                    <div class="flex items-center bg-white shadow-md px-4 py-2 w-full max-w-md" style="border-radius: 12px;">
                        <span class="w-6 h-6 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#9ca3af" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
                        </span>
                        <input 
                            type="text" 
                            v-model="searchQuery" 
                            placeholder="Search" 
                            class="ml-2 w-full bg-transparent outline-none text-sm text-gray-600"
                        />
                    </div>
                    <button 
                        class="flex items-center bg-white shadow-md px-6 py-2 ml-4" 
                        style="border-radius: 12px;" 
                        @click="toggleFilterPopup"
                    >
                        <span class="w-6 h-6 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="#9ca3af" stroke-width="1.5" d="M19 3H5c-1.414 0-2.121 0-2.56.412S2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986s.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735c.474.411.766.895.898 1.49c.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 0 1 .899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3Z"/></svg>
                        </span>
                        <span class="ml-2 text-sm text-gray-400">Filter</span>
                    </button>
                </div>
            </div>
            <div class="p-5">
                <PromotionItemDetail 
                    v-for="(promotion, index) in filteredPromotions" 
                    :key="index" 
                    :image="promotion.image" 
                    :title="promotion.title" 
                    :linkText="promotion.linkText" 
                    @read-more="handleReadMore"
                    style="border-radius: 12px;" 
                    :imageBorderRadius="8"
                />
            </div>
            <FilterPopup v-if="showFilterPopup" @close="toggleFilterPopup" />
        </div>
    `
});

definePage('PromotionDetailPage', {
    data() {
        return {
            title: 'PREMIUM SERVICE PROMOTION FOR WOORI VV LUX POINT',
            time: '01/01/2025 - 31/12/2025',
            termsLink: '#', // Placeholder for terms and conditions link
            promotionInfo: [
                'Airport lounge tickets apply at the airport lounge system (domestic terminal) operated by Noi Bai Aviation Services Joint Stock Company.',
                'UrBox electronic voucher worth 2,000,000 VND for use at specified Hotels nationwide.',
                'UrBox electronic voucher worth 5,000,000 VND for use at specified Hotels nationwide.',
                'Free Golf Voucher for 18 holes for use at Skylake Golf and Long Thanh Golf.'
            ]
        };
    },
    template: `
        <div class="bg-gray-100 min-h-screen">
            <div class="w-full h-48 bg-blue-500 relative">
                <!-- Placeholder for promotion image -->
            </div>
            <div class="p-5 flex flex-col gap-6 relative -mt-20">
                <div class=" bg-white shadow-md p-4 text-left" style="border-radius: 12px;">
                    <h1 class="text-md font-bold text-gray-800">{{ title }}</h1>
                    <p class="text-sm text-gray-500 mt-2">Time: {{ time }}</p>
                    <div class="my-4 h-[1px] w-full bg-gray-100"></div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">Terms & conditions</span>
                        <a :href="termsLink" class="text-sm text-blue-500 font-medium">Read now</a>
                    </div>
                </div>
                <div class=" bg-white shadow-md p-5 text-start" style="border-radius: 12px;">
                    <h2 class="text-sm font-bold text-gray-800 mb-3">Promotion information</h2>
                    <ul class="list-decimal list-inside text-start text-sm text-gray-600 space-y-3 ml-2">
                        <li v-for="(info, index) in promotionInfo" :key="index">{{ info }}</li>
                    </ul>
                </div>

                <div class=" bg-white shadow-md p-5 text-start" style="border-radius: 12px;">
                    <h2 class="text-sm font-bold text-gray-800 mb-3">Promotion information</h2>
                    <ul class="list-decimal list-inside text-start text-sm text-gray-600 space-y-3 ml-2">
                        <li v-for="(info, index) in promotionInfo" :key="index">{{ info }}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
});
