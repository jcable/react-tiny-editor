import sanitizeHtml from 'sanitize-html'

export const todiv = (html: string): string => {
  return sanitizeHtml(html, {
    transformTags: {
      strong: 'b',
      em: 'i'
    }
  })
}

export const fromdiv = (html: string): string => {
  return sanitizeHtml(html, {
    transformTags: {
      b: 'strong',
      i: 'em'
    }
  })
}
