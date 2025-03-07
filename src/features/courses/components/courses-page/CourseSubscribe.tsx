"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2, ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/features/shared/layouts/Container";

const formSchema = z.object({
  name: z.string().min(2, "Nome tem que ter no mínimo 2 caracteres"),
  email: z.string().email("Insira um endereço de email válido"),
  phone: z.string().min(10, "Insira um número de telefone válido"),
});

export function CourseSubscribe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit() {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  const benefits = [
    {
      icon: Clock,
      title: "Acesso vitalício",
      description: "Acesse o curso para sempre, mesmo após a conclusão",
    },
    {
      icon: Shield,
      title: "Certificação",
      description: "Receba um certificado de conclusão ao final do curso",
    },
    {
      icon: Sparkles,
      title: "Suporte eficiente",
      description: "Suporte eficiente e dedicado para tirar suas dúvidas",
    },
  ];

  return (
      <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-pink-600 to-blue-700" />
        <Container>
      <div className="absolute inset-0" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <CardContent className="relative z-10 p-8 md:p-12">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Começe sua jornada de aprendizado
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Se junte a milhares de estudantes e comece a aprender hoje mesmo
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="grid gap-6">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex gap-4 p-4 rounded-xl bg-zinc-900 border border-black"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border"
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome completo</FormLabel>
                            <FormControl>
                              <Input className="bg-background" placeholder="Leonardo Leitão" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input className="bg-background" placeholder="cod3r@exemplo.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Número de telefone</FormLabel>
                            <FormControl>
                              <Input className="bg-background" placeholder="+55 (855) 0000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full group"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processando
                          </>
                        ) : (
                          <>
                            Inscrever-se
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 max-w-md mx-auto"
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Bem-vindo!
              </motion.h3>
              <motion.p 
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Sua inscrição foi realizada com sucesso. Bem-vindo à comunidade!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="group"
                >
                  Inscrever-se em outro curso
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Container>
    </Card>
  );
}