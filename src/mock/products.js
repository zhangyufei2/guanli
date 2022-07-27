import Mock from "mockjs";
//数据中心-> 客户数据
let {data} = Mock.mock({ // 20条数据
  "data|55": [{
    // 订单状态
   goodsClass: "已发货",
   //下单时间
   "goodsTimes":"2022-06-06",
    //"goodsClass|1-0": 1,
    // 商品Id
    "goodsId|+1": 10001,
    //商品名称
    // goodsName: "@title(10)",
    //商品地址
    city: "@county()",
    //支付方式
    "goodsStar": "支付宝",
    //"goodsStar": "@string()",
    //"goodsStar|1-0": 1,
    'name|+1': 45677777,
    //实付金额
    "goodsPic|200-500": 3,
    //快递金额
    "goodsKD|20-50": 2,
    //单号
    "goodsSale|7000000000-9000000000": 30,
    name: "@cname",
  }, ],
});
//订单管理-> 全部订单数据
let  data2= Mock.mock({ // 条数据
  "data|205": [{
    // 订单状态
    //goodsClass: "已发货",
    "goodsClass|1-0": 1,
    // 商品Id
    "goodsId|+1": 10001,
    //商品名称
    // goodsName: "@title(10)",
    //商品地址
    city: "@county()",
    //支付方式
    // "goodsStar": "支付宝",
    //"goodsStar": "@string()",
    "goodsStar|1-0": 1,
    'name|+1': 45677777,
    //实付金额
    "goodsPic|200-500": 3,
    //快递金额
    "goodsKD|20-50": 2,
    //单号
    "goodsSale|7000000000-9000000000": 30,
    name: "@cname",
  }, ],
});

//订单管理-> 未支付-未发货订单数据
let data22 = Mock.mock({ // 条数据
  "data|105": [{
    // 订单状态
    //goodsClass: "已发货",
    "goodsClass|1-0": 1,
    "goodsNo": "待支付",
    "goodsYes": "已支付",
    "goodsFlase": "已取消",
    "goodsFalst": "待发货",
    // 商品Id
    "goodsId|+1": 10001,
    //商品名称
    // goodsName: "@title(10)",
    //商品地址
    city: "@county()",
    //支付方式
    // "goodsStar": "支付宝",
    //"goodsStar": "@string()",
    "goodsStar|1-0": 1,
    'name|+1': 45677777,
    //实付金额
    "goodsPic|200-500": 3,
    //快递金额
    "goodsKD|20-50": 2,
    //单号
    "goodsSale|7000000000-9000000000": 30,
    name: "@cname",
  }, ],
});

//商品管理-> 全部商品


let data3 = Mock.mock({ // 条数据
  "data|105": [{
    // 订单状态
    //goodsClass: "已发货",
    "goodsClass|1-0": 1,
    // 商品Id
    "goodsId|+1": 10001,
    //商品名称
   goodsName: "婴幼儿ppsu材质",
   //供应商
   supplier:"清源厂家",
    //商品地址
    //city: "@county()",
    //支付方式
    // "goodsStar": "支付宝",
    //"goodsStar": "@string()",
    //"goodsStar|1-0": 1,
    //'name|+1': 45677777,
    //实付金额
    "goodsPic|7000-9000": 4,
    //销量
    "goodsKD|1000-4000": 4,
    //售价
    "goodsPic|200-400": 3,
    //销售状态：
   "market":"销售中",
   //库存
    "goodsTory|9000-9999": 4,
   //创建日期
  "time":"2022-06-06",
    //单号
    "goodsSale|7000000000-9000000000": 30,
    name: "@cname",
  }, ],
});

//促销管理->秒杀管理
let data4 = Mock.mock({ // 条数据
  "data|105": [{
    //单号
    "goodsSale|7000000000-9000000000": 30,
    // 订单状态
    //goodsClass: "已发货",
    "goodsClass|1-0": 1,
    // 商品Id
    "goodsId|+1": 10001,
    //商品名称
    goodsMSName: "6.18大促销活动秒杀",
    //关联名称
      goodsName: "婴幼儿奶瓶ppsu材质",
    //供应商
    supplier: "清源厂家",
    //商品地址
    //city: "@county()",
    //支付方式
    // "goodsStar": "支付宝",
    //"goodsStar": "@string()",
    //"goodsStar|1-0": 1,
    //'name|+1': 45677777,
    //实付金额
    "goodsPic|7000-9000": 4,
    //数量
    "goodsKD|20-50": 2,
    //售价
    "goodsPic|200-400": 3,
    //销售状态：
    "market|0-1": 1,
    //库存
    "goodsTory|9000-9999": 4,
    //开始日期
    "timeStart": "2022-06-06",
    //开始日期
    "timeEnt": "2022-06-018",
    //单号
    "goodsCity": "全国",
    name: "@cname",
  }, ],
});
//促销管理->优惠卷管理
let data5 = Mock.mock({ // 条数据
  "data|105": [{
    //优惠卷名称
    "goodsSal|0-1":1,
    //方式
    "goodsAway|0-1": 1,
    //领取时间
    "goodsTime":"06/18  00:00:00-06/20  11:59:59",
    //使用条件
    "goodsFormat":"跨店满300-60",
    //领取
    "goodsAll|100-400":3,
    //发放商家
    "goodsHome|0-1": 1,
     //发放状态：
     "market|0-1": 1,
   // "goodsSale|7000000000-9000000000": 30,
    // 订单状态
    //goodsClass: "已发货",
    "goodsClass|1-0": 1,
    // 商品Id
    "goodsId|+1": 10001,
    //商品名称
    goodsMSName: "6.18大促销活动秒杀",
    //关联名称
    goodsName: "婴幼儿奶瓶ppsu材质",
    //供应商
    supplier: "清源厂家",
    //商品地址
    //city: "@county()",
    //支付方式
    // "goodsStar": "支付宝",
    //"goodsStar": "@string()",
    //"goodsStar|1-0": 1,
    //'name|+1': 45677777,
    //实付金额
    "goodsPic|7000-9000": 4,
    //数量
    "goodsKD|20-50": 2,
    //售价
    "goodsPic|200-400": 3,
   
    //库存
    "goodsTory|9000-9999": 4,
    //开始日期
    "timeStart": "2022-06-06",
    //开始日期
    "timeEnt": "2022-06-018",
    //单号
    "goodsCity": "全国",
    name: "@cname",
  }, ],
});




class ProductServer {
  getData({
    page,
    size
  }) {
    return new Promise((resolve) => {
      const reuslt = data.slice((page - 1) * size, page * size);
      resolve({
        status: 0,
        result: reuslt,
        count: data.length,
        data
        
      });
    });
  }
}

class ProductServer2 {
  getData2({  page,size }) {
    return new Promise((resolve) => {
      const reuslt = data2.data.slice((page - 1) * size, page * size);
      resolve({
        status: 0,
        result: reuslt,
        count: data2.length,
        data2
      });
    });
  }
}
class ProductServer3 {
  getData3({
    page,
    size
  }) {
    return new Promise((resolve) => {

      const reuslt = data3.data.slice((page - 1) * size, page * size);
      resolve({
        status: 0,
        result: reuslt,
        count: data2.length,
        data3
      });
    });
  }
}
class ProductServer4 {
  getData4({
    page,
    size
  }) {
    return new Promise((resolve) => {

      const reuslt = data4.data.slice((page - 1) * size, page * size);
      resolve({
        status: 0,
        result: reuslt,
        count: data2.length,
        data4
      });
    });
  }
}
class ProductServer5 {
  getData5({
    page,
    size
  }) {
    return new Promise((resolve) => {

      const reuslt = data5.data.slice((page - 1) * size, page * size);
      resolve({
        status: 0,
        result: reuslt,
        count: data2.length,
        data5
      });
    });
  }
}
class ProductServer6 {
  getData22({
    page,
    size
  }) {
    return new Promise((resolve) => {

      const reuslt = data22.data.slice((page - 1) * size, page * size);
      resolve({
        status: 0,
        result: reuslt,
        count: data2.length,
        num:105,
        newDate: data22.data,
      });
    });
  }
}
export const product = new ProductServer();
 export const product2 = new ProductServer2();
 export const product3 = new ProductServer3();
 export const product4 = new ProductServer4();
 export const product5 = new ProductServer5();
 export const product6 = new ProductServer6();

