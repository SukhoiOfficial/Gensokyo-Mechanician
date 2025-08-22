ItemEvents.rightClicked('gensokyo_mechanician:vein_prospector',event=>{

    if (event.player.getMainHandItem() != 'gensokyo_mechanician:vein_prospector')
        return;

    if (event.player.getOffHandItem() == 'create:copper_nugget') {
        let item = event.player.getMainHandItem()
        if (item.getDamageValue() > item.getMaxDamage() - 1000000) {
        event.server.tell("§e电量不足")
        return;
        }
        item.setDamageValue(event.player.mainHandItem.getDamageValue() + 1000000)

        event.player.addItemCooldown('gensokyo_mechanician:vein_prospector', 160)
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(160, () => {
                event.server.tell("§a地层中发现：含铜热液活动");
                event.server.scheduleInTicks(20, () => {
                    event.server.tell("§a定位于：");
                    event.player.runCommand(`betterlocate gensokyo_mechanician:copper_vein "x:{x} , z:{z}"`)
                })
            })
        })
    }
    else if (event.player.getOffHandItem() == 'create_ironworks:tin_nugget') {
        let item = event.player.getMainHandItem()
        if (item.getDamageValue() > item.getMaxDamage() - 1000000) {
        event.server.tell("§e电量不足")
        return;
        }
        item.setDamageValue(event.player.mainHandItem.getDamageValue() + 1000000)

        event.player.addItemCooldown('gensokyo_mechanician:vein_prospector', 160)
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(160, () => {
                event.server.tell("§a地层中发现：含锡热液活动");
                event.server.scheduleInTicks(20, () => {
                    event.server.tell("§a定位于：");
                    event.player.runCommand(`betterlocate gensokyo_mechanician:tin_vein "x:{x} , z:{z}"`)
                })
            })
        })
    }
    else if (event.player.getOffHandItem() == 'create:zinc_nugget') {
        let item = event.player.getMainHandItem()
        if (item.getDamageValue() > item.getMaxDamage() - 1000000) {
        event.server.tell("§e电量不足")
        return;
        }
        item.setDamageValue(event.player.mainHandItem.getDamageValue() + 1000000)

        event.player.addItemCooldown('gensokyo_mechanician:vein_prospector', 160)
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(160, () => {
                event.server.tell("§a地层中发现：含锌热液活动");
                event.server.scheduleInTicks(20, () => {
                    event.server.tell("§a定位于：");
                    event.player.runCommand(`betterlocate gensokyo_mechanician:zinc_vein "x:{x} , z:{z}"`)
                })
            })
        })
    }
    else if (event.player.getOffHandItem() == 'minecraft:iron_nugget') {
        let item = event.player.getMainHandItem()
        if (item.getDamageValue() > item.getMaxDamage() - 1000000) {
        event.server.tell("§e电量不足")
        return;
        }
        item.setDamageValue(event.player.mainHandItem.getDamageValue() + 1000000)

        event.player.addItemCooldown('gensokyo_mechanician:vein_prospector', 160)
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(160, () => {
                event.server.tell("§a地层中发现：含铁热液活动");
                event.server.scheduleInTicks(20, () => {
                    event.server.tell("§a定位于：");
                    event.player.runCommand(`betterlocate gensokyo_mechanician:iron_vein "x:{x} , z:{z}"`)
                })
            })
        })
    }
    else if (event.player.getOffHandItem() == 'unify:aluminum_nugget') {
        let item = event.player.getMainHandItem()
        if (item.getDamageValue() > item.getMaxDamage() - 1000000) {
        event.server.tell("§e电量不足")
        return;
        }
        item.setDamageValue(event.player.mainHandItem.getDamageValue() + 1000000)

        event.player.addItemCooldown('gensokyo_mechanician:vein_prospector', 160)
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(160, () => {
                event.server.tell("§a地层中发现：含铝热液活动");
                event.server.scheduleInTicks(20, () => {
                    event.server.tell("§a定位于：");
                    event.player.runCommand(`betterlocate gensokyo_mechanician:aluminum_vein "x:{x} , z:{z}"`)
                })
            })
        })
    }
    else if (event.player.getOffHandItem() == 'unify:nickel_nugget') {
       let item = event.player.getMainHandItem()
        if (item.getDamageValue() > item.getMaxDamage() - 1000000) {
        event.server.tell("§e电量不足")
        return;
        }
        item.setDamageValue(event.player.mainHandItem.getDamageValue() + 1000000)

        event.player.addItemCooldown('gensokyo_mechanician:vein_prospector', 160)
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(160, () => {
                event.server.tell("§a地层中发现：含镍热液活动");
                event.server.scheduleInTicks(20, () => {
                    event.server.tell("§a定位于：");
                    event.player.runCommand(`betterlocate gensokyo_mechanician:nickel_vein "x:{x} , z:{z}"`)
                })
            })
        })
    }
    else if (event.player.getOffHandItem() == 'createmetallurgy:tungsten_nugget') {
        let item = event.player.getMainHandItem()
        if (item.getDamageValue() > item.getMaxDamage() - 1000000) {
        event.server.tell("§e电量不足")
        return;
        }
        item.setDamageValue(event.player.mainHandItem.getDamageValue() + 1000000)
        
        event.player.addItemCooldown('gensokyo_mechanician:vein_prospector', 160)
        event.server.scheduleInTicks(2, () => {
            event.server.tell("矿脉搜索中...");
            event.server.scheduleInTicks(160, () => {
                event.server.tell("§a地层中发现：含钨热液活动");
                event.server.scheduleInTicks(20, () => {
                    event.server.tell("§a定位于：");
                    event.player.runCommand(`betterlocate gensokyo_mechanician:tungsten_vein "x:{x} , z:{z}"`)
                })
            })
        })
    }
})

