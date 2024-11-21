const urllib = require('urllib');
const excel = require('xlsx');

const httpClient = new urllib.HttpClient()

const main = async () => {
  // 通过网址接口抓取数据
  const { data, res } = await httpClient.curl('https://www.cde.org.cn/main/xxgk/getMenuListHc?MmEwMD=32XB_vhIzR_L83xCvvUSjcY9l69Mgu4MwTUgzahzlcSg.yqIsAXQ4_.RytE9vVqby1ETwWGgkvEsO.doEvDUSmM4wJZ2ugKRj9KbkCiX9hSmh2UO26bZKyYXTURMtIeGuQwHtHIMHrEgXdJMts9jdbYnd8AgBS9x62YhLJkzZLZceji9pROL0chQPCM_VyJtXsZ4Aa7u16ux0CiH8mENC1yuRKr1d04thiBrw1fPPuQ0FokJ4dEgUCK1TaCTAVDdPUJGTPn_hhCbaJBEl.iI5IZl8ygR2i8HodwlRiSljdqwFXRFkmtK8ArKDx3omh_I9MBQmz6DS7maQEbBIt.rY7tC2Z_DOqgcezLTM9xRcq4gZ.AczM2KSdD0HAfBURND2aq1EhqcKBDtOktnemASvr6FvG2DWqciZ0FxQv2xT1fUGbn', {
    method: 'POST',
    headers: {
      // 'content-type': 'application/x-www-form-urlencoded',
      cookie: 'Path=/; FSSBBIl1UgzbN7N80S=byen3t8gxTkTWafykRWcn1VbXyfU_18IFt.Jw46_gs__GEyTTiVhpzlhwZYDdyZF; Path=/; FSSBBIl1UgzbN7N80T=3JVfRHSpiSqbeauglHzdxjBjvI8YMMrY5wzCi3SOvjhCEp_pagV131pUFPnjlZ_LF_n459FCGHnwqkmx.HZR1zfT5wr5DjuNQ0gVNaVkixaZ7FJdlp5tP54tcQq9j36G0vctOG1qrJTwPMBjc2M8EZ92IJYQr4EqOI2DKapc46eCllKV.vt_VQoh8j3TOlWDELt4QgYTd23FlicFCYD_t398TRY2_L1SPZ9p9RxBpddTBlwyRVM7ISiyDYhX9D9Q4qMxPfLSSc9S.aZpdVPM0fgZDTsIHBaWRBzXpBeH.lpDxWDSowqsJ43W8b1qAHIu.dTaocrBdDKCaNP_PMAjY817IUEBTUGY8FZIXN_vIvXBdiq',
      Host: 'www.cde.org.cn'
    },
    contentType: 'form',
    dataType: 'json',
    data: {
      statenow: 0,
      year: 2024,
      drugtype: 'zy',
      applytype: 'xy',
      acceptid: '',
      drugname: '',
      company: '',
      pageSize: 999, // 每一页数据，设的大一点，一次性取回。注意看网站上有几页，是不是全取到了
      pageNum: 1,
    }
  })
  // 梳理结果列表
  let list = data.data.records;
  console.log('打印取回的结果数', list.length);
  // 筛选 3.1
  list = list.filter(el => el.registerkind === '3.1')
  console.log('打印筛选的结果数', list.length);

  // 查出所有 中药审评序列公示 且 NDA，避免一条一条根据受理号查询
  const { data: taskData } = await httpClient.curl('https://www.cde.org.cn/main/xxgk/getNewTaskList?MmEwMD=3T_j46IF7xXzIEwub6k0.1rfmva8yOB8Q2ke7GILm12ejNVF1q_R_jdQgFQfblVOgcQaQQ0ec6QKP4.cx611aYH5QD35tnnVJs98WxzTGgGrD2Kv6FwkbM28tatGCeSuRpLf_TgEKg98waPwD8LOkkQm7bo_elK7W32aInb4ERzZrvOMqj70E6_u66iw1OkqO6OHDTyHnrJ_uNWgp8c0wRlfb360.qNIDJ97aIjLJjnvTb6WWVtJykV2S8s5CLs6MGS7Dxsy53wdSAo7OJGfRvOGnVVQoP2y.0OVXPjaq1pFQgRDa0uRsOMk2aMg3fJC6z8tXdlrzmKc.We4iDNhbyJddqnOLrbuCEv5U69vrQ6J9jqSTaVZCHBvjiGgZI_WMMwy3p7_KTMG0SJHtmBhMjdoWn8dfLH1WHvQVtyTnRAtyEZ', {
    method: 'POST',
    headers: {
      // 'content-type': 'application/x-www-form-urlencoded',
      cookie: 'Path=/; FSSBBIl1UgzbN7N80S=byen3t8gxTkTWafykRWcn1VbXyfU_18IFt.Jw46_gs__GEyTTiVhpzlhwZYDdyZF; Path=/; FSSBBIl1UgzbN7N80T=377d8XxHxAgg_phbkXYfihU0G5bhQ_yhyZYLxyxeGhuLHacH6R7WIuNxwkt0kwcCwMt2ymPLvXtkoPeU7XloYWR.yvelwYAFEA3JFWVCDcQE1jO5HTkqW76tNio1UK.tRlMlwppfMQjV2qSbtGhnxGPdTJh44Xb.S3.8AxLYDdi__HzVG0S6loMDCMhfGTqpMu4kqwyxYTGmn0bvFLtuO6DY47FReJM3pndyqp05ckF_YHmsTji5nIPGb8fwDQjp5HWuBrgsJ3Wy1mjElyJFEKbUaW74jwYnm2Ts7AnNB6d6EZr5gONMtxtnlv7N0o.UcTsW8MMRQIbwMA.Sxff3kOmPvG3DQHxm8t0xBfryBpxvMCa',
      Host: 'www.cde.org.cn'
    },
    contentType: 'form',
    dataType: 'json',
    data: {
      tasktype: 'xb',
      pageSize: 999, // 每一页数据，设的大一点，一次性取回。注意看网站上有几页，是不是全取到了
      pageNum: 1,
      istimetag: 0,
      applytypecde: 'NDA',
      splxtype: '中药',
    }
  })
  // 梳理公示结果
  const taskList = taskData.data
  console.log('受理状态查到的数量', taskList.length)
  // 以受理号为键整理
  const taskMap = {}
  taskList.forEach(el => {
    taskMap[el.acceptid] = el;
  })
  // 把受理结果写入品种信息列表
  const newList = list.map(el => {
    return Object.assign(el, taskMap[el.acceptid]);
  });
  // 写入 excel
  const sheet = excel.utils.json_to_sheet(newList);
  excel.writeFile({
    SheetNames: ['Sheet1'],
    Sheets: {
      'Sheet1': sheet,
    }
  }, "./result.xlsx");
}
main()