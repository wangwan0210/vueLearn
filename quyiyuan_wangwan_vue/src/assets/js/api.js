
  // import Api from './axios';
 // import PrefexOcr from './config';
  // import util from './util';
  import axios from 'axios';

  var PrefexOcr = 'https://app.quyiyuan.com';
// const resdata = JSON.parse(sessionStorage.getItem('resdata'));
// const user =
// resdata &&
// {
//     USERID: resdata.USERID,
//     SKEY: resdata.SKEY
//     //  USERID: 'A3231001156455549813893105',
//     //  SKEY: 'Qqy3uP'
// };
//  Elmt_Mss_Verf_Ind	#要素缺失校验标志		1		九要素缺失标志 0-否 1-是
//  Crdt_Exp_Ind	证件到期标志		1		证件到期标志 0-否 1-是
//  Verf_Ind	#校验标志		1		上送合约是无效三要素（例如15位身份证等）开出 0-否 1-是
//  Gnd_Cd	性别代码		2
//  Nat_Cd	国籍地区代码		3
//  Ocp_Cd	职业代码		5
//  Wrk_Unit_Char_Cd	工作单位性质代码		4
//  Idv_Lgl_Nm	个人法定名称		180
//  Crdt_TpCd	证件类型代码		4
//  Crdt_No	证件号码		120
//  Crdt_EfDt	证件生效日期		8
//  Crdt_ExDat	证件到期日期		8
//  Ctc_Inf_TpCd	联系信息类型代码		3
//  Idv_Ctc_Inf_SN	#个人联系信息序号		3
//  CtyRgon_Cd	国家地区代码		3
//  Prov_AtnmsRgon_Cd	省自治区代码		6
//  Urbn_Cd	城市代码		6
//  CntyAndDstc_Cd	区县代码		6
//  Dtl_Adr_Cntnt	详细地址内容		240
//  Ctc_Inf_TpCd	联系信息类型代码		3
//  TelCtcMod_No	电话联系方式号码		50

//  增加几个入参
//  cst_dac
//  Idv_Lgl_Nm
//  Crdt_TpCd
//  Crdt_No
export function getPersonalMsg(data) {
    // let is = Object.keys(data).length === 0;
    // return Api.post({
    //     ...user,
    //     ...data,
    //     TXCODE: is ? 'DZ0046' : 'DZ0048'
    // });
}

//  USERID	用户ID	String	18	Y
//  Crdt_EfDt	证件生效日期		8	N
//  Crdt_ExDat	证件到期日期		8	N
//  Gnd_Cd	性别代码		2	N
//  Nat_Cd	国籍地区代码		3	N
//  Ocp_Cd	职业代码		5	N
//  Ctc_Inf_TpCd	联系信息类型代码		3	N
//  Idv_Ctc_Inf_SN	#个人联系信息序号		3	N
//  CtyRgon_Cd	国家地区代码		3	N
//  Prov_AtnmsRgon_Cd	省自治区代码		6	N
//  Urbn_Cd	城市代码		6	N
//  CntyAndDstc_Cd	区县代码		6	N
//  Dtl_Adr_Cntnt	详细地址内容		240	N

export function updatePersonalMsg(data) {
    // return Api.post({
    //     ...user,
    //     TXCODE: 'DZ0047',
    //     ...data
    // });
};
// 加密请求参数
// function beforeEncryptParam() {
//     var timeStr = util.formatTimeN(new Date());
//     console.log('TIME:' + timeStr);
//     var ccbParamTemp = {
//         'SYSTEM_TIME': timeStr,
//         'Stm_Chnl_ID': '1275',
//         'Stm_Chnl_Txn_CD': '1275-ECAUC0195',
//         'base64_Ecrp_Txn_Inf': '1',
//         'Mftr_Idr_CD': '1',
//         'Ftr_Col_TmnlInf': '0' // 是否返回头像0-no 1-yes
//       };
//     ccbParamTemp = JSON.stringify(ccbParamTemp);
//     console.log('加密前：' + ccbParamTemp);
//     var codeParam = {
//         CODE0: ccbParamTemp,
//         action: 'encrypt'
//         //  chanlCode: '01'
//     };
//     return codeParam;
// }
export function EncryptParam() {
    // let data = beforeEncryptParam();
    // return Api.post({TXCODE: 'GSKJ07', ...user, ...data});
}
export function DeEncryptParam(decodeParam) {
    // return Api.post({TXCODE: 'GSKJ07', ...user, ...decodeParam});
}

export function UploadOcr(tmpb64, file) {
    const fd = {
        'SYS_CODE': '6101',
        'APP_NAME': 'SNSGS',
        'MP_CODE': '03',
        'SEC_VERSION': '1.0',
        'TXCODE': 'IDCardOCRVerify',
        'BRANCHID': '110000000',
        'ccbParam': tmpb64,
        'Rmrk_1_Rcrd_Cntn': '',
        'Rmrk_2_Rcrd_Cntn': '',
        'Rmrk_3_Rcrd_Cntn': ''
      };
    const formData = new FormData();
    formData.append('base64_Ecrp_Txn_Inf', file);
    for (let i in fd) {
        formData.append(i, fd[i]);
    }
    return axios.post(PrefexOcr, formData, {headers: {'Content-Type': 'Content-Type:multipart/form-data'}});
}
export function saveOcr(file) {
    // let url = URLPrefix() + '?' + 'USERID=' + app.globalData.userId + '&SKEY=' + app.globalData.sessionKey + '&picType=0&BRANCHID=555000000&SERVLET_NAME=B2CMainPlat_00&CCB_IBSVersion=V6&PT_STYLE=10&TXCODE=YYUF01'

    const formData = new FormData();
    formData.append('userfile', file);

    return axios.post(PrefexOcr, formData, {headers: {'Content-Type': 'Content-Type:multipart/form-data'}});
}
