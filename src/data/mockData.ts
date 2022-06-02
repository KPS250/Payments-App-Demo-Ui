export const bikes = [
  {
    number: 'MH03 AS 1234',
    name: 'Kiran’s g1+',
    model: 'Rugged G1+',
    battery: 100,
    ownership: 0,
    chasis: '52WVC10338',
    color: 'White & Grey',
    warranty: '3 Years',
    lastService: '01 Aug 2021',
    nextService: '14 Jan 2022',
    purchaseDate: '06 Jul 2021',
    position: {lat: 19.173471126184385, lng: 72.96659413978858},
    mode: 0,
  },
];

export const users = [
  {
    image: require('../assets/images/users/user1.png'),
    fullName: 'Kiran Shinde',
    code: '+91',
    phone: '34565712',
  },
  {
    image: require('../assets/images/users/user2.png'),
    fullName: 'Pooja Menon',
    code: '+91',
    phone: '34534367',
  },
  {
    image: require('../assets/images/users/user3.png'),
    fullName: 'Swapna Patil',
    code: '+91',
    phone: '2746567',
  },
  {
    image: require('../assets/images/users/user4.png'),
    fullName: 'Rupesh Shinde',
    code: '+91',
    phone: '3456567',
  },
];

export const transactionHistory = [
  {
    id: 11223,
    user: users[0],
    amount: 2000,
    status: 10,
  },
  {
    id: 11224,
    user: users[1],
    amount: 10000,
    status: 20,
  },
  {
    id: 11225,
    user: users[2],
    amount: 40000,
    status: 30,
  },
  {
    user: users[3],
    amount: 2000,
    status: 20,
  },
];
