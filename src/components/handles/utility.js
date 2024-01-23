export const transformCartArray = (inputArray) => {
    return inputArray.map(({ cartId, product, quantity }) => {
        const { productId, name, price, images } = product;
        const total = (parseInt(price) * quantity);

        return {
            id: cartId,
            productId: productId,
            name: name,
            description: name,
            price: parseInt(price),
            quantity: quantity,
            total: total,
            imageURL: images[0].imageURL
        };
    });
};
export const transformWishlistArray = (inputArray) => {
    return inputArray.map(({ wishlistId, product }) => {
        const { productId, name, price, images, quantity } = product;
        const total = (parseInt(price) * quantity);

        return {
            id: wishlistId,
            productId: productId,
            name: name,
            description: name,
            price: parseInt(price),
            quantity: quantity,
            total: total,
            imageURL: images[0].imageURL
        };
    });
};