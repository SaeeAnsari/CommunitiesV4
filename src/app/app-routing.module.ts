import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'community', loadChildren: './pages/community/community.module#CommunityPageModule' },
  { path: 'event-feed', loadChildren: './pages/event-feed/event-feed.module#EventFeedPageModule' },
  { path: 'live-feed', loadChildren: './pages/live-feed/live-feed.module#LiveFeedPageModule' },
  { path: 'live-feed/:id', loadChildren: './pages/live-feed/live-feed.module#LiveFeedPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'media-display', loadChildren: './pages/media-display/media-display.module#MediaDisplayPageModule' },
  { path: 'my-communities', loadChildren: './pages/my-communities/my-communities.module#MyCommunitiesPageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'user-location', loadChildren: './pages/user-location/user-location.module#UserLocationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
