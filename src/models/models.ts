export interface UserInput {
	GiantarrowLvl: number
	FireballLvl:   number
	LightningLvl:  number
	EarthquakeLvl: number
}

export interface CalcResult {
	FireballUsed?:   boolean
	GiantarrowUsed?: boolean
	ZapQuakeCombos?: Map<number,number>
}