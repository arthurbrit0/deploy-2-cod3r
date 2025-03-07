"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface InstructorCardProps {
  testimonials: Testimonial[];
  imageClassName?: string;
}

export function InstructorCard({ testimonials,}: InstructorCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-row">
            <div className="relative w-full h-[300px]">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-6 bg-gray-950">
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.designation}
                </p>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                {testimonial.quote}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}