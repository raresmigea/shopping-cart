$('#0')
  .find('.cart-quantity-input')
  .change(function () {
    var quantity = parseFloat($('#0').find('.cart-quantity-input').val());
    console.log(
      'valoare inputului2  ' + $('#0').find('.cart-quantity-input').val()
    );
    var price = parseFloat($('#0').find('.cart-price').text().replace('€', ''));
    console.log(price);
    $('#0')
      .find('.cart-subtotal')
      .text(quantity * price + '€');
  });

$('#1')
  .find('.cart-quantity-input')
  .change(function () {
    var quantity = parseFloat($('#1').find('.cart-quantity-input').val());
    console.log(
      'valoare inputului2  ' + $('#1').find('.cart-quantity-input').val()
    );
    var price = parseFloat($('#1').find('.cart-price').text().replace('€', ''));
    console.log(price);
    $('#1')
      .find('.cart-subtotal')
      .text(quantity * price + '€');
  });
$('#2')
  .find('.cart-quantity-input')
  .change(function () {
    var quantity = parseFloat($('#2').find('.cart-quantity-input').val());
    console.log(
      'valoare inputului2  ' + $('#2').find('.cart-quantity-input').val()
    );
    var price = parseFloat($('#2').find('.cart-price').text().replace('€', ''));
    console.log(price);
    $('#2')
      .find('.cart-subtotal')
      .text(quantity * price + '€');
  });

$(document).change(function () {
  console.log('muie');
  var subtotal0 = parseFloat(
    $('#0').find('.cart-subtotal').text().replace('€', '')
  );

  var subtotal1 = parseFloat(
    $('#1').find('.cart-subtotal').text().replace('€', '')
  );

  var subtotal2 = parseFloat(
    $('#2').find('.cart-subtotal').text().replace('€', '')
  );

  var total = subtotal0 + subtotal1 + subtotal2;

  $('.cart-total-price').text(total + '€');
});
