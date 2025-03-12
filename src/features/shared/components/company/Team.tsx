import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export default function Team() {
    const testimonials = [
        {
            quote: 'Mestre em Informática Aplicada e fundador da Cod3r, já treinou mais de 420.000 alunos. São mais de 16 anos como professor.   Há 20 anos atua na área como desenvolvedor de softwares e trabalhou como arquiteto de software em grandes projetos para o Governo Federal.',
            name: 'Leonardo Leitão',
            designation: 'CTO da Cod3r Ensino e Consultoria',
            src: '/team/leo.png',
        },
        {
            quote: 'Engenheira de Computação graduada pela Universidade Federal de Pelotas. Atualmente, atua como professora na Cod3r, é embaixadora do programa Women Techmakers e co-organizadora do GDG Pelotas e palestrante.',
            name: 'Letícia Garcez',
            designation: 'Engenheira de Computação',
            src: '/team/leticia.png',
        },
    ]
    return <AnimatedTestimonials testimonials={testimonials} imageClassName="md:h-[500px]" />
}
