export interface PokeAPIBaseResult {
	name: string
	url: string
}

export interface Type {
	name: string
	url: string
}

export interface Sprite {
	front_default: string
	back_default?: string
	back_female?: string
	back_shiny?: string
	back_shiny_female?: string
	front_female?: string
	front_shiny?: string
	front_shiny_female?: string
}

export interface Pokemon {
	id: number
	name: string
	types: Type[]
	sprites: Sprite
}
