const elementmap1: Record<string, string> = { strong: 'b', em: 'i', '/': '/' }
const elementmap2: Record<string, string> = { b: 'strong', i: 'em', '/': '/' }

export const todiv = (html: string): string => html.replace(/<(\/?)(strong|em)>/g, (_, p1, p2) => `<${p1}${elementmap1[p2]}>`)
export const fromdiv = (html: string): string => html.replace(/<(\/?)(b|i)>/g, (_, p1, p2) => `<${p1}${elementmap2[p2]}>`)
