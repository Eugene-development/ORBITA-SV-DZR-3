const actions = [
	{
		id: '1483',
		action: 'Арматура композитная АСК-6 мм (100м.п.)',
		price: '13',
		link: '/shop/product/armatura-stekloplastikovaya-kompozitnaya-ask-6-mm-50-mp',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/49684fae-dba7-11e5-a26c-1867b054bc98_7550deb3-7beb-11e6-a067-000c29378178.resize1.png'
	},
	{
		id: '2978',
		action: 'БИОТЕКС мореный дуб 2,7л',
		price: '1215',
		link: '/shop/product/biot-ie-ks-morienyi-dub-2-7-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/7ca2da74-175b-4361-825a-343837a62fa3.webp'
	},
	{
		id: '347',
		action: 'Газобетонный блок "Poritep" 625*100*250мм (0,016м3)',
		price: '135',
		link: '/shop/product/gazobetonnyi-blok-poritep-625100250-0016m3',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/hExr43D7fAdC1mXJMcQZP6eRurZ6GN45uSkzVApO.png'
	},
	{
		id: '2979',
		action: 'Геотекстиль Изолайк GEO 150мкм 40м2',
		price: '1620',
		link: '/shop/product/gieotiekstil-izolaik-geo-150mkm-40m2',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/364e236ac986b82bb9be731b85a49c43.jpg'
	},
	{
		id: '2980',
		action: 'Грунт-эмаль по ржавчине серая 1,8кг ЦАРИЦЫНО',
		price: '486',
		link: '/shop/product/grunt-emal-po-rzhavchinie-sieraia-1-8kgh-ts-ari-ts-yno',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/320_original.jpg'
	},
	{
		id: '200',
		action: 'Доска обрезная обработанная',
		price: '19000',
		description: 'При заказе через сайт дополнительная скидка 5%',
		link: '/shop/products/doska-obreznaya-obrabotannaya',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B4%D0%BE%D1%81%D0%BA%D0%B0.jpg'
	}

	// {
	// 	id: '2966',
	// 	action: 'Антисептик для древесины "АПРИЛ" 10л',
	// 	price: '1350',
	// 	link: '/shop/product/antisieptik-dlia-drieviesiny-april-10l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/26e974220b6abba47d2904b3c15a13fd.jpg'
	// },
	// {
	// 	id: '1485',
	// 	action: 'Арматура стеклопластиковая композитная АСК-10 мм',
	// 	price: '20',
	// 	link: '/shop/product/armatura-stekloplastikovaya-kompozitnaya-ask-10-mm-50-mp',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/49684fae-dba7-11e5-a26c-1867b054bc98_7550deb3-7beb-11e6-a067-000c29378178.resize1.png'
	// },
	// {
	// 	id: '355',
	// 	action: 'Профиль направляющий 27/28 толщ. 0,4 мм (3 м)',
	// 	price: '98',
	// 	link: '/shop/product/profil-napravlyayushhii-2728-tolshh-04-mm-3-m',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2728.jpg'
	// },
	// {
	// 	id: '365',
	// 	action: 'Профиль потолочный 60/27 0,5 мм (3 м)',
	// 	price: '157',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/profil-potolocnyi-6027-tolshh-05-mm-3-m',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6027.jpg'
	// },
	// {
	// 	id: '378',
	// 	action: 'Подвес прямой ПП 60/27 0,7 мм',
	// 	price: '10',
	// 	link: '/shop/product/podves-pryamoi-pp-6027-07-mm',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%BF.jpg'
	// },
	// {
	// 	id: '2766',
	// 	action: 'Поликарбонат сотовый прозрачный (размер 12х2.1м, 4мм)',
	// 	price: '5700',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/polikarbonat-sotovyi-prozracnyi-4mm',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png'
	// }
	// {
	// 	id: '1944',
	// 	action: 'ДВП 1220*2440*3,2',
	// 	price: '185',
	// 	link: '/shop/product/dvp-1220244032',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/W6E3RBdh7ybngPyTwrWYkc2WUh5P9ZDOUIT3iK4t.jpg'
	// },
	// {
	// 	id: '2963',
	// 	action: 'Антиморозная добавка FARBITEX профи 5л',
	// 	price: '499',
	// 	link: '/shop/product/antimorozyaia-dobavka-farbitex-profi-5l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/farbi_5l.png'
	// },
	// {
	// 	id: '348',
	// 	action: 'Кирпич керамический одинарный полнотел. М150',
	// 	price: '27',
	// 	link: '/shop/product/kirpic-pecnoi-m-150-294-stup',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BA%D0%B8%D1%80%D0%BF%20%D0%BF.jpg'
	// },
	// {
	// 	id: '470',
	// 	action: 'Смесь сухая универсальная м-150 (25 кг) ПРЕСТИЖ',
	// 	price: '145',
	// 	link: '/shop/product/smes-suxaya-universalnaya-m-150-25-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m150-500x500.png'
	// },
	// {
	// 	id: '370',
	// 	action: 'Профиль стоечный 50/50 толщ. 0,5 мм (3 м)',
	// 	price: '231',
	// 	link: '/shop/product/profil-stoecnyi-5050-tolshh-05-mm-3-m',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/5050.jpg'
	// },
	// {
	// 	id: '363',
	// 	action: 'ПРОФИЛЬ НАПРАВЛЯЮЩИЙ 50/40 ТОЛЩ. 0,5 ММ (3М)',
	// 	price: '182',
	// 	link: '/shop/product/profil-napravlyayushhii-5040-tolshh-05-mm-3m',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/5040.jpg'
	// },
	// {
	// 	id: '2460',
	// 	action: 'Перчатки с пвх черные',
	// 	price: '14',
	// 	link: '/shop/product/percatki-s-pvx-cernye',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/K6x6Mc7FhaZ31HFKyBS1gNHsrSP60lCzfjikwyNL.jpg'
	// },
	// {
	// 	id: '436',
	// 	action: 'Штукатурная смесь "Кнауф Ротбанд" белая (30 кг)',
	// 	price: '489',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/020_original.jpg'
	// },
	// {
	// 	id: '447',
	// 	action: 'Шпаклевка гипсовая "ЕК" К 200 (20 кг)',
	// 	price: '457',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/spaklevka-gipsovaya-ek-k-200-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ek20025kg-500x500.jpg'
	// },
	// {
	// 	id: '356',
	// 	action: 'Профиль направляющий 27/28 0,5 мм (3 м)',
	// 	price: '111',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/profil-napravlyayushhii-2728-tolshh-05-mm-3-m',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2728.jpg'
	// },
	// {
	// 	id: '534',
	// 	action: 'Грунтовка для впит. оснований "Церезит СТ17" (10 л)',
	// 	price: '1040',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/gruntovka-dlya-vpityvayushhix-osnovanii-cerezit-st-17-10-l',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/5.png'
	// },
	// {
	// 	id: '2766',
	// 	action: 'Поликарбонат сотовый прозрачный (размер 12х2.1м, 4мм)',
	// 	price: '5400',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/polikarbonat-sotovyi-prozracnyi-4mm',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png'
	// },
	// {
	// 	id: '314',
	// 	action: 'Клей для плитки и керамогранита "CERESIT CM 14 extra"',
	// 	price: '765',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/klei-dlya-plitki-i-keramogranita-cerezit-sm-14-extra-dlya-ulicy-i-teplyx-polov-25-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC14.jpg'
	// },
	// {
	// 	id: '655',
	// 	action: 'Шпаклевка финишная "KNAUF ROTBAND" паста (18 кг)',
	// 	price: '1595',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/spaklevka-finisnaya-knauf-rotband-pasta-18-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/3696355.jpg'
	// },
	// {
	// 	id: '450',
	// 	action: 'Шпаклевка "EK" VH80 фасадная белая (20 кг)',
	// 	price: '665',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/spaklevka-ek-vh-80-fasadnaya-belaya-20-kg',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-VH80.png'
	// },
	// {
	// 	id: '234',
	// 	action: 'Фанера 8мм, сорт 3/4 (1,525*1,525)',
	// 	price: '780',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/fanera-8mm-sort-34-15251525',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg'
	// }
	// {
	// 	id: '235',
	// 	action: 'Фанера 10мм, сорт 3/4 (1,525*1,525)',
	// 	price: '948',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/fanera-10mm-sort-34-15251525',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg'
	// },
	// {
	// 	id: '2961',
	// 	action: 'Knauf профиль направляющий 27х28 (3 метра) 0.6мм',
	// 	price: '217',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/knauf-profil-napravlaushii-27x28',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/profil-potolochnyj-napravlyayuschij-knauf-27h28-izomaxx-1000x1000.png'
	// },
	// {
	// 	id: '2960',
	// 	action: 'Knauf профиль потолочный (ПП)',
	// 	price: '318',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/knauf-profil-potolochni-pp',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/knauf_profil_pp_3000H60H27H06.png'
	// },
	// {
	// 	id: '257',
	// 	action: 'ГКЛ KNAUF 9,5 мм (1200*2500)',
	// 	price: '359',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/gklv-knauf-125-mm-12002500',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BE%D0%BF%D1%82.webp'
	// }
	// {
	// 	id: '260',
	// 	action: 'ГКЛВ KNAUF 12,5 мм (1200*2500)',
	// 	price: '520',
	// 	description: 'При заказе через сайт дополнительная скидка 5%',
	// 	link: '/shop/product/gklv-knauf-125-mm-12002500',
	// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BE%D0%BF%D1%82.webp'
	// },
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
