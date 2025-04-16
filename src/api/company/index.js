import request from '@/utils/request'

// 获取list
export function getTableList(data) {
  return request({
    url: 'dataFillingSurvey/page',
    method: 'post',
    data
  })
}

// 获取单位/企业基本信息
export function getBase(data) {
  return request({
    url: 'dataFillingSurvey/getBaseInfo',
    method: 'post',
    data
  })
}

// 获取单位/企业资源详情
export function getResource(data) {
  return request({
    url: 'dataFillingSurvey/getResource',
    method: 'post',
    data
  })
}

// 获取数据交易资源详情
export function getExchangeResource(data) {
  return request({
    url: 'dataFillingSurvey/getExchangeResource',
    method: 'post',
    data
  })
}

// 获取其他资源详情
export function getOtherResource(data) {
  return request({
    url: 'dataFillingSurvey/getResourceOther',
    method: 'post',
    data
  })
}