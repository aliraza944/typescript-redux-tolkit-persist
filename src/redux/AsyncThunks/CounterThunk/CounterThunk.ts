import { createAsyncThunk } from "@reduxjs/toolkit";

interface MyData {
  userId: number;
}

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  // Declare the type your function argument here:
  async (userId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${userId}`
    );
    // Inferred return type: Promise<MyData>
    const res = await response.json();
    return res.userId as MyData["userId"];
  }
);
