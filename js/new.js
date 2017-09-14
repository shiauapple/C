var fdb = new ForerunnerDB();
var db =fdb.db("myDB");
var newCollection =db.collection('new')

newCollection.load();

$('#submit').click(function(){
	var date = $("#date").val();
	var category = $("#category").val();
	var item = $("#item").val();
	var cost = $("#cost").val();
	
	newCollection.insert({
		date:date,
		category:category,
		item:item,
		cost:cost
		});

	newCollection.save();
	alert("儲存成功")

	$("#date").val("");
	$("#category").val("");
	$("#item").val("");
	$("#cost").val("");
	})






// $("#accountingTable").find("tr").remove();