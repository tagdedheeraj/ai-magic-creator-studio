
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    { name: "राहुल शर्मा", role: "Content Creator", content: "Daily 10 videos बनाता हूं जो पहले 1 week लगते थे!", rating: 5 },
    { name: "प्रिया गुप्ता", role: "Digital Marketer", content: "Bina technical knowledge के professional websites बना रही हूं!", rating: 5 }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">Success Stories</h2>
      <div className="space-y-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-2 text-sm italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                <p className="text-purple-400 text-xs">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
