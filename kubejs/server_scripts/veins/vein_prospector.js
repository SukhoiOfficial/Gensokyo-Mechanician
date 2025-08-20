ItemEvents.rightClicked('gensokyo_mechanician:vein_prospector',event=>{
    if (event.player.getOffHandItem() == 'create:copper_nugget') {
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(100, () => {
                event.server.tell("§a发现最近的铜矿脉于：");
                event.player.runCommand(`betterlocate gensokyo_mechanician:copper_vein "x:{x} , z:{z}"`)
            })
        })
    }
    else if (event.player.getOffHandItem() == 'create_ironworks:tin_nugget') {
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(100, () => {
                event.server.tell("§a发现最近的锡矿脉于：");
                event.player.runCommand(`betterlocate gensokyo_mechanician:tin_vein "x:{x} , z:{z}"`)
            })
        })
    }
    else if (event.player.getOffHandItem() == 'create:zinc_nugget') {
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(100, () => {
                event.server.tell("§a发现最近的锌矿脉于：");
                event.player.runCommand(`betterlocate gensokyo_mechanician:zinc_vein "x:{x} , z:{z}"`)
            })
        })
    }
    else if (event.player.getOffHandItem() == 'minecraft:iron_nugget') {
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(100, () => {
                event.server.tell("§a发现最近的铁矿脉于：");
                event.player.runCommand(`betterlocate gensokyo_mechanician:iron_vein "x:{x} , z:{z}"`)
            })
        })
    }
})

