import { useState } from 'react'
import { Item } from './Item'

type ItemType = {
  description: string
  quantity: number
  packed: boolean
  id: number
}

interface PackingListProps {
  items: ItemType[]
  onDeleteItem: (arg1: number) => void
  onToggleIetms: (arg1: number) => void
  onClearListItems: () => void
}

export function PackingList({
  items,
  onDeleteItem,
  onToggleIetms,
  onClearListItems,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems: ItemType[] = []

  if (sortBy === 'input') sortedItems = items
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed))

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleIetms={onToggleIetms}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button
          disabled={items.length === 0 && true}
          onClick={onClearListItems}
        >
          Clear list
        </button>
      </div>
    </div>
  )
}
