import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/Matrimony-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  {
    id: 'dashboard',
    //   translate: 'MENU.APPS.EMAIL',
    //   type: 'item',
    //   icon: 'mail',
    //   url: 'apps/email'
    title: 'Dashboard',
    translate: 'MENU.DASHBOARD.COLLAPSIBLE',
    type: 'item',
    url: '/dashboard',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'home',
    // badge: {
    //   // title: '2',
    //   translate: 'MENU.DASHBOARD.BADGE',
    //   classes: 'badge-light-warning badge-pill'
    // }
  },
  {
    id: 'apps',
    type: 'section',
    title: 'Apps & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      // {
      //   id: 'email',
      //   title: 'Email',
      //   translate: 'MENU.APPS.EMAIL',
      //   type: 'item',
      //   icon: 'mail',
      //   url: 'apps/email'
      // },
      // {
      //   id: 'chat',
      //   title: 'Chat',
      //   translate: 'MENU.APPS.CHAT',
      //   type: 'item',
      //   icon: 'message-square',
      //   url: 'apps/chat'
      // },
      // {
      //   id: 'todo',
      //   title: 'Todo',
      //   translate: 'MENU.APPS.TODO',
      //   type: 'item',
      //   icon: 'check-square',
      //   url: 'apps/todo'
      // },
      // {
      //   id: 'calendar',
      //   title: 'Calendar',
      //   translate: 'MENU.APPS.CALENDAR',
      //   type: 'item',
      //   icon: 'calendar',
      //   url: 'apps/calendar'
      // },
      {
        id: 'Masterdata',
        title: 'Masterdata',
        translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'database',
        children: [
          {
            id: 'religion',
            title: 'Religion',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/religion'
            // collapsed: true
          },
          {
            id: 'cast',
            title: 'Cast',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/cast'
            // collapsed: true
          },
          {
            id: 'Star',
            title: 'Star',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/star'
            // collapsed: true
          },
          {
            id: 'Raasi Star',
            title: 'Raasi Star',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/raasi-star'
            // collapsed: true
          },
          {
            id: 'mother-tongue',
            title: 'Mother Tongue',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/mother-tongue'
            // collapsed: true
          },
          {
            id: 'currency',
            title: 'Currency',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/currency'
            // collapsed: true
          },
          {
            id: 'annual-income',
            title: 'Annual Income',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/annual-income'
            // collapsed: true
          },
          {
            id: 'education',
            title: 'Education',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/education'
            // collapsed: true
          },
          {
            id: 'broker',
            title: 'Broker',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'masterdata/broker'
            // collapsed: true
          },
        ],
      },
      {
        id: 'broker',
        title: 'Broker',
        translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'user-plus',
        children: [
          {
            id: 'brokerlog',
            title: 'Add-user',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'broker/add-user'
           
          },
          {
            id: 'brokerlog',
            title: 'Add-userlist',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'broker/add-userlist'
           
          }]},
      {
        id: 'pages',
        title: 'Pages',
        translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'file-text',
        children: [
          {
            id: 'profile',
            title: 'Profile',
            translate: 'MENU.PAGES.PROFILE',
            type: 'item',
            icon: 'circle',
            url: 'pages/profile'
            // collapsed: true
          },
          
        ]
      },
      {
        id: 'request',
        title: 'Request',
        translate: 'MENU.PAGES.SECTION',
        type: 'collapsible',
        icon: 'user-plus',
        url:'/request'
      }
     ]
   },
  // User Interface
   ];
