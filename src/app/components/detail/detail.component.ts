import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';//引入服务
import { isArray } from 'util';

import * as $ from'jquery'; //引入jquery

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {//实现接口
 public  username=""
 public  list=[]
  constructor(private storage: StorageService) { //构造函数
  }
      
  ngOnInit() {//初始化加载的生命周期函数
    var todolist = this.storage.getItem("todolist")
     if(todolist){
       this.list =todolist
     }

    $("#btnTest").on('click', function () {

      alert('angular项目，引入jquery');

    });
  }
  
  addDate(e) {
    if (this.username == "") {
      return false
    }
    if(e.keyCode==13){
      var obj={
        username:this.username,
        status:0
      }
      var todolist=this.storage.getItem("todolist")
      
        if(todolist){
          todolist.push(obj);
          this.storage.setItem("todolist", todolist)
        }else{
          var arr=[];
          arr.push(obj)
          this.storage.setItem("todolist", arr)
        }
      this.list.push(obj);
      this.username = ""
    }
    
  }


  removeDate(key){
    this.list.splice(key,1)
  
  }

  transForm(key,status){
    this.list[key].status =status;
    this.storage.setItem("todolist",this.list)
  }
}
