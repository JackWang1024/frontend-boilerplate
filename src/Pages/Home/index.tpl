<div id="page-finance" v-cloak>
	<slider-banner></slider-banner>

	<div class="plr30 pt20 pb40">
		<broadcast></broadcast>

		<div class="clearfix">
			<a v-link="/daily-report" onClick="ga('send', 'event', 'button', 'click', 'zichanribao')" class="assets-news card">
				<h4 class="title">资产日报</h4>
				<p class="text">你的钱给了谁？</p>
			</a>
			<a v-on="click: canGo('invite')" class="invite-friend card">
				<h4 class="title">邀请好友</h4>
				<p class="text">佣金收益1%</p>
			</a>
		</div>
		<div class="product-detail-box card">
			<div class="tac pt30 pb28">
				<div class="dib vam">
					<h3 class="period-title">{{title}}</h3>
					<div class="mr80">
						<span class="mr10">已投{{rateSales * 100}}%</span>
						<div class="line-e3e3e3 dib"><div class="line-ff6160"></div></div>
					</div>
				</div>
				<div v-link="/detail" class="dib period-link">详情</div>
			</div>
			<div class="invest-part invest-box tac">
				<div class="border-top">
					<div class="invest-rate">{{rate}}<span class="fs156">%</span></div>
					<div class="invest-tip"></div>
				</div>
				<div class="invest-button-box">
					<div class="invest-text dib">
						<span class="pr20">100元起投</span>
						<span class="center-text">总金额{{quota}}</span>
						<span class="pl30">{{total_invest_num}}人已投</span>
					</div>
					<div v-on="click: canGo('/invest')" class="invest-button tac dib">立即投资</div>
					<div class="tac c-585858 pt28 pb28 dib">本标提供全额本息担保 <a v-link="/safeguard" class="link">详情</a></div>
				</div>
			</div>
		</div>
		
		<div class="card mt20">
			<div class="tac">
				<h4 class="pt40 fs12 c-585858">钱隆来了已累计为投资者提供理财金额(元)</h4>
				<div class="pb32 pt26 fs36 c-d3a241">{{totalSales}}</div>
			</div>
			<div v-link="/past" class="goto-history">
				<span>查看往期</span>
			</div>
			<a v-on="click: canGo('/wallet')" class="btn-wallet"><img src="../../static/images/myaccount_icon.png" alt="我的钱包"></a>
		</div>
	</div>
	
	<loading v-show="loadingShow__"></loading>
	<modal show="{{@modalShow__}}" options="{{@modalOptions__}}"></modal>
	<toast show="{{@toastShow__}}" content="{{toastText__}}"></toast>
</div>



