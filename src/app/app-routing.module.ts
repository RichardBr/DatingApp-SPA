import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueComponent } from './value/value.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent, resolve: { usersResolver: MemberListResolver} },
      { path: 'members/edit', component: MemberEditComponent
                            , resolve: { userResolver: MemberEditResolver}
                            , canDeactivate: [PreventUnsavedChanges]
      },
      { path: 'members/:id', component: MemberDetailComponent, resolve: { userResolver: MemberDetailResolver} },
      { path: 'lists', component: ListsComponent, resolve: { usersResolver: ListsResolver} },
      { path: 'messages', component: MessagesComponent, resolve: { messagesResolver: MessagesResolver} },
      { path: 'admin', component: AdminPanelComponent, data: { roles: ['Admin', 'Moderator'] } },
    ]
  },
  { path: 'value', component: ValueComponent },
  // { path: 'register', component: RegisterComponent },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
