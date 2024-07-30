import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productApi } from './Product';
import { userApi } from './User';
import cartReducer from './CarteSlice';

export const store = configureStore({
  reducer: {
    // Ajouter le reducer généré pour le slice `product`
    [productApi.reducerPath]: productApi.reducer,
    // Ajouter le reducer généré pour le slice `user`
    [userApi.reducerPath]: userApi.reducer,
    //Ajouter le reducer de cart
    cart : cartReducer,
  },
  // Ajouter les middleware des API pour activer les fonctionnalités comme le caching, l'invalidation, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      userApi.middleware
    ),
});

// Configuration optionnelle mais recommandée pour le comportement de refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);
