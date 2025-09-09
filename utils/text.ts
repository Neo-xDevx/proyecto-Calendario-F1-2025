
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD") // Decompose accented chars into base char and combining mark
    .replace(/[\u0300-\u036f]/g, ""); // Remove the combining marks
};
