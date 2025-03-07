export default async function getCourses() {
    const learningPaths = [
        'https://us-central1-formacao-dev.cloudfunctions.net/trilhas/fundamentos-express',
        'https://us-central1-formacao-dev.cloudfunctions.net/trilhas/ferramentas-express',
        'https://us-central1-formacao-dev.cloudfunctions.net/trilhas/frontend-express',
        'https://us-central1-formacao-dev.cloudfunctions.net/trilhas/backend-express',
        'https://us-central1-formacao-dev.cloudfunctions.net/trilhas/aplicacao-express',
    ]

    const data = await Promise.all(
        learningPaths.map(async (path) => {
            const response = await fetch(path, {
                next: {
                    revalidate: 3600, // Revalida a págian acada 1 hora
                },
            })
            return response.json()
        }),
    )

    return data.reduce(
        (acc, cur) =>
            acc.concat(
                cur.cursos.map((c: any) => {
                    return {
                        ...c,
                        trilha: cur.nome,
                    }
                }),
            ),
        [],
    )
}
