import { NextResponse } from 'next/server';
import { getAllFormacaoDevTracks, getAllFormacaoDevCourses } from '@/services/formacaoDevServices';

export const revalidate = 3600;

export async function GET() {
  try {
    const allTracks = await getAllFormacaoDevTracks();
    const allCourses = await getAllFormacaoDevCourses();

    const totalTracks = allTracks.length;
    const totalCourses = allCourses.length;
    const totalClasses = allCourses.reduce((acc, c) => acc + c.qtdeDeAulas, 0);
    const totalHours = Math.ceil(allCourses.reduce((acc, c) => acc + c.duracao, 0) / 3600);

    return NextResponse.json({
      totalTracks,
      totalCourses,
      totalClasses,
      totalHours,
    });
  } catch (error) {
    console.error('Erro ao obter stats:', error);
    return NextResponse.json({ error: 'Erro ao obter stats' }, { status: 500 });
  }
}
