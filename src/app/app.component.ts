import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyboard=
  [
   { key:'Q',class:''},
   {key:'W',class:''},
   {key:'E',class:''},
   {key:'R',class:''},
   {key:'T',class:''},
   {key:'Y',class:''},
   {key:'U',class:''},
   {key:'I',class:''},
   {key:'O',class:''},
   {key:'P',class:''},
   {key:'A',class:''},
   {key:'S',class:''},
   {key:'D',class:''},
   {key:'F',class:""},{key:'G',class:""},{key:'H',class:""},
   {key:'J',class:""},
   {key:'K',class:""},
   {key:'L',class:""},{key:'ENTER',class:""},
   {key:'Z',class:""},{key:'X',class:""},
   {key:'C',class:""},{key:'V',class:""},{key:'B',class:""},{key:'N',class:""},{key:'M',class:""},{key:'BACKSPACE',class:""}
  ]

  public boxes=[
    [{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''}],
    [{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''}],
    [{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''}],
    [{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''}],
    [{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''}],
    [{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''},{class:'',key:''}]
  ]
  rowindex=0
  currentrowindex=0

  HandleChange(key:any){
    console.log(key)
    if(key ==='BACKSPACE'){
      if(this.currentrowindex>0){
        this.clearIndex() 
      }
       
       return 

      
    }
   if(key=== 'ENTER'){
     this.submitData();
     return
   }

    if(this.currentrowindex<6 &&this.rowindex<6 ){
      this.boxes[this.rowindex][this.currentrowindex]={class:"",key:key};
      console.log({box:this.boxes})
      this.currentrowindex++;
    }
   
  }
  clearIndex(){
    this.boxes[this.rowindex][this.currentrowindex-1]={class:"",key:''};
    this.currentrowindex--;
    console.log({currentindex:this.currentrowindex});
  }

  submitData(){
    console.log("haii")
  }
}
