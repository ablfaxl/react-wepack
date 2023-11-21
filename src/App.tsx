import { useState } from 'react'
import './styles.css'
import { initialItems } from './db'
import { Logo } from './components/Logo'
import { Form } from './components/Form'
import { PackingList } from './components/PackingList'
import { Stats } from './components/Stats'

interface ItemTypes {
  description: string
  quantity: number
  packed: boolean
  id: number
}

export const App = () => {
  const [items, setItems] = useState(initialItems)

  function handleAddItems(item: ItemTypes) {
    console.log(item, typeof item)
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function clearListItems() {
    const confirmed = window.confirm('Are you sure you want delete all items?')
    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleIetms={handleToggleItem}
        onClearListItems={clearListItems}
      />
      <Stats items={items} />
    </div>
  )
}
