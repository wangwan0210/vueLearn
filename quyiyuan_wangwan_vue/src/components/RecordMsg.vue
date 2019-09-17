<template>
  <div>
    <div class='group_title'>身份信息</div>
    <div title='姓名'>{{resMsg.Idv_Lgl_Nm}}</div>
    <div title='证件类型'>居民身份证</div>
    <div title='证件号码'>{{resMsg.Crdt_No|decorId}}</div>
    <div class='group_title'>上传身份证</div>
    <div class='idocr_tip'>请上传身份证正反面照，保持图片清晰、不可涂改裁切，以保证验证通过率</div>
    <uploader
      class='front'
      limit='1'
      title
      :multiple='false'
      v-model='fileListFront'
      :autoUpload='false'
      @on-change='onChangeFront'
      @on-delete='onDelete'
    ></uploader>
    <uploader
      class='back'
      limit='1'
      title
      :multiple='false'
      v-model='fileListBack'
      :autoUpload='false'
      @on-change='onChangeBack'
      @on-delete='onDelete'
    ></uploader>

    <my-button @click.native='nextStep' :style="{marginTop:'0.8em',marginBottom:'2em'}">下一步</my-button>
  </div>
</template>

<script>
//  import Toast from './common/Toast/toast';
// import Indicator from './common/Indicator/indicator';
// import MessageBox from './common/MessageBox/message-box';
// import myButton from './base/my-button';
import {
  UploadOcr,
  EncryptParam,
  DeEncryptParam
} from '../assets/js/api';
import util from '../assets/js/util';
import Uploader from 'vux-uploader-component';
// import { URLPrefix } from '../assets/js/config';
import axios from 'axios';

export default {
  components: {
    // myButton,
    Uploader
  },
  data() {
    return {
      frontAble: false, //  正面验证通过
      backAble: false, //  反面验证通过
      delbutton: false, //  组件特性的问题，因为组件的ondelete事件会调用onchange，所以需要这一个标志位来控制ondelete事件触发的onchange事件的执行
      fileListFront: [],
      fileListBack: [],
      dateRange: '',
      pickerVisible: new Date(),
      pickerVisible2: new Date(),
      jobVisible: false,
      resMsg: {
        Elmt_Mss_Verf_Ind: '', // #要素缺失校验标志
        Crdt_Exp_Ind: '', // 证件到期标志
        Verf_Ind: '', // #校验标志
        Gnd_Cd: '', // 性别代码
        Nat_Cd: '', // 国籍地区代码
        Ocp_Cd: '', // 职业代码
        Wrk_Unit_Char_Cd: '', // 工作单位性质代码
        Idv_Lgl_Nm: '', // 个人法定名称
        Crdt_TpCd: '', // 证件类型代码
        Crdt_No: '', // 证件号码
        Crdt_EfDt: '', // 证件生效日期
        Crdt_ExDat: '', // 证件到期日期
        Ctc_Inf_TpCd: '', // 联系信息类型代码
        Idv_Ctc_Inf_SN: '', // #个人联系信息序号
        CtyRgon_Cd: '', // 国家地区代码
        Prov_AtnmsRgon_Cd: '', // 省自治区代码
        Urbn_Cd: '', // 城市代码
        CntyAndDstc_Cd: '', // 区县代码
        Dtl_Adr_Cntnt: '', // 详细地址内容
        TelCtcMod_No: '', // 电话联系方式号码
        Ctc_Inf_TpCd_Tel: '', // 联系信息类型代码（移动电话：104）
        Idv_Ctc_Inf_SN_Tel: '', // 个人联系信息序号
        dac: '' // 用于后台校验手机号码
      },
      walletParams: {}, // openwallet 参数
      Crdt_date_e: '', // 证件到期日期
      address: '', // 户籍所在地址

      jobs: {
        10000: '党的机关、国家机关、群众团体和社会组织、企事业单位负责人',
        20000: '专业技术人员',
        30000: '办事人员和有关人员',
        40000: '社会生产服务和生活服务人员',
        50000: '农、林、牧、渔业生产及辅助人员',
        60000: '生产制造及有关人员',
        70000: '军人',
        80000: '不便分类的其他从业人员'
      },
      resdata: {}
    };
  },
  filters: {
    decorId(id) {
      return id.substr(0, 4) + '****' + id.substr(-4);
    },
    formatDate(d) {
      return util.dateFtt('yyyy/MM/dd', d);
    },
    transformArea(code) {
      return code + 1;
    },
    transformCrdt(code) {
      return code + 3;
    }
  },
  created() {
    console.log(this.$route.params);
    this.walletParams = this.$route.params;
    if (sessionStorage.getItem('resdata')) {
      this.resdata = JSON.parse(sessionStorage.getItem('resdata'));
      this.resMsg.Idv_Lgl_Nm = decodeURIComponent(this.resdata.cstName);
      this.resMsg.Crdt_No = this.resdata.cardNo;
    }
  },
  methods: {
    fileUpload(file, picType) {
      let File = new window.File([file.blob], file.name, { type: file.type });
      let formData = new FormData();
      formData.append('userfile', File);
      // let url =
      //   URLPrefix() +
      //   '?BRANCHID=555000000&CCB_IBSVersion=V6&PT_STYLE=10&TXCODE=YYUF01&SKEY=' +
      //   this.resdata.SKEY +
      //   '&USERID=' +
      //   this.resdata.USERID +
      //   '&picType=' +
      //   picType;
      let url =
        'https://app.quyiyuan.com' +
        '?BRANCHID=555000000&CCB_IBSVersion=V6&PT_STYLE=10&TXCODE=YYUF01&SKEY=' +
        this.resdata.SKEY +
        '&USERID=' +
        this.resdata.USERID +
        '&picType=' +
        picType;
      let options = {
        //  设置axios的参数
        url: url,
        data: formData,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      axios(options).then(res => {
        console.log(res);
      }); //  发送请求
    },
    nextStep() {
      this.walletParams.address = this.address;
      this.walletParams.Crdt_date_e = this.Crdt_date_e;
      this.$router.push({
        path: '/openaccount',
        name: 'openaccount',
        params: this.walletParams
      });
    },
    onChangeFront(file, fileList) {
      this.onChange(file, fileList, 'front');
    },
    onChangeBack(file, fileList) {
      this.onChange(file, fileList, 'back');
    },
    onChange(file, fileList, chooseType) {
      if (this.delbutton) {
        this.delbutton = false;
        return;
      }
      let self = this;
      // Indicator.open();
      //  加密参数
      //  UploadOcr('tmp_b64',this.fileList[0].blob)
      EncryptParam().then(
        returnData => {
          var tmpB64 = '';
          if ((tmpB64 = returnData.data.data.returnData)) {
            //  上传图片
            UploadOcr(tmpB64, file.blob).then(
              function(uplaodRes) {
                //  var temp = JSON.parse(uplaodRes.data);
                var temp = uplaodRes.data;
                console.log('上传状态码：' + temp.Res_Rtn_Code);
                if (temp.Res_Rtn_Code == '000000') {
                  const retInf = encodeURIComponent(temp.Ret_Enc_Inf);
                  console.log(retInf.length);
                  var decodeParam = {
                    action: 'decrypt',
                    CODE0: retInf
                  };
                  //  解密
                  DeEncryptParam(decodeParam).then(returnDeData => {
                    var secResult = returnDeData.data.data.returnData;
                    // Indicator.close();
                    if (chooseType == 'front') {
                      console.log(
                        '返回照片类型（02反面、01正面）：' +
                          secResult.Ftr_Col_TmnlInf
                      );
                      if (secResult.Ftr_Col_TmnlInf == '02') {
                        self.ocrFail(fileList, '上图位请选择正面照');
                        return;
                      } else if (secResult.Ftr_Col_TmnlInf == '01') {
                        //  正面
                        let flag = secResult.Crdt_No == self.resMsg.Crdt_No;
                        if (flag) {
                          self.frontAble = true;
                          //  上传正面证件图片
                          self.fileUpload(file, '0');
                          self.address = secResult.Mftr_Idr_CD;
                          self.nation = secResult.Ext_Stm_Safe.ModDsc;
                          // MessageBox.alert('身份证正面照上传成功');
                          this.$alert('身份证正面照上传成功', '标题名称', {
                            confirmButtonText: '确定',
                            callback: action => {

                            }
                          });
                        } else {
                          // MessageBox.alert(
                          //   `上传的身份证号码${secResult.Crdt_No}与您注册的身份证号码不一致，请重新上传`
                          // ).then(() => {
                          //   self.ocrFail(fileList);
                          // });
                          this.$alert('上传的身份证号码' + secResult.Crdt_No + '与您注册的身份证号码不一致，请重新上传', '标题名称', {
                            confirmButtonText: '确定',
                            callback: action => {
                              self.ocrFail(fileList);
                            }
                          });
                        }
                      }
                    }
                    if (chooseType == 'back') {
                      if (secResult.Ftr_Col_TmnlInf == '01') {
                        self.ocrFail(fileList, '下图位请选择反面照');
                      } else if (secResult.Ftr_Col_TmnlInf == '02') {
                        //  反面
                        let backFormData = secResult;
                        var dateLast = backFormData['For_Ext_Stm_Svc_Tm'];
                        var arr = dateLast.split('-');
                        backFormData['start'] = arr[0];
                        backFormData['end'] = arr[1];
                        let regg = /^\d{4}\.\d{2}\.\d{2}$/;
                        if (
                          !regg.test(backFormData['start']) ||
                          !regg.test(backFormData['end'])
                        ) {
                          self.ocrFail(
                            fileList,
                            `识别错误：${backFormData['start']}-${
                              backFormData['end']
                            }`
                          );
                          return;
                        }
                        // MessageBox.confirm(
                        //   `您的证件有效期是:${backFormData['start']}-${
                        //     backFormData['end']
                        //   }，如识别有误，请重新上传`,
                        //   {
                        //     cancelButtonText: '识别错误',
                        //     confirmButtonText: '识别正确'
                        //   }
                        // ).then(
                        //   () => {
                        //     self.backAble = true;
                        //     self.resMsg.Crdt_EfDt = self.Crdt_date_e = backFormData['start'].replace(/\./g, '');
                        //     self.resMsg.Crdt_ExDat = backFormData['end'].replace(/\./g, '');
                        //
                        //     self.fileUpload(file, '1');
                        //   },
                        //   () => {
                        //     self.ocrFail(fileList);
                        //   }
                        // );
                        this.$confirm('您的证件有效期是:' + backFormData['start'] + '-' + backFormData['end'] + ',如识别有误，请重新上传', '提示', {
                          confirmButtonText: '识别正确',
                          cancelButtonText: '识别错误',
                          type: 'warning'
                        }).then(() => {
                          this.$message({
                            type: 'success',
                            message: '删除成功!'
                          });
                        }).catch(() => {
                          this.$message({
                            type: 'info',
                            message: '已取消删除'
                          });
                        });
                      }
                    }
                  });
                } else {
                  self.ocrFail(fileList);
                }
              },
              function (error, data) {
                if (error) {
                  console.log(error.stack);
                }
              }
            );
          } else {
            self.ocrFail(fileList);
          }
        },
        function (error, data) {
          if (error) {
            self.ocrFail(fileList);
          }
        }
      );
    },
    ocrFail(fileList, msg) {
     // Toast(msg || '识别失败，请重试');
      fileList.splice(0, 1);
      // Indicator.close();
    },
    onCancel() {},
    onSuccess() {},
    onError() {},
    onDelete(cb) {
      this.delbutton = true;
      cb();
    },
    str2date(str) {
      if (str.length == 8) {
        let date = new Date();
        date.setFullYear(str.substr(0, 4));
        date.setMonth(parseInt(str.substr(4, 2)) - 1);
        date.setDate(str.substr(6, 2));
        return date;
      } else {
        return '';
      }
    },
    handleConfirm(i) {
      console.log(i);
    },
    selJob(i) {
      this.resMsg.Ocp_Cd = i.key;
    }
  },
  computed: {
    startDate() {
      return this.pickerVisible || new Date();
    },
    endDate() {
      return this.pickerVisible2 || new Date();
    },
    jobText() {
      return this.jobs[this.resMsg.Ocp_Cd] || '请选择';
    },
    jobActions() {
      let arr = [];
      for (let i in this.jobs) {
        arr.push({ name: this.jobs[i], key: i, method: this.selJob });
      }
      return arr;
    }
  }
};
</script>

<style>
.front .vux-uploader_input-box {
  background-image: url('../assets/images/id_card.png');
}
.back .vux-uploader_input-box {
  background-image: url('../assets/images/household_book.png');
}
.group_title {
  padding-left: 12px;
  font-size: 17px;
  background: #f2f2f2;
  line-height: 36px;
  color: #333;
}
.idocr_tip {
  font-size: 14px;
  padding: 18px 28px;
}
.mint-cell-title {
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  width: 105px;
}
.mint-actionsheet-listitem {
  height: auto;
}

.vux-uploader .vux-uploader_bd .vux-uploader_input-box {
  height: 130px !important;
  width: 237px !important;
  background-size: 100%;
  background-repeat: no-repeat;
}
.vux-uploader .vux-uploader_bd .vux-uploader_files .vux-uploader_file {
  height: 130px !important;
  width: 237px !important;
}
.vux-uploader {
  margin: auto;
  width: 240px;
}
.vux-uploader_hd {
  display: none !important;
}
.vux-uploader .vux-uploader_bd .vux-uploader_input-box:after {
  position: relative !important;
}
.vux-uploader .vux-uploader_bd .vux-uploader_input-box:before {
  position: relative !important;
}
</style>
