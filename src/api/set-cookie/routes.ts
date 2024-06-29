import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    console.log('Received name:', name); // Log para verificar que el nombre se recibe correctamente
    const response = NextResponse.json({ message: 'Cookie set' });
    response.cookies.set('name', name, {
      httpOnly: true,
      path: '/',
    });
    console.log('Setting cookie:', name); // Log para verificar que la cookie se está configurando
    return response;
  } catch (error) {
    console.error('Error setting cookie:', error); // Log para capturar cualquier error
    return new NextResponse('Error setting cookie', { status: 500 });
  }
}
