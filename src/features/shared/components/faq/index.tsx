'use client'
import { IconChevronDown } from '@tabler/icons-react'
import * as Accordion from '@radix-ui/react-accordion'
import faq from '@/data/constants/faq'
import React, { JSX } from 'react'
import Title from '../Title'

export default function Faq() {
    return (
        <div className="flex flex-col items-center lg:items-start gap-14 py-14">
            <Title
                main={[
                    {
                        value: 'Perguntas',
                        gradient: true,
                    },
                    {
                        value: 'Frequentes',
                    },
                ]}
                secondary="Tire suas dúvidas sobre a Formação Express"
            />

            <Accordion.Root
                className="w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
                type="single"
            >
                {faq.map((question) => (
                    <Accordion.Item value={question.title} key={question.id}>
                        <AccordionTrigger icone={<IconChevronDown className="text-blue-400" />}>
                            {question.title}
                        </AccordionTrigger>
                        <AccordionContent>{question.content}</AccordionContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    )
}

interface TriggerProps extends Accordion.AccordionTriggerProps {
    icone: JSX.Element
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, TriggerProps>(
    ({ children, icone, ...props }: TriggerProps, ref) => {
        return (
            <Accordion.Header className="flex flex-col h-12">
                <Accordion.Trigger
                    className="group flex items-center justify-between shadow-sm group h-[45px] w-full flex-1 cursor-pointer bg-transparent px-5 text-lg leading-none outline-none"
                    {...props}
                    ref={ref}
                >
                    <span className="text-left text-gray-200">{children}</span>
                    <span className="relative w-[20px] h-[20px] group-data-[state=open]:rotate-180 transition-all">
                        {icone}
                    </span>
                </Accordion.Trigger>
                <div className="h-px w-full bg-gradient-to-r from-pink-400/70 to-blue-400/70"></div>
            </Accordion.Header>
        )
    },
)

AccordionTrigger.displayName = 'AccordionTrigger'

import { motion, AnimatePresence } from 'framer-motion'

const AccordionContent = React.forwardRef<HTMLDivElement, Accordion.AccordionContentProps>(
  ({ children, ...props }: Accordion.AccordionContentProps, ref) => (
    <Accordion.Content {...props} ref={ref}>
      <AnimatePresence>
        {/* Radix automatically mounts/unmounts based on state */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden text-lg"
        >
          <div
            className="py-[15px] px-5 ml-5 font-light text-gray-200"
            style={{ textAlign: 'left' }}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </Accordion.Content>
  ),
)

AccordionContent.displayName = 'AccordionContent'
