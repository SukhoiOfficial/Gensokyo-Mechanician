StartupEvents.registry('block',e=>{

    //废案：铬矿石（附注释）
    //e.create("gensokyo_mechanician:chromium_ore") // Create a new block
    //.displayName("铬矿石") // Set a custom name
    //.hardness(5.0) // Set hardness (affects mining time)
    //.resistance(1.0) // Set resistance (to explosions, etc)
    //.requiresTool(true) // Requires a tool or it won't drop (see tags below)
    //.tagBlock("mineable/pickaxe") // or a pickaxe
    //.tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    //.mapColor(0x70)
    //.soundType('copper')

    e.create("gensokyo_mechanician:anticorrosive_planks")
    .displayName("防腐木板")
    .hardness(3.0)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock("planks")
    .tagBlock("mineable/axe")
    .tagBlock('minecraft:needs_wood_tool')
    .mapColor(0x70)
    .soundType('wood')

    e.create("gensokyo_mechanician:anticorrosive_slab","slab")
    .displayName("防腐木台阶")
    .textureAll('gensokyo_mechanician:block/anticorrosive_planks')
    .hardness(3.0)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock("wooden_slabs")
    .tagBlock("mineable/axe")
    .tagBlock('minecraft:needs_wood_tool')
    .mapColor(0x70)
    .soundType('wood')

    e.create("gensokyo_mechanician:copper_vein_block")
    .displayName("铜矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

    e.create("gensokyo_mechanician:active_copper_vein_block")
    .displayName("活跃的铜矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

    e.create("gensokyo_mechanician:tin_vein_block")
    .displayName("锡矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

    e.create("gensokyo_mechanician:active_tin_vein_block")
    .displayName("活跃的锡矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

    e.create("gensokyo_mechanician:zinc_vein_block")
    .displayName("锌矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

    e.create("gensokyo_mechanician:active_zinc_vein_block")
    .displayName("活跃的锌矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

    e.create("gensokyo_mechanician:iron_vein_block")
    .displayName("铁矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

    e.create("gensokyo_mechanician:active_iron_vein_block")
    .displayName("活跃的铁矿脉")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()

})