var kde=require("..");
var assert=require("assert");
var db;
var vpos1,vpos2,vpos3,vpos4;
var uti1,uti2,uti3,uti4;
describe("test uti",function(){
	it("open kdb",function(done){
		kde.open("sampledict",function(err,_db){
			db=_db;
			done();
		})
	})
	it("uti 2 vpos",function(){
		vpos1=db.uti2vpos("a");
		vpos2=db.uti2vpos("b");
		vpos3=db.uti2vpos("c");
		vpos4=db.uti2vpos("d");
		assert(vpos1>vpos4&&vpos2<vpos3&&vpos3<vpos4,true);
	});

	it("vpos 2 uti",function(){
		uti1=db.vpos2uti(vpos1);
		uti2=db.vpos2uti(vpos2);
		uti3=db.vpos2uti(vpos3);
		uti4=db.vpos2uti(vpos4);
		assert(uti1,"a");
		assert(uti2,"b");
		assert(uti3,"c");
		assert(uti4,"d");
		//console.log(uti1,uti2,uti3,uti4);
	});	

	it("first and last",function(){
		//var v1=db.uti2vpos("p");
		//var v2=db.uti2vpos("q");
		//assert(db.vpos2uti(v1),"p");
		//assert(db.vpos2uti(v2),"q");
	})

})