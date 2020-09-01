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

function subTotal(element) {
  console.log(element);
  console.log(element.parents('.cart-row').attr('id'));
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

function total() {
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
}

$('.plus').on('click', function () {
  console.log('click');
  // var thisId = $(this).parents('.cart-row').attr('id');
  var increment = parseInt($(this).siblings('input').val());
  increment++;
  console.log($(this).siblings('input').val());
  $(this).siblings('input').val(increment);
  subTotal($(this));
  total();
});

$('.minus').on('click', function () {
  console.log('click');
  // var thisId = $(this).parents('.cart-row').attr('id');
  var decrement = parseInt($(this).siblings('input').val());
  if (decrement) {
    decrement--;
  }
  console.log($(this).siblings('input').val());
  $(this).siblings('input').val(decrement);
  subTotal($(this));
  total();
});
