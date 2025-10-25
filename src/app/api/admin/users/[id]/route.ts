import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/users';

// 🔹 Lấy thông tin người dùng theo ID
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('❌ GET /users/:id failed:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}

// 🔹 Cập nhật người dùng (khớp với PATCH từ frontend)
export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const body = await req.json();

  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, body);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('❌ PATCH /users/:id failed:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// 🔹 Xóa người dùng
export async function DELETE(
  _req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return NextResponse.json({ message: 'User deleted' });
  } catch (error) {
    console.error('❌ DELETE /users/:id failed:', error);
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
