import {
	Home,
	ShoppingBag,
	CurrencyDollar,
	User,
	Star,
	Heart,
	Cube,
	CubeTransparent,
	Bookmark,
	ClipboardList,
	Users,
	Globe,
	Tag,
	Cash,
	Calendar,
	UserAdd,
	Cog,
	OfficeBuilding,
	Film
} from '@steeze-ui/heroicons'
export default [
	{
		icon: '',
		iconEmoji: '',
		name: 'nav.general',
		hidden: 'hidden',
		url: '/',
		pathName: '/',
		role: ''
	},
	{
		icon: 'icon',
		iconEmoji: Home,
		name: 'nav.home',
		hidden: 'hidden',
		url: '/my?sort=-updatedAt',
		pathName: '/my',
		role: ''
	},
	{
		icon: 'icon',
		iconEmoji: User,
		name: 'DSR',
		hidden: 'hidden',
		url: '/my/dsr',
		pathName: '/my/dsr',
		role: 'executive'
	},
	{
		icon: 'icon',
		iconEmoji: ClipboardList,
		name: 'nav.my_orders',
		hidden: 'hidden',
		url: '/my/orders#Orders?sort=-updatedAt',
		role: 'user',
		subItems: [
			{
				icon: 'icon',
				iconEmoji: ShoppingBag,
				name: 'Orders',
				hidden: 'hidden',
				url: '/my/orders?sort=-updatedAt&cache=1#Orders',
				pathName: '/my/orders',
				role: 'user'
			},
			{
				icon: 'icon',
				iconEmoji: ShoppingBag,
				name: 'Restaurants',
				hidden: 'hidden',
				url: '/my/orders?sort=-updatedAt&cache=2#RestaurantBookings',
				pathName: '/my/restaurants/bookings',
				role: 'user'
			},
			{
				icon: 'icon',
				iconEmoji: Calendar,
				name: 'nav.appointments',
				hidden: 'hidden',
				url: '/my/orders?sort=-updatedAt&cache=3#Appointments',
				pathName: '/my/appointments',
				role: 'vendor'
			}
		]
	},
	{
		icon: 'icon',
		iconEmoji: CurrencyDollar,
		name: 'nav.bank_transfer',
		hidden: 'hidden',
		url: '/my/bank-transfer?sort=-updatedAt',
		pathName: '/my/bank-transfer',
		role: 'user'
	},
	{
		icon: 'icon',
		iconEmoji: Star,
		name: 'nav.reviews',
		hidden: 'hidden',
		url: '/my/reviews?sort=-updatedAt',
		pathName: '/my/reviews',
		role: 'user'
	},
	{
		icon: 'icon',
		name: 'nav.categories',
		iconEmoji: ClipboardList,
		url: '/my/categories?sort=-updatedAt',
		pathName: '/my/categories',
		role: 'admin'
	},
	{
		icon: 'icon',
		name: 'nav.deals',
		iconEmoji: ClipboardList,
		url: '/my/deals?sort=-updatedAt',
		pathName: '/my/deals',
		role: 'vendor'
	},
	{
		icon: 'icon',
		iconEmoji: ClipboardList,
		name: 'nav.listings',
		hidden: 'hidden',
		url: '/my/listings?sort=-updatedAt',
		role: 'vendor',
		subItems: [
			{
				name: 'Listings',
				url: '/my/listings?cache=1&sort=-updatedAt',
				pathName: '/my/listings',
				role: 'vendor'
			},
			{
				name: 'Messages',
				url: '/my/messages?cache=2&sort=-updatedAt',
				pathName: '/my/messages',
				role: 'vendor'
			},
			{
				name: 'Comments',
				url: '/my/comments?cache=3&sort=-updatedAt',
				pathName: '/my/comments',
				role: 'vendor'
			},
			{
				name: 'Saved Listings',
				url: '/my/saved-list?cache=4&sort=-updatedAt',
				pathName: '/my/saved-list',
				role: 'vendor'
			},
			{
				name: 'Reviews',
				url: '/my/reviews?cache=5&sort=-updatedAt',
				pathName: '/my/reviews',
				role: 'vendor'
			},
			{
				name: 'Import Listings',
				url: '/my/import-listings?cache=6',
				pathName: '/my/import-listings',
				role: 'admin'
			}
		]
	},
	// {
	// 	icon: 'icon',
	// 	iconEmoji: Cube,
	// 	name: 'nav.products',
	// 	hidden: 'hidden',
	// 	url: '/my/products?sort=-updatedAt',
	// 	pathName: '/my/products',
	// 	role: 'vendor',
	// 	subItems: [
	// 		{
	// 			name: 'Products',
	// 			url: '/my/products?sort=-updatedAt',
	// 			pathName: '/my/products',
	// 			role: 'vendor'
	// 		}
	// 	]
	// },

	{
		icon: 'icon',
		iconEmoji: CubeTransparent,
		name: 'nav.amenities',
		hidden: 'hidden',
		url: '',
		pathName: '',
		role: 'admin',
		subItems: [
			{
				name: 'Amenities',
				url: '/my/amenities?sort=-updatedAt',
				pathName: '/my/amenities',
				role: 'admin'
			}
		]
	},
	{
		icon: 'icon',
		iconEmoji: CubeTransparent,
		name: 'nav.coupons',
		hidden: 'hidden',
		url: '',
		pathName: '',
		role: 'vendor',
		subItems: [
			{
				name: 'Coupons',
				url: '/my/coupons?sort=-updatedAt',
				pathName: '/my/coupons',
				role: 'vendor'
			}
		]
	},
	{
		icon: 'svg',
		iconEmoji: '/sidebar/bus.svg',
		name: 'nav.bus',
		hidden: 'hidden',
		url: '',
		pathName: '',
		role: 'vendor',
		subItems: [
			{
				name: 'Bus',
				url: '/my/buses?sort=-updatedAt',
				pathName: '/my/buses',
				role: 'vendor'
			},
			{
				name: 'Bus Points',
				url: '/my/buses/points?sort=-updatedAt',
				pathName: '/my/buses/points',
				role: 'vendor'
			},
			{
				name: 'Bus Paths',
				url: '/my/buses/paths?sort=-updatedAt',
				pathName: '/my/buses/paths',
				role: 'vendor'
			}
		]
	},
	{
		icon: 'svg',
		iconEmoji: '/sidebar/ferry.svg',
		name: 'Ferry',
		hidden: 'hidden',
		url: '',
		pathName: '',
		role: 'vendor',
		subItems: [
			{
				name: 'Ferry',
				url: '/my/ferries?sort=-updatedAt',
				pathName: '/my/ferries',
				role: 'vendor'
			},
			{
				name: 'Ferry Points',
				url: '/my/ferries/points?sort=-updatedAt',
				pathName: '/my/ferries/points',
				role: 'vendor'
			},
			{
				name: 'Ferry Paths',
				url: '/my/ferries/paths?sort=-updatedAt',
				pathName: '/my/ferries/paths',
				role: 'vendor'
			}
		]
	},
	{
		icon: 'svg',
		iconEmoji: '/sidebar/car.svg',
		name: 'nav.rentals',
		hidden: 'hidden',
		url: '/my/rentals?sort=-updatedAt',
		pathName: '/my/rentals',
		role: 'admin'
	},
	{
		icon: 'svg',
		iconEmoji: '/sidebar/flights.svg',
		name: 'nav.flights',
		hidden: 'hidden',
		url: '/my/flights?sort=-updatedAt',
		pathName: '/my/flights',
		role: 'admin'
	},
	{
		icon: 'icon',
		iconEmoji: Film,
		name: 'Theaters',
		hidden: 'hidden',
		url: '/my/theaters?sort=-updatedAt',
		pathName: '/my/theaters',
		role: 'vendor'
	},
	{
		icon: 'icon',
		iconEmoji: Film,
		name: 'nav.movies',
		hidden: 'hidden',
		url: '/my/movies?sort=-updatedAt',
		pathName: '/my/movies',
		role: 'admin'
	},
	{
		icon: 'icon',
		iconEmoji: OfficeBuilding,
		name: 'nav.hotels',
		hidden: 'hidden',
		url: '/my/hotels?sort=-updatedAt',
		pathName: '',
		role: 'vendor'
	},
	{
		icon: 'icon',
		iconEmoji: Calendar,
		name: 'nav.booking_requests',
		hidden: 'hidden',
		url: '',
		pathName: '',
		role: 'vendor',
		subItems: [
			{
				name: 'Restaurant',
				url: '/my/restaurants/all-bookings?cache=1&type=restaurant?sort=-updatedAt',
				pathName: '/my/restaurants/all-bookings',
				role: 'vendor'
			},
			{
				name: 'Hotel',
				url: '/my/orders/admin?type=hotel?cache=2&sort=-updatedAt',
				pathName: '/my/orders/admin',
				role: 'vendor'
			},
			{
				name: 'Doctor',
				url: '/my/orders/admin?type=doctor?cache=3&sort=-updatedAt',
				pathName: '/my/orders/admin',
				role: 'vendor'
			},
			{
				name: 'Salon',
				url: '/my/orders/admin?type=saloon?cache=4&sort=-updatedAt',
				pathName: '/my/orders/admin',
				role: 'vendor'
			},
			{
				name: 'Spa',
				url: '/my/orders/admin?type=spa?cache=5&sort=-updatedAt',
				pathName: '/my/orders/admin',
				role: 'vendor'
			},
			{
				name: 'Orders',
				url: '/my/orders/admin?cache=6&sort=-updatedAt',
				pathName: '/my/orders/admin',
				role: 'vendor'
			}
		]
	},

	{
		icon: 'icon',
		iconEmoji: Cog,
		name: 'nav.settings',
		hidden: 'hidden',
		url: '',
		pathName: '',
		role: 'admin',
		subItems: [
			{
				name: 'Store Profile',
				url: '/my/settings?cache=1#StoreProfile',
				pathName: '/my/settings',
				role: 'admin'
			},
			{
				name: 'Regional Settings',
				url: '/my/settings?cache=1.2#RegionalSettings',
				pathName: '/my/settings',
				role: 'admin'
			},
			{
				name: 'Images',
				url: '/my/settings?cache=1.4#Images',
				pathName: '/my/settings',
				role: 'admin'
			},

			{
				name: 'Blogs',
				url: '/my/blogs?cache=2&sort=-updatedAt',
				pathName: '/my/blogs',
				role: 'admin'
			},
			{
				name: 'Pages',
				url: '/my/pages?cache=3&sort=-updatedAt',
				pathName: '/my/pages',
				role: 'admin'
			},
			{
				name: 'Banners',
				url: '/my/home-banners?cache=4&sort=-updatedAt',
				pathName: '/my/home-banners',
				role: 'admin'
			},
			{
				name: 'FAQ',
				url: '/my/faqs?cache=5&sort=-updatedAt',
				pathName: '/my/faqs',
				role: 'admin'
			},
			{
				icon: 'icon',
				iconEmoji: Cash,
				name: 'nav.payment_methods',
				hidden: 'hidden',
				url: '/my/payment-methods?sort=-updatedAt',
				pathName: '/my/payment-methods',
				role: 'admin'
			}
		]
	},
	{
		icon: 'icon',
		iconEmoji: Cog,
		name: 'nav.my_profile',
		hidden: 'hidden',
		url: '',
		pathName: '',
		role: 'user',
		subItems: [
			{
				name: 'Profile',
				url: '/my/profile',
				pathName: '/my/profile',
				role: 'user'
			},
			{
				name: 'Change Password',
				url: '/auth/change-password',
				pathName: '/auth/change-password',
				role: 'user'
			},
			{
				icon: 'icon',
				iconEmoji: Tag,
				name: 'nav.upgrade_plan',
				hidden: 'hidden',
				url: '/pricing',
				pathName: '/my/upgrade-plan',
				role: 'vendor'
			},
			{
				icon: 'icon',
				iconEmoji: UserAdd,
				name: 'nav.referral',
				hidden: 'hidden',
				url: '/my/referral#LinkingCode',
				pathName: '/my/referral',
				role: 'user'
			}
		]
	},
	{
		icon: '',
		iconEmoji: '',
		name: 'nav.admin',
		hidden: 'hidden',
		url: '/',
		pathName: '/',
		role: ''
	},
	{
		icon: 'icon',
		iconEmoji: Bookmark,
		name: 'nav.claims',
		hidden: 'hidden',
		url: '/my/claims?sort=-updatedAt',
		pathName: '/my/claims',
		role: 'admin'
	},
	{
		icon: 'icon',
		iconEmoji: Cash,
		name: 'Subscriptions Setup',
		hidden: 'hidden',
		url: '/my/subscriptions?sort=-updatedAt',
		pathName: '/my/subscriptions',
		role: 'super'
	},

	// {
	// 	icon: 'icon',
	// 	iconEmoji: Globe,
	// 	name: 'nav.store_countries',
	// 	hidden: 'hidden',
	// 	url: '/my/store-countries?sort=-updatedAt',
	// 	pathName: '/my/store-countries',
	// 	role: 'admin'
	// },
	{
		icon: 'icon',
		iconEmoji: Globe,
		name: 'nav.countries',
		hidden: 'hidden',
		url: '/my/countries?cache=8sort=-updatedAt',
		pathName: '/my/countries',
		role: 'super'
	},
	{
		icon: 'icon',
		iconEmoji: Globe,
		name: 'Cities',
		hidden: 'hidden',
		url: '/my/cities?cache=8sort=-updatedAt',
		pathName: '/my/cities',
		role: 'super'
	},
	{
		icon: 'icon',
		iconEmoji: Users,
		name: 'nav.users',
		hidden: 'hidden',
		url: '/my/users?sort=-updatedAt',
		pathName: '/my/users',
		role: 'super'
	},
	{
		icon: 'icon',
		iconEmoji: Cog,
		name: 'nav.store',
		hidden: 'hidden',
		url: '/my/stores?sort=-updatedAt',
		pathName: '/my/stores',
		role: 'super'
	},
	{
		icon: 'icon',
		iconEmoji: Cog,
		name: 'All Subscriptions',
		hidden: 'hidden',
		url: '/my/subscribes?sort=-updatedAt',
		pathName: '/my/subscribes',
		role: 'super'
	}
]
