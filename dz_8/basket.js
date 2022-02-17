'use strict';

const cartIconEl = document.querySelector('.cartIconWrap');

const basketEl = document.querySelector('.basket');

const basketTotalEl = document.querySelector('.basketTotal');

const basketCounterEl = document.querySelector('.cartIconWrap span');

const basketTotalValueEl = document.querySelector('.basketTotalValue')

cartIconEl.addEventListener('click', () => {
    basketEl.classList.toggle('hidden');
});

const basket = {'totalPrice': 0};

/**
 * gen new line for basket
 * @param {{}} line product dataset
 * @returns {string} HTML content
 */
function genBasketContent(line) {
    let htmlRow = `<div class="basketRow" data-id="${line['id']}">`;
    htmlRow += `<div>${line['name']}</div>`;
    htmlRow += `<div>${line['count']}</div>`;
    htmlRow += `<div>${line['price']}</div>`;
    htmlRow += `<div>${Number.parseFloat(line['price'])*line['count']}</div>`;
    htmlRow += '</div>';
    return htmlRow;
}

/**
 * edit line in basket
 * @param line
 */
function editBasketContent(line) {
    const elem = document.querySelector(`[data-id="${line['id']}"]`);
    elem.children[1].innerText = line['count'];
    elem.children[3].innerText = Number.parseFloat(line['price'])*line['count'];
}

/**
 * get dataset edit basket obj and counter
 * @param dataset
 */
function addToCart(dataset) {
    dataset = Object.assign({}, dataset);
    if (!(dataset.id in basket)) {
        dataset.count = 1;
        basket[dataset.id] = dataset;
        const basketObj = genBasketContent(dataset);
        basketTotalEl.insertAdjacentHTML('beforebegin', basketObj);
    } else {
        basket[dataset.id].count += 1;
        editBasketContent(basket[dataset.id]);
    }
    basket.totalPrice += Number.parseFloat(dataset['price'])
    basketCounterEl.textContent = `${Number.parseInt(basketCounterEl.textContent) + 1}`;
    basketTotalValueEl.textContent = `${basket.totalPrice}`;
}



document.querySelector('.featuredItems').addEventListener('click', (event) => {
    if (event.target.className !== 'addToCart') {
        return;
    }
    addToCart(event.target.closest('.featuredItem').dataset);
})