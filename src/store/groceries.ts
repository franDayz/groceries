export interface GroceryItem {
  id: string
  name: string
  createdAt: Date
}

class GroceryStore {
  private items: GroceryItem[] = []

  addItem(name: string): GroceryItem {
    const item: GroceryItem = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date()
    }
    this.items.push(item)
    return item
  }

  getItems(): GroceryItem[] {
    return [...this.items].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }
}

// Export a singleton instance
export const groceryStore = new GroceryStore() 