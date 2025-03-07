import Container from '@/features/shared/layouts/Container'

export default function Termos() {
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
                <h1>Termos de Uso</h1>
            </div>
            <div className="mx-5">
                {renderizarSubTitulo('Sobre o Termo de Uso')}
                {renderizarParagrafo(
                    'Este Termo de uso regula o uso deste site, e  através do seu acesso você aceita e concorda com ele.',
                )}
                {renderizarParagrafo(
                    'Você reconhece e concorda que visitando, visualizando, usando ou acessando este site, clicando em "Aceitar", "Enviar" ou links semelhantes, entende-se que você leu, compreendeu e concorda em ficar vinculado a estes Termos de Uso, independentemente de você ser um convidado ou um usuário registrado do Site. SE VOCÊ NÃO CONCORDAR COM ESTES TERMOS DE USO, VOCÊ NÃO DEVE ACESSAR OU USAR ESTE SITE.',
                )}
                {renderizarParagrafo(
                    'Este Termo pode ser alterado a qualquer tempo sem aviso prévio juntamente com quaisquer documentos, políticas ou termos que eles incorporam.',
                )}

                {renderizarSubTitulo('Das Informações da Empresa')}
                {renderizarParagrafo(
                    'Cod3r é uma marca registrada por Cod3r Ensino e Consultoria LTDA, CNPJ: 28.662.370/0001-03.',
                )}

                {renderizarSubTitulo('Do Acesso ao Site')}
                {renderizarParagrafo(
                    'Para acessar o conteúdo do(s) site(s) da Cod3r Ensino e Consultoria LTDA, pode ser solicitado ao usuário algumas informações pessoais como nome, e-mail e outros. Se acharmos que as informações não são corretas ou verdadeiras, temos o direito de recusar e/ou cancelar o acesso a qualquer tempo, sem notificação prévia.',
                )}

                {renderizarSubTitulo('Das Restrições de Uso')}
                {renderizarParagrafo(
                    'Este site só pode ser usado pelos objetivos propostos pela Cod3r Ensino e Consultoria LTDA, ficando vedado o uso para qualquer outro objetivo sem o nosso consentimento.',
                )}

                {renderizarSubTitulo('Da Proteção à Propriedade')}
                {renderizarParagrafo(
                    'Os cursos oferecidos são para uso individual e são intransferíveis. É vetada a cópia, revenda ou a criação de outros produtos baseados nos nossos cursos sem a nossa prévia autorização. A violação deste termo em qualquer um desses itens permite à Cod3r o cancelamento do uso da plataforma pelo usuário, sem direito a ressarcimento e com o dever de pagar multas por danos causados.                        ',
                )}

                {renderizarSubTitulo('Da Limitação de Responsabilidade')}
                {renderizarParagrafo(
                    'A Cod3r Ensino e Consultoria LTDA, licenciantes, provedores de serviço, provedores de conteúdo, empregados, agentes, administradores e diretores não serão responsáveis por qualquer dano eventual, direto, indireto, punitivo, real, consequente, especial, exemplar ou de qualquer outro tipo, incluindo perda de receita ou renda, dor e sofrimento, estresse emocional ou similares mesmo que a empresa tenha aconselhado sobre a possibilidade de tais danos.',
                )}

                {renderizarSubTitulo('Da Garantia de Satisfação')}
                {renderizarParagrafo(
                    'O CONTRATANTE poderá solicitar o cancelamento da compra e a restituição do valor investido na aquisição de um produto da CONTRATADA, desde que a solicitação do cancelamento seja feita até o 15º (décimo quinto) dia após a compra do curso.',
                )}

                {renderizarSubTitulo('Das Normas Gerais')}
                {renderizarParagrafo(
                    'a) É reservado o direito à Cod3r de interromper o serviço a qualquer tempo caso algum termo seja violado.',
                )}
                {renderizarParagrafo(
                    'b) A Cod3r não é responsável por suas ações como cliente e usuário do sistema, sejam elas feitas dentro ou fora do mesmo.',
                )}
                {renderizarParagrafo(
                    'c) Esperamos respeito mútuo nas mensagens, sem ofensas pessoais ou a grupos.',
                )}
                {renderizarParagrafo(
                    'd) É responsabilidade do usuário manter seus dados atualizados, assim como prezando pela segurança de seus dados pessoais na plataforma, como usuário e senha.',
                )}
                {renderizarParagrafo(
                    'e) A Cod3r sempre manterá o sistema no ar excetuando os momentos necessários para a devida manutenção do mesmo.',
                )}
                {renderizarParagrafo(
                    'f) Todas as informações postadas pelo usuário no site, como dúvidas postadas e outros comentários passam a fazer parte da plataforma e podem ser mantidas e acessados por outros usuários até mesmo após o encerramento de sua conta.',
                )}

                {renderizarSubTitulo('Da segurança dos Dados')}
                {renderizarParagrafo(
                    'A Cod3r utiliza as práticas recomendadas para manter seguros todos os dados inseridos pelos alunos em suas Plataformas, Comunidades e Cadastros, porém a mesma se exime de ser responsabilizada por eventuais danos e prejuízos de toda natureza que decorram do conhecimento que terceiros não autorizados tenham acesso a quaisquer informações passadas pelo aluno em decorrência de falha exclusivamente atribuível ao aluno ou a terceiros que fujam a qualquer controle razoável da Cod3r.',
                )}
                {renderizarParagrafo(
                    'A COD3R Ensino e Consultoria LTDA, pessoa jurídica com sede na Rua Cândido Portinari, 191 - Cambeba, Fortaleza - CE, 60822-170, inscrita no CNPJ sob o nº 28.662.370/0001-03, entende como sensível e relevante os registros eletrônicos e dados pessoais deixados pelos nossos clientes na utilização da nossa plataforma e preza por eles.',
                )}
            </div>
        </Container>
    )
}
