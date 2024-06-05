const actions = [
	{
		id: '2766',
		action: 'Поликарбонат сотовый прозрачный (размер 12х2.1м, 4мм)',
		price: '5800',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/product/polikarbonat-sotovyi-prozracnyi-4mm',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png'
	},
	// {
	// 	id: '314',
	// 	action: 'Клей для плитки и керамогранита "CERESIT CM 14 extra"',
	// 	price: '765',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/klei-dlya-plitki-i-keramogranita-cerezit-sm-14-extra-dlya-ulicy-i-teplyx-polov-25-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC14.jpg'
	// },
	{
		id: '655',
		action: 'Шпаклевка финишная "KNAUF ROTBAND" паста (18 кг)',
		price: '1595',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/product/spaklevka-finisnaya-knauf-rotband-pasta-18-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/3696355.jpg'
	},
	{
		id: '234',
		action: 'Фанера 8мм, сорт 3/4 (1,525*1,525)',
		price: '726',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/product/fanera-8mm-sort-34-15251525',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg'
	},
	{
		id: '356',
		action: 'Профиль направляющий 27/28 толщ. 0,5 мм (3 м)',
		price: '105',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/product/profil-napravlyayushhii-2728-tolshh-05-mm-3-m',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2728.jpg'
	},
	{
		id: '365',
		action: 'Профиль потолочный 60/27 толщ. 0,5 мм (3 м)',
		price: '167',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/product/profil-potolocnyi-6027-tolshh-05-mm-3-m',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6027.jpg'
	},
	{
		id: '260',
		action: 'ГКЛВ KNAUF 12,5 мм (1200*2500)',
		price: '520',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/product/gklv-knauf-125-mm-12002500',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BE%D0%BF%D1%82.webp'
	},
	{
		id: '200',
		action: 'Доска обрезная обработанная',
		price: '17500',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/products/doska-obreznaya-obrabotannaya',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B4%D0%BE%D1%81%D0%BA%D0%B0.jpg'
	},

	// {
	// 	id: '261',
	// 	action: 'ГВЛВ "Кнауф" 10 мм (1200*2500)',
	// 	price: '749',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/gvlv-knauf-10-mm-12002500',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg'
	// },
	// {
	// 	id: '1543',
	// 	action: 'Гклв "Кнауф" даногипс 12,5мм (1,2х2,5)',
	// 	price: '528',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/gklv-knauf-danogips-125mm-12x25',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lvfXJZnJe2ASRUHpI5X2dxVN30ZPHmVRFh0MDJyi.jpeg'
	// },
	// {
	// 	id: '1661',
	// 	action: 'Утеплитель Технониколь Роклайт 1200*600*50',
	// 	price: '1160',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/uteplitel-texnonikol-roklait-120060050',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
	// },
	// {
	// 	id: '235',
	// 	action: 'Фанера 10мм, сорт 3/4 (1,525*1,525)',
	// 	price: '780',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/fanera-10mm-sort-34-15251525',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg'
	// },
	// {
	// 	id: '312',
	// 	action: 'Клей для керамгранита "Церезит СМ 11" (25 кг)',
	// 	price: '507',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/klei-dlya-keramgranita-cerezit-sm-11-25-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC%2011%20%D0%BF%D0%BB.jpeg'
	// },
	// {
	// 	id: '965',
	// 	action: 'Эпп технониколь 1180*580*50-l',
	// 	price: '338',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
	// }
];
export const contentActions = {
	actions
};
