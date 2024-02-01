export let isLiked = function (itemId, wishlist) {
  if (wishlist.some((item) => item.product_id === itemId)) return true;
  return false;
}

export const addToWishlist = (wishlist, newItem) => {
  if (!isLiked(newItem.product_id, wishlist)) {
    return ([...wishlist, newItem]);
  }
};

export const removeFromWishlist = (id, wishlist) => {
  return (wishlist.filter((item) => fav.product_id !== id));
};