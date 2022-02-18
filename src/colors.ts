// definitely belongs in here...
export const rand = (lo: number, hi: number) =>
    Math.random() * (hi - lo) + lo;

export const randomColor = () =>
    `hsl(${rand(0, 360)}, ${rand(40, 55)}%, ${rand(65, 75)}%)`;
