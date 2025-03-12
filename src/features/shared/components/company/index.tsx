import Team from './Team'

export default function Company() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 lg:h-[500px]">
            <div className="flex flex-col gap-6 justify-end p-7 rounded-3xl bg-gradient-to-b from-pink-500 to-purple-600 z-20 md:w-full max-w-sm md:max-w-4xl lg:max-w-96 lg:min-w-96 mx-auto">
                <div className="flex items-baseline justify-center lg:justify-start">
                    <span className="text-5xl md:text-6xl font-black">+420</span>
                    <span className="text-4xl md:text-5xl font-bold">.000</span>
                </div>
                <p className="text-base md:text-xl font-medium text-center lg:text-start">
                    alunos já passaram por nossos cursos e milhares de histórias transformadas!
                </p>
                <div className="flex justify-around">
                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-2xl font-bold">98%</h3>
                        <p className="text-xs font-medium w-20 text-center">
                            Satisfação dos Alunos
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-2xl font-bold">+20</h3>
                        <p className="text-xs font-medium w-20 text-center">anos de Mercado</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-2xl font-bold">+150</h3>
                        <p className="text-xs font-medium w-20 text-center">Países atendidos</p>
                    </div>
                </div>
            </div>
            <Team />
        </div>
    )
}
