import cathay_products from "./cathay_product";

function draw() {
    let prize_pool = [];
    for (const products in cathay_products) {
        prize_pool.push.apply(prize_pool, cathay_products[products]);
    }

    return prize_pool[Math.floor(Math.random() * prize_pool.length)];
}

export default draw