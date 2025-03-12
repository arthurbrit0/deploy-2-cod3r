import { NextResponse } from 'next/server';
import { getFormacaoDevSummary } from '@/services/formacaoDevServices';

export const revalidate = 3600; 

export async function GET() {
  try {
    const summary = await getFormacaoDevSummary();
    return NextResponse.json(summary);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Falha ao obter summary' }, { status: 500 });
  }
}
