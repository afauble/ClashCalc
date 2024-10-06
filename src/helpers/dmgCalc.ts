
import { getLightingDmg, getEarthquakeDmg, getEquipmentDmg } from "@/data/dataMap";
import * as Models from "@/models/models"

function dealLightingDmg(level: number, currentHealth: number): number {
	currentHealth = currentHealth - getLightingDmg(level)
	if (currentHealth > 0) {
		return currentHealth
	}
	return 0
}

function dealFireballDmg(level: number, currentHealth: number): number | undefined {
	let fireballDmg = getEquipmentDmg("fireball", level)
    if (fireballDmg == undefined) {
        return undefined
    }
    currentHealth = currentHealth - fireballDmg
	if (currentHealth > 0) {
		return currentHealth
	}
	return 0
}

function dealGiantarrowDmg(level: number, currentHealth: number): number | undefined{
	let giantarrowDmg = getEquipmentDmg("giantarrow", level)
    if (giantarrowDmg == undefined) {
        return undefined
    }
    currentHealth = currentHealth - giantarrowDmg
	if (currentHealth > 0) {
		return currentHealth
	}
	return 0
}

function dealEarthquakeDmg(level: number, currentHealth: number, maxHealth: number, index: number): number {
	let percentDmg = getEarthquakeDmg(level) / 100
	let modifier = 1.0 / (1.0 + (index * 2.0))
	let dmg = maxHealth * percentDmg * modifier // index is 0 based
	currentHealth = currentHealth - dmg
	if (currentHealth > 0) {
		return currentHealth
	}
	return 0
}

// Deals the damage of count # of earthquake spells and returns the remaining health
function applyMultiEq(level: number, currentHealth: number, maxHealth: number, count: number): number {
	for (let i = 0; i < count; i++) {
		currentHealth = dealEarthquakeDmg(level, currentHealth, maxHealth, i)
	}
	return currentHealth
}

// Determines the # of lightning spells needed to kill at the given health
function applyMultiLtn(level: number, currentHealth: number): number {
	let count = 0
	while (currentHealth > 0) {
		currentHealth = dealLightingDmg(level, currentHealth)
		count++
	}
	return count
}

export function findOptimalSpells(maxHealth: number, userInput: Models.UserInput): Models.CalcResult | undefined {
	let bestResults: Models.CalcResult = {}
	let resultSlice: number[] = []
	let currentHealth = maxHealth 
	let lowestSpellCount = 99

	// giantarrow damage
	if (userInput.GiantarrowLvl != 0) {
		let tempHealth = dealGiantarrowDmg(userInput.GiantarrowLvl, currentHealth)
        if(tempHealth == undefined) {
            return undefined
        }
        currentHealth = tempHealth
		bestResults.GiantarrowUsed = true
	}

	// fireball damage
	if (userInput.FireballLvl != 0) {
		let tempHealth = dealFireballDmg(userInput.FireballLvl, currentHealth)
        if(tempHealth == undefined) {
            return undefined
        }
        currentHealth = tempHealth
		bestResults.FireballUsed = true
	}

	// calculate zapquake at each quake amount and put in result array
	for (let eqUsed = 0; eqUsed < 5; eqUsed++) {
		let tempHealth = currentHealth
		tempHealth = applyMultiEq(userInput.EarthquakeLvl, tempHealth, maxHealth, eqUsed)
		let ltnUsed = applyMultiLtn(userInput.LightningLvl, tempHealth)
		if (eqUsed+ltnUsed < lowestSpellCount) {
			lowestSpellCount = eqUsed + ltnUsed
		}
		resultSlice[eqUsed] = ltnUsed
	}

	bestResults.ZapQuakeCombos = selectBestCombos(resultSlice, lowestSpellCount)
	return bestResults
}

function selectBestCombos(resultSlice: number[], lowestSpellCount: number): Map<number,number> {
	let results: Map<number, number> = new Map()
    for(let eq = 0; eq < resultSlice.length; eq++) {
        let lt = resultSlice[eq]
        if (eq+lt == lowestSpellCount) {
			results.set(eq, lt)
		}
    }
	return results
}
