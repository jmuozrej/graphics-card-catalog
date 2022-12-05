import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { graphicCard } from '../../components/GraphicsCardListContainer';

const initialState = {
  graphicCards: [{
    id: -1,
    name: '',
    price: -1,
    model: '',
    ram: ''
  }]
}


export const graphicSlice = createSlice({
  name: 'graphic',
  initialState,
  reducers: {
    appendGraphicList: (state, action: PayloadAction<Array<graphicCard>>) => {
      return {
        graphicCards: [...state.graphicCards,...action.payload]
      }
    }
  }
})

export const {appendGraphicList} = graphicSlice.actions
export default graphicSlice.reducer