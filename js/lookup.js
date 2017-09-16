var fdb = new ForerunnerDB();
var db = fdb.db("myDB");
var accountingCollection = db.collection('new');
accountingCollection.load();



function createAccountingHTMLString(date, category, item, cost){
	return "<tr><td>"+date+"</td><td>"+category+"</td><td>"+item+"</td><td>"+cost+"</td></tr>"
}

$("#lookup").click(function(){
	$("#accountingTable").find("tr").remove();
	if( $('input[name=method]:checked').val() == "curMonth"){
		var date = new Date();
		var year = date.getUTCFullYear();
		var month = date.getUTCMonth() + 1;
		if (month < 10){
			month = "0" + month;
		}
		var dateString = year + "-" + month + "-01";
		var accountings = accountingCollection.find(
			{
				date: {
					$gte: dateString
				}
			}
		);
		for (var i = 0; i < accountings.length; i++) {
			$("#accountingTable").append(createAccountingHTMLString(accountings[i].date, accountings[i].category, accountings[i].item, accountings[i].cost))
		}


		var eatCost = 0;
		var trafficCost = 0;
		var medicineCost = 0;
		var HomeCost = 0;
		var CCost = 0;
		var entertainmentCost = 0;
		var lightnovelCost = 0;
		var AnimearoundCost = 0;
		var PVCCost = 0;


		//var otherCost = 0;


		for (var i = 0; i < accountings.length; i++) {
			if(accountings[i].category == "飲食"){
				eatCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "交通"){
				trafficCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "醫藥"){
				medicineCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "居家"){
				HomeCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "3C"){
				CCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "娛樂"){
				entertainmentCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "輕小說/漫畫"){
				lightnovelCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "動漫周邊"){
				AnimearoundCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "PVC"){
				PVCCost += accountings[i].cost / 1;
			}

			//} else if(accountings[i].category == "其他"){
				//otherCost += accountings[i].cost / 1;
			//}

		}
		var totalCost = eatCost + trafficCost + medicineCost + HomeCost + CCost + entertainmentCost+ lightnovelCost + AnimearoundCost + PVCCost;//+ otherCost;
		$("#eatCost").text(eatCost)
		$("#eatProportion").text(Math.round((eatCost/totalCost)*100) + "%")
		$("#trafficCost").text(trafficCost)
		$("#trafficProportion").text(Math.round((trafficCost/totalCost)*100) + "%")
		$("#medicineCost").text(medicineCost)
		$("#medicineProportion").text(Math.round((medicineCost/totalCost)*100) + "%")
		$("#HomeCost").text(HomeCost)
		$("#HomeProportion").text(Math.round((HomeCost/totalCost)*100) + "%")
		$("#CCost").text(CCost)
		$("#CProportion").text(Math.round((CCost/totalCost)*100) + "%")
		$("#entertainmentCost").text(entertainmentCost)
		$("#entertainmentProportion").text(Math.round((entertainmentCost/totalCost)*100) + "%")
		$("#lightnovelCost").text(lightnovelCost)
		$("#lightnovelProportion").text(Math.round((lightnovelCost/totalCost)*100) + "%")
		$("#AnimearoundCost").text(AnimearoundCost)
		$("#AnimearoundProportion").text(Math.round((AnimearoundCost/totalCost)*100) + "%")
		$("#PVCCost").text(PVCCost)
		$("#PVCProportion").text(Math.round((PVCCost/totalCost)*100) + "%")
		$("#totalCost").text(totalCost)

	

	}else{
		var fromTime = $("#fromTime").val();
		var toTime = $("#toTime").val();
		var accountings = accountingCollection.find(
			{
				date: {
					$gte: fromTime,
					$lte: toTime
				}
			}
		);
		for (var i = 0; i < accountings.length; i++) {
			$("#accountingTable").append(createAccountingHTMLString(accountings[i].date, accountings[i].category, accountings[i].item, accountings[i].cost))
		}
		var eatCost = 0;
		var trafficCost = 0;
		var medicineCost = 0;
		var HomeCost = 0;
		var CCost = 0;
		var entertainmentCost = 0;
		var lightnovelCost = 0;
		var AnimearoundCost = 0;
		var PVCCost = 0;


		//var otherCost = 0;


		for (var i = 0; i < accountings.length; i++) {
			if(accountings[i].category == "飲食"){
				eatCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "交通"){
				trafficCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "醫藥"){
				medicineCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "居家"){
				HomeCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "3C"){
				CCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "娛樂"){
				entertainmentCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "輕小說/漫畫"){
				lightnovelCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "動漫周邊"){
				AnimearoundCost += accountings[i].cost / 1;
			} else if(accountings[i].category == "PVC"){
				PVCCost += accountings[i].cost / 1;
			}

			//} else if(accountings[i].category == "其他"){
				//otherCost += accountings[i].cost / 1;
			//}

		}
		var totalCost = eatCost + trafficCost + medicineCost + HomeCost + CCost + entertainmentCost+ lightnovelCost + AnimearoundCost + PVCCost;//+ otherCost;
		$("#eatCost").text(eatCost)
		$("#eatProportion").text(Math.round((eatCost/totalCost)*100) + "%")
		$("#trafficCost").text(trafficCost)
		$("#trafficProportion").text(Math.round((trafficCost/totalCost)*100) + "%")
		$("#medicineCost").text(medicineCost)
		$("#medicineProportion").text(Math.round((medicineCost/totalCost)*100) + "%")
		$("#HomeCost").text(HomeCost)
		$("#HomeProportion").text(Math.round((HomeCost/totalCost)*100) + "%")
		$("#CCost").text(CCost)
		$("#CProportion").text(Math.round((CCost/totalCost)*100) + "%")
		$("#entertainmentCost").text(entertainmentCost)
		$("#entertainmentProportion").text(Math.round((entertainmentCost/totalCost)*100) + "%")
		$("#lightnovelCost").text(lightnovelCost)
		$("#lightnovelProportion").text(Math.round((lightnovelCost/totalCost)*100) + "%")
		$("#AnimearoundCost").text(AnimearoundCost)
		$("#AnimearoundProportion").text(Math.round((AnimearoundyCost/totalCost)*100) + "%")
		$("#PVCCost").text(PVCCost)
		$("#PVCProportion").text(Math.round((PVCCost/totalCost)*100) + "%")
		$("#totalCost").text(totalCost)

		
	}
});
	
