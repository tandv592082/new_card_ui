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
    template: `
        <div>
            <Card />
            <CardMenu />
            <CardPromotion 
                title="Chương trình ưu đãi" 
                :promotions="promotions1" 
            />
            <CardPromotion 
                title="Ưu đãi Woori store" 
                :promotions="promotions2" 
            />
        </div>
    `
});

definePage('PromotionPage', {
    data() {
        return {
            searchQuery: '',
            showFilterPopup: false,
            promotions: [
                { image: '', title: 'Premium service gift for Woori VV Lux Point cardholders 2025', linkText: 'Read more' },
                { image: '', title: 'Golf Gift Voucher reward for Woori Platinum cardholders', linkText: 'Read more' },
                { image: '', title: 'Swipe Woori cards, get new year\'s lucky money', linkText: 'Read more' },
                { image: '', title: 'Cherish your birthday with Woori VV Card', linkText: 'Read more' },
                { image: '', title: '0% interest installment payment at partner stores', linkText: 'Read more' }
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
            this.$router.push('/promotion/detail');
        },
        toggleFilterPopup() {
            this.showFilterPopup = !this.showFilterPopup;
        }
    },
    template: `
        <div class="bg-gray-100 min-h-screen">
            <div class="bg-blue-500 mb-4">
                <div class="flex justify-between items-center px-4 py-8 shadow-custom">
                    <div class="flex items-center bg-white shadow-custom px-4 py-2 w-full max-w-md rounded-lg">
                        <span class="w-6 h-6 rounded-full">
                            <IconSearch />
                        </span>
                        <input 
                            type="text" 
                            v-model="searchQuery" 
                            placeholder="Search" 
                            class="ml-2 w-full bg-transparent outline-none text-sm text-gray-600"
                        />
                    </div>
                    <button 
                        class="flex items-center bg-white shadow-custom px-6 py-2 ml-4 rounded-lg" 
                        @click="toggleFilterPopup"
                    >
                        <span class="w-6 h-6 rounded-full">
                            <IconFilter />
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
                    class="shadow-custom"
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
            termsLink: '#',
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
            <div class="w-full h-48 bg-blue-500 relative shadow-custom "></div>
            <div class="p-5 flex flex-col gap-6 relative -mt-20">
                <div class="bg-white p-4 text-left shadow-custom rounded-lg">
                    <h1 class="text-md font-bold text-gray-800">{{ title }}</h1>
                    <p class="text-sm text-gray-500 mt-2">Time: {{ time }}</p>
                    <div class="my-4 h-[1px] w-full bg-gray-100"></div>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">Terms & conditions</span>
                        <a :href="termsLink" class="text-sm text-blue-500 font-medium">Read now</a>
                    </div>
                </div>
                <div class="bg-white p-5 text-start shadow-custom rounded-lg">
                    <h2 class="text-sm font-bold text-gray-800 mb-3">Promotion information</h2>
                    <ul class="list-decimal list-inside text-start text-sm text-gray-600 space-y-3 ml-2">
                        <li v-for="(info, index) in promotionInfo" :key="index">{{ info }}</li>
                    </ul>
                </div>

                
            </div>
        </div>
    `
});
