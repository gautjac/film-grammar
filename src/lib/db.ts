import Dexie, { type Table } from 'dexie'
import type { ReviewState } from '../types'

export class FilmGrammarDB extends Dexie {
  reviews!: Table<ReviewState, string>

  constructor() {
    super('film-grammar')
    this.version(1).stores({
      reviews: 'cardId, dueAt',
    })
  }
}

export const db = new FilmGrammarDB()
