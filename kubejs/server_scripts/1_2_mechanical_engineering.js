ServerEvents.recipes(e =>{

    //焦碳 煤焦油
    //工作盆干馏
    e.custom({
        "type": "createdieselgenerators:basin_fermenting",
        "ingredients": [
            {
            "item": "coal"
            }
        ],
        "processingTime": 200,
        "heatRequirement": "lowheated",
        "results": [
            {
            "item": "createmetallurgy:coke"
            },
            {
            "fluid": "gensokyo_mechanician:coal_tar",
            "amount": 200
            }
        ]
    })
    //化学反应仓
    e.custom({
        "type": "createdieselgenerators:bulk_fermenting",
        "ingredients": [
            {
            "item": "coal"
            }
        ],
        "processingTime": 100,
        "heatRequirement": "heated",
        "results": [
            {
            "item": "createmetallurgy:coke"
            },
            {
            "fluid": "gensokyo_mechanician:coal_tar",
            "amount": 300
            }
        ]
    })
    //焦炭燃烧时间为煤炭的2倍
    Item.getItem('createmetallurgy:coke').burnTime = 3200

    //防腐木板
    //浇铸
    e.recipes.createmetallurgy.casting_in_basin('gensokyo_mechanician:anticorrosive_planks',[Fluid.of('gensokyo_mechanician:coal_tar',75),'#planks'],30,true)
    //注液
    e.recipes.create.filling('gensokyo_mechanician:anticorrosive_planks',['#planks',Fluid.of('gensokyo_mechanician:coal_tar',75)])
    //木屑块注液
    e.recipes.create.filling('gensokyo_mechanician:anticorrosive_planks',['createdieselgenerators:chip_wood_block',Fluid.of('gensokyo_mechanician:coal_tar',50)])
    //合成木棍
    e.shaped(Item.of('stick',4),[
        'A',
        'A'
    ],{A:'gensokyo_mechanician:anticorrosive_planks'})

    //防腐木台阶
    e.shaped(Item.of('gensokyo_mechanician:anticorrosive_slab',6),[
        'AAA'
    ],{A:'gensokyo_mechanician:anticorrosive_planks'})
    e.recipes.create.cutting(Item.of('gensokyo_mechanician:anticorrosive_slab',2),'gensokyo_mechanician:anticorrosive_planks')

    //使用防腐木的配方
    e.replaceInput({mod:'create',not:{id:/.*create:cutting.*/}},'#planks','gensokyo_mechanician:anticorrosive_planks')
    e.replaceInput({mod:'create',not:{id:/.*create:cutting.*/}},'#wooden_slabs','gensokyo_mechanician:anticorrosive_slab')
    e.replaceInput({mod:'create',id:/.*window.*/},'gensokyo_mechanician:anticorrosive_planks','oak_planks')

    e.replaceInput({mod:'create',not:{id:/.*create:cutting.*/}},'#logs','gensokyo_mechanician:anticorrosive_planks')
    e.replaceInput({mod:'create',not:{id:/.*create:cutting.*/}},'#forge:stripped_logs','gensokyo_mechanician:anticorrosive_planks')
    e.replaceInput({mod:'create',not:{id:/.*create:cutting.*/}},'#forge:stripped_wood','gensokyo_mechanician:anticorrosive_planks')

    e.replaceInput({mod:'steampowered',not:{id:/.*create:cutting.*/}},'#planks','gensokyo_mechanician:anticorrosive_planks')
    e.replaceInput({mod:'vintageimprovements',not:{id:/.*create:cutting.*/}},'#wooden_slabs','gensokyo_mechanician:anticorrosive_slab')

})