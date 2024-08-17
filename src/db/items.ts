export async function getItems(): Promise<{ id: number; name: string; description: string }[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = [
          {
            id: 1,
            name: 'Item 1',
            description: 'Description 1',
          },
          {
            id: 2,
            name: 'Item 2',
            description: 'Description 2',
          },
        ]
  
        resolve(items)
      }, 1000) // Simulate a 1-second delay
    })
  }