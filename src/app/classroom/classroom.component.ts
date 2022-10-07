import {Component} from "@angular/core";

@Component({
  selector:"classroom",
  templateUrl: `./classroom.component.html`
})
export class ClassroomComponent{
className = "T2207A - Sem1";
siso = 27;
schoolname = `FPT Academy International`;

themSinhVien(){
  this.siso++;
}
giamsinhvien(){
  if(this.siso > 0){
    this.siso--;
  }
}
}



