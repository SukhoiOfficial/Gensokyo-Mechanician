ServerEvents.tags('item',event => {

	//统一物品标签
	//unify：移除所有标签，增加铝的标签
	event.removeAllTagsFrom(/.*unify:.*/)
	event.add('forge:dusts/aluminum', 'gensokyo_mechanician:aluminum_dust')
	event.add('forge:nuggets/aluminum', 'unify:aluminum_nugget')
	event.add('forge:ingots/aluminum', 'unify:aluminum_ingot')
	event.add('forge:storage_blocks/aluminum', 'unify:aluminum_block')
	event.add('forge:plates/aluminum', 'unify:aluminum_sheet')
	//铝杆和铝线使用vintageimprovements提供
	//增加镍的标签
	event.add('forge:nuggets/nickel', 'unify:nickel_nugget')
	event.add('forge:ingots/nickel', 'unify:nickel_ingot')
	event.add('forge:storage_blocks/nickel', 'unify:nickel_block')
	event.add('forge:plates/nickel', 'unify:nickel_sheet')

	//createmetallurgy：移除钢的标签
	event.removeAllTagsFrom('createmetallurgy:steel_ingot')
	event.removeAllTagsFrom('createmetallurgy:steel_block')

	//ad_astra：移除铁和钢的标签
	event.removeAllTagsFrom('ad_astra:iron_plate')
	event.removeAllTagsFrom('ad_astra:iron_rod')
	event.removeAllTagsFrom('ad_astra:steel_plate')
	event.removeAllTagsFrom('ad_astra:steel_rod')
	event.removeAllTagsFrom('ad_astra:steel_nugget')
	event.removeAllTagsFrom('ad_astra:steel_ingot')
	event.removeAllTagsFrom('ad_astra:steel_block')

	//vintageimprovements：移除五种重复的板标签
	event.removeAllTagsFrom('vintageimprovements:aluminum_sheet')
	event.removeAllTagsFrom('vintageimprovements:bronze_sheet')
	event.removeAllTagsFrom('vintageimprovements:tin_sheet')
	event.removeAllTagsFrom('vintageimprovements:zinc_sheet')
	event.removeAllTagsFrom('vintageimprovements:nickel_sheet')

	//createaddition：移除锌板标签
    event.removeAllTagsFrom('createaddition:zinc_sheet')

	//createdeco：增加锌板标签
    event.add('forge:plates/zinc','createdeco:zinc_sheet')

	//矿物处理相关的标签注册
	event.add('forge:crushed_raw_materials/copper', 'create:crushed_raw_copper')
	event.add('copper_unprocessed', 'raw_copper')
    event.add('copper_unprocessed', 'create:crushed_raw_copper')
	event.add('copper_unprocessed', 'createmetallurgy:dirty_copper_dust')
	event.add('copper_unprocessed', 'createmetallurgy:copper_dust')
	event.add('copper_one_ingot', '#forge:ingots/copper')
	event.add('copper_one_ingot', '#forge:plates/copper')

	event.add('forge:crushed_raw_materials/tin', 'create_ironworks:crushed_raw_tin')
	event.add('forge:dirty_dusts/tin', 'gensokyo_mechanician:dirty_tin_dust')
	event.add('forge:dusts/tin', 'gensokyo_mechanician:tin_dust')
	event.add('tin_unprocessed', 'create_ironworks:raw_tin')
	event.add('tin_unprocessed', 'create_ironworks:crushed_raw_tin')
	event.add('tin_unprocessed', 'gensokyo_mechanician:dirty_tin_dust')
	event.add('tin_unprocessed', 'gensokyo_mechanician:tin_dust')
	event.add('tin_one_ingot', '#forge:ingots/tin')
	event.add('tin_one_ingot', '#forge:plates/tin')

	event.add('forge:crushed_raw_materials/zinc', 'create:crushed_raw_zinc')
	event.add('zinc_unprocessed', 'create:raw_zinc')
    event.add('zinc_unprocessed', 'create:crushed_raw_zinc')
	event.add('zinc_unprocessed', 'createmetallurgy:dirty_zinc_dust')
	event.add('zinc_unprocessed', 'createmetallurgy:zinc_dust')
	event.add('zinc_one_ingot', '#forge:ingots/zinc')
	event.add('zinc_one_ingot', '#forge:plates/zinc')

	event.add('forge:crushed_raw_materials/iron', 'create:crushed_raw_iron')
	event.add('iron_unprocessed', 'raw_iron')
    event.add('iron_unprocessed', 'create:crushed_raw_iron')
	event.add('iron_unprocessed', 'createmetallurgy:dirty_iron_dust')
	event.add('iron_unprocessed', 'createmetallurgy:iron_dust')
	event.add('iron_one_ingot', '#forge:ingots/iron')
	event.add('iron_one_ingot', '#forge:plates/iron')

	event.add('forge:crushed_raw_materials/gold', 'create:crushed_raw_gold')
	event.add('gold_unprocessed', 'raw_gold')
    event.add('gold_unprocessed', 'create:crushed_raw_gold')
	event.add('gold_unprocessed', 'createmetallurgy:dirty_gold_dust')
	event.add('gold_unprocessed', 'createmetallurgy:gold_dust')
	event.add('gold_one_ingot', '#forge:ingots/gold')
	event.add('gold_one_ingot', '#forge:plates/gold')

	event.add('forge:raw_materials/nickel', 'unify:raw_nickel')
	event.add('forge:crushed_raw_materials/nickel', 'create:crushed_raw_nickel')
	event.add('forge:dirty_dusts/nickel', 'gensokyo_mechanician:dirty_nickel_dust')
	event.add('forge:dusts/nickel', 'gensokyo_mechanician:nickel_dust')
	event.add('nickel_unprocessed', 'unify:raw_nickel')
    event.add('nickel_unprocessed', 'create:crushed_raw_nickel')
	event.add('nickel_unprocessed', 'gensokyo_mechanician:dirty_nickel_dust')
	event.add('nickel_unprocessed', 'gensokyo_mechanician:nickel_dust')
	event.add('nickel_one_ingot', '#forge:ingots/nickel')
	event.add('nickel_one_ingot', '#forge:plates/nickel')

	event.add('aluminum_unprocessed', '#forge:dusts/aluminum')
	event.add('aluminum_one_ingot', '#forge:ingots/aluminum')
	event.add('aluminum_one_ingot', '#forge:plates/aluminum')

	event.add('forge:crushed_raw_materials/tungsten', 'createmetallurgy:crushed_raw_wolframite')
	event.add('tungsten_unprocessed', 'createmetallurgy:raw_wolframite')
    event.add('tungsten_unprocessed', 'createmetallurgy:crushed_raw_wolframite')
	event.add('tungsten_unprocessed', 'createmetallurgy:dirty_wolframite_dust')
	event.add('tungsten_unprocessed', 'createmetallurgy:wolframite_dust')
	event.add('tungsten_one_ingot', '#forge:ingots/tungsten')
	event.add('tungsten_one_ingot', '#forge:plates/tungsten')

})

