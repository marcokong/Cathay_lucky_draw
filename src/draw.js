let cathay_products = {
    "Default": ["10 Asia Miles", "50 Asia Miles", "500 Asia Miles", "1000 Asia Miles", "Japan plane ticket"],
    "Electronics": ["Iphone 13", "Mouse", "Charging cable", "Macbook"],
    "Home": ["Lego", "Washing machine", "TV", "Pan"],
    "Travel": ["Disney package", "Suitcase"],
    "Fashion": ["Slippers", "Sunglasses", "Wallet", "Belt"],
    "Sports": ["Basketball", "Football", "DJI action cam", "Backpack"],
    "Health": ["Osim", "Jo Malone", "Make up set"],
    "Food": ["Apple", "Orange", "Coffee", "Vodka", "Black Label"],
    "Concerts": ["Hins Cheung concert", "Mirror concert", "Staycation package", "Photography package"],
    "Cathay_souvenirs": ["Pouch", "Coushion", "Water bottle", "Cathay bear", "Cocktail collection"],
    "Giftcard": ["$100 Coupon", "$200 Voucher", "$500 Voucher"]
}

function draw() {
    let prize_pool = [];
    for (const products in cathay_products) {
        prize_pool.push.apply(prize_pool, cathay_products[products]);
    }

    return prize_pool[Math.floor(Math.random() * prize_pool.length)];
}

export default draw