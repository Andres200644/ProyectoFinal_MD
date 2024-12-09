document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
  
    cartButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        const productId = event.target.dataset.id;
        try {
          const response = await fetch('/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity: 1 }),
          });
          if (response.ok) {
            alert('Producto agregado al carrito');
          } else {
            alert('Hubo un error al agregar el producto');
          }
        } catch (error) {
          console.error(error);
        }
      });
    });
  });
  