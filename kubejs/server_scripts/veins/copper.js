
// ===== 可调参数 =====
let SPREAD_INTERVAL_TICKS = 1200; // 每隔多少 tick 触发一次（200 = ~10 秒）
let RADIUS_HORIZONTAL = 2; // 影响半径（立方体半径）
let RADIUS_VERTICAL = 1
let MAX_PER_CYCLE = 199; // 每次最多转化几块，防止一次性改太多

// ===== 常量 =====
let VEIN = "gensokyo_mechanician:copper_vein_block"
let VEIN_ACTIVE = "gensokyo_mechanician:active_copper_vein_block"
let FLUID = "minecraft:lava";
let FLUID_2 = "gensokyo_mechanician:mineral_enrichment_fluid";
let ORE = "minecraft:copper_ore";
let STONE = "minecraft:cobblestone";

// 全局状态：按维度记录所有被跟踪的节点 & 每个维度的 tick 计数
global.copperSpreader = global.copperSpreader || { byDim: {}, counters: {} };

function dimKey(level) {
  // 例：'minecraft:overworld'
  return String(level.dimension);
}

function posKey(x, y, z) {
  return `${x},${y},${z}`;
}

// 激活节点 -> 加入跟踪
BlockEvents.rightClicked(VEIN, (event) => {
  event.server.tell("§e所有玩家注意：KubeJS 脚本已加载");

    event.server.runCommandSilent(`particle minecraft:spit ${event.block.x} ${event.block.y + 0.2} ${event.block.z} 1 0.4 0.4 1 1`)
    event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} ${VEIN_ACTIVE}`)

  const key = dimKey(event.level);
  if (!global.copperSpreader.byDim[key])
    global.copperSpreader.byDim[key] = {};
  const p = event.block.pos;
  global.copperSpreader.byDim[key][posKey(p.x, p.y, p.z)] = {
    x: p.x,
    y: p.y,
    z: p.z,
  };
  event.server.tell(global.copperSpreader);
});

// 破坏节点 -> 移出跟踪
BlockEvents.broken(VEIN_ACTIVE, (event) => {
  const key = dimKey(event.level);
  const set = global.copperSpreader.byDim[key];
  if (!set) return;
  const p = event.block.pos;
  delete set[posKey(p.x, p.y, p.z)];
  event.server.tell(global.copperSpreader);
});

// 每个维度自己的 tick 循环里按间隔处理
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

  const c = (global.copperSpreader.counters[key] =
    (global.copperSpreader.counters[key] || 0) + 1);
  if (c % SPREAD_INTERVAL_TICKS !== 0) {
    return;
  }

  // 遍历该维度被跟踪的所有节点
  let toDelete = [];
  for (let k in set) {
    //event.server.tell("k " + k);
    let pos = set[k];

    // 如果原位置不再是活跃节点，清理掉
    const here = level.getBlock(pos.x, pos.y, pos.z);
    if (!here || (here.id !== VEIN_ACTIVE)) {
      toDelete.push(k);
      continue;
    }

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
