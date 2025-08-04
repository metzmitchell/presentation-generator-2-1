import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number, unit?: string): string {
  if (unit === '%') {
    return `${value}%`
  }
  
  if (unit === '$') {
    return `$${value.toLocaleString()}`
  }
  
  if (unit === 'M') {
    return `${value}M`
  }
  
  if (unit === 'K') {
    return `${value}K`
  }
  
  return value.toLocaleString()
}

export function getChangeColor(change?: number): string {
  if (!change) return 'text-muted'
  if (change > 0) return 'text-accent-green'
  if (change < 0) return 'text-accent-red'
  return 'text-muted'
}

export function getChangeSymbol(change?: number): string {
  if (!change) return ''
  return change > 0 ? '+' : ''
}