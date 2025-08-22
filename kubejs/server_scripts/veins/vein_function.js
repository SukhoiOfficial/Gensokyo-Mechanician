//可调参数
const SPREAD_INTERVAL_TICKS = 120; // 每隔多少 tick 触发一次（20 tick = 1 秒）
const RADIUS_HORIZONTAL = 2; // 横向影响半径
const RADIUS_VERTICAL = 1 // 纵向影响半径
const MAX_PER_CYCLE = 999; // 每次最多转化几块，防止一次性改太多（实际无作用）

//矿脉定义
const VEIN = "gensokyo_mechanician:copper_vein_block"
const VEIN_2 = "gensokyo_mechanician:tin_vein_block"
const VEIN_3 = "gensokyo_mechanician:zinc_vein_block"
const VEIN_4 = "gensokyo_mechanician:iron_vein_block"
const VEIN_5 = "gensokyo_mechanician:aluminum_vein_block"
const VEIN_6 = "gensokyo_mechanician:nickel_vein_block"
const VEIN_7 = "gensokyo_mechanician:tungsten_vein_block"
const VEIN_ACTIVE = "gensokyo_mechanician:active_copper_vein_block"
const VEIN_ACTIVE_2 = "gensokyo_mechanician:active_tin_vein_block"
const VEIN_ACTIVE_3 = "gensokyo_mechanician:active_zinc_vein_block"
const VEIN_ACTIVE_4 = "gensokyo_mechanician:active_iron_vein_block"
const VEIN_ACTIVE_5 = "gensokyo_mechanician:active_aluminum_vein_block"
const VEIN_ACTIVE_6 = "gensokyo_mechanician:active_nickel_vein_block"
const VEIN_ACTIVE_7 = "gensokyo_mechanician:active_tungsten_vein_block"

//产矿流体定义
const FLUID = "minecraft:lava";
const FLUID_2 = "gensokyo_mechanician:mineral_enrichment_fluid";

//矿石定义
const ORE = "minecraft:copper_ore";
const ORE_2 = "create_ironworks:tin_ore";
const ORE_3 = "create:zinc_ore";
const ORE_4 = "minecraft:iron_ore";
const ORE_5 = "unify:aluminum_ore";
const ORE_6 = "unify:nickel_ore";
const ORE_7 = "createmetallurgy:wolframite_ore";

//杂石定义
const STONE = "minecraft:stone";
const STONE_2 = "minecraft:netherrack";

// 全局状态：按维度记录所有被跟踪的矿脉 & 每个维度的 tick 计数
//global.copperSpreader = global.copperSpreader || { byDim: {}, counters: {} };
//global.tinSpreader = global.tinSpreader || { byDim: {}, counters: {} };
//global.zincSpreader = global.zincSpreader || { byDim: {}, counters: {} };
//global.ironSpreader = global.ironSpreader || { byDim: {}, counters: {} };
//global.aluminumSpreader = global.aluminumSpreader || { byDim: {}, counters: {} };
//global.nickelSpreader = global.nickelSpreader || { byDim: {}, counters: {} };
//global.tungstenSpreader = global.tungstenSpreader || { byDim: {}, counters: {} };

function dimKey(level) {
  return String(level.dimension);
}

function posKey(x, y, z) {
  return `${x},${y},${z}`;
}

// =========激活矿脉 -> 加入跟踪=========

//铜
BlockEvents.rightClicked(VEIN, (event) => {

    if(event.player.getMainHandItem() != 'tnt')
      return;

    const key = dimKey(event.level);
    if (!global.copperSpreader.byDim[key])
      global.copperSpreader.byDim[key] = {};
    const p = event.block.pos;
    global.copperSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
      x: p.x,
      y: p.y,
      z: p.z,
    };
    //event.server.tell(global.copperSpreader);

    event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.7 0.1 0 50`)
    event.server.scheduleInTicks(2, () => {
      event.server.scheduleInTicks(98, () => {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:explosion_emitter ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.1 0.1 0.1 5`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.05 0.2 0.05 0.15 200`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:tnt ${event.block.x} ${event.block.y + 1} ${event.block.z}`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE}`)
      })
    })

    if(event.player.getMainHandItem() == 'tnt'){
      event.player.addItemCooldown("tnt", 101)
      event.cancel()
    }

});

//锡
BlockEvents.rightClicked(VEIN_2, (event) => {

  if(event.player.getMainHandItem() != 'tnt')
      return;

  const key = dimKey(event.level);
  if (!global.tinSpreader.byDim[key])
    global.tinSpreader.byDim[key] = {};
  const p = event.block.pos;
  global.tinSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
    x: p.x,
    y: p.y,
    z: p.z,
  };
  //event.server.tell(global.tinSpreader);

  event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.7 0.1 0 50`)
    event.server.scheduleInTicks(2, () => {
      event.server.scheduleInTicks(98, () => {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:explosion_emitter ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.1 0.1 0.1 5`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.05 0.2 0.05 0.15 200`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:tnt ${event.block.x} ${event.block.y + 1} ${event.block.z}`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE_2}`)
      })
  })

  if(event.player.getMainHandItem() == 'tnt'){
      event.player.addItemCooldown("tnt", 101)
      event.cancel()
  }
  
});

//锌
BlockEvents.rightClicked(VEIN_3, (event) => {

  if(event.player.getMainHandItem() != 'tnt')
      return;

  const key = dimKey(event.level);
  if (!global.zincSpreader.byDim[key])
    global.zincSpreader.byDim[key] = {};
  const p = event.block.pos;
  global.zincSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
    x: p.x,
    y: p.y,
    z: p.z,
  };
  //event.server.tell(global.zincSpreader);

  event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.7 0.1 0 50`)
    event.server.scheduleInTicks(2, () => {
      event.server.scheduleInTicks(98, () => {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:explosion_emitter ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.1 0.1 0.1 5`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.05 0.2 0.05 0.15 200`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:tnt ${event.block.x} ${event.block.y + 1} ${event.block.z}`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE_3}`)
      })
  })

  if(event.player.getMainHandItem() == 'tnt'){
      event.player.addItemCooldown("tnt", 101)
      event.cancel()
  }
  
});

//铁
BlockEvents.rightClicked(VEIN_4, (event) => {
  
  if(event.player.getMainHandItem() != 'tnt')
      return;

  const key = dimKey(event.level);
  if (!global.ironSpreader.byDim[key])
    global.ironSpreader.byDim[key] = {};
  const p = event.block.pos;
  global.ironSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
    x: p.x,
    y: p.y,
    z: p.z,
  };
  //event.server.tell(global.ironSpreader);

  event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.7 0.1 0 50`)
    event.server.scheduleInTicks(2, () => {
      event.server.scheduleInTicks(98, () => {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:explosion_emitter ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.1 0.1 0.1 5`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.05 0.2 0.05 0.15 200`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:tnt ${event.block.x} ${event.block.y + 1} ${event.block.z}`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE_4}`)
      })
  })

  if(event.player.getMainHandItem() == 'tnt'){
      event.player.addItemCooldown("tnt", 101)
      event.cancel()
  }

});

//铝
BlockEvents.rightClicked(VEIN_5, (event) => {
  
  if(event.player.getMainHandItem() != 'tnt')
      return;

  const key = dimKey(event.level);
  if (!global.aluminumSpreader.byDim[key])
    global.aluminumSpreader.byDim[key] = {};
  const p = event.block.pos;
  global.aluminumSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
    x: p.x,
    y: p.y,
    z: p.z,
  };
  //event.server.tell(global.aluminumSpreader);

  event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.7 0.1 0 50`)
    event.server.scheduleInTicks(2, () => {
      event.server.scheduleInTicks(98, () => {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:explosion_emitter ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.1 0.1 0.1 5`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.05 0.2 0.05 0.15 200`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:tnt ${event.block.x} ${event.block.y + 1} ${event.block.z}`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE_5}`)
      })
  })

  if(event.player.getMainHandItem() == 'tnt'){
      event.player.addItemCooldown("tnt", 101)
      event.cancel()
  }

});

//镍
BlockEvents.rightClicked(VEIN_6, (event) => {
  
  if(event.player.getMainHandItem() != 'tnt')
      return;

  const key = dimKey(event.level);
  if (!global.nickelSpreader.byDim[key])
    global.nickelSpreader.byDim[key] = {};
  const p = event.block.pos;
  global.nickelSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
    x: p.x,
    y: p.y,
    z: p.z,
  };
  //event.server.tell(global.nickelSpreader);

  event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.7 0.1 0 50`)
    event.server.scheduleInTicks(2, () => {
      event.server.scheduleInTicks(98, () => {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:explosion_emitter ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.1 0.1 0.1 5`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.05 0.2 0.05 0.15 200`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:tnt ${event.block.x} ${event.block.y + 1} ${event.block.z}`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE_6}`)
      })
  })

  if(event.player.getMainHandItem() == 'tnt'){
      event.player.addItemCooldown("tnt", 101)
      event.cancel()
  }

});

//钨
BlockEvents.rightClicked(VEIN_7, (event) => {
  
  if(event.player.getMainHandItem() != 'tnt')
      return;

  const key = dimKey(event.level);
  if (!global.tungstenSpreader.byDim[key])
    global.tungstenSpreader.byDim[key] = {};
  const p = event.block.pos;
  global.tungstenSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
    x: p.x,
    y: p.y,
    z: p.z,
  };
  //event.server.tell(global.tungstenSpreader);

  event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.7 0.1 0 50`)
    event.server.scheduleInTicks(2, () => {
      event.server.scheduleInTicks(98, () => {
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:explosion_emitter ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.1 0.1 0.1 0.1 5`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run particle minecraft:large_smoke ${event.block.x} ${event.block.y + 1} ${event.block.z} 0.05 0.2 0.05 0.15 200`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run summon minecraft:tnt ${event.block.x} ${event.block.y + 1} ${event.block.z}`)
        event.server.runCommandSilent(`execute in ${event.level.dimension} run setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE_7}`)
      })
  })

  if(event.player.getMainHandItem() == 'tnt'){
      event.player.addItemCooldown("tnt", 101)
      event.cancel()
  }

});

// =========破坏矿脉 -> 移出跟踪=========

//铜
BlockEvents.broken(VEIN_ACTIVE, (event) => {
  const key = dimKey(event.level);
  const set = global.copperSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
  //event.server.tell(global.copperSpreader);
});

//锡
BlockEvents.broken(VEIN_ACTIVE_2, (event) => {
  const key = dimKey(event.level);
  const set = global.tinSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
  //event.server.tell(global.tinSpreader);
});

//锌
BlockEvents.broken(VEIN_ACTIVE_3, (event) => {
  const key = dimKey(event.level);
  const set = global.zincSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
  //event.server.tell(global.zincSpreader);
});

//铁
BlockEvents.broken(VEIN_ACTIVE_4, (event) => {
  const key = dimKey(event.level);
  const set = global.ironSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
  //event.server.tell(global.ironSpreader);
});

//铝
BlockEvents.broken(VEIN_ACTIVE_5, (event) => {
  const key = dimKey(event.level);
  const set = global.aluminumSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
});

//镍
BlockEvents.broken(VEIN_ACTIVE_6, (event) => {
  const key = dimKey(event.level);
  const set = global.nickelSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
});

//钨
BlockEvents.broken(VEIN_ACTIVE_7, (event) => {
  const key = dimKey(event.level);
  const set = global.tungstenSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
});

// =========矿石再生：铜=========
LevelEvents.tick((event) => {
  const level = event.level;
  if (level.clientSide) {
    //event.server.tell("client return");
    return; // 只在服务端跑
  }
  const key = dimKey(level);
  const set = global.copperSpreader.byDim[key];
  if (!set) {
    return;
  }

  let c = (global.copperSpreader.counters[key] =
    (global.copperSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 转化附近方块（限制每次最多转换 MAX_PER_CYCLE 块）
    let done = 0;
    let count = 0;
    outer: for (let dx = -RADIUS_HORIZONTAL; dx <= RADIUS_HORIZONTAL; dx++) {
      for (let dy = -RADIUS_VERTICAL; dy <= RADIUS_VERTICAL; dy++) {
        for (let dz = -RADIUS_HORIZONTAL; dz <= RADIUS_HORIZONTAL; dz++) {
          count++;
          //event.server.tell("count " + count);
          const temp = count;
          //event.server.tell("temp " + temp);
          if (dx === 0 && dy === 0 && dz === 0) continue;
          let b = level.getBlock(pos.x + dx, pos.y + dy, pos.z + dz);
          //event.server.tell(b.blockState);

          if (!b) {
            //event.server.tell("continue");
            continue;
          }

          if (b.id === FLUID && b.blockState === 'Block{minecraft:lava}[level=0]') {
            let rand = Math.random();
            if (rand < 0.2) {
              b.set(ORE);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          } else if (b.id === FLUID_2 && b.blockState === 'Block{gensokyo_mechanician:mineral_enrichment_fluid}[level=0]') {
            let rand = Math.random();
            if (rand < 0.5) {
              b.set(ORE);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          }

          //   if (done >= MAX_PER_CYCLE) {
          //     event.server.tell("break outer");
          //     break outer;
          //   }
        }
      }
    }
  }

  // 清理无效追踪
  for (const k of toDelete) delete set[k];
});

// =========矿石再生：锡=========
LevelEvents.tick((event) => {
  const level = event.level;
  if (level.clientSide) {
    //event.server.tell("client return");
    return; // 只在服务端跑
  }
  const key = dimKey(level);
  const set = global.tinSpreader.byDim[key];
  if (!set) {
    return;
  }

  const c = (global.tinSpreader.counters[key] =
    (global.tinSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 转化附近方块（限制每次最多转换 MAX_PER_CYCLE 块）
    let done = 0;
    let count = 0;
    outer: for (let dx = -RADIUS_HORIZONTAL; dx <= RADIUS_HORIZONTAL; dx++) {
      for (let dy = -RADIUS_VERTICAL; dy <= RADIUS_VERTICAL; dy++) {
        for (let dz = -RADIUS_HORIZONTAL; dz <= RADIUS_HORIZONTAL; dz++) {
          count++;
          //event.server.tell("count " + count);
          const temp = count;
          //event.server.tell("temp " + temp);
          if (dx === 0 && dy === 0 && dz === 0) continue;
          let b = level.getBlock(pos.x + dx, pos.y + dy, pos.z + dz);
          //event.server.tell(b.blockState);

          if (!b) {
            //event.server.tell("continue");
            continue;
          }

          if (b.id === FLUID && b.blockState === 'Block{minecraft:lava}[level=0]') {
            let rand = Math.random();
            if (rand < 0.2) {
              b.set(ORE_2);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          } else if (b.id === FLUID_2 && b.blockState === 'Block{gensokyo_mechanician:mineral_enrichment_fluid}[level=0]') {
            let rand = Math.random();
            if (rand < 0.5) {
              b.set(ORE_2);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          }

          //   if (done >= MAX_PER_CYCLE) {
          //     event.server.tell("break outer");
          //     break outer;
          //   }
        }
      }
    }
  }

  // 清理无效追踪
  for (const k of toDelete) delete set[k];
});

// =========矿石再生：锌=========
LevelEvents.tick((event) => {
  const level = event.level;
  if (level.clientSide) {
    //event.server.tell("client return");
    return; // 只在服务端跑
  }
  const key = dimKey(level);
  const set = global.zincSpreader.byDim[key];
  if (!set) {
    return;
  }

  const c = (global.zincSpreader.counters[key] =
    (global.zincSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 转化附近方块（限制每次最多转换 MAX_PER_CYCLE 块）
    let done = 0;
    let count = 0;
    outer: for (let dx = -RADIUS_HORIZONTAL; dx <= RADIUS_HORIZONTAL; dx++) {
      for (let dy = -RADIUS_VERTICAL; dy <= RADIUS_VERTICAL; dy++) {
        for (let dz = -RADIUS_HORIZONTAL; dz <= RADIUS_HORIZONTAL; dz++) {
          count++;
          //event.server.tell("count " + count);
          const temp = count;
          //event.server.tell("temp " + temp);
          if (dx === 0 && dy === 0 && dz === 0) continue;
          let b = level.getBlock(pos.x + dx, pos.y + dy, pos.z + dz);
          //event.server.tell(b.blockState);

          if (!b) {
            //event.server.tell("continue");
            continue;
          }

          if (b.id === FLUID && b.blockState === 'Block{minecraft:lava}[level=0]') {
            let rand = Math.random();
            if (rand < 0.2) {
              b.set(ORE_3);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          } else if (b.id === FLUID_2 && b.blockState === 'Block{gensokyo_mechanician:mineral_enrichment_fluid}[level=0]') {
            let rand = Math.random();
            if (rand < 0.5) {
              b.set(ORE_3);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          }

          //   if (done >= MAX_PER_CYCLE) {
          //     event.server.tell("break outer");
          //     break outer;
          //   }
        }
      }
    }
  }

  // 清理无效追踪
  for (const k of toDelete) delete set[k];
});

// =========矿石再生：铁=========
LevelEvents.tick((event) => {
  const level = event.level;
  if (level.clientSide) {
    //event.server.tell("client return");
    return; // 只在服务端跑
  }
  const key = dimKey(level);
  const set = global.ironSpreader.byDim[key];
  if (!set) {
    return;
  }

  const c = (global.ironSpreader.counters[key] =
    (global.ironSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 转化附近方块（限制每次最多转换 MAX_PER_CYCLE 块）
    let done = 0;
    let count = 0;
    outer: for (let dx = -RADIUS_HORIZONTAL; dx <= RADIUS_HORIZONTAL; dx++) {
      for (let dy = -RADIUS_VERTICAL; dy <= RADIUS_VERTICAL; dy++) {
        for (let dz = -RADIUS_HORIZONTAL; dz <= RADIUS_HORIZONTAL; dz++) {
          count++;
          //event.server.tell("count " + count);
          const temp = count;
          //event.server.tell("temp " + temp);
          if (dx === 0 && dy === 0 && dz === 0) continue;
          let b = level.getBlock(pos.x + dx, pos.y + dy, pos.z + dz);
          //event.server.tell(b.blockState);

          if (!b) {
            //event.server.tell("continue");
            continue;
          }

          if (b.id === FLUID && b.blockState === 'Block{minecraft:lava}[level=0]') {
            let rand = Math.random();
            if (rand < 0.2) {
              b.set(ORE_4);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          } else if (b.id === FLUID_2 && b.blockState === 'Block{gensokyo_mechanician:mineral_enrichment_fluid}[level=0]') {
            let rand = Math.random();
            if (rand < 0.5) {
              b.set(ORE_4);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          }

          //   if (done >= MAX_PER_CYCLE) {
          //     event.server.tell("break outer");
          //     break outer;
          //   }
        }
      }
    }
  }

  // 清理无效追踪
  for (const k of toDelete) delete set[k];
});

// =========矿石再生：铝=========
LevelEvents.tick((event) => {
  const level = event.level;
  if (level.clientSide) {
    //event.server.tell("client return");
    return; // 只在服务端跑
  }
  const key = dimKey(level);
  const set = global.aluminumSpreader.byDim[key];
  if (!set) {
    return;
  }

  const c = (global.aluminumSpreader.counters[key] =
    (global.aluminumSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 转化附近方块（限制每次最多转换 MAX_PER_CYCLE 块）
    let done = 0;
    let count = 0;
    outer: for (let dx = -RADIUS_HORIZONTAL; dx <= RADIUS_HORIZONTAL; dx++) {
      for (let dy = -RADIUS_VERTICAL; dy <= RADIUS_VERTICAL; dy++) {
        for (let dz = -RADIUS_HORIZONTAL; dz <= RADIUS_HORIZONTAL; dz++) {
          count++;
          //event.server.tell("count " + count);
          const temp = count;
          //event.server.tell("temp " + temp);
          if (dx === 0 && dy === 0 && dz === 0) continue;
          let b = level.getBlock(pos.x + dx, pos.y + dy, pos.z + dz);
          //event.server.tell(b.blockState);

          if (!b) {
            //event.server.tell("continue");
            continue;
          }

          if (b.id === FLUID && b.blockState === 'Block{minecraft:lava}[level=0]') {
            let rand = Math.random();
            if (rand < 0.2) {
              b.set(ORE_5);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          } else if (b.id === FLUID_2 && b.blockState === 'Block{gensokyo_mechanician:mineral_enrichment_fluid}[level=0]') {
            let rand = Math.random();
            if (rand < 0.5) {
              b.set(ORE_5);
              done++;
            }
            else {
              b.set(STONE);
              done++;
            }
          }

          //   if (done >= MAX_PER_CYCLE) {
          //     event.server.tell("break outer");
          //     break outer;
          //   }
        }
      }
    }
  }

  // 清理无效追踪
  for (const k of toDelete) delete set[k];
});

// =========矿石再生：镍=========
LevelEvents.tick((event) => {
  const level = event.level;
  if (level.clientSide) {
    //event.server.tell("client return");
    return; // 只在服务端跑
  }
  const key = dimKey(level);
  const set = global.nickelSpreader.byDim[key];
  if (!set) {
    return;
  }

  const c = (global.nickelSpreader.counters[key] =
    (global.nickelSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 转化附近方块（限制每次最多转换 MAX_PER_CYCLE 块）
    let done = 0;
    let count = 0;
    outer: for (let dx = -RADIUS_HORIZONTAL; dx <= RADIUS_HORIZONTAL; dx++) {
      for (let dy = -RADIUS_VERTICAL; dy <= RADIUS_VERTICAL; dy++) {
        for (let dz = -RADIUS_HORIZONTAL; dz <= RADIUS_HORIZONTAL; dz++) {
          count++;
          //event.server.tell("count " + count);
          const temp = count;
          //event.server.tell("temp " + temp);
          if (dx === 0 && dy === 0 && dz === 0) continue;
          let b = level.getBlock(pos.x + dx, pos.y + dy, pos.z + dz);
          //event.server.tell(b.blockState);

          if (!b) {
            //event.server.tell("continue");
            continue;
          }

          if (b.id === FLUID && b.blockState === 'Block{minecraft:lava}[level=0]') {
            let rand = Math.random();
            if (rand < 0.2) {
              b.set(ORE_6);
              done++;
            }
            else {
              b.set(STONE_2);
              done++;
            }
          } else if (b.id === FLUID_2 && b.blockState === 'Block{gensokyo_mechanician:mineral_enrichment_fluid}[level=0]') {
            let rand = Math.random();
            if (rand < 0.5) {
              b.set(ORE_6);
              done++;
            }
            else {
              b.set(STONE_2);
              done++;
            }
          }

          //   if (done >= MAX_PER_CYCLE) {
          //     event.server.tell("break outer");
          //     break outer;
          //   }
        }
      }
    }
  }

  // 清理无效追踪
  for (const k of toDelete) delete set[k];
});

// =========矿石再生：钨=========
LevelEvents.tick((event) => {
  const level = event.level;
  if (level.clientSide) {
    //event.server.tell("client return");
    return; // 只在服务端跑
  }
  const key = dimKey(level);
  const set = global.tungstenSpreader.byDim[key];
  if (!set) {
    return;
  }

  const c = (global.tungstenSpreader.counters[key] =
    (global.tungstenSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 转化附近方块（限制每次最多转换 MAX_PER_CYCLE 块）
    let done = 0;
    let count = 0;
    outer: for (let dx = -RADIUS_HORIZONTAL; dx <= RADIUS_HORIZONTAL; dx++) {
      for (let dy = -RADIUS_VERTICAL; dy <= RADIUS_VERTICAL; dy++) {
        for (let dz = -RADIUS_HORIZONTAL; dz <= RADIUS_HORIZONTAL; dz++) {
          count++;
          //event.server.tell("count " + count);
          const temp = count;
          //event.server.tell("temp " + temp);
          if (dx === 0 && dy === 0 && dz === 0) continue;
          let b = level.getBlock(pos.x + dx, pos.y + dy, pos.z + dz);
          //event.server.tell(b.blockState);

          if (!b) {
            //event.server.tell("continue");
            continue;
          }

          if (b.id === FLUID && b.blockState === 'Block{minecraft:lava}[level=0]') {
            let rand = Math.random();
            if (rand < 0.2) {
              b.set(ORE_7);
              done++;
            }
            else {
              b.set(STONE_2);
              done++;
            }
          } else if (b.id === FLUID_2 && b.blockState === 'Block{gensokyo_mechanician:mineral_enrichment_fluid}[level=0]') {
            let rand = Math.random();
            if (rand < 0.5) {
              b.set(ORE_7);
              done++;
            }
            else {
              b.set(STONE_2);
              done++;
            }
          }

          //   if (done >= MAX_PER_CYCLE) {
          //     event.server.tell("break outer");
          //     break outer;
          //   }
        }
      }
    }
  }

  // 清理无效追踪
  for (const k of toDelete) delete set[k];
});