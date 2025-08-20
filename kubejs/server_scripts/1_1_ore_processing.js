ServerEvents.recipes(e =>{

    //耐火砂浆
    e.shapeless(Item.of('createmetallurgy:refractory_mortar',1),['#forge:sand','#forge:sand','clay','water_bucket']
    ).replaceIngredient('water_bucket','bucket')

    //耐火砖
    e.smelting('gensokyo_mechanician:refractory_brick','createmetallurgy:refractory_mortar',0.3,20*10)

    //熔炼设备
    e.remove({output:'createmetallurgy:foundry_basin'})
    e.shaped('createmetallurgy:foundry_basin',[
        'A A',
        'ABA',
        'AAA'
    ],{A:'gensokyo_mechanician:refractory_brick',B:'createmetallurgy:refractory_mortar'})
    e.replaceInput({output:'createmetallurgy:foundry_lid'},'create:andesite_alloy','gensokyo_mechanician:refractory_brick')
    e.replaceInput({output:'createmetallurgy:casting_basin'},'create:andesite_alloy','gensokyo_mechanician:refractory_brick')
    e.replaceInput({output:'createmetallurgy:casting_table'},'create:andesite_alloy','gensokyo_mechanician:refractory_brick')
    //工业坩埚
    e.remove({output:'createmetallurgy:industrial_crucible'})
    //e.shaped(Item.of('createmetallurgy:industrial_crucible',2),[
    //    'AAA',
    //    'A A',
    //    'AAA'
    //],{A:'gensokyo_mechanician:refractory_brick'})
    //工业坩埚与低温加热存在损坏存档的bug，已禁用
    e.remove({output:'createmetallurgy:foundry_unit'})
    e.shaped(Item.of('createmetallurgy:foundry_unit',1),[
        'ABA'
    ],{A:'gensokyo_mechanician:refractory_brick',B:'glass'})
    e.remove({output:'createlowheated:basic_burner'})
    e.shaped(Item.of('createlowheated:basic_burner',1),[
        'A A',
        'AAA'
    ],{A:'gensokyo_mechanician:refractory_brick'})
    //打火石
    e.shapeless('flint_and_steel',['andesite','flint'])

    //铸造桶
    e.remove({output:'createfluidstuffs:bucket'})
    e.shaped('createfluidstuffs:bucket',[
        'A A',
        ' A '
    ],{A:'gensokyo_mechanician:refractory_brick'})

    //石墨坯模
    e.shaped('createmetallurgy:graphite_blank_mold',[
        'GG'
    ],{G:'createmetallurgy:graphite'})
    e.shapeless('createmetallurgy:graphite_ingot_mold','createmetallurgy:graphite_blank_mold')
    e.shapeless('createmetallurgy:graphite_nugget_mold','createmetallurgy:graphite_ingot_mold')
    e.shapeless('createmetallurgy:graphite_plate_mold','createmetallurgy:graphite_nugget_mold')
    e.shapeless('createmetallurgy:graphite_ingot_mold','createmetallurgy:graphite_plate_mold')

    //熔铸搅拌器
    e.replaceInput({output:'createmetallurgy:sturdy_whisk'},'createmetallurgy:tungsten_sheet','create:sturdy_sheet')

    //===============================矿物处理=================================

    //移除旧的矿物粉碎配方
    e.remove({type:'create:milling',input:'#create:crushed_raw_materials'})
    e.remove({type:'create:crushing',input:'#forge:raw_materials'})
    e.remove({type:'create:crushing',input:'#forge:raw_materials/tin'})
    e.remove({type:'create:crushing',input:'#forge:raw_materials/nickel'})
    e.remove({type:'create:crushing',input:'unify:raw_aluminum'})
    e.remove({type:'create:crushing',input:'#forge:storage_blocks'})
    //移除旧的矿物熔炼配方
    e.remove({id:/.*melting.*/,mod:'createmetallurgy'})
    //移除旧的矿物洗涤配方
    e.remove({type:'create:splashing',input:'create:crushed_raw_tin'})
    e.remove({id:/.*unify:splashing.*/})
    //移除重复的合成表
    e.remove({id:'createaddition:pressing/zinc_ingot'})
    e.remove({id:/.*vintageimprovements:pressing.*/})

    //移除旧的bulk_fermenting配方
    e.remove({id:/.*createdieselgenerators:bulk_fermenting.*/})

    //铜矿处理
    //通用：
    //移除直接冶炼的配方
    e.remove({type:'blasting',output:'#forge:ingots/copper'})
    e.remove({type:'smelting',output:'#forge:ingots/copper'})
    e.remove({type:'blasting',output:'#forge:storage_blocks/copper'})
    e.remove({type:'smelting',output:'#forge:storage_blocks/copper'})
    //移除直接洗涤的配方
    e.remove({input:'#forge:crushed_raw_materials/copper',output:'#forge:nuggets/copper'})
    //=>粉碎铜矿石
        //辊压机粉碎
        e.recipes.create.pressing(['#forge:crushed_raw_materials/copper',Item.of('#forge:crushed_raw_materials/copper').withChance(0.25)],'#forge:raw_materials/copper')
        //粉碎轮粉碎
        e.recipes.create.crushing(['#forge:crushed_raw_materials/copper',Item.of('#forge:crushed_raw_materials/copper').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:raw_materials/copper')
    //=>污浊的铜粉
    e.recipes.create.crushing(['#forge:dirty_dusts/copper',Item.of('#forge:dirty_dusts/copper').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:crushed_raw_materials/copper')
    //=>铜粉
    e.remove({id:'createmetallurgy:splashing/dirty_copper_dust'})
    e.recipes.create.splashing(['#forge:dusts/copper',Item.of('#forge:dusts/tin').withChance(0.25)],'#forge:dirty_dusts/copper')
    //
    //基础熔炼
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:copper_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "minecraft:copper_unprocessed"
        }],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_copper"
        }]
    })
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:copper_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "minecraft:copper_one_ingot"
        }],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_copper"
        }]
    })
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:copper_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "forge:nuggets/copper"
        }],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_copper"
        }]
    })
    //加热搅拌熔炼
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:copper_unprocessed","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 120,
            "fluid": "createmetallurgy:molten_copper"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:copper_one_ingot","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_copper"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "forge:nuggets/copper","nbt": {}}
        ],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_copper"
        }]
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:copper_unprocessed"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_copper","amount": 150}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:copper_one_ingot"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_copper","amount": 90}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "forge:nuggets/copper"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_copper","amount": 10}
	  ],
	  "processingTime": 20
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/copper"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:copper_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "gensokyo_mechanician:copper_ion_solution","amount": 200}
        ],
        "processingTime": 400,
        "results": [
            {"fluid": "createmetallurgy:molten_copper","amount": 150},
            {"fluid": "vintageimprovements:sulfur_dioxide","amount": 100}
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:copper_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_copper","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })

    //锡矿处理
    //通用：
    //移除直接冶炼的配方
    e.remove({type:'blasting',output:'#forge:ingots/tin'})
    e.remove({type:'smelting',output:'#forge:ingots/tin'})
    e.remove({type:'blasting',output:'#forge:storage_blocks/tin'})
    e.remove({type:'smelting',output:'#forge:storage_blocks/tin'})
    //移除直接洗涤的配方
    e.remove({input:'#forge:crushed_raw_materials/tin',output:'#forge:nuggets/tin'})
    //=>粉碎锡矿石
        //辊压机粉碎
        e.recipes.create.pressing(['#forge:crushed_raw_materials/tin',Item.of('#forge:crushed_raw_materials/tin').withChance(0.25)],'#forge:raw_materials/tin')
        //粉碎轮粉碎
        e.recipes.create.crushing(['#forge:crushed_raw_materials/tin',Item.of('#forge:crushed_raw_materials/tin').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:raw_materials/tin')
    //=>污浊的锡粉
    e.recipes.create.crushing(['#forge:dirty_dusts/tin',Item.of('#forge:dirty_dusts/tin').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:crushed_raw_materials/tin')
    //=>锡粉
    e.remove({id:'createmetallurgy:splashing/dirty_tin_dust'})
    e.recipes.create.splashing(['#forge:dusts/tin',Item.of('#forge:dusts/zinc').withChance(0.25)],'#forge:dirty_dusts/tin')
    //
    //基础熔炼
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:tin_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "minecraft:tin_unprocessed"
        }],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_tin"
        }]
    })
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:tin_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "minecraft:tin_one_ingot"
        }],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_tin"
        }]
    })
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:tin_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "forge:nuggets/tin"
        }],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_tin"
        }]
    })
    //加热搅拌熔炼
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:tin_unprocessed","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 120,
            "fluid": "createmetallurgy:molten_tin"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:tin_one_ingot","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_tin"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "forge:nuggets/tin","nbt": {}}
        ],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_tin"
        }]
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:tin_unprocessed"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_tin","amount": 150}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:tin_one_ingot"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_tin","amount": 90}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "forge:nuggets/tin"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_tin","amount": 10}
	  ],
	  "processingTime": 20
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/tin"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:tin_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "gensokyo_mechanician:tin_ion_solution","amount": 200}
        ],
        "processingTime": 400,
        "results": [
            {"fluid": "createmetallurgy:molten_tin","amount": 150},
            {"fluid": "vintageimprovements:sulfur_dioxide","amount": 100}
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:tin_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_tin","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })

    //锌矿处理
    //通用：
    //移除直接冶炼的配方
    e.remove({type:'blasting',output:'#forge:ingots/zinc'})
    e.remove({type:'smelting',output:'#forge:ingots/zinc'})
    e.remove({type:'blasting',output:'#forge:storage_blocks/zinc'})
    e.remove({type:'smelting',output:'#forge:storage_blocks/zinc'})
    //移除直接洗涤的配方
    e.remove({input:'#forge:crushed_raw_materials/zinc',output:'#forge:nuggets/zinc'})
    //=>粉碎锌矿石
        //辊压机粉碎
        e.recipes.create.pressing(['#forge:crushed_raw_materials/zinc',Item.of('#forge:crushed_raw_materials/zinc').withChance(0.25)],'#forge:raw_materials/zinc')
        //粉碎轮粉碎
        e.recipes.create.crushing(['#forge:crushed_raw_materials/zinc',Item.of('#forge:crushed_raw_materials/zinc').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:raw_materials/zinc')
    //=>污浊的锌粉
    e.recipes.create.crushing(['#forge:dirty_dusts/zinc',Item.of('#forge:dirty_dusts/zinc').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:crushed_raw_materials/zinc')
    //=>锌粉
    e.remove({id:'createmetallurgy:splashing/dirty_zinc_dust'})
    e.recipes.create.splashing(['#forge:dusts/zinc',Item.of('#forge:dusts/iron').withChance(0.25)],'#forge:dirty_dusts/zinc')
    //
    //基础熔炼
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:zinc_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "minecraft:zinc_unprocessed"
        }],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_zinc"
        }]
    })
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:zinc_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "minecraft:zinc_one_ingot"
        }],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_zinc"
        }]
    })
    e.custom({
        "type": "createmetallurgy:melting",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag": "minecraft:zinc_unprocessed"
        }}],
        "heatRequirement": "lowheated",
        "ingredients": [{
            "tag": "forge:nuggets/zinc"
        }],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_zinc"
        }]
    })
    //加热搅拌熔炼
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:zinc_unprocessed","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 120,
            "fluid": "createmetallurgy:molten_zinc"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:zinc_one_ingot","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_zinc"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "forge:nuggets/zinc","nbt": {}}
        ],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_zinc"
        }]
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:zinc_unprocessed"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_zinc","amount": 150}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:zinc_one_ingot"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_zinc","amount": 90}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "forge:nuggets/zinc"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_zinc","amount": 10}
	  ],
	  "processingTime": 20
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/zinc"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:zinc_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "gensokyo_mechanician:zinc_ion_solution","amount": 200}
        ],
        "processingTime": 400,
        "results": [
            {"fluid": "createmetallurgy:molten_zinc","amount": 150},
            {"fluid": "vintageimprovements:sulfur_dioxide","amount": 100}
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:zinc_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_zinc","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })

    //黑曜石加工
    e.recipes.create.sequenced_assembly(
      ['create:powdered_obsidian'],
      'obsidian',
      [
        e.recipes.create.pressing('obsidian','obsidian'),
        e.recipes.create.pressing('obsidian','obsidian'),
        e.recipes.create.pressing('obsidian','obsidian'),
        e.recipes.create.pressing('obsidian','obsidian')
      ]
    ).transitionalItem('obsidian').loops(1)
    //吸管
    e.remove({output:'createaddition:straw'})
    e.custom({
        "type":"createaddition:rolling",
        "input": {
            "item": "create:sturdy_sheet"
        },
        "result": {
            "item": "createaddition:straw",
            "count": 1
        }
    })

    //烈焰人燃烧室
    e.remove({output:'create:empty_blaze_burner'})
    e.shaped('create:empty_blaze_burner',[
        'AAA',
        'ABA',
        'AAA'
    ],{A:'create:sturdy_sheet',B:'netherrack'})

    //铁矿处理
    //通用：
    //移除直接冶炼的配方
    e.remove({type:'blasting',output:'#forge:ingots/iron'})
    e.remove({type:'smelting',output:'#forge:ingots/iron'})
    e.remove({type:'blasting',output:'#forge:storage_blocks/iron'})
    e.remove({type:'smelting',output:'#forge:storage_blocks/iron'})
    //移除直接洗涤的配方
    e.remove({input:'#forge:crushed_raw_materials/iron',output:'#forge:nuggets/iron'})
    //=>粉碎铁矿石
        //辊压机粉碎
        e.recipes.create.pressing(['#forge:crushed_raw_materials/iron',Item.of('#forge:crushed_raw_materials/iron').withChance(0.25)],'#forge:raw_materials/iron')
        //粉碎轮粉碎
        e.recipes.create.crushing(['#forge:crushed_raw_materials/iron',Item.of('#forge:crushed_raw_materials/iron').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:raw_materials/iron')
    //=>污浊的铁粉
    e.recipes.create.crushing(['#forge:dirty_dusts/iron',Item.of('#forge:dirty_dusts/iron').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:crushed_raw_materials/iron')
    //=>铁粉
    e.remove({id:'createmetallurgy:splashing/dirty_iron_dust'})
    e.recipes.create.splashing(['#forge:dusts/iron',Item.of('redstone').withChance(0.25)],'#forge:dirty_dusts/iron')
    //
    //加热搅拌熔炼
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:iron_unprocessed","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 120,
            "fluid": "createmetallurgy:molten_iron"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:iron_one_ingot","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_iron"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "forge:nuggets/iron","nbt": {}}
        ],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_iron"
        }]
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:iron_unprocessed"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_iron","amount": 150}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:iron_one_ingot"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_iron","amount": 90}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "forge:nuggets/iron"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_iron","amount": 10}
	  ],
	  "processingTime": 20
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/iron"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:iron_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "gensokyo_mechanician:iron_ion_solution","amount": 200}
        ],
        "processingTime": 400,
        "results": [
            {"fluid": "createmetallurgy:molten_iron","amount": 150},
            {"fluid": "vintageimprovements:sulfur_dioxide","amount": 100}
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:iron_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_iron","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })
    //特殊：
    //沙砾刷铁配方改为刷铜
    e.replaceOutput({input:'gravel'},'iron_nugget','create:copper_nugget')

    //金矿处理
    //通用：
    //移除直接冶炼的配方
    e.remove({type:'blasting',output:'#forge:ingots/gold'})
    e.remove({type:'smelting',output:'#forge:ingots/gold'})
    e.remove({type:'blasting',output:'#forge:storage_blocks/gold'})
    e.remove({type:'smelting',output:'#forge:storage_blocks/gold'})
    //移除直接洗涤的配方
    e.remove({input:'#forge:crushed_raw_materials/gold',output:'#forge:nuggets/gold'})
    //=>粉碎金矿石
        //辊压机粉碎
        e.recipes.create.pressing(['#forge:crushed_raw_materials/gold',Item.of('#forge:crushed_raw_materials/gold').withChance(0.25)],'#forge:raw_materials/gold')
        //粉碎轮粉碎
        e.recipes.create.crushing(['#forge:crushed_raw_materials/gold',Item.of('#forge:crushed_raw_materials/gold').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:raw_materials/gold')
    //=>污浊的金粉
    e.recipes.create.crushing(['#forge:dirty_dusts/gold',Item.of('#forge:dirty_dusts/gold').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:crushed_raw_materials/gold')
    //=>金粉
    e.remove({id:'createmetallurgy:splashing/dirty_gold_dust'})
    e.recipes.create.splashing(['#forge:dusts/gold',Item.of('#forge:dusts/copper').withChance(0.25)],'#forge:dirty_dusts/gold')
    //
    //加热搅拌熔炼
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:gold_unprocessed","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 120,
            "fluid": "createmetallurgy:molten_gold"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:gold_one_ingot","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_gold"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "forge:nuggets/gold","nbt": {}}
        ],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_gold"
        }]
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:gold_unprocessed"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_gold","amount": 150}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:gold_one_ingot"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_gold","amount": 90}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "forge:nuggets/gold"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_gold","amount": 10}
	  ],
	  "processingTime": 20
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/gold"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:gold_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "gensokyo_mechanician:gold_ion_solution","amount": 200}
        ],
        "processingTime": 400,
        "results": [
            {"fluid": "createmetallurgy:molten_gold","amount": 150},
            {"fluid": "vintageimprovements:sulfur_dioxide","amount": 100}
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:gold_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_gold","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })

    //镍矿处理
    //通用：
    //移除直接冶炼的配方
    e.remove({type:'blasting',output:'#forge:ingots/nickel'})
    e.remove({type:'smelting',output:'#forge:ingots/nickel'})
    e.remove({type:'blasting',output:'#forge:storage_blocks/nickel'})
    e.remove({type:'smelting',output:'#forge:storage_blocks/nickel'})
    //移除直接洗涤的配方
    e.remove({input:'#forge:crushed_raw_materials/nickel',output:'#forge:nuggets/nickel'})
    //=>粉碎镍矿石
        //辊压机粉碎
        e.recipes.create.pressing(['#forge:crushed_raw_materials/nickel',Item.of('#forge:crushed_raw_materials/nickel').withChance(0.25)],'#forge:raw_materials/nickel')
        //粉碎轮粉碎
        e.recipes.create.crushing(['#forge:crushed_raw_materials/nickel',Item.of('#forge:crushed_raw_materials/nickel').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:raw_materials/nickel')
    //=>污浊的镍粉
    e.recipes.create.crushing(['#forge:dirty_dusts/nickel',Item.of('#forge:dirty_dusts/nickel').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:crushed_raw_materials/nickel')
    //=>镍粉
    e.recipes.create.splashing(['#forge:dusts/nickel',Item.of('#forge:dusts/iron').withChance(0.25)],'#forge:dirty_dusts/nickel')
    //
    //加热搅拌熔炼
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:nickel_unprocessed","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 120,
            "fluid": "createmetallurgy:molten_nickel"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:nickel_one_ingot","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_nickel"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "forge:nuggets/nickel","nbt": {}}
        ],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_nickel"
        }]
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:nickel_unprocessed"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_nickel","amount": 150}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:nickel_one_ingot"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_nickel","amount": 90}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "forge:nuggets/nickel"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_nickel","amount": 10}
	  ],
	  "processingTime": 20
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/nickel"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:nickel_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "gensokyo_mechanician:nickel_ion_solution","amount": 200}
        ],
        "processingTime": 400,
        "results": [
            {"fluid": "createmetallurgy:molten_nickel","amount": 150},
            {"fluid": "vintageimprovements:sulfur_dioxide","amount": 100}
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:nickel_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_nickel","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })
    //特殊
    //原矿粉碎：产出由圆石改为下界岩
    e.replaceOutput({id:'unify:crushing/nickel_ore'},'cobblestone','netherrack')
    e.replaceOutput({id:'unify:crushing/deepslate_nickel_ore'},'cobbled_deepslate','netherrack')

    //铝矿处理
    //通用
    e.remove({type:'blasting',output:'unify:aluminum_ingot'})
    e.remove({type:'smelting',output:'unify:aluminum_ingot'})
    e.remove({type:'blasting',output:'unify:aluminum_block'})
    e.remove({type:'smelting',output:'unify:aluminum_block'})
    e.remove({input:'create:crushed_raw_aluminum',output:'unify:aluminum_nugget'})
    //=>粉碎铝矿石
        //辊压机粉碎
        e.recipes.create.pressing(['create:crushed_raw_aluminum',Item.of('create:crushed_raw_aluminum').withChance(0.25)],'unify:raw_aluminum')
        //粉碎轮粉碎
        e.recipes.create.crushing(['create:crushed_raw_aluminum',Item.of('create:crushed_raw_aluminum').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'unify:raw_aluminum')
    //=>污浊的铝矿石粉
    e.recipes.create.crushing(['gensokyo_mechanician:dirty_aluminum_ore_dust',Item.of('gensokyo_mechanician:dirty_aluminum_ore_dust').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'create:crushed_raw_aluminum')
    //=>铝矿石粉
    e.recipes.create.splashing(['gensokyo_mechanician:aluminum_ore_dust',Item.of('#forge:dusts/iron').withChance(0.25)],'gensokyo_mechanician:dirty_aluminum_ore_dust')
    //加热搅拌熔炼
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:aluminum_unprocessed","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 120,
            "fluid": "createmetallurgy:molten_aluminum"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "minecraft:aluminum_one_ingot","nbt": {}}
        ],
        "processingTime": 400,
        "results": [{
            "amount": 90,
            "fluid": "createmetallurgy:molten_aluminum"
        }]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"count": 1,"tag": "forge:nuggets/aluminum","nbt": {}}
        ],
        "processingTime": 40,
        "results": [{
            "amount": 10,
            "fluid": "createmetallurgy:molten_aluminum"
        }]
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:aluminum_unprocessed"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_aluminum","amount": 150}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "minecraft:aluminum_one_ingot"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_aluminum","amount": 90}
	  ],
	  "processingTime": 200
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"tag": "forge:nuggets/aluminum"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_aluminum","amount": 10}
	  ],
	  "processingTime": 20
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/aluminum"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:aluminum_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "gensokyo_mechanician:aluminum_ion_solution","amount": 200}
        ],
        "processingTime": 400,
        "results": [
            {"fluid": "createmetallurgy:molten_aluminum","amount": 150},
            {"fluid": "vintageimprovements:sulfur_dioxide","amount": 100}
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:aluminum_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_aluminum","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })
    //特殊
    //铝板
    e.remove({id:'vintageimprovements:pressing/aluminum_ingot'})
    e.recipes.create.pressing('unify:aluminum_sheet','unify:aluminum_ingot')
    //滴水石锥
    e.recipes.create.splashing([Item.of('create:crushed_raw_aluminum').withChance(0.9),Item.of('pointed_dripstone').withChance(0.12)],'create:crushed_raw_aluminum')
    //烧制氧化铝
    e.smelting('gensokyo_mechanician:aluminum_oxide_dust','gensokyo_mechanician:aluminum_ore_dust')
    //史莱姆氧化铝溶液
    e.recipes.create.mixing(Fluid.of('gensokyo_mechanician:slime_aluminum_oxide_fluid',1000),[Fluid.of('gensokyo_mechanician:slime_fluid',1000),'gensokyo_mechanician:aluminum_oxide_dust'])
    //电解
    e.custom({
	  "type":"createaddition:charging",
	  "input": {
      "item": "gensokyo_mechanician:slime_aluminum_oxide_fluid_bucket",
		  "count": 1
	  },
	  "result": {
		  "item": "gensokyo_mechanician:slime_aluminum_fluid_bucket",
		  "count": 1
	  },
	  "energy": 600000,
	  "maxChargeRate": 30000
    })
    //分液池转流体
    e.recipes.create.emptying(Fluid.of('gensokyo_mechanician:slime_fluid',250),'slime_ball')
    //离心
    e.custom(
      {
	    "type":"vintageimprovements:centrifugation",
	    "ingredients": [ 
		    {
		    "fluid": "gensokyo_mechanician:slime_aluminum_fluid",
            "amount": 1000
		    }
	    ],
	    "results": [
	    	{
	    		"item": "gensokyo_mechanician:aluminum_dust",
	    		"count": 1
	    	},
	    	{
	    		"fluid": "gensokyo_mechanician:slime_fluid",
	    		"amount": 1000
	    	}
	    ],
	    "processingTime": 1000
    }
    )
    //回收粘液
    e.recipes.create.filling('slime_ball',['bowl',Fluid.of('gensokyo_mechanician:slime_fluid',250)])
    //红石构件
    e.remove({output:'vintageimprovements:redstone_module'})
    e.shapeless('vintageimprovements:redstone_module',['create:precision_mechanism','create:electron_tube'])

    //铬矿处理
    //特殊
    //哭泣的黑曜石
    e.recipes.create.haunting([Item.of('crying_obsidian').withChance(0.12),Item.of('basalt').withChance(0.75)],'obsidian')
    e.shapeless('crying_obsidian',['obsidian','ghast_tear'])
    //铬酸盐粉
    e.recipes.create.crushing([Item.of('gensokyo_mechanician:chromate_dust'),Item.of('obsidian').withChance(0.75)],'crying_obsidian')
    e.recipes.create.crushing([Item.of('gensokyo_mechanician:chromate_dust').withChance(0.4)],'biomesoplenty:blackstone_bulb')
    //氧化铬粉
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {
            "item": "gensokyo_mechanician:chromate_dust"
            },
            {
            "fluid": "vintageimprovements:sulfuric_acid",
            "amount": 200
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 300,
        "results": [
            {
            "item": "gensokyo_mechanician:chromium_oxide_dust"
            }
        ]
    })
    //铝热还原
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"tag": "forge:dusts/aluminum"},
            {
            "fluid": "vintageimprovements:sulfuric_acid",
            "amount": 200
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:aluminum_ion_solution",
            "amount": 150
            },
            {
            "fluid": "vintageimprovements:sulfur_dioxide",
            "amount": 50
            }
        ]
    }).id('bulk_fermenting_aluminum_1')
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"item": "gensokyo_mechanician:chromium_oxide_dust"},
            {"item": "gensokyo_mechanician:aluminum_dust"},
            {"item": "blaze_powder"}
        ],
        "heatRequirement": "heated",
        "processingTime": 300,
        "results": [
            {"item": "gensokyo_mechanician:chromium_dust"},
            {"item": "gensokyo_mechanician:aluminum_oxide_dust"}
        ]
    }).id('bulk_fermenting_aluminum_2')
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"item": "gensokyo_mechanician:chromium_dust"}
	  ],
	  "results": [
	  	{"fluid": "gensokyo_mechanician:molten_chromium","amount": 150}
	  ],
	  "processingTime": 200
    })
    //酸浸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"item": "gensokyo_mechanician:chromium_dust"},
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ],
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:chromium_ion_solution",
            "amount": 200
            }
        ]
    })
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
    "secondaryFluidOutput": 1,
	  "ingredients": [ 
	  	{"fluid": "gensokyo_mechanician:chromium_ion_solution","amount": 200}
	  ],
	  "results": [
	  	{"fluid": "gensokyo_mechanician:molten_chromium","amount": 180},
        {"fluid": "vintageimprovements:sulfur_dioxide","amount": 150}
	  ],
	  "processingTime": 200
    })

    //硫酸生产
    //生产线：gensokyo_mechanician\data\vintageimprovements
    //硫磺
    e.recipes.create.crushing([Item.of('vintageimprovements:sulfur_chunk'),Item.of('vintageimprovements:sulfur_chunk').withChance(0.3),Item.of('vintageimprovements:sulfur_chunk').withChance(0.1)],'biomesoplenty:brimstone')
    
    //下界酸
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"item": "nether_wart"},
            {"item": "nether_wart"},
            {"item": "nether_wart"},
            {"item": "nether_wart"},
            {
            "fluid": "vintageimprovements:sulfuric_acid",
            "amount": 200
            }
        ],
        "heatRequirement": "heated",
        "processingTime": 300,
        "results": [
            {
            "fluid": "gensokyo_mechanician:nether_acid",
            "amount": 200
            }
        ]
    })

    //钨矿处理
    //通用：
    //移除直接冶炼的配方
    e.remove({type:'blasting',output:'#forge:ingots/tungsten'})
    e.remove({type:'smelting',output:'#forge:ingots/tungsten'})
    e.remove({type:'blasting',output:'#forge:storage_blocks/tungsten'})
    e.remove({type:'smelting',output:'#forge:storage_blocks/tungsten'})
    //移除直接洗涤的配方
    e.remove({input:'#forge:crushed_raw_materials/tungsten',output:'#forge:nuggets/tungsten'})
    //=>粉碎钨矿石
        //辊压机粉碎
        e.recipes.create.pressing(['#forge:crushed_raw_materials/tungsten',Item.of('#forge:crushed_raw_materials/tungsten').withChance(0.25)],'#forge:raw_materials/tungsten')
        //粉碎轮粉碎
        e.recipes.create.crushing(['#forge:crushed_raw_materials/tungsten',Item.of('#forge:crushed_raw_materials/tungsten').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:raw_materials/tungsten')
    //=>污浊的钨矿石粉
    e.recipes.create.crushing(['#forge:dirty_dusts/tungsten',Item.of('#forge:dirty_dusts/tungsten').withChance(0.25),Item.of('create:experience_nugget').withChance(0.75)],'#forge:crushed_raw_materials/tungsten')
    //=>钨矿石粉
    e.remove({id:'createmetallurgy:splashing/dirty_wolframite_dust'})
    e.recipes.create.splashing(['#forge:dusts/tungsten',Item.of('#forge:dusts/gold').withChance(0.25)],'#forge:dirty_dusts/tungsten')
    //
    //特殊：
    //补全钨板配方
    e.recipes.create.pressing('createmetallurgy:tungsten_sheet','createmetallurgy:tungsten_ingot')
    //加压酸浸
    e.custom({
	"type":"vintageimprovements:pressurizing",
    "heatRequirement": "heated",
    "secondaryFluidInput": 0,
	  "ingredients": [ 
	  	{"tag": "forge:dusts/tungsten"},
        {"fluid": "gensokyo_mechanician:nether_acid","amount": 200}
	  ],
	  "results": [
        {"item": "gensokyo_mechanician:tungstic_acid_dust"},
	  	{"fluid": "gensokyo_mechanician:iron_ion_solution","amount": 200}
	  ],
	  "processingTime": 200
    })
    //真空熔炼
    e.custom({
	"type":"vintageimprovements:vacuumizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	  	{"item": "gensokyo_mechanician:tungstic_acid_dust"}
	  ],
	  "results": [
	  	{"fluid": "createmetallurgy:molten_tungsten","amount": 150}
	  ],
	  "processingTime": 200
    })

    //==============================合金制造================================

    //安山合金制造
    //移除旧配方
    e.remove({input:'andesite',output:'create:andesite_alloy'})
    e.remove({input:'andesite',output:'create:andesite_alloy_block'})
    //直接浇铸
    e.custom({
        "type": "createmetallurgy:casting_in_basin",
        "ingredients": [
        {"item": "minecraft:andesite"},
        {"amount": 60,"fluid": "createmetallurgy:molten_zinc","nbt": {}}
        ],
        "mold_consumed": true,
        "processingTime": 60,
        "result": 
        {"item": "create:andesite_alloy"}
    })
    //注液器
    e.recipes.create.filling('create:andesite_alloy',['andesite',Fluid.of('createmetallurgy:molten_zinc',60)])
    //加热辊压
    e.recipes.create.compacting('create:andesite_alloy',['andesite',Fluid.of('createmetallurgy:molten_zinc',45)]).heated()
    //超级加热压缩
    e.custom({
	"type":"vintageimprovements:pressurizing",
    "heatRequirement": "superheated",
	  "ingredients": [ 
	    {"item": "andesite"},
        {"fluid": "createmetallurgy:molten_zinc","amount": 30}
	  ],
	  "results": [
	  	{"item": "create:andesite_alloy"}
	  ],
	  "processingTime": 150
    })

    //青铜制造
    //移除旧配方
    e.remove({type:'create:mixing',output:'create_ironworks:bronze_nugget'})
    e.remove({type:'create:mixing',output:'create_ironworks:bronze_ingot'})
    e.remove({type:'create:mixing',output:'unify:bronze_ingot'})
    e.remove({id:'createmetallurgy:alloying/bronze'})
    //混合搅拌
    e.recipes.create.mixing(Fluid.of('createmetallurgy:molten_bronze',40),[Fluid.of('createmetallurgy:molten_copper',30),Fluid.of('createmetallurgy:molten_tin',10)]).lowheated().processingTime(100)
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "lowheated",
        "ingredients": [
        {"fluid": "createmetallurgy:molten_copper","amount": 30},
        {"fluid": "createmetallurgy:molten_tin","amount": 10}
        ],
        "processingTime": 100,
        "results": [{
            "amount": 40,
            "fluid": "createmetallurgy:molten_bronze"
        }]
    })

    //黄铜制造
    //移除旧配方
    e.remove({type:'create:mixing',output:'create:brass_ingot'})
    e.remove({type:'create:mixing',output:'create:brass_nugget'})
    e.remove({id:'createmetallurgy:alloying/brass'})
    //混合搅拌
    e.custom({
        "type": "createmetallurgy:alloying",
        "heatRequirement": "heated",
        "ingredients": [
        {"fluid": "createmetallurgy:molten_copper","amount": 30},
        {"fluid": "createmetallurgy:molten_zinc","amount": 30},
        {"fluid": "createmetallurgy:molten_aluminum","amount": 10}
        ],
        "processingTime": 200,
        "results": [{
            "amount": 70,
            "fluid": "createmetallurgy:molten_brass"
        }]
    })

    //钢铁制造
    //移除旧配方
    e.remove({type:'create:mixing',output:'#forge:ingots/steel'})
    e.remove({type:'create:mixing',output:'#forge:nuggets/steel'})
    e.remove({id:'createmetallurgy:alloying/steel'})
    e.remove({id:'unify:compacting/steel_ingot'})
    e.remove({id:'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals'})
    //铸造配方
    e.remove({id:'createmetallurgy:casting_in_basin/steel/block'})
    e.remove({id:'createmetallurgy:casting_in_table/steel/ingot'})
    e.custom({
        "type": "createmetallurgy:casting_in_basin",
        "ingredients": [
            {
            "amount": 810,
            "fluid": "createmetallurgy:molten_steel",
            "nbt": {}
            }
        ],
        "processingTime": 320,
        "result": {
            "item": "create_ironworks:steel_block"
        }
    })
    e.custom({
        "type": "createmetallurgy:casting_in_table",
        "ingredients": [
            {
            "item": "createmetallurgy:graphite_ingot_mold"
            },
            {
            "amount": 90,
            "fluid": "createmetallurgy:molten_steel",
            "nbt": {}
            }
        ],
        "processingTime": 60,
        "result": {
            "item": "create_ironworks:steel_ingot"
        }
    })
    //反应仓生产
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"fluid": "createmetallurgy:molten_iron","amount": 90},
            {"fluid": "gensokyo_mechanician:molten_chromium","amount": 20},
            {"fluid": "createmetallurgy:molten_nickel","amount": 10},
            {"fluid": "gensokyo_mechanician:blaze_compound","amount": 150},
        ],
        "heatRequirement": "superheated",
        "processingTime": 2400,
        "results": [
            {
            "fluid": "createmetallurgy:molten_steel",
            "amount": 120
            }
        ]
    })

    //烈焰粉生产线
    //余烬面粉
    e.remove({output:'create:cinder_flour'})
    e.recipes.create.crushing([Item.of('create:cinder_flour',1).withChance(0.12),Item.of('create:cinder_flour',1).withChance(0.04)],'netherrack')
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"item": "create:cinder_flour"},
            {"item": "create:cinder_flour"},
            {"item": "magma_cream"},
            {"fluid": "lava","amount": 100},
        ],
        "heatRequirement": "heated",
        "processingTime": 600,
        "results": [
            {"item": "create:cinder_flour"},
            {"item": "create:cinder_flour"},
            {"item": "create:cinder_flour"},
            {"item": "create:cinder_flour"},
        ]
    })
    //岩浆膏
    e.remove({id:'createdieselgenerators:basin_fermenting/magma_cream'})
    //烈焰化合物
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"item": "create:cinder_flour"},
            {"item": "blaze_powder"},
            {"fluid": "lava","amount": 100},
        ],
        "heatRequirement": "heated",
        "processingTime": 600,
        "results": [
            {"fluid": "gensokyo_mechanician:blaze_compound","amount": 100},
        ]
    })
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {"item": "blaze_powder"},
            {"item": "blaze_powder"},
            {"item": "blaze_powder"},
            {"item": "blaze_powder"},
        ],
        "heatRequirement": "heated",
        "processingTime": 300,
        "results": [
            {"fluid": "gensokyo_mechanician:blaze_compound","amount": 100},
        ]
    })
    //烈焰棒
    e.custom({
        "type": "createdieselgenerators:compression_molding",
        "ingredients": [
            {"fluid": "gensokyo_mechanician:blaze_compound","amount": 100},
        ],
        "mold": "createdieselgenerators:lines",
        "results": [
            {
            "item": "minecraft:blaze_rod",
            "count": 1
            }
        ]
    })


})