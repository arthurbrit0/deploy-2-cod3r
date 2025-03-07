import { IconBrandInstagram, IconBrandWhatsappFilled, IconBrandYoutube } from '@tabler/icons-react'
import { twm } from '@/utils/tw'
import Image from 'next/image'
import SocialMedia from './SocialMedia'

export interface FooterProps {
    className?: string
}

export default function Footer(props: FooterProps) {
    return (
        <footer
            className={twm(
                'flex flex-col md:flex-row justify-between items-center md:items-start gap-7 md:gap-3 mx-6 bg-black',
                props.className,
            )}
        >
            <div className="flex flex-col gap-5">
                <div className="font-bold">
                    <Image src="/logo.svg" width={130} height={0} alt="Logo" className="md:-ml-4" />
                </div>
                <div className="flex justify-center md:justify-start gap-3">
                    <SocialMedia icon={IconBrandYoutube} link="https://www.youtube.com/@cod3r" />
                    <SocialMedia
                        icon={IconBrandInstagram}
                        link="https://www.instagram.com/cod3rcursos"
                    />
                </div>
                <div className="hidden md:block">
                    <p className="font-semibold">
                        COD<span className="text-red-500">3</span>R ® 2024{' '}
                        <span className="font-light text-zinc-400">
                            - Todos os direitos reservados
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-3 items-center md:items-start">
                <h2 className="font-bold">Sobre</h2>
                <div className="flex flex-col gap-1 items-center md:items-start">
                    <a className="font-light text-zinc-400" href="/cod3r" target="_blank">
                        A Cod3r
                    </a>
                    <a className="font-light text-zinc-400" href="https://blog.formacao.dev" target="_blank">
                        Nosso Blog
                    </a>
                    <a className="font-light text-zinc-400" href="/politicas" target="_blank">
                        Política de Privacidade
                    </a>
                    <a className="font-light text-zinc-400" href="/termos" target="_blank">
                        Termos de uso
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-3 items-center md:items-start">
                <h2 className="font-bold">Contato</h2>
                <div className="flex flex-col gap-3">
                    <span className="font-medium text-zinc-400">suporte@formacao.dev</span>
                    <a
                        href="https://api.whatsapp.com/send/?phone=558581548877&text&type=phone_number"
                        target="_blank"
                        className="flex items-center gap-2"
                    >
                        <IconBrandWhatsappFilled
                            stroke={1}
                            size={35}
                            className="text-emerald-500"
                        />
                        <span className="font-medium text-sm text-zinc-300">Entre em contato</span>
                    </a>
                </div>
            </div>

            <div className="md:hidden">
                <p className="font-semibold text-xs sm:text-base">
                    COD<span className="text-red-500">3</span>R ® 2024{' '}
                    <span className="font-light">- Todos os direitos reservados</span>
                </p>
            </div>
        </footer>
    )
}
