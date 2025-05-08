const actions = [
	{
		action: 'ЭПП ХРS30-200 Стандарт 1200*600*20-L(20шт./уп)',
		price: '136',
		unit: 'шт',
		img: 'https://msk.tophouse.ru/images/price/teploizolyatsiya/tehnonikol-xps-ekstrudirovannyiy-penopolistirol/101462-4-2.jpg'
	},
	{
		action: 'ЭПП ХРS30-200 Стандарт 1180*580*30-L(13шт/уп)',
		price: '203',
		unit: 'шт',
		img: 'https://cdn1.ozone.ru/s3/multimedia-o/6348697500.jpg'
	},
	{
		action: 'ЭПП XPS30-200 Стандарт 1180*580*50-L(8шт./уп)',
		price: '314',
		unit: 'шт',
		img: 'https://arttn.ru/upload/iblock/368/6dni1o42d3lb9tw38dw93y0h3ko9xqal/carbon_2.png'
	},
	{
		action: 'ЭПП XPS30-200 Стандарт 1180*580*100-L(4шт./уп)',
		price: '660',
		unit: 'шт',
		img: 'https://valles.ru/upload/iblock/254/254814_2.jpg'
	},
	{
		action: 'Утеплитель РокЛайт (1,2*0,6*100) 4,32 м2,0,432 м3',
		price: '1976',
		unit: 'шт',
		img: 'https://rezar.ru/upload/iblock/4bc/cbn2wlmrp4sh61r2kvn6lzn6olp0zjny.jpg'
	},
	{
		action: 'Утеплитель Роклайт (1,2×0,6×50мм) 0,288м3, 5,76 м3',
		price: '1317',
		unit: 'шт',
		img: 'https://stroymag.su/upload/iblock/bb4/yidvgml3anq2ljbp9pogmr9fleklwfxo.jpg'
	},
	{
		action: 'Утеплитель ТехновентСтандарт 1200х600×50 (0,216м3)',
		price: '2704',
		unit: 'шт',
		img: 'https://khabarovsk.tstn.ru/upload/resize_cache/iblock/58b/fgl7cowejx9uh083qf5xc1zi0i4418dl/1200_1200_140cd750bba9870f18aada2478b24840a/469115_1.jpg'
	},
	{
		action: 'Утеплитель ТехновентСтандарт 1200х600×50 (0,288м3)',
		price: '3600',
		unit: 'шт',
		img: 'https://img.abc.lv/infopage/photos/b/4/kompanija-avotini-sia_b4tlb_006_2000x1500.jpg'
	},
	{
		action: 'УтеплительТЕХНОБЛОК СТАНДАРТ 1.2х0.6х50мм(0.288м3)',
		price: '1647',
		unit: 'шт',
		img: 'https://n-dom.com/upload/ammina.optimizer/jpeg-webp/q80/upload/iblock/0bc/0bc449f54da9201e3b32fcdb62f667c5.webp'
	},
	{
		action: 'УтеплительТЕХНОБЛОК СТАНДАРТ 1.2х0.6х100мм(0.288м3)',
		price: '1650',
		unit: 'шт',
		img: 'https://n-dom.com/upload/ammina.optimizer/jpeg-webp/q80/upload/iblock/0bc/0bc449f54da9201e3b32fcdb62f667c5.webp'
	},
	{
		action: 'Мастика битумная AquaMast для фундамента (18кг)',
		price: '2650',
		unit: 'шт',
		img: 'https://www.tstn.ru/upload/iblock/8fc/cv1z02qlz7fb2ufeg01pkjp317zy5pmi/393547_1.jpg'
	},
	{
		action: 'Мастика битумная-рез. AquaMast для кровли (10кг)',
		price: '1924',
		unit: 'шт',
		img: 'https://www.tstn.ru/upload/iblock/6d0/393548_1.jpg'
	},
	{
		action: 'Мастика битумная-рез. AquaMast для кровли (18кг)',
		price: '2933',
		unit: 'шт',
		img: 'https://tstn.ru/upload/iblock/8fc/cv1z02qlz7fb2ufeg01pkjp317zy5pmi/393547_1.jpg'
	}

	// {
	// 	action: 'Утеплитель ТЕХНОАКУСТИК (1,2*0,6*50мм) 0,288м3',
	// 	price: '1940',
	// 	unit: 'шт',
	// 	img: 'https://cdn.vseinstrumenti.ru/images/goods/stroitelnye-materialy/izolyatsionnye-materialy/2741780/560x504/59831202.jpg'
	// },

	// {
	// 	action: 'Линокром ТКП сланец серый',
	// 	price: '2050',
	// 	unit: 'шт',
	// 	img: 'https://стройбаза-ларионово.рф/files/gallery/1098/big/3gstqgkhpb6s47zloibs43b0a_1676636085.jpg'
	// },
	// {
	// 	action: 'Линокром ТПП 15м',
	// 	price: '2792',
	// 	unit: 'шт',
	// 	img: 'https://stroysmatom.ru/upload/pl_plugin_2/7-2-93-25.jpg'
	// },
	// {
	// 	action: 'Стеклоизол ТКП 3,5 сланец серый (10 кв.м.)',
	// 	price: '1250',
	// 	unit: 'шт',
	// 	img: 'https://cdn.vseinstrumenti.ru/images/goods/stroitelnye-materialy/krovelnye-materialy/2029158/560x504/54134454.jpg'
	// },
	// {
	// 	action: 'Стеклоизол ТПП 10м',
	// 	price: '1125',
	// 	unit: 'шт',
	// 	img: 'https://www.tstn.ru/upload/iblock/49e/225890_1.jpg'
	// },
	// {
	// 	action: 'Черепица гибкая ТЕХНОНИКОЛЬ ОПТИМА Коричневый 3м2',
	// 	price: '1320',
	// 	unit: 'шт',
	// 	img: 'https://tstn.ru/upload/iblock/929/678533_1.jpg'
	// },
	// {
	// 	action: 'Биполь ТПП',
	// 	price: '3262',
	// 	unit: 'шт',
	// 	img: 'https://tstn.ru/upload/iblock/c61/000057_1.jpg'
	// },
	// {
	// 	action: 'Биполь ТКП сланец серый',
	// 	price: '2329',
	// 	unit: 'шт',
	// 	img: 'https://progress-polymer.ru/uploads/webp/product/1500/1583/1607871621_2020-12-13_18-00-21.webp'
	// }
];

// const actions = [
//   {
// 		id: '',
// 		action: 'Клей для керамгранита "Церезит СМ 11 PRO" 25 кг.',
// 		price: '487',
// 		description: '',
// 		link: '',
// 		img: 'https://stroimaks.ru/wa-data/public/shop/products/92/49/14992/images/21246/21246.970.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Герметик СЕРЕБРИСТО-СЕРЫЙ CS25 "Церезит" 280 мл.',
// 		price: '740',
// 		description: '',
// 		link: '',
// 		img: 'https://ir.ozone.ru/s3/multimedia-9/c1000/6036060669.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Клей для плитки и керамгранита EXTRA "Церезит" СМ14 (25кг.) для улицы и теплых полов',
// 		price: '763',
// 		description: '',
// 		link: '',
// 		img: 'https://santehkeram.ru/image/catalog/strojmaterialy/stroitelnye_smesi/kleevye_smesi/klej_dlya_plitki/klej_dlya_plitki_i_keramogranita_ceresit_cm_14_extra_25_kg.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Грунтовка для впит. основ "Церезит СТ 17" 1л.',
// 		price: '160',
// 		description: '',
// 		link: '',
// 		img: 'https://twowin.ru/wa-data/public/shop/products/71/35/13571/images/30135/30135.970.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Грунтовка для впит. основ "Церезит СТ 17" 5л.',
// 		price: '557',
// 		description: '',
// 		link: '',
// 		img: 'https://avatars.mds.yandex.net/get-mpic/1620389/2a0000018a78238576b310db6f3ee8fd6322/orig'
// 	},
// 	{
// 		id: '',
// 		action: 'Грунтовка для впит. основ "Церезит СТ 17" 10л.',
// 		price: '1055',
// 		description: '',
// 		link: '',
// 		img: 'https://express-stroymarket.ru/image/cache/catalog/kategorii/gruntovka-betonkontakt/gruntovka/gruntovkaserezitst1710l.-1000x1340.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Бетонконтакт "Церезит СТ 19/ 5 кг."',
// 		price: '689',
// 		description: '',
// 		link: '',
// 		img: 'https://lkvlg.ru/images/cms/data/import_files/1e/1e9100204ea611eb97e518c04d3a622a_a1c3f5a5bee411eb97f018c04d3a622a.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Бетонконтакт "Церезит СТ 19/ 3 кг."',
// 		price: '488',
// 		description: '',
// 		link: '',
// 		img: 'https://lkvlg.ru/images/cms/data/import_files/1e/1e9100204ea611eb97e518c04d3a622a_a1c3f5a5bee411eb97f018c04d3a622a.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Штукатурная смесь минерал. СТ35/25 2,5мм (короед)',
// 		price: '1095',
// 		description: '',
// 		link: '',
// 		img: 'https://stroyvkus.ru/uploads/product/100/109/fa673323dd1fc02a5da8b0704ddb0a76_2023-06-14_15-19-06.jpeg'
// 	},
// 	{
// 		id: '',
// 		action: 'Клей для плитки эластичный Церезит СМ16 25кг.',
// 		price: '1188',
// 		description: '',
// 		link: '',
// 		img: 'https://domostroy174.ru/assets/images/products/6550/8f4bc040cd1e11ed8139b42e992427ac-8f4bc041cd1e11ed8139b42e992427ac.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Герметик акрил. белый Церезит CS11 280мл.',
// 		price: '260',
// 		description: '',
// 		link: '',
// 		img: 'https://avatars.mds.yandex.net/i?id=6bf296aae40173d1c1ae8933af55648c_l-3919804-images-thumbs&n=13'
// 	},
// 	{
// 		id: '',
// 		action: 'Герметик МАНХЕТТЭН CS25 "Церезит" 280 мл.',
// 		price: '670',
// 		description: '',
// 		link: '',
// 		img: 'https://stroykaskad.ru/wa-data/public/shop/products/06/11/1106/images/1339/1339.970.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Герметик санитарный прозр. CS15 "Церезит"',
// 		price: '596',
// 		description: '',
// 		link: '',
// 		img: 'https://avatars.mds.yandex.net/get-mpic/4579226/2a0000018d780ac445e1503a586b5445ee27/orig'
// 	},
// 	{
// 		id: '',
// 		action: 'Герметик санитарный белый CS15 "Церезит"',
// 		price: '550',
// 		description: '',
// 		link: '',
// 		img: 'https://epkrt.ru/storage/import/from_1c/import_files/b7/b785023d-30a9-11ec-80de-ac1f6b480403_c16882cc-ca14-11ec-80df-ac1f6b480403.jpeg'
// 	},
// 	{
// 		id: '',
// 		action: 'Герметик ТЕМНО-КОРИЧНЕВЫЙ CS25 "Церезит" 280мл.',
// 		price: '690',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn1.ozone.ru/s3/multimedia-n/6190326119.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Гидроизоляция "Церезит" CR 65 (20 кг.)',
// 		price: '1250',
// 		description: '',
// 		link: '',
// 		img: 'https://avatars.mds.yandex.net/i?id=a1645bee675c92be1626c2f66cf8d2d0_l-9068727-images-thumbs&n=13'
// 	},
// 	{
// 		id: '',
// 		action: 'Гидроизоляция ЭКСПРЕСС готовая CL51/5л.',
// 		price: '2104',
// 		description: '',
// 		link: '',
// 		img: 'https://magbo.ru/upload/iblock/921/92156d83042b7129784fbce821b6b802.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Гидроизоляция Комбо Пак CL/8 кг CL 152/8м',
// 		price: '4330',
// 		description: '',
// 		link: '',
// 		img: 'https://abk-stroy.ru/upload/resize_cache/iblock/8a7/923k0t7gmryhn6cdm7g62ohk047p02ip/1200_1200_140cd750bba9870f18aada2478b24840a/ceresit_cl_51_8_sl152_8_kombo_elastichnaya_polimernaya_gidroizolyatsiya_i_uplotnitelnaya_lenta.png'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов водоот. Т-КОРИЧН (2кг) СЕ40 "Церезит"',
// 		price: '427',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn1.ozone.ru/s3/multimedia-u/6136238250.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов водоот. БАГАМА "Церезит" СЕ40 2кг.',
// 		price: '465',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn1.ozone.ru/s3/multimedia-u/6136238250.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов водоот. БЕЛАЯ "Церезит" СЕ40 2 кг.',
// 		price: '427',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn1.ozone.ru/s3/multimedia-u/6136238250.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов водоот. ГРАФИТ(2кг) СЕ 40 "Церезит"',
// 		price: '446',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn1.ozone.ru/s3/multimedia-u/6136238250.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов водоот. СЕРЕБР-СЕРАЯ "Церезит" СЕ 40 2кг',
// 		price: '438',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn1.ozone.ru/s3/multimedia-u/6136238250.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов ГРАФИТ (2кг) Nº16 СЕ 33 "Церезит"',
// 		price: '295',
// 		description: '',
// 		link: '',
// 		img: 'https://alidistroy.ru/upload/iblock/501/fzwrbnhoopy70wxb8grkgmf2rud33mc3.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов белая (2кг) Nº 01 СЕ 33 "Церезит"',
// 		price: '246',
// 		description: '',
// 		link: '',
// 		img: 'https://alidistroy.ru/upload/iblock/501/fzwrbnhoopy70wxb8grkgmf2rud33mc3.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов БАГАМЫ (2кг) Nº 43 СЕ ЗЗ "Церезит"',
// 		price: '271',
// 		description: '',
// 		link: '',
// 		img: 'https://alidistroy.ru/upload/iblock/501/fzwrbnhoopy70wxb8grkgmf2rud33mc3.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Затирка д/швов МАНХЕТТЕН (2кг) Nº10 СЕ 33 "Церезит"',
// 		price: '255',
// 		description: '',
// 		link: '',
// 		img: 'https://alidistroy.ru/upload/iblock/501/fzwrbnhoopy70wxb8grkgmf2rud33mc3.jpg'
// 	},
// ];

// const actions = [
// 	{
// 		id: '',
// 		action: 'Утеплитель КНАУФ ТИСМА Aquastatik(1.2*8.3*2)50мм',
// 		price: '2438',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn1.ozone.ru/s3/multimedia-4/6638871028.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Утеплитель КНАУФ для КОТТЕДЖА Термо Плита 037A (100)',
// 		price: '2495',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://remonstr.ru/upload/iblock/277/o1lfwyg09e7asf6jhqmxso88wh4jhxsx.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Утеплитель КНАУФ для КОТТЕДЖА Термо Плита 037A (50)',
// 		price: '2495',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://www.stroyshopper.ru/upload/resize_cache/iblock/1f8/1199_857_12af2e92894e1f3bbcc4d913921caf13d/121bbde631ad11e2be2100155d016a1d_cadce61c045f11e68d0a00155d00890a.png'
// 	},
// 	{
// 		id: '',
// 		action: 'Клей для плитки "KNAUF" Флизенклебер (25kr)',
// 		price: '434',
// 		unit: 'меш',
// 		description: '',
// 		link: '',
// 		img: 'https://stroyseven.ru/image/cache/catalog/i/gg/fb/9b4c30663f154726961ae93df8a949a5-700x700.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Клей для плитки "KNAUF" Флизенклебер ПЛЮС (25kr)',
// 		price: '583',
// 		unit: 'меш',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1732106182/lmcode/leiaWH7ha0itj_ZtSSaovA/13606458.png'
// 	},
// 	{
// 		id: '',
// 		action: 'Шпаклевка "Кнауф" РОТБАНД-ФИНИШ (25кг)',
// 		price: '630',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://glavsnab.net/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/_/2/_25_1__4.jpg?kar=1&kf=1&kt=1&co=1&rgb%5B0%5D=255&rgb%5B1%5D=255&rgb%5B2%5D=255&ang=ang&qua=90'
// 	},
// 	{
// 		id: '',
// 		action: 'Шпаклевка "Кнауф" Унихард (25кг)',
// 		price: '1054',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://stroysmatom.ru/upload/tovari2_big/1-3-1-15_629f440a9ca3f.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Шпаклевка "Кнауф" Фугенфюллер (25кг)',
// 		price: '614',
// 		unit: 'меш',
// 		description: '',
// 		link: '',
// 		img: 'https://stroyseven.ru/image/cache/catalog/i/ae/oc/de9936ce4f46da02408a84801df3054a-500x500.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Шпаклевка DANOGIPS SUPERFINISH 17л/28кг',
// 		price: '2491',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://media.obi.ru/resize/780x780/media/catalog/product/1/9/1923911_1_f624.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Шпаклевка DANOGIPS SUPERFINISH 3л/5кг',
// 		price: '588',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1682509439/lmcode/xX4246U1e0iuejbF-8sovg/82512350.png'
// 	},
// 	{
// 		id: '',
// 		action: 'Шпаклевка ФИНИШНАЯ "Кнауф" Ротбанд паста 18 кг.',
// 		price: '1537',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://stroysmatom.ru/upload/tovari2_osn/1-3-1-8_606edefba16f0.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Шпаклевка ФИНИШНАЯ "Кнауф" Ротбанд паста 5 кг.',
// 		price: '689',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://tekno-stroy.ru/upload/resize_cache/iblock/30f/368_368_1/23noa0sznsmdp41nvvq2xlk5w61h178p.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Штукатурная смесь "Кнауф" Ротбанд (30кг) БЕЛЫЙ Кубань',
// 		price: '493',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://stroysmatom.ru/upload/tovari2_osn/1-1-1-6_1_64c0f53d3d421_thumb_2264c0f53d3e1a7.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Штукатурная смесь "Кнауф" Диамант Короед 2,5мм 25кг',
// 		price: '588',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://glavsnab.net/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/_/2/_25_2_5_1_.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Элемент пола "Кнауф" 20мм (1,2х0,6) (0,72м2)',
// 		price: '510',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://avatars.mds.yandex.net/get-mpic/12252129/2a0000019017a5f22ec34c36cd219a48c92a/optimize'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛ "Кнауф" 9,5мм (1,2х2,5) (67л)',
// 		price: '366',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://stroyberi.pro/uploadedFiles/eshopimages/big/gklvapluk3000h1200h12_5_2.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛ "Кнауф" 12,5мм (1,2×2,5) (52л)',
// 		price: '387',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://stroyberi.pro/uploadedFiles/eshopimages/big/gklvapluk3000h1200h12_5_2.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛ "Кнауф" ДАНОГИПС 12,5мм (1,2×2,5) (68л)',
// 		price: '316',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://novostroy37.ru/upload/iblock/28b/ceug7xqadb6yeor6obrm296xvg86bema.jpeg'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛ "Кнауф" ДАНОГИПС 9,5мм (1,2х2,5) (76л)',
// 		price: '297',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://novostroy37.ru/upload/iblock/28b/ceug7xqadb6yeor6obrm296xvg86bema.jpeg'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛВ "Кнауф" 9,5мм (1,2×2,5) (68л)',
// 		price: '514',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://stroy-respublika.ru/wp-content/uploads/2024/06/gklv_a_pluk_2500h1200h9_5_5.png'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛВ "Кнауф" 12,5мм (1,2×2,5) (52л)',
// 		price: '540',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://stroy-respublika.ru/wp-content/uploads/2024/06/gklv_a_pluk_2500h1200h9_5_5.png'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛВ "Кнауф" ДАНОГИПС 12,5мм (1,2х2,5) (56л)',
// 		price: '450',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://sberstroi.ru/userfls/shop/editor_1000_1000/4/39774_gipsokartonnyy-list-knauf-2.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'ГКЛВ "Кнауф" ДАНОГИПС 9,5мм (1,2х2,5) (76л)',
// 		price: '435',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://sberstroi.ru/userfls/shop/editor_1000_1000/4/39774_gipsokartonnyy-list-knauf-2.jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'ГВЛВ "Кнауф" 2500*1200*10',
// 		price: '768',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://regstroy.com/image/catalog/product/gvlv2500h1200h10pk(2).jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'ГВЛВ "Кнауф" 2500*1200*12,5',
// 		price: '852',
// 		unit: 'лист',
// 		description: '',
// 		link: '',
// 		img: 'https://regstroy.com/image/catalog/product/gvlv2500h1200h10pk(2).jpg'
// 	},
// 	{
// 		id: '',
// 		action: 'Грунтовка ТИФЕНГРУНД 10л. "Кнауф"',
// 		price: '1160',
// 		unit: 'шт',
// 		description: '',
// 		link: '',
// 		img: 'https://cdn.lemanapro.ru/lmru/image/upload/f_auto/q_auto/dpr_2.0/c_pad/w_1000/h_1000/v1724844826/lmcode/fIoRFvXtMka3npPJieavSA/85060727.png'
// 	}
// ];

export const contentActions = {
	actions
};
