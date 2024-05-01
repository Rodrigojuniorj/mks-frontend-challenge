export function formattedPrice(text: string) {
  const format = parseFloat(text)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace(/\s(?=\d)/g, '')
    .replace(',00', '')

  return format
}
