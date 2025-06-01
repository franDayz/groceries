import { Item } from '../models/Item'

class ItemRepository {
  private items: Item[] = []

  save(item: Item): void {
    this.items.push(item)
  }

  findAll(): readonly Item[] {
    return [...this.items].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }
}

// Export a singleton instance
export const itemRepository = new ItemRepository() 