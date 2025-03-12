import Container from '@/features/shared/layouts/Container'

export default function Politica() {
    function renderizarSubTitulo(titulo: string, className?: string) {
        return (
            <h2 className={`text-lg md:text-2xl font-bold mt-5 z-10 ${className && className}`}>
                {titulo}
            </h2>
        )
    }

    function renderizarParagrafo(conteudo: string, className?: string) {
        return (
            <p className={`text-base md:text-xl mt-3 text-justify z-10 ${className && className}`}>
                {conteudo}
            </p>
        )
    }

    return (
        <Container className="flex flex-col items-center py-6">
            <div className="text-2xl md:text-4xl font-bold text-center mb-10">
                <h1>Política de Privacidade</h1>
            </div>
            <div>
                {renderizarSubTitulo('Sua Privacidade é muito importante para a Cod3r.')}
                {renderizarParagrafo(
                    'Ao utilizar a nossa plataforma, você compartilha inúmeras informações. Isso é muito importante para que os serviços sejam aprimorados e para que você tenha uma experiência online única e personalizada. A COD3R Ensino e Consultoria LTDA, pessoa jurídica com sede na Avenida Dom Luis 609, 101/102, Fortaleza, CE, inscrita no CNPJ sob o nº 28.662.370/0001-03 entende como sensível e relevante os registros eletrônicos e dados pessoais deixados pelos nossos clientes na utilização da nossa plataforma.',
                )}

                {renderizarSubTitulo('1. DA ACEITAÇÃO')}
                {renderizarParagrafo(
                    'A aceitação a esta Política se dará no momento do cadastro do Usuário à Plataforma ou ao aceitar o uso de cookies prosseguindo na navegação. A COD3R se reserva o direito de alterar a presente Política, a qualquer tempo, sem necessidade de prévia comunicação ao Usuário.',
                )}

                {renderizarSubTitulo('2. DAS INFORMAÇÕES COLETADAS')}
                {renderizarParagrafo(
                    'A COD3R coleta dados básicos como nome, e-mail e outros informados pelo próprio usuário no ato do registro.',
                )}

                {renderizarSubTitulo('3. DO USO E TRATAMENTO DAS INFORMAÇÕES COLETADAS')}
                {renderizarParagrafo(
                    'A COD3R considera que todas as informações coletadas por meio da Plataforma são confidenciais. Os dados pessoais coletados serão utilizados para envio de informações da plataforma como atualizações e novidades sobre os cursos, promoções, pesquisas e certificados. Esta política de privacidade visa assegurar a garantia de que, quaisquer informações relativas aos usuários, não serão fornecidas, publicadas ou comercializadas em quaisquer circunstâncias, exceto naquelas que a Lei exige.',
                )}

                {renderizarSubTitulo('4. DA GUARDA DAS INFORMAÇÕES COLETADAS')}
                {renderizarParagrafo(
                    'A COD3R armazenará as informações coletadas em suas Páginas em servidores próprios ou por ela contratados.',
                )}

                {renderizarSubTitulo('5. INTRODUÇÃO AOS COOKIES')}
                {renderizarParagrafo(
                    'Um cookie é um pequeno arquivo de texto, geralmente contendo um identificador único, armazenado por seu navegador quando você visita um site. Os sites usam cookies para ajudar a fornecer certas funções e para personalizar sua experiência na web, lembrando coisas como suas preferências de idioma ou itens em seu carrinho de compras.',
                )}

                {renderizarSubTitulo('6. COMO CONTROLAR E EXCLUIR COOKIES')}
                {renderizarParagrafo(
                    'A COD3R não usa cookies para coletar informações pessoalmente identificáveis sobre você. No entanto, se você deseja restringir ou bloquear os cookies que são definidos por nossos sites, ou mesmo qualquer outro site, você pode fazer isso através das configurações do seu navegador. A função ‘Ajuda’ do seu navegador deve dizer-lhe como. Observe, entretanto, que a restrição de cookies pode afetar a funcionalidade do nosso site.',
                )}

                {renderizarSubTitulo('7. COMO A COD3R USA COOKIES')}
                {renderizarParagrafo(
                    'A COD3R usa cookies para entender como você interage com nossos sites, aplicativos e sites de terceiros selecionados, principalmente com o objetivo de melhorar a experiência do usuário. A COD3R não armazena informações confidenciais, como credenciais de login ou informações bancárias dentro de cookies.',
                )}

                {renderizarSubTitulo('8. DA EXCLUSÃO DAS INFORMAÇÕES COLETADAS')}
                {renderizarParagrafo(
                    'As informações coletadas pela COD3R por meio das suas páginas serão excluídas de seus servidores quando deixarem de ser úteis para os fins para os quais foram coletadas ou quando solicitadas pelo próprio usuário através do e-mail: suporte@cod3r.com.br.',
                )}
            </div>
        </Container>
    )
}
