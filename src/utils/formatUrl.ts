export function formatTitleForUrl(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/(^-|-$)/g, ''); 
}

export function decodeTitleFromUrl(formattedTitle: string): string {
  return formattedTitle.replace(/-/g, ' '); 
}