// import * as RootNavigation from 'src/navigation/RootNavigation';
// import {RoutesNames} from 'src/types/navigation/routesNames';
//
// type push = {
//   RoutesNames: RoutesNames;
//   id: number;
//   screen: string;
//   last_report: string;
//   mailing_id: number;
//   type: string;
// };
//
// export const pushNotification = (data: push) => {
//   if (data) {
//     const pushRoute: RoutesNames = data?.RoutesNames;
//     if (data.type === 'mailings') {
//       RootNavigation.navigate(RoutesNames.NOTIFICATION_NAVIGATION, {
//         screen: RoutesNames.NOTIFICATION_MENU,
//       });
//       RootNavigation.navigate(RoutesNames.NOTIFICATION_NAVIGATION, {
//         screen: RoutesNames.LOTS_NOTIFICATION,
//       });
//       RootNavigation.navigate(RoutesNames.NOTIFICATION_NAVIGATION, {
//         screen: RoutesNames.LOTS_BY_SUBSCRIBE_FILTER,
//         params: {
//           filterId: data.mailing_id,
//         },
//       });
//     } else if (data.type === 'notifications') {
//       RootNavigation.navigate(RoutesNames.NOTIFICATION_NAVIGATION, {
//         screen: RoutesNames.NOTIFICATION_MENU,
//       });
//       RootNavigation.navigate(RoutesNames.NOTIFICATION_NAVIGATION, {
//         screen: RoutesNames.SYSTEM_NOTIFICATION,
//       });
//     } else if (data.type === 'favorite') {
//       RootNavigation.navigate(RoutesNames.FAVORITE_NAVIGATION, {
//         screen: RoutesNames.FAVORITE_LIST,
//       });
//       RootNavigation.navigate(RoutesNames.LOT_NAVIGATOR, {
//         screen: RoutesNames.LOT_ITEM,
//         params: {
//           lotId: data?.id,
//         },
//       });
//     } else {
//       RootNavigation.navigate(pushRoute, {
//         screen: data?.screen,
//       });
//     }
//   }
// };
// TODO: расскомментить когда будут необходимые роуты и типы роутов для пушей
