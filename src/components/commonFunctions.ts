import { toast } from "react-toastify";

export const addToFavorites = (id: string) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
        toast.success('Favorite added successfully!');
    }
};
