import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * UTILITÁRIO 01: cn
 * Padrão utilizado pela Aceternity UI e Shadcn/ui.
 * Combina clsx para lógica condicional e tailwind-merge para evitar conflitos.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * UTILITÁRIO 02: clsxMerge
 * Uma variação nomeada caso você precise importar com outro nome 
 * em componentes específicos para evitar shadowing.
 */
export function clsxMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}