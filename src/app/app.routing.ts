import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';


export const APP_ROUTES = RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'courses', loadChildren: 'app/course/course.module#CourseModule'},
    { path: 'authors', loadChildren: 'app/author/author.module#AuthorModule'}
]);