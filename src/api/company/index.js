import request from '@/utils/request'

export function getTableList(data) {
  return request({
    url: '/dataFillingSurvey/page',
    method: 'post',
    data
  })
}