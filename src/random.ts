export function randomBetween(
    min: number,
    max: number
): number {
    if (!Number.isFinite(min)) {
        throw new RangeError(
            `Cannot generate a random number: min cannot be ${min}`,
        );
    }
    if (!Number.isFinite(max)) {
        throw new RangeError(
            `Cannot generate a random number: max cannot be ${max}`,
        );
    }
    if (max < min) {
        throw new RangeError(
            `Cannot generate a random number as max must be greater than or equal to min: max=${max}, min=${min}`,
        );
    }

    const x = Math.random();
    const y = min * (1 - x) + max * x;
    return y >= min && y < max ? y : min;
}

export function randomInArray<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error("Cannot get random element from empty array");
    }

    const index = Math.floor(randomBetween(0, arr.length));
    
    return arr[index];
}