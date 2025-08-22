ServerEvents.recipes(e=>{

    //百百世的探矿仪
    //（合成）

    //矿物富集液
    //（合成）

    //矿莓加工
    //直接研磨
    e.recipes.create.milling([Item.of('createmetallurgy:copper_dust').withChance(0.06),Item.of('gensokyo_mechanician:copper_berries_seed').withChance(0.18)],
	'gensokyo_mechanician:copper_berries')

    e.recipes.create.milling([Item.of('gensokyo_mechanician:tin_dust').withChance(0.06),Item.of('gensokyo_mechanician:tin_berries_seed').withChance(0.18)],
	'gensokyo_mechanician:tin_berries')

    e.recipes.create.milling([Item.of('createmetallurgy:zinc_dust').withChance(0.06),Item.of('gensokyo_mechanician:zinc_berries_seed').withChance(0.18)],
	'gensokyo_mechanician:zinc_berries')

    //萃取加工
    e.recipes.create.compacting([Fluid.of('gensokyo_mechanician:copper_extraction_fluid',125),Item.of('gensokyo_mechanician:copper_berries_seed').withChance(0.28)],
	[Fluid.of('gensokyo_mechanician:slime_fluid',125),Item.of('gensokyo_mechanician:copper_berries',1)]).heated()

    e.recipes.create.compacting([Fluid.of('gensokyo_mechanician:tin_extraction_fluid',125),Item.of('gensokyo_mechanician:tin_berries_seed').withChance(0.28)],
	[Fluid.of('gensokyo_mechanician:slime_fluid',125),Item.of('gensokyo_mechanician:tin_berries',1)]).heated()

    e.recipes.create.compacting([Fluid.of('gensokyo_mechanician:zinc_extraction_fluid',125),Item.of('gensokyo_mechanician:zinc_berries_seed').withChance(0.28)],
	[Fluid.of('gensokyo_mechanician:slime_fluid',125),Item.of('gensokyo_mechanician:zinc_berries',1)]).heated()

    //萃取液离心
	e.recipes.vintageimprovements.centrifugation([Item.of('createmetallurgy:copper_dust',1),Fluid.of('gensokyo_mechanician:slime_fluid',1000)], 
	[Fluid.of('gensokyo_mechanician:copper_extraction_fluid',1000),]).processingTime(300)

	e.recipes.vintageimprovements.centrifugation([Item.of('createmetallurgy:tin_dust',1),Fluid.of('gensokyo_mechanician:slime_fluid',1000)], 
	[Fluid.of('gensokyo_mechanician:tin_extraction_fluid',1000),]).processingTime(300)

	e.recipes.vintageimprovements.centrifugation([Item.of('createmetallurgy:zinc_dust',1),Fluid.of('gensokyo_mechanician:slime_fluid',1000)], 
	[Fluid.of('gensokyo_mechanician:zinc_extraction_fluid',1000),]).processingTime(300)

    //矿莓种子研磨
    e.recipes.create.milling([Item.of('createmetallurgy:copper_dust').withChance(0.18)],
	'gensokyo_mechanician:copper_berries_seed')

    e.recipes.create.milling([Item.of('gensokyo_mechanician:tin_dust').withChance(0.18)],
	'gensokyo_mechanician:tin_berries_seed')

    e.recipes.create.milling([Item.of('createmetallurgy:zinc_dust').withChance(0.18)],
	'gensokyo_mechanician:zinc_berries_seed')

})