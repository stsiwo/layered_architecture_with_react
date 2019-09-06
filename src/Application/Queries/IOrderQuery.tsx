export interface IOrderQuery {
  
  getOrderById(id: string): object; 

  getOrderByUserId(id: string): object; 

};
