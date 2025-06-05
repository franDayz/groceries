import { GroceryProgram, updateLastAccessed } from '../../domain/GroceryProgram'

export class GroceryProgramRepository {
  private programs = new Map<string, GroceryProgram>()
  private readonly MAX_INACTIVE_DAYS = 30

  save(program: GroceryProgram): GroceryProgram {
    this.programs.set(program.id, program)
    return program
  }

  findById(id: string): GroceryProgram | null {
    return this.programs.get(id) || null
  }

  cleanup(): void {
    const now = new Date()
    const maxAge = now.getTime() - (this.MAX_INACTIVE_DAYS * 24 * 60 * 60 * 1000)

    for (const [id, program] of this.programs) {
      if (program.lastAccessed.getTime() < maxAge) {
        this.programs.delete(id)
      }
    }
  }
}

export const groceryProgramRepository = new GroceryProgramRepository() 