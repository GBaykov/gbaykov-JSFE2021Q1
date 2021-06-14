

// export class Car {
//   readonly id:number;
//   readonly name:string;
//   readonly color:string;
//   readonly isEngineStarted:boolean;
//   constructor(id:number, name:string, color:string, isEngineStarted:boolean) {
//  this.id = id;
//  this.name = name;
//  this.color = color;
//  this.isEngineStarted = isEngineStarted;
//   }
// };


class CarModel {
  create(сar: { id:number, name:string, color:string, isEngineStarted:boolean}) {
    return {id: сar.id, name: сar.name, color: сar.color,isEngineStarted: сar.isEngineStarted };
  }
}
