$('#0')
  .find('.cart-quantity-input')
  .change(function () {
    var quantity = parseFloat($('#0').find('.cart-quantity-input').val());
    var price = parseFloat($('#0').find('.cart-price').text().replace('€', ''));

    $('#0')
      .find('.cart-subtotal')
      .text(quantity * price + '€');
  });

function subTotal(element) {
  var quantity = element.siblings('.cart-quantity-input').val();
  var price = parseFloat(
    element.closest('.cart-row').find('.cart-price').text().replace('€', '')
  );
  $(element)
    .closest('.cart-row')
    .find('.cart-subtotal')
    .text(price * quantity + '€');
}

$('#1')
  .find('.cart-quantity-input')
  .change(function () {
    var quantity = parseFloat($('#1').find('.cart-quantity-input').val());

    var price = parseFloat($('#1').find('.cart-price').text().replace('€', ''));

    $('#1')
      .find('.cart-subtotal')
      .text(quantity * price + '€');
  });
$('#2')
  .find('.cart-quantity-input')
  .change(function () {
    var quantity = parseFloat($('#2').find('.cart-quantity-input').val());

    var price = parseFloat($('#2').find('.cart-price').text().replace('€', ''));
    $('#2')
      .find('.cart-subtotal')
      .text(quantity * price + '€');
  });

function computeTotalValues() {
  const total = [...$('.cart-items .cart-subtotal')]
    .map((subtotalElm) => Number(subtotalElm.textContent.replace('€', '')))
    .reduce((a, b) => a + b, 0);
  $('.cart-total-price').text(total + '€');

  const totalQuantity = $.map(
    $('.cart-items .cart-quantity-input'),
    (input) => +input.value
  ).reduce((a, b) => a + b, 0);
  $('.items-number').text(totalQuantity + ' items');
}

$('.plus').on('click', function () {
  var increment = parseInt($(this).siblings('input').val());
  increment++;
  $(this).siblings('input').val(increment);
  subTotal($(this));
  computeTotalValues();
});

$('.minus').on('click', function () {
  var decrement = parseInt($(this).siblings('input').val());
  if (decrement) {
    decrement--;
  }
  $(this).siblings('input').val(decrement);
  subTotal($(this));
  computeTotalValues();
});

$('.btn-primary').on('click', function () {
  if (
    confirm('Are you sure you want to checkout? \nYour products will disappear')
  ) {
    $('.cart-total-price').text('0 €');
    $('.items-number').text('0 items');
    $('.cart-quantity-input').val('0');
  }
});
