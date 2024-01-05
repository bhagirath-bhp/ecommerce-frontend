export const transformCartArray = (inputArray) => {
    return inputArray.map(({ cartId, product, quantity }) => {
        const { productId, name, price } = product;
        const total = (parseInt(price) * quantity);

        return {
            id: cartId,
            productId: productId,
            name: name,
            description: name,
            price: parseInt(price),
            quantity: quantity,
            total: total,
        };
    });
};