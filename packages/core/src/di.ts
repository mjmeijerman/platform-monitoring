export type Factory<T> = () => T

export interface Container {
	register<T>(key: string, factory: Factory<T>): void
	resolve<T>(key: string): T
}

export function createContainer(): Container {
	const registry = new Map<string, Factory<unknown>>()

	return {
		register<T>(key: string, factory: Factory<T>) {
			registry.set(key, factory as Factory<unknown>)
		},
		resolve<T>(key: string): T {
			const factory = registry.get(key)
			if (!factory) {
				throw new Error(`Dependency "${key}" is not registered.`)
			}
			return (factory as Factory<T>)()
		},
	}
}
