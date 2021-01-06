// selecting elements
$('.cart-quantity-input').on('change', function () {
  const quantity = this.value;
  const $row = $(this).closest('.cart-row');
  const price = $row.find('.cart-price').text();
  $row.find('.cart-subtotal').text(quantity * price);
});

function calculateAndRenderSubtotal(element) {
  const quantity = element.siblings('.cart-quantity-input').val();
  const price = parseFloat(
    element.closest('.cart-row').find('.cart-price').text()
  );

  $(element)
    .closest('.cart-row')
    .find('.cart-subtotal')
    .text(price * quantity);
}

// compute total sum and number of items
function computeTotalValues() {
  const total = [...$('.cart-items .cart-subtotal')]
    .map((subtotalElm) => Number(subtotalElm.textContent))
    .reduce((a, b) => a + b, 0);

  $('.cart-total-price').text(total);

  const totalQuantity = $.map(
    $('.cart-items .cart-quantity-input'),
    (input) => +input.value
  ).reduce((a, b) => a + b, 0);

  $('.items-number').text(totalQuantity + ' items');
}

// increase number of items
$('.plus, .minus').on('click', function () {
  const currentValue = parseInt($(this).siblings('input').val());
  const addValue = $(this).is('.plus') ? 1 : -1;

  $(this)
    .siblings('input')
    .val(Math.max(0, currentValue + addValue));
  calculateAndRenderSubtotal($(this));
  computeTotalValues();
});

// checkout button clicked
$('.btn-primary').on('click', function () {
  if (
    confirm('Are you sure you want to checkout? \nYour products will disappear')
  ) {
    $('.cart-total-price').text('0');
    $('.items-number').text('0 items');
    $('.cart-quantity-input').val('0');
    $('.cart-subtotal').text(0);
  }
});
