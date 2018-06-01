export default ({ app }) => {

    Snipcart.subscribe('item.adding', function (ev, item, items) {
        fbq('track', 'AddToCart');
    });

    Snipcart.subscribe('order.completed', function (data) {
        fbq('track', 'Purchase', {value:  data.total, currency:'EUR'});
    });


}
