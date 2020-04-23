import React from 'react';
import With from './With';

const allData=[
  {
    duty: 'ICBU-国际贸易事业部-海关运营专家(上海)',
    city: '上海',
    min: '1小时前'
  },{
    duty: '菜鸟-海外工程技术经理',
    city: '杭州',
    min: '1小时前'
  },{
    duty: '盒马-高级物流网络规划专家-上海',
    city: '上海',
    min: '一小时'
  },{
    duty: '蚂蚁金服-产品体验专家(成都/杭州)',
    city: '成都,杭州',
    min: '一小时前'
  },{
    duty: 'ICBU-国际贸易事业部-政府事务高级专家(运营方向)',
    city: '杭州',
    min: '两小时前'
  }, {
    duty: 'ICBU-国际贸易事业部-海关运营专家(上海)',
    city: '上海',
    min: '1小时前'
  },{
    duty: '菜鸟-海外工程技术经理',
    city: '杭州',
    min: '1小时前'
  },{
    duty: '盒马-高级物流网络规划专家-上海',
    city: '上海',
    min: '一小时'
  },{
    duty: '蚂蚁金服-产品体验专家(成都/杭州)',
    city: '成都,杭州',
    min: '一小时前'
  },{
    duty: 'ICBU-国际贸易事业部-政府事务高级专家(运营方向)',
    city: '杭州',
    min: '两小时前'
  }
]
function List() {
  return (
    <div className="App">
     <With alldata={allData} />
    </div>
  );
}

export default List;
