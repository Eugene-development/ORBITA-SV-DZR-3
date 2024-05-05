<script>
	import { browser } from '$app/environment';
	import { lengthCart, idProductsInCart } from '$lib/store/stores.js';

	let InCart;
	idProductsInCart.subscribe((value) => (InCart = value));

	const sendToCart = async (id) => {
		if (browser && localStorage.getItem('inCart') === null) {
			browser && localStorage.setItem('inCart', JSON.stringify([id]));
		} else {
			const itemsCart = JSON.parse(localStorage.getItem('inCart'));
			const newItemsCart = [...itemsCart, id];
			localStorage.setItem('inCart', JSON.stringify(newItemsCart));
		}

		const productsInCart = JSON.parse(localStorage.getItem('inCart'));
		lengthCart.update(() => productsInCart.length);
		idProductsInCart.update(() => productsInCart);
	};

	export let actualProducts = [
		{
			id: '307',
			action: 'Клей для плитки KNAUF FLIESEN (25 кг)',
			price: '455',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp'
		},

		{
			id: '161',
			action: 'Пена пистолетная "KUDO home 65" всесезонная',
			price: '470',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/pena-pistoletnaya-kudo-home-65-vsesezonnaya',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/96cddb9d3879573617bbb8e8fdccfc3b.jpg'
		},
		{
			id: '1748',
			action: 'Грунтовка KNAUF Тифенгрунт 10л.',
			price: '1190',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/gruntovka-tifengrunt-10l',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/saRoC4NYpSCQwOak4vzX8D4hJeKuJ9ftTLfp6ixk.jpg'
		},
		{
			id: '534',
			action: 'Грунтовка для впитывающих оснований "CERESIT CT 17" (10 л)',
			price: '1020',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/gruntovka-dlya-vpityvayushhix-osnovanii-cerezit-st-17-10-l',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/5.png'
		},
		{
			id: '310',
			action: 'Клей для пеногазобетона "FINITEX KF 17" престиж (25 кг)',
			price: '260',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/klei-dlya-penogazobetona-finitex-kf-17-prestiz-25-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D0%BD%D0%BE%D0%B3%D0%B0%D0%B7.jpg'
		},
		{
			id: '1566',
			action: 'ЦСП 3200*1250 (10мм)',
			price: '2000',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/csp-32001250-10mm',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/wZELb17Oyadmk5gfUtaMK39XagKoWwt6iCw2ROpv.jpeg'
		},
		{
			id: '954',
			action: 'Бетонконтакт "CERESIT CT 19" (15 кг)',
			price: '1750',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/betonkontakt-cerezit-st-19-15-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/betonokontakt_ceresit_st19_5_l.jpg'
		},
		{
			id: '456',
			action: 'Шпаклевка готовая "SHEETROCK" (28 кг)',
			price: '2600',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/spaklevka-gotovaya-sitrok-28-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/0cd4304d4a0030c87bf95154fe6dbaf8.jpg'
		},
		{
			id: '446',
			action: 'Шпаклевка финишная "VETONIT LR+" (20 кг)',
			price: '960',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/spaklevka-finisnaya-vetonit-lr-20-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B2%D0%B5%D1%82.jpg'
		},
		{
			id: '1661',
			action: 'Утеплитель Технониколь Роклайт 1200*600*50',
			price: '1300',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/uteplitel-texnonikol-roklait-120060050',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
		},
		{
			id: '345',
			action: 'Кабель ВВГ ПНГ-ls 2*2,5 гост плоский',
			price: '65',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/kabel-vvg-png-ls-225-gost-ploskii-arzamasskii-kabelnyi-zavod',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2%D0%BD%D0%B02.5.jpeg'
		},

		{
			id: '1654',
			action: 'Труба д20 l-4m серая',
			price: '185',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/truba-d20-l-4m-seraya',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ki77k2qf8lk4N8oWkfjflmkvOUhbn8CmX0TfEJ4A.jpg'
		},

		{
			id: '1687',
			action: 'Труба д25 l-4m. серая',
			price: '472',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/truba-d25-l-4m-seraya',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/vayfYRfvBskPU7aAU9eQ6TuEwa9zNehdHOLv14Zi.jpg'
		},

		{
			id: '2958',
			action: 'Краска моющаяся для наружных и внутренних работ Pelligrina',
			price: '2715',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/kraskka-peligrinna',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/peligrinnakraska.jpg'
		},
		{
			id: '436',
			action: 'Штукатурная смесь KNAUF ROTBAND белая (30 кг)',
			price: '530',
			description: 'При заказе через сайт дополнительная скидка 5%',
			link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg',
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/020_original.jpg'
		}

		// {
		// 	id: '999',
		// 	action: 'Вагонка евро ель (ав) (13*90*6000)',
		// 	price: '254',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/vagonka-evro-el-av-13906000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6d31cfdd66e3b68441275e5bd3968168.jpeg'
		// },
		// {
		// 	id: '1003',
		// 	action: 'Имитация бруса ель ав (185*21*6000)',
		// 	price: '535',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/imitaciya-brusa-el-av-185216000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/Imitacija-Brusa-copy.jpg'
		// },
		// {
		// 	id: '450',
		// 	action: 'Шпаклевка "ек" vh-80 фасадная белая (20 кг)',
		// 	price: '597',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/spaklevka-ek-vh-80-fasadnaya-belaya-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-VH80.png'
		// },
		// {
		// 	id: '2810',
		// 	action: 'Цемент м500 Евроцемент 40 кг',
		// 	price: '368',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/cement-m500-evrocement-40-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/AdAW50jMkTFDo4nUhEaxZUdxUkShNu2kf6HS4cMo.png'
		// },
		// {
		// 	id: '965',
		// 	action: 'ЭПП xps30-200 Техноплекс 1180*580*50-l',
		// 	price: '292',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '964',
		// 	action: 'ЭПП xps30-200 Техноплекс 1180*580*30-l',
		// 	price: '187',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '522',
		// 	action: 'Грунтовка универсальная "ЕК" g200 (10 л)',
		// 	price: '667',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-universalnaya-ek-g200-10-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
		// },
		// {
		// 	id: '523',
		// 	action: 'Грунтовка универсальная "ЕК" g200 (5л)',
		// 	price: '353',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-universalnaya-ek-g200-5-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
		// },
		// {
		// 	id: '463',
		// 	action: 'Наливной пол "ЕК" level 2.0 быстротвердеющий влагостойкий (20кг)',
		// 	price: '377',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
		// },
		// {
		// 	id: '464',
		// 	action: 'Наливной пол "ЕК" level 2.1 быстротвердеющий (20кг)',
		// 	price: '376',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
		// },
		// {
		// 	id: '1541',
		// 	action: 'Гкл "Кнауф" даногипс 9,5мм (1,2х2,5)',
		// 	price: '310',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gkl-knauf-danogips-95mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m5NgzpdlHX02sqR1Mqu3YrUQJwqqDGUOuAeYV75Z.jpeg'
		// },
		// {
		// 	id: '1543',
		// 	action: 'Гклв "Кнауф" даногипс 12,5мм (1,2х2,5)',
		// 	price: '423',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gklv-knauf-danogips-125mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lvfXJZnJe2ASRUHpI5X2dxVN30ZPHmVRFh0MDJyi.jpeg'
		// },
		// {
		// 	id: '1543',
		// 	action: 'Гклв "Кнауф" даногипс 9,5мм (1,2х2,5)',
		// 	price: '412',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gklv-knauf-danogips-95mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/D2JsbwgeZcA0z4OLW242TuXbW5KFsDYQMR59VFSE.jpeg'
		// },
		// {
		// 	id: '261',
		// 	action: 'ГВЛВ "Кнауф" 10 мм (1200*2500)',
		// 	price: '710',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gvlv-knauf-10-mm-12002500',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B3%D0%B2%D0%BB.jpg'
		// },
		// {
		// 	id: '1661',
		// 	action: 'Утеплитель Технониколь роклайт 1200*600*50',
		// 	price: '1075',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/uteplitel-texnonikol-roklait-120060050',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
		// },
		// {
		// 	id: '235',
		// 	action: 'Фанера 10мм, сорт 3/4 (1,525*1,525)',
		// 	price: '739',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/fanera-10mm-sort-34-15251525',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg'
		// },
		// {
		// 	id: '965',
		// 	action: 'Эпп технониколь 1180*580*50-l',
		// 	price: '320',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// }
		// {
		// 	id: '307',
		// 	action: 'Клей для плитки "Кнауф" флизенклебер (25 кг)',
		// 	price: '448',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp'
		// },
		// {
		// 	id: '121',
		// 	action: 'Линокром ткп сланец серый (10 м2)',
		// 	price: '1700',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/linokrom-tkp-slanec-seryi-10-m',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
		// },
		// {
		// 	id: '123',
		// 	action: 'Линокром тпп (15 м2)',
		// 	price: '2340',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/linokrom-tpp-15-m2',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg'
		// },
		// {
		// 	id: '1826',
		// 	action: 'Профнастил с-21 ral 8017 1054*2000',
		// 	price: '850',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/profnastil-s-21-ral-8017-10542000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/rvvzF15GbXg2v7TOeDZIyunJBLtXDBSHCaI1NQEJ.jpg'
		// }
		// {
		// 	id: '228',
		// 	action: 'Плита осб-3 2500*1250*9мм Kronospan ГОСТ (влагостойкая)',
		// 	price: '480',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/plita-osb-3-250012509mm-Kronospan-gost-vlagostoikaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ilejI7dCV3zr72h4VudvlNrQLKBgHsrYwKd1HoAL.jpeg'
		// },
		// {
		// 	id: '1421',
		// 	action: 'Плита ОСБ-3 2500*1250*12мм Kronospan ГОСТ (влагостойкая)',
		// 	price: '750',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/plita-osb-3-2500125012mm-kronospan-gost-vlagostoikaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/14ztRKlEjShs6Hnr5L5moOWqn7cOCpDhgEbYd7uG.jpeg'
		// },
		// {
		// 	id: '470',
		// 	action: 'Смесь сухая универсальная м-150 (25 кг)',
		// 	price: '104',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/smes-suxaya-universalnaya-m-150-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m150-500x500.png'
		// },
		// {
		// 	id: '2766',
		// 	action: 'Мастика гидроизоляционная 20 кг. "Альфатехмаст"',
		// 	price: '1750',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/mastika-gidroizolyacionnaya-20-kg-alfatexmast',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/qxoqQpTjJzhnAIzNEo9kjXtMHpNxo5oXEOfRYwGq.jpg'
		// },
		// {
		// 	id: '',
		// 	action: 'Поликарбонат сотовый прозрачный 4мм (г. Богородск)',
		// 	price: '5525',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/polikarbonat-sotovyi-prozracnyi-4mm',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png'
		// },
		// {
		// 	action: 'Утеплитель Технониколь роклайт 1200*600*100',
		// 	price: '1190 рубля',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/uteplitel-texnonikol-roklait-1200600100'
		// },
		// {
		// 	id: '431',
		// 	action: 'Штукатурная смесь "ЕК" TG 40 (30кг) беж',
		// 	price: '448',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
		// },
		// {
		// 	id: '432',
		// 	action: 'Штукатурная смесь "ЕК" TG 40 (30кг) white',
		// 	price: '532',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-waite-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40-WHITE.png'
		// },
		// {
		// 	id: '436',
		// 	action: 'Штукатурная смесь "Кнауф Ротбанд" белая (30 кг)',
		// 	price: '549',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/020_original.jpg'
		// },
		// {
		// 	id: '448',
		// 	action: 'Шпаклевка гипсовая "ЕК" к 300 (25 кг)',
		// 	price: '612',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/spaklevka-gipsovaya-ek-k-300-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-K300.png'
		// },
		// {
		// 	id: '464',
		// 	action: 'Наливной пол "ЕК" level 2.1 быстротвердеющий (20 кг)',
		// 	price: '390',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png'
		// },
		// {
		// 	id: '466',
		// 	action: 'Cмесь для пола "Юнис" горизонт универсальный (20 кг)',
		// 	price: '385',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/cmes-dlya-pola-yunis-gorizont-universalnyi-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8E%D1%83.jpg'
		// },
		// {
		// 	id: '267',
		// 	action: 'Клей для плитки "ЕК" 3000 (25кг)',
		// 	price: '391',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-plitki-ek-3000-25kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-3000-UNIVERSAL.png'
		// },
		// {
		// 	id: '314',
		// 	action:
		// 		'Клей для плитки и керамогранита "Церезит" см 14 extra" для улицы и теплых полов (25 кг)',
		// 	price: '760',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/klei-dlya-plitki-i-keramogranita-cerezit-sm-14-extra-dlya-ulicy-i-teplyx-polov-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC14.jpg'
		// },
		// {
		// 	id: '473',
		// 	action: 'Пескобетон м-300 (25 кг) Престиж',
		// 	price: '180',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/peskobeton-m-300-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D1%81.jpg'
		// },
		// {
		// 	id: '520',
		// 	action: 'Грунтовка универсальная концентрированная "ЕК" g100 (10 л)',
		// 	price: '1266',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gruntovka-universalnaya-koncentrirovannaya-ek-g100-10-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G100.png'
		// },
		// {
		// 	id: '2946',
		// 	action: 'Плита осб-3 2500*1250*6мм Kronospan ГОСТ (влагостойкая)',
		// 	price: '532',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/plita-osb-3-250012506mm-kronospan-gost-vlagostoykaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/YBbav3JxXOKl8hYDTen6CzCa1TUlMBagzDxTXlFO.png'
		// },
		// {
		// 	id: '161',
		// 	action: 'Пена пистолетная "KUDO Home 65" всесезонная',
		// 	price: '464',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/pena-pistoletnaya-kudo-home-65-vsesezonnaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/96cddb9d3879573617bbb8e8fdccfc3b.jpg'
		// },
		// {
		// 	id: '343',
		// 	action: 'Кабель ВВГ  3*2,5 ГОСТ',
		// 	price: '106',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/kabel-vvg-png-ls-325-ploskii-gost-arzamasskii-kabelnyi-zavod',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2.5.jpg'
		// }

		// {
		// 	id: '965',
		// 	action: 'Эпп Технониколь 1180*580*50-l',
		// 	price: '348',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '964',
		// 	action: 'Эпп Технониколь 1180*580*30-l',
		// 	price: '200',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
		// },
		// {
		// 	id: '70',
		// 	action: 'Утеплитель техновент стандарт (1200*600*50 мм), 0,216 м3',
		// 	price: '1658',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/uteplitel-texnovent-standart-120060050-mm-0216-m3',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D1%82.jpg'
		// },
		// {
		// 	id: '218',
		// 	action: 'Брус строганный 50*20*3000',
		// 	price: '91',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/brus-strogannyi-402030001',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
		// },
		// {
		// 	id: '223',
		// 	action: 'Брус строганный 50*40*3000',
		// 	price: '165',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/brus-strogannyi-50403000',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B1%D1%80%D1%83%D1%81%D1%8C%D1%8F.jpg'
		// },
		// {
		// 	action: 'Эпп xps30-200 техноплекс 1180*580*30-l',
		// 	price: '179 рублей',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058030-l'
		// }
		// {
		// 	action: 'Эпп xps30-200 техноплекс 1180*580*20-l',
		// 	price: '130 рублей',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/epp-xps30-200-texnopleks-118058050-l'
		// },
		// {
		//     action: 'Пена пистолетная kudo proff 65+ всесезон',
		//     price: '420 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/pena-pistoletnaya-kudo-proff-65-vsesezon'
		// },
		// {
		//     action: 'Утеплитель изобокс 50 мм',
		//     price: '825 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-izoboks-50-mm'
		// },
		// {
		//     action: 'Утеплитель изобокс 100 мм',
		//     price: '890 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-izoboks-100mm'
		// },
		// {
		//     action: 'Утеплитель Техноблок 1200х600х100',
		//     price: '1290 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-texnoblok-standart-1200600100mm-0288-m3'
		// },
		// {
		//     action: 'Утеплитель Техноблок 1200х600х50',
		//     price: '1290 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3'
		// },
		// {
		//     action: 'Утеплитель роклайт 100 мм',
		//     price: '1180 рублей',
		//     description: 'Акция действует 23 и 24 июля',
		//     link: '/shop/products/mineralno-bazaltovye-utepliteli'
		// },
		// {
		//     action: 'Пенопласт 25 плотности 100мм',
		//     price: '215 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/products/penoplast'
		// },
		// {
		//     action: 'Клей для плитки "Вебер ветонит" изи фикс (25 кг)',
		//     price: '330 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/klei-dlya-plitki-veber-vetonit-izi-fiks-25-kg'
		// },
		// {
		//     action: 'Софит-izol в (пароизоляция) 1,6м (35 м2)',
		//     price: '635 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/sofit-izol-v-paroizolyaciya-16m-35-m2'
		// },
		// {
		//     action: 'Софит-izol d (гидро-пароизоляция) 1,5м (70 м2)',
		//     price: '635 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/sofit-izol-d-gidro-paroizolyaciya-15m-70-m2'
		// },
		// {
		// 	id: '431',
		// 	action: 'Штукатурная смесь "ЕК" tg 40 (30 кг)',
		// 	price: '460',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
		// }
		// {
		// 	id: '432',
		// 	action: 'Штукатурная смесь "ЕК" tg 40 waite (30 кг)',
		// 	price: '424',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tg-40-waite-30-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40-WHITE.png'
		// },
		// {
		// 	id: '434',
		// 	action: 'Штукатурная смесь "ек" TT 30 фасадная (25 кг)',
		// 	price: '260',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/stukaturnaya-smes-ek-tt-30-fasadnaya-25-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TT30.png'
		// }
		// {
		// 	id: '463',
		// 	action: 'Наливной пол "ЕК" level 2.0 быстротвердеющий (20 кг)',
		// 	price: '396',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png'
		// },
		// {
		//     action: 'Пена пистолетная "kudo home 65" всесезонная',
		//     price: '410 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/pena-pistoletnaya-kudo-home-65-vsesezonnaya'
		// },
		// {
		//     action: 'Пена монтажная kudo',
		//     price: '330 рублей',
		//     description: 'При заказе через сайт дополнительная скидка 5%',
		//     link: '/shop/product/pena-montaznaya-kudo'
		// },
		// {
		//     action: 'Доска',
		//     price: '16350 рублей за куб',
		//     description: 'Только наличный платёж',
		//     link: '/shop/products/doska-obreznaya-obrabotannaya'
		// },
	];
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:px-8">
		<h2 class="py-4 text-3xl md:text-5xl text-center font-bold tracking-tight text-gray-900">
			Актуальные товары по низким ценам
		</h2>
		<p class="py-2 text-xl text-center tracking-tight text-gray-900">
			Стройматериалы, цена которых вас приятно удивит в этом сезоне.
			<!-- Цены на стройматериалы указаны <span class="text-red-800">со скидкой 5%</span> -->
		</p>

		<div class="mt-8 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
			{#each actualProducts as { id, action, price, description, link, img }}
				<div
					class="group rounded-md relative shadow-lg shadow-slate-400/50 p-3 border-2 transition ease-in-out hover:scale-105"
				>
					<div
						class="h-56 p-8 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none "
					>
						<img src={img} alt="" class="  object-contain " />
					</div>
					<div class="h-8 mt-2 flex justify-between">
						<div>
							<h3 class="pl-2 text-xs text-gray-700">
								<span aria-hidden="true" class="inset-0" />
								{action}
							</h3>
						</div>
					</div>
					<p class="m-2 text-base font-medium text-gray-900">{price}р.</p>

					{#if browser && !InCart.some((arrVal) => id === arrVal)}
						<button
							on:click|preventDefault|once={sendToCart(id)}
							type="button"
							class="mx-2 px-3 py-1 align-bottom rounded-md text-base text-gray-100 bg-cyan-600 hover:bg-cyan-700"
							>В корзину</button
						>
					{:else}
						<button
							class="mx-2 px-3 py-1 align-bottom rounded-md text-base text-gray-100 bg-cyan-800 hover:bg-cyan-700"
							>В корзине</button
						>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
