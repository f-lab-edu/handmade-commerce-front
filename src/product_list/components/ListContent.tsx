import { ProductListType } from '../interface'
import { useProductList } from '../remotes'
import ListItem from './ListItem'
import List from './List'
import { useState } from 'react'

// const ErrorComponent = () => {
//   const [error, setError] = useState(false)
//   if (error) throw new Error('에러발생')
//   return <button onClick={() => setError(true)}>Error</button>
// }

const ListContent = () => {
  const {data: list} = useProductList()
  return (
    <List>
        <List.Content>
        {/* <ErrorComponent/> */}
          {list?.map((x: ProductListType)=><ListItem key={x.id} value={x} />)}        
        </List.Content>
    </List>
  )
}

export default ListContent