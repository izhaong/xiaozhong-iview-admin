import Mock from 'mockjs'
const Random = Mock.Random
export const getUserInfo = (options) => {
  // console.log(options) // {url: "/index/getUserInfo", type: "POST", body: "{"userId":21}"}
  const template = {
    'str|2-4': 'lison', // str: "lisonlisonlison"
    'name|5': 'lison', // name: "lisonlisonlisonlisonlison"
    'age|+2': 18, // age: 18
    'num|4-10': 0, // num: 7
    'float|3-10.2-5': 0, // float: 7.98492
    'bool|1': true, // bool: false
    'bool2|1-9': true, // bool2: false min/(min + max)
    test: Mock.mock('@email'),
    range: Random.range(3, 10, 2), // range: (4) [3, 5, 7, 9]
    img: Random.image()
  }
  return Mock.mock(template)
}
