import { ProductListType } from '../interface'
import { useProductList } from '../remotes'
import ListItem from './ListItem'
import List from './List'

const ListContent = () => {
  const {data: list} = useProductList()
  return (
    <List>
        <List.Content>
          {list?.map((x: ProductListType)=><ListItem key={x.id} value={x} />)}        
        </List.Content>
    </List>
  )
}

export default ListContent