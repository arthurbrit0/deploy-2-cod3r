export default function CustomHTLParser({ html }: { html: string }) {
    const processHTML = (htmlString: string) => {
        return htmlString
            .replace(/<rte-text>/g, '<div class="prose" >')
            .replace(/<\/rte-text>/g, '</div>')
    }

    const processedHTML = processHTML(html)

    return <div dangerouslySetInnerHTML={{ __html: processedHTML }} />
}
