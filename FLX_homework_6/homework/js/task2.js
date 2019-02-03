let price = prompt('Enter the price', ''),
    discount = prompt('Enter % of your discount', '');

if (price < 0 || price > 9999999 || discount < 0 || discount > 99 || isNaN(price) || isNaN(discount) ||
    price === '' || discount === '' || price === null || discount === null) {
    alert('Invalid input data');
} else {
    let saved = price * discount / 100;
    let discountPrice = price - saved;

    alert('Price without discount: ' + (parseInt(price * 100))/100 + '\nDiscount: ' + (parseInt(discount * 100))/100
        + '%' + '\nPrice with discount: ' + (parseInt(discountPrice * 100))/100 + '\nSaved: '
        + (parseInt(saved * 100))/100);
}