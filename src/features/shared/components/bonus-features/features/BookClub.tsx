import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Title from '../../Title';

const books = [
  {
    title: "Código Limpo",
    description: "Robert C. Martin",
    cover: "/books/codigo_limpo.webp"
  },
  {
    title: "Arquitetura Limpa",
    description: "Robert C. Martin",
    cover: "/books/arquitetura_limpa.jpg"
  },
  {
    title: "Implementando DDD",
    description: "Vaughn Vernon",
    cover: "/books/implementando_ddd.jpg"
  },
  {
    title: "O Programador Prático",
    description: "Andrew Hunt e David Thomas",
    cover: "/books/programador_pratico.jpg"
  },
  {
    title: "Padrões de Projeto",
    description: "E. Gamma, R. Helm, R. Johnson e J. Vlissides",
    cover: "/books/padroes_de_projeto.jpg"
  }
];

export default function ClubeDoLivroContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= books.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, books.length - 3) : prevIndex - 3
    );
  };

  const visibleBooks = books.slice(currentIndex, currentIndex + 3);

  return (
    <>
      <div className="p-8 bg-gray-800/50 rounded-xl mb-6">
        <Title
          main={[
            {
              value: 'Discussões sobre',
            },
            {
              value: 'Livros de Tecnologia',
              gradient: true,
            },
          ]}
          secondary="Participe de discussões sobre livros de tecnologia e aprimore suas habilidades"
        />
      </div>

      <div className="flex items-center justify-center my-8">
        <div className="h-px flex-1 bg-white opacity-50" />
        <h2 className="mx-4 text-xl font-bold text-center">
          Alguns títulos que já estudamos
        </h2>
        <div className="h-px flex-1 bg-white opacity-50" />
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/80 text-purple-300 hover:bg-gray-700/80 hover:text-purple-200 transition-all duration-200 shadow-lg backdrop-blur-sm"
          aria-label="Previous books"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/80 text-purple-300 hover:bg-gray-700/80 hover:text-purple-200 transition-all duration-200 shadow-lg backdrop-blur-sm"
          aria-label="Next books"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-3 gap-6">
          {visibleBooks.map((book, index) => (
            <div
              key={currentIndex + index}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-purple-300 truncate">
                  {book.title}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(books.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === Math.floor(currentIndex / 3)
                  ? 'bg-purple-400 w-4'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
