// // Spells
let lightingDmg: number[] = [0, 150, 180, 210, 240, 270, 320, 400, 480, 560, 600, 640];
let earthquakeDmg: number[] = [0, 14.5, 17, 21, 25, 29];

// Equipment
let giantarrowDmg: number[] = [0, 750, 750, 850, 850, 850, 1000, 1000, 1000, 1200, 1200, 1200, 1500, 1500, 1500, 1750, 1750, 1750, 1950];
let fireballDmg: number[] = [0, 1500, 1500, 1700, 1700, 1800, 1950, 1950, 2050, 2200, 2200, 2350, 2650, 2650, 2750, 3100, 3100, 3250, 3400, 3400, 3500, 3650, 3650, 3750, 3900, 3900, 3950, 4100];

let equipmentNameMap: Map<string, number[]> = new Map([
    ["giantarrow", giantarrowDmg],
    ["fireball", fireballDmg],
]);

// // Buildings
let cannonHealth: number[] = [0, 420, 470, 520, 570, 620, 670, 730, 800, 880, 960, 1060, 1160, 1260, 1380, 1500, 1620, 1740, 1870, 2000, 2150, 2250]
let archerTowerHealth: number[] = [0, 380, 420, 460, 500, 540, 580, 630, 690, 750, 810, 890, 970, 1050, 1130, 1230, 1310, 1390, 1510, 1600, 1700, 1800]
let mortarHealth: number[] = [0, 400, 450, 500, 550, 600, 650, 700, 800, 950, 1100, 1300, 1500, 1700, 1950, 2150, 2300]
let airDefenseHealth: number[] = [0, 800, 850, 900, 950, 1000, 1050, 1100, 1210, 1300, 1400, 1500, 1650, 1750, 1850]
let wizardTowerHealth: number[] = [0, 620, 650, 680, 730, 840, 960, 1200, 1440, 1600, 1900, 2120, 2240, 2500, 2800, 3000, 3150]
let airSweeperHealth: number[] = [0, 750, 800, 850, 900, 950, 1000, 1050]
let hiddenTeslaHealth: number[] = [0, 600, 630, 660, 690, 730, 770, 810, 850, 900, 980, 1100, 1200, 1350, 1450, 1550]
let bombTowerHealth: number[] = [0, 650, 700, 750, 850, 1050, 1300, 1600, 1900, 2300, 2500, 2700]
let xBowHealth: number[] = [0, 1500, 1900, 2300, 2700, 3100, 3400, 3700, 4000, 4200, 4400, 4600]
let infernoTowerHealth: number[] = [0, 1500, 1800, 2100, 2400, 2700, 3000, 3300, 3700, 4000, 4400]
let eagleArtilleryHealth: number[] = [0, 4000, 4400, 4800, 5200, 5600, 5900, 6200]
let scattershotHealth: number[] = [0, 3600, 4200, 4800, 5100, 5410]
let builderHutHealth: number[] = [0, 250, 1000, 1300, 1600, 1800, 1900]
let spellTowerHealth: number[] = [0, 2500, 2800, 3100]
let monolithHealth: number[] = [0, 4747, 5050, 5353]
let multiArcherTowerHealth: number[] = [0, 5000, 5200]
let ricochetCannonHealth: number[] = [0, 5400, 5700]
let townHallHealth: number[] = [0, 450, 1600, 1850, 2100, 2400, 2800, 3300, 3900, 4600, 5500, 6800, 7500, 8200, 8900, 9600, 10000]
let clanCastleHealth: number[] = [0, 1000, 1400, 2000, 2600, 3000, 3400, 4000, 4400, 4800, 5200, 5400, 5600]

let buildingNameMap: Map<string, number[]> = new Map([
    ["Cannon", cannonHealth],
    ["Archer Tower", archerTowerHealth],
    ["Mortar", mortarHealth],
    ["Air Defense", airDefenseHealth],
    ["Wizard Tower", wizardTowerHealth],
    ["Air Sweeper", airSweeperHealth],
    ["Hidden Tesla", hiddenTeslaHealth],
    ["Bomb Tower", bombTowerHealth],
    ["X-Bow", xBowHealth],
    ["Inferno Tower", infernoTowerHealth],
    ["Eagle Artillery", eagleArtilleryHealth],
    ["Scattershot", scattershotHealth],
    ["Builder Hut", builderHutHealth],
    ["SpellTower", spellTowerHealth],
    ["Monolith", monolithHealth],
    ["Multi-Archer Tower", multiArcherTowerHealth],
    ["Ricochet Cannon", ricochetCannonHealth],
    ["Town Hall", townHallHealth],
    ["Clan Castle", clanCastleHealth],
]);

// Spell & Equipment Damage Getters
export function getLightingDmg(level: number): number {
	return lightingDmg[level]
}
export function getEarthquakeDmg(level: number): number {
	return earthquakeDmg[level]
}

// Get building health based on building name
export function getEquipmentDmg(name: string, level: number): number | undefined {
	var equipmentArray: number[] | undefined = equipmentNameMap.get(name)
    if(equipmentArray == undefined) {
        return undefined
    }
	return equipmentArray[level]
}

// Get building health based on building name
export function getBuildingHealth(name: string, level: number): number | undefined {
	var buildingArray: number[] | undefined = buildingNameMap.get(name)
    if(buildingArray == undefined) {
        return undefined
    }
	return buildingArray[level]
}

export function getBuildingMapKeys(): string[] {
    return Array.from(buildingNameMap.keys())
}

export function getBuildingMaxLevel(name: string): number {
    let length = buildingNameMap.get(name)?.length
    if(length != undefined) {
        return length - 1
    }
    return 0
}