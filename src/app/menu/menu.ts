import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/Matrimony-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  {
    id: 'apps',
    type: 'section',
    title: 'Apps & Pages',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
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
      }
     ]
   },
  // User Interface
   ];
