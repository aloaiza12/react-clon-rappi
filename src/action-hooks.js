import React from "react";
import { useDispatch } from "react-redux";

import {
  addMenuItem,
  listRestaurants,
  selectRestaurant,
  decreaseQuantity,
  deleteFromCart,
  reset,
  login,
  logout,
  resetCart,
  addOrder,
  updateOrder,
  getOrders
} from "./actions";

export function useLogin() {
  const dispatch = useDispatch();
  return React.useCallback(user => dispatch(login(user)), [dispatch]);
}

export function useLogout() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(logout()), [dispatch]);
}

export function useResetCart() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(resetCart()), [dispatch]);
}

export function useAddMenuItem() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(addMenuItem(item)), [dispatch]);
}

export function useDecreaseQuantity() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(decreaseQuantity(item)), [
    dispatch
  ]);
}

export function useDeleteFromCart() {
  const dispatch = useDispatch();
  return React.useCallback(item => dispatch(deleteFromCart(item)), [dispatch]);
}

export function useReset() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(reset()), [dispatch]);
}

export function useListRestaurants() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(listRestaurants()), [dispatch]);
}

export function useSelectRestaurant() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(selectRestaurant(id)), [dispatch]);
}

export function useAddOrder() {
  const dispatch = useDispatch();
  return React.useCallback(order => dispatch(addOrder(order)), [dispatch]);
}

export function useUpdateOrder() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(updateOrder(id)), [dispatch]);
}

export function useGetOrders() {
  const dispatch = useDispatch();
  return React.useCallback(() => dispatch(getOrders()), [dispatch]);
}


