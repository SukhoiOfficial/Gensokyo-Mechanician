StartupEvents.registry("fluid",e=>{

    e.create('gensokyo_mechanician:slime_fluid').displayName('史莱姆黏液')
    .color(0X6bf059)
    .stillTexture('gensokyo_mechanician:block/slime/still')
    .flowingTexture('gensokyo_mechanician:block/slime/flowing')

    e.create('gensokyo_mechanician:slime_aluminum_oxide_fluid').displayName('史莱姆氧化铝溶液')
    .color(0Xc2f4bc)
    .stillTexture('gensokyo_mechanician:block/slime/still')
    .flowingTexture('gensokyo_mechanician:block/slime/flowing')

    e.create('gensokyo_mechanician:slime_aluminum_fluid').displayName('史莱姆铝溶液')
    .color(0Xc9b8b1)
    .stillTexture('gensokyo_mechanician:block/slime/still')
    .flowingTexture('gensokyo_mechanician:block/slime/flowing')

    e.create('gensokyo_mechanician:molten_chromium').displayName('熔融铬')
    .stillTexture('gensokyo_mechanician:block/chromium_still')
    .flowingTexture('gensokyo_mechanician:block/chromium_flowing')
    .bucketColor(0Xa9a9a9)
    .luminosity(0.5)//无效？

    e.create('gensokyo_mechanician:nether_acid').thinTexture(0X88001b).displayName('下界酸')
    e.create('gensokyo_mechanician:copper_ion_solution').thinTexture(0Xc05630).displayName('铜离子浸出液')
    e.create('gensokyo_mechanician:tin_ion_solution').thinTexture(0Xdad8d2).displayName('锡离子浸出液')
    e.create('gensokyo_mechanician:zinc_ion_solution').thinTexture(0X808270).displayName('锌离子浸出液')
    e.create('gensokyo_mechanician:iron_ion_solution').thinTexture(0Xae2411).displayName('铁离子浸出液')
    e.create('gensokyo_mechanician:gold_ion_solution').thinTexture(0Xfbd034).displayName('金离子浸出液')
    e.create('gensokyo_mechanician:nickel_ion_solution').thinTexture(0Xaf9a6c).displayName('镍离子浸出液')
    e.create('gensokyo_mechanician:aluminum_ion_solution').thinTexture(0Xc9b8b1).displayName('铝离子浸出液')
    e.create('gensokyo_mechanician:chromium_ion_solution').thinTexture(0Xa9a9a9).displayName('铬离子浸出液')

    e.create('gensokyo_mechanician:blaze_compound').displayName('烈焰化合物')
    .stillTexture('gensokyo_mechanician:block/blaze_compound_still')
    .flowingTexture('gensokyo_mechanician:block/blaze_compound_flowing')
    .bucketColor(0Xffc400)
    .luminosity(1.0)

    e.create('gensokyo_mechanician:coal_tar').thinTexture(0X3c2716).displayName('煤焦油')

    e.create('gensokyo_mechanician:mineral_enrichment_fluid').thickTexture(0X585858).displayName('矿物富集液')
    
    e.create('gensokyo_mechanician:cooling_fluid').thinTexture(0X3843ed).displayName('热交换液')
    e.create('gensokyo_mechanician:asphalt').thinTexture(0X212121).displayName('沥青')
    e.create('gensokyo_mechanician:redstone_acid').thinTexture(0Xec4147).displayName('红石酸')

    e.create('gensokyo_mechanician:copper_extraction_fluid').displayName('铜萃取液')
    .color(0Xc05630)
    .stillTexture('gensokyo_mechanician:block/slime/still')
    .flowingTexture('gensokyo_mechanician:block/slime/flowing')

    e.create('gensokyo_mechanician:tin_extraction_fluid').displayName('锡萃取液')
    .color(0Xdad8d2)
    .stillTexture('gensokyo_mechanician:block/slime/still')
    .flowingTexture('gensokyo_mechanician:block/slime/flowing')

    e.create('gensokyo_mechanician:zinc_extraction_fluid').displayName('锌萃取液')
    .color(0X808270)
    .stillTexture('gensokyo_mechanician:block/slime/still')
    .flowingTexture('gensokyo_mechanician:block/slime/flowing')

    e.create('gensokyo_mechanician:soul_solution').thinTexture(0Xf0f0f0).displayName('灵魂溶液')
    e.create('gensokyo_mechanician:ender_fluid').thinTexture(0X258474).displayName('熔融末影珍珠')
    e.create('gensokyo_mechanician:ender_fuel_fluid').thinTexture(0X0b4d42).displayName('末影燃油')
})