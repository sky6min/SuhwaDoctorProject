<template>
<!-- Modal -->
  <div class="modal" id="detailModal3">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h1 class="modal-title">개인민감정보 처리방침 동의</h1>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <h3>개인민감정보 처리</h3>
          <p>㈜수화닥터 (“회사”라 함)는 개인 민감정보보호법 제23조(민감정보 처리제한), 동법 시행령 제 18조(민감정보 범위), 표준지침 제15조 (민감정보처리), 민감정보 정의, 종류, 동약사항 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 민감정보 처리제한 규정을 준수하며, 관련 법령에 의거한 개인민감정보취급방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.</p>
          <p>본 개인 민감정보처리방침은 회사가 제공하는 “홈페이지(www.doctornow.co.kr)” 및 “어플리케이션 (수화닥터)” (이하에서는 홈페이지 및 어플리케이션을 이하 ‘서비스’라 합니다.)이용에 적용되며 다음과 같은 내용을 담고 있습니다.</p>

          <h3>수집하는 개인 민감정보의 항목</h3>
          <p>(1) 회사는 회원가입, 원활한 고객상담, 각종 서비스의 제공을 위해 아래와 같은 최소한의 개인 민감정보를 필수항목으로 수집하고 있습니다.</p>
>
          <p>수집방법</p>
          <p>수집항목</p>
          <p>회원가입</p>
          <h3>휴대 전화번호로 가입</h3>
          <p>이름, 휴대 전화번호, 인증번호</p>
          <p>원격 진료 예약하기</p>
          <p>진료예약 수단, 진료시간 입력</p>
          <p>진료수단 : 화상진료, 채팅진료, 전화진료 선택 내역</p>
          <p>진료시간 : 원격진료 가능한 날짜 및 시간</p>

          <p>(2) ㈜수화닥터는 귀하의 개인 민감정보보호를 매우 중요시하며, 『개인 민감정보 보호법』과 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』상의 개인 민감정보 처리방침 및 행정안전부와 정보통신부가 제정한 『개인 민감정보 보호지침』을 준수하고 있습니다. 회사는 개인 민감정보처리방침을 통하여 귀하께서 제공하시는 개인 민감정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인 민감정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>
          <p>(3) 회사는 개인 민감정보 처리방침을 사이트 첫 화면과 고객센터의 ‘개인 민감정보 처리방침’ 항목에서 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다.</p>
          <p>(4) 회사는 개인 민감정보 처리방침의 지속적인 개선을 위하여 개인 민감정보 처리방침을 개정하는데 필요한 절차를 정하고 있습니다. 그리고 개인 민감정보 처리방침을 개정하는 경우 버전번호 등을 부여하여 개정된 사항을 귀하께서 쉽게 알아볼 수 있도록 하고 있습니다.</p>
          <p>(5) 서비스 아이디를 이용한 부가 서비스 및 맞춤식 서비스 이용 또는 이벤트 응모 과정에서 해당 서비스의 이용자에 한해서만 아래와 같은 정보들이 수집될 수 있습니다.</p>
          <h3>개인 민감정보의 수집 및 이용 목적</h3>

          <p>회사는 다음과 같이 회원님의 개인 민감정보를 수집합니다. 처리하고 있는 개인 민감정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인 민감정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
          <h3>이용 목적</h3>
          <p>회사가 개인 민감정보를 수집하는 목적은 휴대폰 전화번호 및 인증번호에 의한 개인 식별을 통해 신원이 불확실하고 불손한 행위를 하는 인터넷 사용자가 아닌 양질의 이용자를 선별하여 ‘서비스’에서 제공하는 양질의 맞춤화 된 서비스를 드리기 위함입니다.</p>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
</template>
<style scoped>

/* Important part */
.modal-dialog{
    overflow-y: initial !important
}
.modal-body{
    height: 80vh;
    overflow-y: auto;
}
</style>
<script>

export default {
    name: "DetailModal3",
}
</script>