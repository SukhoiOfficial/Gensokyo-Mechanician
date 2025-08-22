global.copperSpreader = global.copperSpreader || { byDim: {}, counters: {} };
global.tinSpreader = global.tinSpreader || { byDim: {}, counters: {} };
global.zincSpreader = global.zincSpreader || { byDim: {}, counters: {} };
global.ironSpreader = global.ironSpreader || { byDim: {}, counters: {} };
global.aluminumSpreader = global.aluminumSpreader || { byDim: {}, counters: {} };
global.nickelSpreader = global.nickelSpreader || { byDim: {}, counters: {} };
global.tungstenSpreader = global.tungstenSpreader || { byDim: {}, counters: {} };

function dimKey(level) {
  return String(level.dimension);
}

function posKey(x, y, z) {
  return `${x},${y},${z}`;
}

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
    .displayName("铜热液裂隙")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/copper_vein_block')

    e.create("gensokyo_mechanician:active_copper_vein_block")
    .displayName("铜热液喷口")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/active_copper_vein_block')
    .randomTick(event =>{
        const key = dimKey(event.level);
        if (!global.copperSpreader.byDim[key])
        global.copperSpreader.byDim[key] = {};
        const p = event.block.pos;
        global.copperSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
        x: p.x,
        y: p.y,
        z: p.z,
        };
    })

    e.create("gensokyo_mechanician:tin_vein_block")
    .displayName("锡热液裂隙")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/tin_vein_block')

    e.create("gensokyo_mechanician:active_tin_vein_block")
    .displayName("锡热液喷口")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/active_tin_vein_block')
    .randomTick(event =>{
        const key = dimKey(event.level);
        if (!global.tinSpreader.byDim[key])
        global.tinSpreader.byDim[key] = {};
        const p = event.block.pos;
        global.tinSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
        x: p.x,
        y: p.y,
        z: p.z,
        };
    })

    e.create("gensokyo_mechanician:zinc_vein_block")
    .displayName("锌热液裂隙")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/zinc_vein_block')

    e.create("gensokyo_mechanician:active_zinc_vein_block")
    .displayName("锌热液喷口")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/active_zinc_vein_block')
    .randomTick(event =>{
        const key = dimKey(event.level);
        if (!global.zincSpreader.byDim[key])
        global.zincSpreader.byDim[key] = {};
        const p = event.block.pos;
        global.zincSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
        x: p.x,
        y: p.y,
        z: p.z,
        };
    })

    e.create("gensokyo_mechanician:iron_vein_block")
    .displayName("铁热液裂隙")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/iron_vein_block')

    e.create("gensokyo_mechanician:active_iron_vein_block")
    .displayName("铁热液喷口")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/active_iron_vein_block')
    .randomTick(event =>{
        const key = dimKey(event.level);
        if (!global.ironSpreader.byDim[key])
        global.ironSpreader.byDim[key] = {};
        const p = event.block.pos;
        global.ironSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
        x: p.x,
        y: p.y,
        z: p.z,
        };
    })

    e.create("gensokyo_mechanician:aluminum_vein_block")
    .displayName("铝热液裂隙")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/aluminum_vein_block')

    e.create("gensokyo_mechanician:active_aluminum_vein_block")
    .displayName("铝热液喷口")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/active_aluminum_vein_block')
    .randomTick(event =>{
        const key = dimKey(event.level);
        if (!global.aluminumSpreader.byDim[key])
        global.aluminumSpreader.byDim[key] = {};
        const p = event.block.pos;
        global.aluminumSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
        x: p.x,
        y: p.y,
        z: p.z,
        };
    })

    e.create("gensokyo_mechanician:nickel_vein_block")
    .displayName("镍热液裂隙")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/nickel_vein_block')

    e.create("gensokyo_mechanician:active_nickel_vein_block")
    .displayName("镍热液喷口")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/active_nickel_vein_block')
    .randomTick(event =>{
        const key = dimKey(event.level);
        if (!global.nickelSpreader.byDim[key])
        global.nickelSpreader.byDim[key] = {};
        const p = event.block.pos;
        global.nickelSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
        x: p.x,
        y: p.y,
        z: p.z,
        };
    })

    e.create("gensokyo_mechanician:tungsten_vein_block")
    .displayName("钨热液裂隙")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/tungsten_vein_block')

    e.create("gensokyo_mechanician:active_tungsten_vein_block")
    .displayName("钨热液喷口")
    .mapColor(0x70)
    .soundType('copper')
    .unbreakable()
    .textureAll('gensokyo_mechanician:block/veins/active_tungsten_vein_block')
    .randomTick(event =>{
        const key = dimKey(event.level);
        if (!global.tungstenSpreader.byDim[key])
        global.tungstenSpreader.byDim[key] = {};
        const p = event.block.pos;
        global.tungstenSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
        x: p.x,
        y: p.y,
        z: p.z,
        };
    })

})