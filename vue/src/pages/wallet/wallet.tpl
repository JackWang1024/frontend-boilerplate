<div class="page-wallet">
	
	<div class="header">
		<h4 class="fs14 pb50">昨日收益(元)</h4>
		<p class="pb50 {{incomeOfYesterday > 0 ? 'income-110' : 'income-60'}}">{{incomeOfYesterday || '暂无收益'}}</p>	
		
		<div v-link="/setting" class="user-setting"></div>
	</div>

	<div class="plr30 ptb30 clearfix bg-white bb-e5e5e5">
		<div>
			<div v-on="click: openTakePage" class="s201510151822 fl">
				<div class="icon_201509071514_up">提现</div>
			</div>
			<div v-link="/" class="s201510151822 fr">
				<div class="icon_201509071514_down c-fff">投资</div>
			</div>
		</div>
	</div>

	<div>
		<div v-on="click: openIncomePage" class="tap-normal-state bar bar-h118" v-response-tap>
			<div class="bar-bd">
				<div class="bar-title">总收益(元)</div>
				<div class="bar-content">{{income}}</div>
			</div>
		</div>
		
		<div v-on="click: openAssetsPage" class="tap-normal-state bar bar-h118" v-response-tap>
			<div class="bar-bd">
				<div class="bar-title">总资产(元)</div>
				<div class="bar-content">{{assets}}</div>
			</div>
		</div>

		<div v-link="/record" class="tap-normal-state bar bar-h88 mt20" v-response-tap>
			<div class="bar-bd">
				<div class="bar-title">交易记录</div>
			</div>
		</div>
		<div style="position: relative" v-on="click: openInvitePage" class="bar bar-h88 mt20 tap-normal-state" v-response-tap>
			<div class="bar-bd">
				<div class="bar-title">邀请好友</div>
			</div>
		</div>
		<!-- <a href="http://qianlong.hrbbwx.com/web/activity/share#!/redpacket" class="btn-flower"><img src="../../static/images/btn_flower.png" alt="天天加息"></a> -->
	</div>
</div>
















