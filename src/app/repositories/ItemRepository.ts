import { Item } from '../../domain/Item'

export class ItemRepository {
  private items = new Map<string, Item>()

  save(item: Item): Item {
    this.items.set(item.id, item)
    return item
  }

  findById(id: string): Item | null {
    return this.items.get(id) || null
  }

  findByProgramId(programId: string): readonly Item[] {
    return Array.from(this.items.values())
      .filter(item => item.programId === programId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  deleteByProgramId(programId: string): void {
    for (const [id, item] of this.items) {
      if (item.programId === programId) {
        this.items.delete(id)
      }
    }
  }
}

export const itemRepository = new ItemRepository() 