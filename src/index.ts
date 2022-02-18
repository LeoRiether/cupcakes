import { rand, randomColor } from './colors';

const qs = (selector: string, element: (Element | Document) = document) =>
    element.querySelector(selector) as HTMLElement;
const qsa = (selector: string, element: (Element | Document) = document) =>
    Array.from(element.querySelectorAll(selector)) as [HTMLElement];

const resetAnimation = () => {
    let el = qs('#cupcake');
    el.classList.remove('slide');
    void el.offsetWidth;  // trigger reflow (didn't actually work, that's why I have setTimeout...)
    setTimeout(() => el.classList.add('slide'), 200);
};

const toppings = ["#candies", "#candle", "#sprinkles"].map(s => qs(s));
const pickTopping = () => {
    toppings.forEach(t => { t.style.display = "none" });

    let i = ~~rand(0, toppings.length);
    toppings[i].style.display = "";
};

const fillings = [["#fcfbf5", "#bc7428"], ["#573c31", "#000000"], ["rgb(148 247 158)", "#215313"], ["#e9e93a", "#bc7428"]];
const pickFilling = () => {
    let [fcol, dcol] = fillings[~~rand(0, fillings.length)];

    qs("#filling").style.fill = fcol;
    qsa("#filling-details>path").forEach(e => { e.style.fill = dcol; });
};

const cakes = [["#path3850-3", '#path1120-4'], ["#path3850-3-0", '#path1120-4-8']].map(([a, b]) => [qs(a), qs(b)]);
const pickCake = () => {
    cakes.forEach(([a, b]) => { a.style.display = b.style.display = "none"; });

    let i = ~~rand(0, cakes.length);
    cakes[i][1].style.display = cakes[i][0].style.display = "";
};

const changeTextColors = () => {
    const els = qsa('h1');
    for (let e of els) {
        e.style.color = `hsl(${rand(0, 360)}, ${rand(80, 100)}%, 50%)`;
    }
};

const load = () => {
    resetAnimation();
    document.body.style.background = randomColor();
    pickTopping();
    pickFilling();
    pickCake();
};

load();
window.addEventListener('click', load);

setInterval(changeTextColors, 500);
