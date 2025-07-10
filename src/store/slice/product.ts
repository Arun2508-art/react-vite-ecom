import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export interface ProductListProps {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     count: number;
//     rate: number;
//   };
// }

export interface ProductListProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

export interface ProductProps {
  products: ProductListProps[];
  selectedProduct: ProductListProps | null;
  isLoading: boolean;
}

const initialState: ProductProps = {
  products: [],
  selectedProduct: null,
  isLoading: false
};

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  const res = await fetch('https://dummyjson.com/products?limit=194');
  if (!res.ok) {
    console.log('Failed to fetch products');
  }
  const data = await res.json();
  return data;
});

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) {
      console.log('Failed to fetch Product');
    }
    const singleProduct = await res.json();
    return singleProduct;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
