'use client'
import Title from '@/features/shared/components/Title'
import { useState } from 'react'
import TestimonyItem from './TestimonyItem'
import { IconChevronDown } from '@tabler/icons-react'
import Button from '@/features/shared/components/Button'

export default function VideoTestimonies() {
    const [qtde, setQtde] = useState(6)
    const videos = [
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=ec7b96e6-4a4b-4e13-b568-e6f0b35b336f&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=92486dbe-6ad5-406d-9e66-dc2faeef8b89&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=01c69835-74a9-4955-9ff8-d83304d1b4e7&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=ce1569aa-83b6-43d4-b0e8-65514edde7d0&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=a32f46ec-7332-4c3a-ba8a-3a3f892c7e58&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=3f0c54d1-e982-4be9-928f-35d97bf83a2a&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=13f1cfdc-1b59-434c-8579-744b0fc7f304&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=77e34fb8-b8f5-4a18-818c-e4f21a0d880e&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=11624d0b-96e2-40ad-949b-37ac4686a608&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=1794bf2c-bd7d-4883-8cf3-fa45c9f17cda&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=c74e0ee4-c220-471a-a7c2-de4f547442af&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=4974be1b-5636-42a4-ab80-eca2dda091b4&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=96bea1c6-7214-4a04-8c64-711070b7ea90&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=3071f842-ef66-4f63-9f34-d9004e77b83f&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=c3de2836-39fc-4898-93a1-22b93ac61697&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=272226aa-5ff2-4216-ab6a-418aaa6f2444&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=a5fc8fa5-457c-43ab-8fc2-a6de67f8286e&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=9e85a13f-2c8e-4bf5-9491-c6c0cd40bb7a&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=23c3134b-d1ad-4882-8aaa-2c43df581af3&autoplay=false',
        'https://player-vz-0137cf0a-d11.tv.pandavideo.com.br/embed/?v=f7643485-5d2b-42bb-8bc7-f3c7cbc7bc77&autoplay=false',
    ]

    function carregarMais() {
        setQtde(qtde + 3)
    }

    function renderizarVideos() {
        return Array(Math.min(qtde, videos.length))
            .fill(0)
            .map((_, i) => {
                return <TestimonyItem url={videos[i]!} key={`testimony-${i}`} />
            })
    }

    return (
        <div className='bg-black bg-bottom bg-cover bg-no-repeat py-16'>
            <Title
                main={[
                    {
                        value: 'A Transformação de',
                    },
                    {
                        value: 'verdade',
                        gradient: true,
                    },
                ]}
                secondary="Pessoas que tiveram suas vidas mudadas utilizando a nossa metodologia de ensino."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {renderizarVideos()}
            </div>
            <div className="flex w-full justify-center pt-4">
                <Button
                    primary
                    className={`
                        flex justify-center items-center
                    `}
                    onClick={carregarMais}
                >
                    Carregar mais
                    <IconChevronDown />
                </Button>
            </div>
        </div>
    )
}
