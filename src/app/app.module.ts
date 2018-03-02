import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { NewsComponent } from './components/news/news.component';
import { ListsComponent } from './components/lists/lists.component';
import { FormsModule } from '@angular/forms'; //如果要使用双向数据绑定，必须加载这个模块
import { StorageService } from './services/storage.service';//引入服务
import { RouterModule, Routes } from '@angular/router';//引入路由
import { EchartsNg2Module } from 'echarts-ng2';//引入Echarts



const appRoutes: Routes = [
  { path: 'crisis-center', component: NewsComponent},
  { path: '', component: DetailComponent  },
  { path: 'crisis-center/list', component: ListsComponent },

]

@NgModule({
  declarations: [//引入当前项目运行的组件
    AppComponent,
    DetailComponent,
    NewsComponent ,
    ListsComponent,
  
  ],
  imports: [//引入当前模块运行依赖的其他模块
    BrowserModule,
    FormsModule,
    EchartsNg2Module,
    RouterModule.forRoot(
      appRoutes
    )
      
  ],
  providers: [StorageService],//定义的服务 回头放在这个里面
  bootstrap: [AppComponent]  //制定应用的主视图（称为根组件）
})
export class AppModule {}
