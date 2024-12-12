document.addEventListener('DOMContentLoaded', () => {
    console.log('Frontend scripts loaded.');
  
    // Ejemplo de evento para un botón de agregar al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', async (e) => {
        const productId = e.target.dataset.productId; // Obtiene el ID del producto
        console.log(`Producto agregado al carrito: ${productId}`);
  
        try {
          // Petición al backend para agregar el producto al carrito
          const response = await fetch('/api/cart', {
            method: 'POST', // Método POST para agregar al carrito
            headers: {
              'Content-Type': 'application/json', // Especificamos el tipo de contenido
            },
            body: JSON.stringify({ productId }), // Enviamos el ID del producto en el cuerpo
          });
  
          if (response.ok) {
            const data = await response.json();
            console.log('Respuesta del servidor:', data);
  
            // Muestra un mensaje al usuario
            alert(`Producto agregado al carrito: ${data.product.name}`);
          } else {
            // Manejo de errores si la respuesta no es satisfactoria
            const error = await response.json();
            console.error('Error al agregar al carrito:', error);
            alert(`Error: ${error.message}`);
          }
        } catch (error) {
          // Manejo de errores de conexión u otros
          console.error('Error en la petición al servidor:', error);
          alert('Hubo un error al agregar el producto al carrito. Intenta nuevamente.');
        }
      });
    });
  });
  