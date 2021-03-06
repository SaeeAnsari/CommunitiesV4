import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'community', loadChildren: './pages/community/community.module#CommunityPageModule' },
  { path: 'community/:communityID', loadChildren: './pages/community/community.module#CommunityPageModule' },
  { path: 'event-feed', loadChildren: './pages/event-feed/event-feed.module#EventFeedPageModule' },
  { path: 'live-feed', loadChildren: './pages/live-feed/live-feed.module#LiveFeedPageModule' },
  { path: 'live-feed/:id', loadChildren: './pages/live-feed/live-feed.module#LiveFeedPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'my-communities', loadChildren: './pages/my-communities/my-communities.module#MyCommunitiesPageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tabs:communityID', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'user-location', loadChildren: './pages/user-location/user-location.module#UserLocationPageModule' },
  { path: 'user-location/:launchType', loadChildren: './pages/user-location/user-location.module#UserLocationPageModule' },
  { path: 'user-search', loadChildren: './pages/user-search/user-search.module#UserSearchPageModule' },
  { path: 'user-search/:communityID', loadChildren: './pages/user-search/user-search.module#UserSearchPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
