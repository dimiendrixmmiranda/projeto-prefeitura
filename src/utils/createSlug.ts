export function createSlug(title: string): string {
    return title
        .toLowerCase()               // Converter para letras minúsculas
        .replace(/[^a-z0-9]+/g, '-') // Substituir espaços e caracteres especiais por hífen
        .replace(/(^-|-$)/g, '');    // Remover hifens no início ou no fim
}

export function createSlugWithId(title: string, id: number): string {
    const slug = createSlug(title);
    return `${slug}-${id}`;
}