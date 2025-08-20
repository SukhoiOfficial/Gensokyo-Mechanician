StartupEvents.modifyCreativeTab("kubejs:tab", event => {
	event.displayName = '幻想机械师'
  event.icon = 'create:content_observer'
});

StartupEvents.modifyCreativeTab("kubejs:tab", e => {
   e.remove([
    Item.of('gensokyo_mechanician:aluminum_armor_plate'),
    Item.of('gensokyo_mechanician:steel_armor_plate'),
    Item.of('gensokyo_mechanician:pearlescent_armor_plate'),
    Item.of('gensokyo_mechanician:naga_armor_plate'),
    Item.of('gensokyo_mechanician:knightmetal_armor_plate'),
    Item.of('gensokyo_mechanician:fiery_armor_plate'),
    Item.of('gensokyo_mechanician:yeti_armor_plate')
  ])
  e.add([
    Item.of('gensokyo_mechanician:aluminum_armor_plate', '{Damage:0,armor:1.50d,toughness:0.00d,weight:1.0d}'),
    Item.of('gensokyo_mechanician:steel_armor_plate', '{Damage:0,armor:2.00d,toughness:1.00d,weight:2.0d}'),
    Item.of('gensokyo_mechanician:pearlescent_armor_plate', '{Damage:0,armor:2.25d,toughness:0.00d,weight:1.0d}'),
    Item.of('gensokyo_mechanician:naga_armor_plate', '{Damage:0,armor:2.00d,toughness:1.25d,weight:2.0d}'),
    Item.of('gensokyo_mechanician:knightmetal_armor_plate', '{Damage:0,armor:2.50d,toughness:1.00d,weight:2.0d}'),
    Item.of('gensokyo_mechanician:fiery_armor_plate', '{Damage:0,armor:5.00d,toughness:1.00d,weight:3.0d}'),
    Item.of('gensokyo_mechanician:yeti_armor_plate', '{Damage:0,armor:0.50d,toughness:1.75d,weight:1.0d}')
  ])
  e.add([
    Item.of('youkaishomecoming:custom_spell_ring', '{display:{Name:\'{"italic":false,"text":"工符「卫星环流」","color":"blue"}\'},CustomModelData:1,CustomType:1,SpellData:{speedFirst:0.6d,form:{randomizedAngle:0.0d,delay:1,stepAngle:8.0d,branchAngle:45.0d,branches:8,steps:18,stepVerticalAngle:1.0d},speedLast:0.4d,_class:"dev.xkmc.youkaishomecoming.content.spell.custom.data.RingSpellFormData",randomizedSpeed:0.0d,base:{randomizedRange:0.1d,range:80.0d,color:"BLUE",bullet:"STAR"}}}'),
    Item.of('youkaishomecoming:custom_spell_ring', '{display:{Name:\'{"italic":false,"text":"工符「地狱涡轮」","color":"red"}\'},CustomModelData:2,CustomType:2,SpellData:{speedFirst:0.8d,form:{randomizedAngle:0.0d,delay:1,stepAngle:7.0d,branchAngle:60.0d,branches:6,steps:30,stepVerticalAngle:0.0d},speedLast:0.6d,_class:"dev.xkmc.youkaishomecoming.content.spell.custom.data.RingSpellFormData",randomizedSpeed:0.0d,base:{randomizedRange:0.1d,range:80.0d,color:"RED",bullet:"BALL"}}}'),
    Item.of('youkaishomecoming:custom_spell_homing', '{display:{Name:\'{"italic":false,"text":"工符「电子蝴蝶」","color":"green"}\'},CustomModelData:3,CustomType:3,SpellData:{speed:0.6d,form:{randomizedAngle:0.0d,delay:1,stepAngle:5.0d,branchAngle:90.0d,branches:4,steps:9,stepVerticalAngle:2.0d},turnTime:16,_class:"dev.xkmc.youkaishomecoming.content.spell.custom.data.HomingSpellFormData",base:{randomizedRange:0.1d,range:80.0d,color:"GREEN",bullet:"BUTTERFLY"}}}'),
    Item.of('youkaishomecoming:custom_spell_ring', '{display:{Name:\'{"italic":false,"text":"理符「质子撞击」","color":"yellow"}\'},CustomModelData:4,CustomType:4,SpellData:{speedFirst:1.2d,form:{randomizedAngle:0.0d,delay:1,stepAngle:0.0d,branchAngle:8.0d,branches:3,steps:60,stepVerticalAngle:0.0d},speedLast:1.0d,_class:"dev.xkmc.youkaishomecoming.content.spell.custom.data.RingSpellFormData",randomizedSpeed:0.0d,base:{randomizedRange:0.1d,range:128.0d,color:"YELLOW",bullet:"BALL"}}}')
  ])

})

StartupEvents.registry("creative_mode_tab", (tab) => {
	//矿物处理
	tab.create("gensokyo_mechanician:ore_processing")
		.icon(() => Item.of("createmetallurgy:molten_copper_bucket"))
		.content(() => [
      //铜
			'#forge:raw_materials/copper',
			'#forge:crushed_raw_materials/copper',
      '#forge:dirty_dusts/copper',
      '#forge:dusts/copper',
      '#forge:ingots/copper',
      '#forge:plates/copper',
      '#forge:nuggets/copper',
      //锡
      '#forge:raw_materials/tin',
			'#forge:crushed_raw_materials/tin',
      '#forge:dirty_dusts/tin',
      '#forge:dusts/tin',
      '#forge:ingots/tin',
      '#forge:plates/tin',
      '#forge:nuggets/tin',
      //锌
      '#forge:raw_materials/zinc',
			'#forge:crushed_raw_materials/zinc',
      '#forge:dirty_dusts/zinc',
      '#forge:dusts/zinc',
      '#forge:ingots/zinc',
      '#forge:plates/zinc',
      '#forge:nuggets/zinc',
      //铁
      '#forge:raw_materials/iron',
			'#forge:crushed_raw_materials/iron',
      '#forge:dirty_dusts/iron',
      '#forge:dusts/iron',
      '#forge:ingots/iron',
      '#forge:plates/iron',
      '#forge:nuggets/iron',
      //金
      '#forge:raw_materials/gold',
			'#forge:crushed_raw_materials/gold',
      '#forge:dirty_dusts/gold',
      '#forge:dusts/gold',
      '#forge:ingots/gold',
      '#forge:plates/gold',
      '#forge:nuggets/gold',
      //镍
      '#forge:raw_materials/nickel',
			'#forge:crushed_raw_materials/nickel',
      '#forge:dirty_dusts/nickel',
      '#forge:dusts/nickel',
      '#forge:ingots/nickel',
      '#forge:plates/nickel',
      '#forge:nuggets/nickel',
      //钨
      '#forge:raw_materials/tungsten',
			'#forge:crushed_raw_materials/tungsten',
      '#forge:dirty_dusts/tungsten',
      '#forge:dusts/tungsten',
      '#forge:ingots/tungsten',
      '#forge:plates/tungsten',
      '#forge:nuggets/tungsten'
		])
		.displayName = "幻想机械师：矿物处理"
})