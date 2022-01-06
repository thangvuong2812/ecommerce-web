import { createSlice } from '@reduxjs/toolkit'

// array item objects
const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = { value: items };

export const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;

            // Lấy ra các item có trong mảng state value mà có thuộc tính giống với newItem
            const duplicate = findItem(state.value, newItem);
            // Tìm thấy item 
            if(duplicate.length > 0) {
                // Lấy ra các item khác thuộc tính với newItem (xóa)
                state.value = delItem(state.value, newItem);

                state.value = [...state.value, {
                    ...newItem,
                    id: duplicate[0].id,
                    quantity: newItem.quantity + duplicate[0].quantity
                }]
            } else {
                state.value = [...state.value, {
                    ...newItem,

                    // Cần tìm hiểu thêm => done
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1   // id phần từ cuối cùng của mảng
                }]
            }

            localStorage.setItem('cartItems', JSON.stringify(sortItems(state.value)));

        },
        updateItem: (state, action) => {
            const updateItem = action.payload;
            // Lấy ra các item có trong mảng state value mà có thuộc tính giống với newItem
            const item = findItem(state.value, updateItem);
            if(item.length > 0) {
                // Lấy ra các item khác thuộc tính với newItem (xóa)
                state.value = delItem(state.value, updateItem);

                state.value = [...state.value, {
                    ...updateItem,
                    id: item[0].id,
                }]
                localStorage.setItem('cartItems', JSON.stringify(sortItems(state.value)));
            }
        },
        removeItem: (state, action) => {
            const removeItem = action.payload;
            // Lấy ra các item có trong mảng state value mà có thuộc tính giống với newItem
            const item = findItem(state.value, removeItem);
            if(item.length > 0) {
                // Lấy ra các item khác thuộc tính với newItem (xóa)
                state.value = delItem(state.value, removeItem);
                localStorage.setItem('cartItems', JSON.stringify(sortItems(state.value)));
            }
        }
    }
})

const findItem = (arr, item) => {
    return arr.filter(e => e.slug === item.slug && e.color === item.color && e.size === item.size);
}

const delItem = (arr, item) => {
    return arr.filter(e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size);
}


// Cần tìm hiểu thêm
const sortItems = arr => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0 ));

export const {addItem, updateItem, removeItem} = cartItemSlice.actions;

export default cartItemSlice.reducer;