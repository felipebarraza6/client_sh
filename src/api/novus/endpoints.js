import { GET } from './config'


export const getting_list = (variable, start_date, end_date, quantity, last_value) => {
      if (start_date === undefined){
          start_date = ''
      }
      if (end_date === undefined){
          end_date = ''
      }
      if(last_value){
          last_value = 'last_value'
      }else{
          last_value = ''
      }
      const request = GET(`?variable=${variable}&start_date=${start_date}&end_date=${end_date}&qty=${quantity}&query=${last_value}`)
      return request
}