export class BookModel {
  id: string;
  name: string;
  date: string;
  email: string;
  hour: string;
  phone: string;
  people: number;
  message: string;

  constructor(param?: BookModel) {
    if (param) {
      Object.assign(this, param);
    }
  }

  static emptyBookItem(idd: string) {
    return {
      id: idd,
      name: 'fffffffffffff',
      date: '1212',
      email: 'dssdsd',
      hour: 'sdsdsds',
      phone: '232323',
      people: 4,
      message: 'ddddddd'
    };
  }
}
