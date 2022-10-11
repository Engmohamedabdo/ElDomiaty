export const baseUrlGlobal: string = 'http://api.zigzag.orialserver.com/api/';
export const baseUrllocal: string = 'https://localhost:44370/api/';

export const baseUrlFace: string = 'http://localhost:3000/';

export const baseUrl: string = baseUrlGlobal;

export enum Authorization {
  postRegister = 'Authorization/Register',
  postLogin = 'Authorization/Login',
  postForgetPassowrd = 'Authorization/ForgetPassowrd',
  postRestPassowrd = 'Authorization/RestPassowrd',
  postChangePassword = 'Authorization/ChangePassword',
  postVerfication = 'Authorization/Verfication',
  postResetCode = 'Authorization/ResetCode',
}

export enum Address {
  GetAddress = 'Address',
  postAddress = 'Address',
  putAddress = 'Address',
  deleteAddress = 'Address',
  putAdDefult = 'Address/AsDefault',
}

export enum Home {
  GetDepartAll = 'Home/department',
  GetCategoryAll = 'Home/catgorys',
  GetCategory = 'Home/catgory?catogtyId=1',
  GetDetailsOffers = 'Home/details/',
  GetDetails = 'Home/details', // Offers and popular and recommended
}

export enum Cart {
  getCart = 'Cart',
  putCart = 'Cart',
  deleteCart = 'Cart',
}

export enum Compliant {
  postCompliant = 'Compliant',
}

export enum CustomProduct {
  getCustomProductCategory = 'CustomProduct/Category?page=',
  getCustomProductProduct = 'CustomProduct/Product?CategoryId=&page=', // CustomProduct/Product?CategoryId={1}&page={1}
  getCustomProductMedia = 'CustomProduct/Media?type=&page=', // CustomProduct/Media?type={1}&page={1}
}

export enum Favorite {
  getFavorite = 'user/Favorite?page=',
  postFavorite = 'user/Favorite',
  deleteFavorite = 'user/Favorite',
}

export enum Notification {
  getNotification = 'user/Notification?page=1',
}

export enum Order {
  postOrder = 'Order',
  getOrder = 'Order?orderId=',
  postOrderCostom = 'Order/custom',
  getOrderCurrentOrders = 'Order/currentOrders?page=',
  getOldOrders = 'Order/oldOrders?page=',
  putAcceptCustomOrder = 'Order/AcceptCustomOrder',
  getOrderReviewQuations = 'Order/OrderReviewQuations',
  postOrderReview = 'Order/OrderReview',
}

export enum Profile {
  getUser = 'user/Profile',
  putUser = 'user/Profile',
}

export enum Search {
  postSearch = 'Search?page=',
}

export enum Product {
  getDetails = 'Product/details?productId=',
  getReviews = 'Product/reviews?productId=1&page=1', //Product/reviews?productId={1}&page={1}
  postRate = 'Product/rate',
  getOffers = 'Product/offers?page=', //Product/offers?page={1}
}

// User Dashboard ??
// export enum User {
//   getUser = 'Search?page=',
//   postUser = 'Search?page='
// }

export enum Utilt {
  GetRegionOrCity = 'Utilt/GetRegionOrCity?type=1&id=1', // Utilt/GetRegionOrCity?type={1}&id={1}
  getUtiltRegions = 'Utilt/Regions',
  getUtiltCitis = 'Utilt/Citis/{1}', // Utilt/Citis/{id}
}

export enum Point {
  putPoint = 'Point',
}

export enum Wallet {
  getWallet = 'Wallet',
}

export enum Cards {
  getCard = 'result/',
  postCard = 'result/',
}
