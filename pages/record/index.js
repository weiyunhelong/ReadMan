
let chooseYear = null;
let chooseMonth = null;
const conf = {
	data: {
		hasEmptyGrid: false,
		showPicker: false
	},
  //页面的初始化
	onLoad() {
		const date = new Date();
		const curYear = date.getFullYear();
		const curMonth = date.getMonth() + 1;
    const Today = date.getDate();
    const Year = date.getFullYear();
    const Month = date.getMonth() + 1;
		const weeksCh = [ '日', '一', '二', '三', '四', '五', '六' ];
		this.calculateEmptyGrids(curYear, curMonth);
		this.calculateDays(curYear, curMonth);
		this.setData({
			curYear,
			curMonth,
      Today: Today,
      Year:Year,
      Month: Month,
			weeksCh
		});
	},
  //得到月份的天数
	getThisMonthDays(year, month) {
		return new Date(year, month, 0).getDate();
	},
  //得到月份第一图
	getFirstDayOfWeek(year, month) {
		return new Date(Date.UTC(year, month - 1, 1)).getDay();
	},
  //计算日期
	calculateEmptyGrids(year, month) {
		const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
		let empytGrids = [];
		if (firstDayOfWeek > 0) {
			for (let i = 0; i < firstDayOfWeek; i++) {
				empytGrids.push(i);
			}
			this.setData({
				hasEmptyGrid: true,
				empytGrids
			});
		} else {
			this.setData({
				hasEmptyGrid: false,
				empytGrids: []
			});
		}
	},
  //计算天数
	calculateDays(year, month) {
		let days = [];

		const thisMonthDays = this.getThisMonthDays(year, month);

		for (let i = 1; i <= thisMonthDays; i++) {
			days.push({
				day: i,
				choosed: false
			});
		}

		this.setData({
			days
		});
	},
  //排版日历
	handleCalendar(e) {
		const handle = e.currentTarget.dataset.handle;
		const curYear = this.data.curYear;
		const curMonth = this.data.curMonth;
		if (handle === 'prev') {
			let newMonth = curMonth - 1;
			let newYear = curYear;
			if (newMonth < 1) {
				newYear = curYear - 1;
				newMonth = 12;
			}

			this.calculateDays(newYear, newMonth);
			this.calculateEmptyGrids(newYear, newMonth);

			this.setData({
				curYear: newYear,
				curMonth: newMonth
			});
		} else {
			let newMonth = curMonth + 1;
			let newYear = curYear;
			if (newMonth > 12) {
				newYear = curYear + 1;
				newMonth = 1;
			}

			this.calculateDays(newYear, newMonth);
			this.calculateEmptyGrids(newYear, newMonth);

			this.setData({
				curYear: newYear,
				curMonth: newMonth
			});
		}
	},
  //点击日历
	tapDayItem(e) {
		const idx = e.currentTarget.dataset.idx;
		const days = this.data.days;
		days[ idx ].choosed = !days[ idx ].choosed;
		this.setData({
			days,
		});
	},
  //选择年月
	chooseYearAndMonth() {
		const curYear = this.data.curYear;
		const curMonth = this.data.curMonth;
		let pickerYear = [];
		let pickerMonth = [];
		for (let i = 1900; i <= 2100; i++) {
			pickerYear.push(i);
		}
		for (let i = 1; i <= 12; i++) {
			pickerMonth.push(i);
		}
		const idxYear = pickerYear.indexOf(curYear);
		const idxMonth = pickerMonth.indexOf(curMonth);
		this.setData({
			pickerValue: [ idxYear, idxMonth ],
			pickerYear,
			pickerMonth,
			showPicker: true,
		});
	},
  //选择的改变
	pickerChange(e) {
		const val = e.detail.value;
		chooseYear = this.data.pickerYear[val[0]];
		chooseMonth = this.data.pickerMonth[val[1]];
	},
  //点击的改变
	tapPickerBtn(e) {
		const type = e.currentTarget.dataset.type;
		const o = {
			showPicker: false,
		};
		if (type === 'confirm') {
			o.curYear = chooseYear;
			o.curMonth = chooseMonth;
			this.calculateEmptyGrids(chooseYear, chooseMonth);
			this.calculateDays(chooseYear, chooseMonth);
		}

		this.setData(o);
	},
  //分享
	onShareAppMessage() {
		
	},
  //立即签到
  signbtn:function(){
    
    const idx = 17;
    const days = this.data.days;
    days[idx].choosed = !days[idx].choosed;
    this.setData({
      days,
    });
    wx.showToast({
      title: '签到成功',
      duration: 2000,
      mask: true
    })
  },
};

Page(conf);
