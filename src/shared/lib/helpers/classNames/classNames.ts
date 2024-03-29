// Record тс тип, обозначает что в качестве ключа будет строка
// а в качестве значения булево
type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...(additional ? additional.filter(Boolean) : []),
        mods ? Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls) : [],
    ].join(' ');
}
