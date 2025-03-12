export default async function getParams() {
    const id = 'https://us-central1-formacao-dev.cloudfunctions.net/params/express.formacao.dev'

    const response = await fetch(id, {
        next: {
            revalidate: 600, 
        },
    })
    const data = await response.json()

    return data.atributos.reduce((acc: any, atributo: any) => {
        acc[atributo.nome] = atributo.valor

        return acc
    }, {})
}