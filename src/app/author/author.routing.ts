import {RouterModule} from '@angular/router';
import {PageComponent} from './page.component';
import {ListComponent} from './list.component';
import {FormComponent} from './form.component';
import {DetailComponent} from './detail.component';

export const AUTHOR_ROUTES = RouterModule.forChild([
    { path: '', component:PageComponent},
    { path: '', component:PageComponent, children:[
        {path:'list', component:ListComponent},
        {path:'form', component:FormComponent},
        {path:'form/:authorId', component:FormComponent},
        {path:'list', component:ListComponent, children:[
            {path:'detail/:authorbooks', component:DetailComponent}
        ]}
    ]}

]);